window.firebaseBridge = { ready: false, error: null };

function setBridgeState(nextState) {
  window.firebaseBridge = {
    ...window.firebaseBridge,
    ...nextState,
  };
}

function isConfigured(config) {
  if (!config || typeof config !== "object") return false;

  const requiredKeys = [
    "apiKey",
    "authDomain",
    "projectId",
    "appId",
  ];

  return requiredKeys.every((key) => {
    const value = String(config[key] || "").trim();
    return value && !value.startsWith("REPLACE_WITH_");
  });
}

(async () => {
  const firebaseConfig = window.HABIT_TRACKER_FIREBASE_CONFIG;

  if (!isConfigured(firebaseConfig)) {
    setBridgeState({
      ready: false,
      error: "Firebase is not configured. Edit js/firebase-config.js to enable Google login and cloud sync.",
    });
    console.info(window.firebaseBridge.error);
    return;
  }

  try {
    const [
      { initializeApp },
      { getAnalytics, isSupported: analyticsSupported },
      { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged },
      { getFirestore, doc, getDoc, setDoc, serverTimestamp }
    ] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js"),
      import("https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js"),
    ]);

    const app = initializeApp(firebaseConfig);

    try {
      if (await analyticsSupported()) {
        getAnalytics(app);
      }
    } catch {}

    const auth = getAuth(app);
    const db = getFirestore(app);
    const provider = new GoogleAuthProvider();

    async function loginWithGoogle() {
      return signInWithPopup(auth, provider);
    }

    async function logoutUser() {
      return signOut(auth);
    }

    async function loadUserState(uid) {
      const ref = doc(db, "users", uid, "app", "state");
      const snap = await getDoc(ref);
      if (!snap.exists()) return null;
      return snap.data()?.state || null;
    }

    async function saveUserState(uid, state) {
      const ref = doc(db, "users", uid, "app", "state");
      await setDoc(ref, {
        state,
        updatedAt: serverTimestamp()
      }, { merge: true });
    }

    setBridgeState({
      ready: true,
      error: null,
      auth,
      db,
      loginWithGoogle,
      logoutUser,
      onAuthStateChanged,
      loadUserState,
      saveUserState
    });

    window.dispatchEvent(new Event("firebase-ready"));
  } catch (error) {
    console.error("Firebase init failed:", error);
    setBridgeState({
      ready: false,
      error: error?.message || "Firebase initialization failed.",
    });
  }
})();
