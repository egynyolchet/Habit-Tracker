This folder is a static export of `https://habit-tracker-bac41.web.app/` captured on `2026-04-02`, adapted so you can connect it to your own Firebase project.

Files included:
- `index.html`
- `styles/main.css`
- `js/app.js`
- `js/firebase-bridge.js`
- `js/firebase-config.js`
- `js/firebase-config.example.js`
- `firebase.json`
- `firestore.rules`

How login works now:
- `js/firebase-bridge.js` reads your Firebase web config from `js/firebase-config.js`.
- If that config still uses placeholder values, the app stays in offline mode instead of crashing.
- When configured correctly, Google login and Firestore sync work against your own Firebase project.

Setup steps:
1. Create a Firebase project.
2. In Firebase Authentication, enable the `Google` provider.
3. In `Authentication -> Settings -> Authorized domains`, add the domain you will use.
4. For local development, add `localhost`.
5. For production, add your deployed domain too.
6. In Firestore Database, create a database and publish the rules from `firestore.rules`.
7. Open `js/firebase-config.js` and replace every `REPLACE_WITH_...` value with your Firebase web app config.
8. Serve this folder over HTTP/HTTPS.
9. Do not open `index.html` directly with `file://`.
10. Open the site and test Google login.

Recommended local run:
- `npx serve D:\\codex\\exported-site\\habit-tracker-bac41`
- or `python -m http.server` from this folder

Recommended Firebase deploy flow:
1. Install Firebase CLI.
2. Run `firebase login`
3. Run `firebase use --add`
4. Run `firebase deploy`

Important notes:
- Firebase web config is safe to ship in client-side code; it is not a private secret.
- The app still loads Firebase SDK modules from `gstatic`, so internet access is required for login and cloud sync.
- Habit/task data remains in browser local storage when the user is offline or not signed in.
