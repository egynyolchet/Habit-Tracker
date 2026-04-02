using System.Net;
using System.Text;

namespace HabitTrackerDesktop;

internal sealed class LocalWebServer : IDisposable
{
    private const int PreferredPort = 41731;

    private readonly string _rootPath;
    private readonly HttpListener _listener = new();
    private CancellationTokenSource? _cts;
    private Task? _serveLoopTask;

    public LocalWebServer(string rootPath)
    {
        _rootPath = rootPath;
    }

    public async Task<string> StartAsync()
    {
        if (!Directory.Exists(_rootPath))
        {
            throw new DirectoryNotFoundException($"A webes fájlok nem találhatók: {_rootPath}");
        }

        var prefix = $"http://127.0.0.1:{PreferredPort}/";
        _listener.Prefixes.Add(prefix);
        _listener.Start();

        _cts = new CancellationTokenSource();
        _serveLoopTask = Task.Run(() => ServeLoopAsync(_cts.Token));

        await Task.Delay(50);
        return prefix;
    }

    private async Task ServeLoopAsync(CancellationToken cancellationToken)
    {
        while (!cancellationToken.IsCancellationRequested && _listener.IsListening)
        {
            HttpListenerContext? context = null;

            try
            {
                context = await _listener.GetContextAsync();
                await HandleRequestAsync(context);
            }
            catch (HttpListenerException)
            {
                break;
            }
            catch (ObjectDisposedException)
            {
                break;
            }
            catch
            {
                if (context is not null)
                {
                    context.Response.StatusCode = 500;
                    context.Response.Close();
                }
            }
        }
    }

    private async Task HandleRequestAsync(HttpListenerContext context)
    {
        var requestPath = context.Request.Url?.AbsolutePath ?? "/";
        var relativePath = requestPath == "/" ? "index.html" : requestPath.TrimStart('/');
        relativePath = relativePath.Replace('/', Path.DirectorySeparatorChar);

        var fullPath = Path.GetFullPath(Path.Combine(_rootPath, relativePath));
        var rootFullPath = Path.GetFullPath(_rootPath);
        if (!fullPath.StartsWith(rootFullPath, StringComparison.OrdinalIgnoreCase) || !File.Exists(fullPath))
        {
            context.Response.StatusCode = 404;
            await WriteTextAsync(context.Response, "404 - Not Found", "text/plain; charset=utf-8");
            return;
        }

        var mimeType = GetMimeType(Path.GetExtension(fullPath));
        var bytes = await File.ReadAllBytesAsync(fullPath);
        context.Response.ContentType = mimeType;
        context.Response.ContentLength64 = bytes.LongLength;
        await context.Response.OutputStream.WriteAsync(bytes);
        context.Response.Close();
    }

    private static async Task WriteTextAsync(HttpListenerResponse response, string content, string contentType)
    {
        var bytes = Encoding.UTF8.GetBytes(content);
        response.ContentType = contentType;
        response.ContentLength64 = bytes.LongLength;
        await response.OutputStream.WriteAsync(bytes);
        response.Close();
    }

    private static string GetMimeType(string extension) => extension.ToLowerInvariant() switch
    {
        ".html" => "text/html; charset=utf-8",
        ".css" => "text/css; charset=utf-8",
        ".js" => "application/javascript; charset=utf-8",
        ".svg" => "image/svg+xml",
        ".json" => "application/json; charset=utf-8",
        _ => "application/octet-stream"
    };

    public void Dispose()
    {
        _cts?.Cancel();

        if (_listener.IsListening)
        {
            _listener.Stop();
        }

        _listener.Close();
        _cts?.Dispose();
    }
}
