using Microsoft.Web.WebView2.Core;

namespace HabitTrackerDesktop;

public partial class Form1 : Form
{
    private const string AppHost = "app.habittracker.local";

    public Form1()
    {
        InitializeComponent();
        Icon = Icon.ExtractAssociatedIcon(Application.ExecutablePath);
        Load += Form1_Load;
    }

    private async void Form1_Load(object? sender, EventArgs e)
    {
        try
        {
            var webAppPath = Path.Combine(AppContext.BaseDirectory, "WebApp");
            if (!Directory.Exists(webAppPath))
            {
                throw new DirectoryNotFoundException($"A webes fájlok nem találhatók: {webAppPath}");
            }

            var userDataFolder = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "HabitTrackerDesktop",
                "WebView2");

            Directory.CreateDirectory(userDataFolder);

            var environment = await CoreWebView2Environment.CreateAsync(userDataFolder: userDataFolder);

            await webView.EnsureCoreWebView2Async(environment);
            webView.CoreWebView2.SetVirtualHostNameToFolderMapping(
                AppHost,
                webAppPath,
                CoreWebView2HostResourceAccessKind.Allow);
            webView.CoreWebView2.Settings.AreDevToolsEnabled = false;
            webView.CoreWebView2.Settings.IsStatusBarEnabled = false;
            webView.CoreWebView2.Settings.AreBrowserAcceleratorKeysEnabled = true;
            webView.CoreWebView2.Settings.IsZoomControlEnabled = true;
            webView.Source = new Uri($"https://{AppHost}/index.html");
        }
        catch (Exception exception)
        {
            MessageBox.Show(
                $"A desktop app nem tudta elindítani a beépített webnézetet.\n\n{exception.Message}",
                "Indítási hiba",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error);
            Close();
        }
    }
}
