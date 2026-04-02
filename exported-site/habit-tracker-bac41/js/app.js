(() => {
  const SCHEMA_VERSION = 9;
  const STORAGE_KEY = "habit_tracker_main";

  const PALETTES = [
    { name: "Mint",   shades: ["#0B3B3A","#0F5551","#16706A","#1E8C83","#2BA89A","#4BC3B2","#7EDBCF","#B9F1EA"] },
    { name: "Sky",    shades: ["#0B2D4A","#0E3B61","#114A78","#155A90","#1B6CA8","#2D86C6","#63AEE1","#A8D7F2"] },
    { name: "Violet", shades: ["#2A1B4D","#372166","#452780","#56309B","#6A3DB5","#844FD0","#A77AE3","#D3B8F5"] },
    { name: "Rose",   shades: ["#4A1327","#641A35","#7E2142","#982A4F","#B3355D","#CF4A77","#E27EA2","#F3C0D4"] },
    { name: "Amber",  shades: ["#3B250B","#54330E","#6E4211","#885214","#A26318","#BE7A22","#D9A25C","#F0D2A6"] },
    { name: "Lime",   shades: ["#20310E","#2D4513","#3A5A18","#47701E","#568626","#71A63A","#9ACB76","#D2EEBC"] },
    { name: "Teal",   shades: ["#092E30","#0B3F42","#0E5154","#116568","#157B7F","#1E9599","#4FB9BC","#98E1E2"] },
    { name: "Indigo", shades: ["#151C4A","#1C2562","#24307B","#2D3C95","#394CB0","#4C63CC","#7D8FE3","#B8C2F5"] },
  ];
    const DAILY_TASKS_ID = "__daily_tasks__";
  const DAILY_TASKS_COLOR = PALETTES[4].shades[5];

  const HABIT_COLOR_POOL = [
    PALETTES[0].shades[5],
    PALETTES[1].shades[5],
    PALETTES[2].shades[5],
    PALETTES[3].shades[5],
    PALETTES[4].shades[5],
    PALETTES[5].shades[5],
    PALETTES[6].shades[5],
    PALETTES[7].shades[5],
    PALETTES[0].shades[6],
    PALETTES[1].shades[6],
    PALETTES[2].shades[6],
    PALETTES[3].shades[6],
  ];
const defaultColor = () => PALETTES[0].shades[5];

  const I18N = {
    hu: {
      todayBtn: "Ma",
      weekView: "Heti nézet",
      newHabit: "Új szokás",
      add: "Hozzáad",
      backup: "Backup",
      import: "Import",
      success: "Sikeresség",
      habits: "Aktív szokások",
      todaySuccess: "Mai sikeresség",
      weekChecks: "Heti pipák",
      bestStreak: "Leghosszabb streak",
      calendar: "Naptár nézet",
      less: "kevesebb",
      more: "több",
      heatSub: "Utolsó 12 hét • intenzitás = napi sikeresség",
      thHabit: "Szokás",
      thWeek: "Hét",
      rangeDays: (n)=>`${n} nap`,
      r7: "7 nap", r14: "14 nap", r30: "30 nap",
      sortTitle: (k)=>( {
        created:"Rendezés: Létrehozás",
        abc:"Rendezés: ABC",
        streak:"Rendezés: Leghosszabb streak",
        week:"Rendezés: Heti pipák",
      }[k] || "Rendezés"),
      sCreated:"Létrehozás",
      sAbc:"ABC",
      sStreak:"Leghosszabb streak",
      sWeek:"Heti pipák",
      palTitle:"Szín paletta",
      palClose:"Bezár",
      placeholder:"pl. Edzés, Olvasás, Nyelvtanulás",
      delete:"Törlés",
      editTitle:"Szerkesztés",
      active:"Aktív",
      passive:"Passzív",
      confirmDelete:(name)=>`Biztos törlöd? "${name}"`,
      confirmImport:"Importáljam az adatokat? (A jelenlegi adatok lecserélodnek.)",
      importOk:"Import kész.",
      importFail:"Nem sikerült importálni.",
      weekChip:(year,weekNo)=>`${year} • ${weekNo}. hét`,
      weekX:(weekNo)=>`${weekNo}. hét`,
      daysShort:["H","K","Sze","Cs","P","Szo","V"],
      daysLong:["Hétfo","Kedd","Szerda","Csütörtök","Péntek","Szombat","Vasárnap"],
      lastDays:(n)=>`Utolsó ${n} nap`,
      addHint:"Adj hozzá szokást jobb oldalt.",
      footerDate:(d)=>`Dátum: ${d}`,
      heatPrevTitle:"Korábbi hetek",
      heatNextTitle:"Közelebbi hetek",
      viewWeek:"HÉT",
      viewYear:"ÉV",
      yearSubLabel:"heti sikeresség",
      yearPrevTitle:"Elozo év",
      yearNextTitle:"Következo év",
      yearWeekLabel:(w)=>`${w}. hét`,
      login: "Google login",
      logout: "Kilépés",
      offlineMode: "Offline mód",
      loggedInAs: (name) => `Belépve: ${name}`,
      loginFailed: "Nem sikerült a bejelentkezés.",
      logoutFailed: "Nem sikerült a kijelentkezés.",
      cloudSyncOn: "Synced",
      cloudSyncOff: "Offline",
    
      dailyTasksFixed: "Napi Feladatok",
      dailyTasksPanel: "Napi taskok",
      selectedDay: (d)=>`Kiválasztott nap: ${d}`,
      taskPlaceholder: "pl. Bevásárlás, e-mail, vágás",
      noTasks: "Erre a napra még nincs feladat.",
      carryTitle: (n)=>`${n} befejezetlen feladat maradt tegnapról.`,
      carryAdd: "Áthozás",
      carryDismiss: "Most nem",
      fixedLabel: "Fix",
      taskDeleteTitle: "Törlés",
      partialTasks: (done,total)=>`${done}/${total} kész`,},
    en: {
      todayBtn: "Today",
      weekView: "Weekly view",
      newHabit: "New habit",
      add: "Add",
      backup: "Backup",
      import: "Import",
      success: "Success",
      habits: "Active habits",
      todaySuccess: "Today",
      weekChecks: "Week checks",
      bestStreak: "Best streak",
      calendar: "Calendar",
      less: "less",
      more: "more",
      heatSub: "Last 12 weeks • intensity = daily success",
      thHabit: "Habit",
      thWeek: "Week",
      rangeDays: (n)=>`${n} days`,
      r7: "7 days", r14: "14 days", r30: "30 days",
      sortTitle: (k)=>( {
        created:"Sort: Created",
        abc:"Sort: A–Z",
        streak:"Sort: Longest streak",
        week:"Sort: Week checks",
      }[k] || "Sort"),
      sCreated:"Created",
      sAbc:"A–Z",
      sStreak:"Longest streak",
      sWeek:"Week checks",
      palTitle:"Color palette",
      palClose:"Close",
      placeholder:"e.g. Workout, Reading, Language",
      delete:"Delete",
      editTitle:"Edit",
      active:"Active",
      passive:"Paused",
      confirmDelete:(name)=>`Delete "${name}"?`,
      confirmImport:"Importáljam az adatokat? (A jelenlegi adatok lecserélodnek.)",
      importOk:"Import complete.",
      importFail:"Import failed.",
      weekChip:(year,weekNo)=>`${year} • Week ${weekNo}`,
      weekX:(weekNo)=>`W${weekNo}`,
      daysShort:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      daysLong:["Hétfo","Kedd","Szerda","Csütörtök","Péntek","Szombat","Vasárnap"],
      lastDays:(n)=>`Last ${n} days`,
      addHint:"Add a habit on the right.",
      footerDate:(d)=>`Date: ${d}`,
      heatPrevTitle:"Earlier weeks",
      heatNextTitle:"Closer weeks",
      viewWeek:"WEEK",
      viewYear:"YEAR",
      yearSubLabel:"weekly success",
      yearPrevTitle:"Elozo év",
      yearNextTitle:"Következo év",
      yearWeekLabel:(w)=>`W${w}`,
      login: "Google login",
      logout: "Log out",
      offlineMode: "Offline mode",
      loggedInAs: (name) => `Signed in: ${name}`,
      loginFailed: "Login failed.",
      logoutFailed: "Logout failed.",
      cloudSyncOn: "Synced",
      cloudSyncOff: "Offline",
    
      dailyTasksFixed: "Daily Tasks",
      dailyTasksPanel: "Daily tasks",
      selectedDay: (d)=>`Selected day: ${d}`,
      taskPlaceholder: "e.g. Groceries, email, editing",
      noTasks: "No tasks for this day yet.",
      carryTitle: (n)=>`${n} unfinished task${n===1 ? "" : "s"} remained from yesterday.`,
      carryAdd: "Carry over",
      carryDismiss: "Not now",
      fixedLabel: "Fixed",
      taskDeleteTitle: "Delete",
      partialTasks: (done,total)=>`${done}/${total} done`,}
  };

  function emptyState(){
    const d = new Date();
    d.setHours(0,0,0,0);

    return {
      schemaVersion: SCHEMA_VERSION,
      habits: [],
      checks: {},
      tasks: {},
      ui: {
        rangeDays: 14,
        weekSort: "created",
        lang: "hu",
        heatOffsetWeeks: 0,
        heatView: "week",
        yearOffset: 0,
        lastBackupISO: null,
        selectedDateISO: toISODate(d),
        carryHandledDates: [],
        habitsPanelOpen: false,
      },
    };
  }
  function safeParse(raw){ try { return JSON.parse(raw); } catch { return null; } }
  function pad2(n){ return String(n).padStart(2,"0"); }
  function cloneDate(d){ return new Date(d.getTime()); }
  function toISODate(d){ return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
  function startOfWeekMonday(d){
    const x = cloneDate(d);
    const day = (x.getDay() + 6) % 7;
    x.setHours(0,0,0,0);
    x.setDate(x.getDate() - day);
    return x;
  }
  function addDays(d,n){ const x = cloneDate(d); x.setDate(x.getDate()+n); return x; }
  function formatHU(d){ return `${d.getFullYear()}. ${pad2(d.getMonth()+1)}. ${pad2(d.getDate())}.`; }
  function formatEN(d){
    const mm = pad2(d.getMonth()+1);
    const dd = pad2(d.getDate());
    const yy = d.getFullYear();
    return `${yy}-${mm}-${dd}`;
  }
  function isoWeekInfo(date){
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return { weekNo, weekYear: d.getUTCFullYear() };
  }
  function isDoneVal(v){ return v === 1 || v === 2; }

  function todayISO(){
    const t = new Date(); t.setHours(0,0,0,0);
    return toISODate(t);
  }
  function dateFromISO(iso){ return new Date(iso+"T00:00:00"); }

  function ensureHabitChecks(id){ if(!state.checks[id]) state.checks[id] = {}; }
  function ensureHabitColor(h){ if(!h.color) h.color = defaultColor(); }

  function pickUniqueHabitColor(){
    const used = new Set(state.habits.map(h => h.color).filter(Boolean));
    const free = HABIT_COLOR_POOL.filter(c => !used.has(c));
    const pool = free.length ? free : HABIT_COLOR_POOL;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function dailyTasksHabit(){
    return {
      id: DAILY_TASKS_ID,
      name: t().dailyTasksFixed,
      createdAt: -1,
      color: DAILY_TASKS_COLOR,
      activeRanges: [],
    };
  }

  function selectedDateISO(){
    const iso = String(state.ui?.selectedDateISO || "");
    return /^\d{4}-\d{2}-\d{2}$/.test(iso) ? iso : todayISO();
  }

  function setSelectedDate(iso, persist = true){
    state.ui.selectedDateISO = iso;
    if(persist) saveState();
  }

  function tasksForDate(iso){
    const list = state.tasks?.[iso];
    return Array.isArray(list) ? list : [];
  }

  function ensureTasksForDate(iso){
    if(!state.tasks[iso]) state.tasks[iso] = [];
    return state.tasks[iso];
  }

  function hasDailyTasksOn(iso){
    return tasksForDate(iso).length > 0;
  }

  function doneDailyTaskCount(iso){
    return tasksForDate(iso).filter(x => x.done).length;
  }

  function openDailyTaskCount(iso){
    return tasksForDate(iso).filter(x => !x.done).length;
  }

  function isDailyTasksDoneOn(iso){
    const list = tasksForDate(iso);
    return list.length > 0 && list.every(x => x.done);
  }

  function isDailyTasksPartialOn(iso){
    const list = tasksForDate(iso);
    if(!list.length) return false;
    const done = list.filter(x => x.done).length;
    return done > 0 && done < list.length;
  }

  function addTaskToDate(iso, text, saveNow = true){
    const trimmed = String(text).trim();
    if(!trimmed) return false;

    const list = ensureTasksForDate(iso);
    list.push({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2),
      text: trimmed,
      done: false,
      carriedFrom: null,
    });

    if(saveNow) saveState();
    return true;
  }

  function toggleTaskDone(iso, taskId){
    const list = ensureTasksForDate(iso);
    const item = list.find(x => x.id === taskId);
    if(!item) return;

    item.done = !item.done;
    saveState();

    render({
      weekReveal: false,
      habitReveal: false,
      chartAnimate: true,
      calendarReveal: false,
      taskReveal: false,
    });

    if(item.done) celebrateIfFull(iso);
  }

  function deleteTaskFromDate(iso, taskId){
    const list = ensureTasksForDate(iso);
    state.tasks[iso] = list.filter(x => x.id !== taskId);
    if(!state.tasks[iso].length) delete state.tasks[iso];
    saveState();

    render({
      weekReveal: false,
      habitReveal: false,
      chartAnimate: true,
      calendarReveal: false,
      taskReveal: false,
    });
  }

  function getCarryCandidates(targetIso){
    const prevIso = toISODate(addDays(dateFromISO(targetIso), -1));
    const prev = tasksForDate(prevIso).filter(x => !x.done);

    if(!prev.length) return [];

    const existing = new Set(
      tasksForDate(targetIso).map(x => x.text.trim().toLowerCase())
    );

    return prev.filter(x => !existing.has(x.text.trim().toLowerCase()));
  }

  function carryPromptVisible(iso){
    if(iso !== todayISO()) return false;
    const handled = Array.isArray(state.ui.carryHandledDates) ? state.ui.carryHandledDates : [];
    if(handled.includes(iso)) return false;
    return getCarryCandidates(iso).length > 0;
  }

  function markCarryHandled(iso){
    if(!Array.isArray(state.ui.carryHandledDates)) state.ui.carryHandledDates = [];
    if(!state.ui.carryHandledDates.includes(iso)){
      state.ui.carryHandledDates.push(iso);
    }
    saveState();
  }

  function carryOverTasksToDate(targetIso){
    const prevIso = toISODate(addDays(dateFromISO(targetIso), -1));
    const candidates = getCarryCandidates(targetIso);
    if(!candidates.length){
      markCarryHandled(targetIso);
      return;
    }

    const list = ensureTasksForDate(targetIso);
    for(const item of candidates){
      list.push({
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2),
        text: item.text,
        done: false,
        carriedFrom: prevIso,
      });
    }

    markCarryHandled(targetIso);
    saveState();
  }

  function dailyTaskStreak(){
    let streak = 0;
    let d = new Date();
    d.setHours(0,0,0,0);

    while(true){
      const iso = toISODate(d);
      if(!hasDailyTasksOn(iso)) break;
      if(!isDailyTasksDoneOn(iso)) break;
      streak++;
      d = addDays(d, -1);
    }

    return streak;
  }

  function dailyTaskBestStreak(){
    const doneDates = Object.keys(state.tasks || {})
      .filter(iso => isDailyTasksDoneOn(iso))
      .sort();

    let best = 0;
    let cur = 0;
    let prev = null;

    for(const iso of doneDates){
      if(prev === null){
        cur = 1;
      }else{
        const diff = Math.round((dateFromISO(iso) - dateFromISO(prev)) / 86400000);
        cur = (diff === 1) ? (cur + 1) : 1;
      }
      prev = iso;
      if(cur > best) best = cur;
    }

    return best;
  }
  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[s]));
  }

  function normalizeRanges(ranges){
    const out = [];
    if(!Array.isArray(ranges)) return out;
    for(const r of ranges){
      if(!r || typeof r !== "object") continue;
      const start = String(r.start || "");
      const end = (r.end === null || r.end === undefined) ? null : String(r.end || "");
      if(!/^\d{4}-\d{2}-\d{2}$/.test(start)) continue;
      if(end !== null && !/^\d{4}-\d{2}-\d{2}$/.test(end)) continue;
      out.push({ start, end });
    }
    out.sort((a,b)=> a.start.localeCompare(b.start));
    return out;
  }

  function habitIsActiveOn(habit, iso){
    const ranges = normalizeRanges(habit.activeRanges);
    for(const r of ranges){
      if(iso < r.start) continue;
      if(r.end === null || iso <= r.end) return true;
    }
    return false;
  }

  function setHabitActive(habitId, makeActive){
    const h = state.habits.find(x=>x.id === habitId);
    if(!h) return;

    const iso = todayISO();
    h.activeRanges = normalizeRanges(h.activeRanges);

    const isActive = habitIsActiveOn(h, iso);
    if(makeActive){
      if(isActive) return;
      h.activeRanges.push({ start: iso, end: null });
      h.activeRanges = normalizeRanges(h.activeRanges);
    }else{
      if(!isActive) return;
      const yIso = toISODate(addDays(dateFromISO(iso), -1));
      for(let i=h.activeRanges.length-1; i>=0; i--){
        const r = h.activeRanges[i];
        const end = (r.end === null || r.end === undefined) ? null : r.end;
        const covers = (iso >= r.start) && (end === null || iso <= end);
        if(covers){
          r.end = yIso;
          if(r.end < r.start) h.activeRanges.splice(i,1);
          break;
        }
      }
      h.activeRanges = normalizeRanges(h.activeRanges);
    }

    saveState();
  }

  function migrateToCurrentSchema(input){
    const s = (input && typeof input === "object") ? input : {};
    const out = emptyState();

    const habits = Array.isArray(s.habits) ? s.habits : [];
    out.habits = habits.map(h => {
      const createdAt = Number(h.createdAt ?? Date.now());
      const createdD = new Date(createdAt);
      createdD.setHours(0,0,0,0);

      const startIso = /^\d{4}-\d{2}-\d{2}$/.test(h.activeFrom || "")
        ? String(h.activeFrom)
        : toISODate(createdD);

      const ar = normalizeRanges(h.activeRanges);
      const activeRanges = ar.length ? ar : [{ start: startIso, end: null }];

      return {
        id: String(h.id ?? crypto.randomUUID?.() ?? (Date.now() + Math.random())),
        name: String(h.name ?? "Habit"),
        createdAt,
        color: String(h.color ?? defaultColor()),
        activeRanges,
      };
    });

    const checks = (s.checks && typeof s.checks === "object") ? s.checks : {};
    out.checks = {};
    for(const h of out.habits){
      const map = (checks[h.id] && typeof checks[h.id] === "object") ? checks[h.id] : {};
      out.checks[h.id] = {};
      for(const [k,v] of Object.entries(map)){
        if(typeof k !== "string") continue;
        if(v === true) out.checks[h.id][k] = 1;
        else if(v === 1 || v === 2) out.checks[h.id][k] = v;
      }
    }

    const tasks = (s.tasks && typeof s.tasks === "object") ? s.tasks : {};
    out.tasks = {};
    for(const [iso, list] of Object.entries(tasks)){
      if(!/^\d{4}-\d{2}-\d{2}$/.test(iso)) continue;
      if(!Array.isArray(list)) continue;

      const clean = list
        .map(item => ({
          id: String(item?.id ?? crypto.randomUUID?.() ?? (Date.now() + Math.random())),
          text: String(item?.text ?? "").trim(),
          done: !!item?.done,
          carriedFrom: item?.carriedFrom ? String(item.carriedFrom) : null,
        }))
        .filter(item => item.text);

      if(clean.length) out.tasks[iso] = clean;
    }

    const rangeDays = Number(s.ui?.rangeDays ?? 14);
    out.ui.rangeDays = [7,14,30].includes(rangeDays) ? rangeDays : 14;

    const weekSort = String(s.ui?.weekSort ?? "created");
    out.ui.weekSort = ["created","abc","streak","week"].includes(weekSort) ? weekSort : "created";

    const lang = String(s.ui?.lang ?? "hu");
    out.ui.lang = (lang === "en") ? "en" : "hu";

    const heatOffsetWeeks = Number(s.ui?.heatOffsetWeeks ?? 0);
    out.ui.heatOffsetWeeks = Number.isFinite(heatOffsetWeeks) ? Math.floor(heatOffsetWeeks) : 0;

    const heatView = String(s.ui?.heatView ?? "week");
    out.ui.heatView = (heatView === "year") ? "year" : "week";

    const yearOffset = Number(s.ui?.yearOffset ?? 0);
    out.ui.yearOffset = Number.isFinite(yearOffset) ? Math.floor(yearOffset) : 0;

    const lastBackupISO = String(s.ui?.lastBackupISO ?? "");
    out.ui.lastBackupISO = /^\d{4}-\d{2}-\d{2}$/.test(lastBackupISO) ? lastBackupISO : null;

    const selectedDateISO = String(s.ui?.selectedDateISO ?? "");
    out.ui.selectedDateISO = /^\d{4}-\d{2}-\d{2}$/.test(selectedDateISO) ? selectedDateISO : todayISO();

    const carryHandledDates = Array.isArray(s.ui?.carryHandledDates)
      ? s.ui.carryHandledDates.filter(x => /^\d{4}-\d{2}-\d{2}$/.test(String(x))).map(String)
      : [];
    out.ui.carryHandledDates = [...new Set(carryHandledDates)];

    out.ui.habitsPanelOpen = !!s.ui?.habitsPanelOpen;

    return out;
  }
  function loadState(){
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw){
      const fresh = emptyState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
      return fresh;
    }
    const parsed = safeParse(raw);
    const migrated = migrateToCurrentSchema(parsed);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    return migrated;
  }

  const state = loadState();

  let currentUser = null;
  let cloudSaveTimer = null;
  let applyingCloudState = false;
  let authInitDone = false;

  function saveLocalState(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  async function saveCloudStateNow(){
    if(!currentUser) return;
    if(applyingCloudState) return;
    if(!window.firebaseBridge?.ready) return;

    const payload = JSON.parse(JSON.stringify(state));
    await window.firebaseBridge.saveUserState(currentUser.uid, payload);
  }

  function scheduleCloudSave(){
    if(!currentUser) return;
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = setTimeout(() => {
      saveCloudStateNow().catch(err => {
        console.error("Cloud save failed:", err);
      });
    }, 500);
  }

  function saveState(){
    saveLocalState();
    scheduleCloudSave();
  }

  const $ = (id)=>document.getElementById(id);

  const authText = $("authText");
  const loginBtn = $("loginBtn");
  const logoutBtn = $("logoutBtn");
  const accountBtn = $("accountBtn");
  const accountMenu = $("accountMenu");
  const accountAvatar = $("accountAvatar");
  const accountFallback = $("accountFallback");

  function replaceStateFromIncoming(incoming){
    const migrated = migrateToCurrentSchema(incoming);

    state.habits = migrated.habits;
    state.checks = migrated.checks;
    state.tasks = migrated.tasks;
    state.ui = {
      ...state.ui,
      ...migrated.ui
    };
    state.schemaVersion = SCHEMA_VERSION;

    saveLocalState();
  }

  function updateAuthUI(){
    const L = t();

    if(!authText || !loginBtn || !logoutBtn) return;

    const hasCloud = !!currentUser;

    if(currentUser){
      const name = currentUser.displayName || currentUser.email || "User";
      authText.textContent = L.loggedInAs(name);
      loginBtn.style.display = "none";
      logoutBtn.style.display = "";
      logoutBtn.textContent = L.logout;
      loginBtn.textContent = L.login;

      const photo = String(currentUser.photoURL || "").trim();
      if(photo && accountAvatar){
        accountAvatar.src = photo;
        accountAvatar.style.display = "";
        if(accountFallback) accountFallback.style.display = "none";
      }else{
        if(accountAvatar) accountAvatar.style.display = "none";
        if(accountFallback) accountFallback.style.display = "";
      }
    }else{
      authText.textContent = L.offlineMode;
      loginBtn.style.display = "";
      logoutBtn.style.display = "none";
      loginBtn.textContent = L.login;
      logoutBtn.textContent = L.logout;
      if(accountAvatar) accountAvatar.style.display = "none";
      if(accountFallback) accountFallback.style.display = "";
    }

    if(todayPillText) todayPillText.textContent = hasCloud ? L.cloudSyncOn : L.cloudSyncOff;
    if(syncDot) syncDot.classList.toggle("offline", !hasCloud);
  }

  async function handleSignedInUser(user){
    currentUser = user;
    updateAuthUI();

    if(!user) return;

    applyingCloudState = true;
    try{
      const cloudState = await window.firebaseBridge.loadUserState(user.uid);

      if(cloudState){
        replaceStateFromIncoming(cloudState);
        render({
          weekReveal: false,
          habitReveal: false,
          chartAnimate: false,
          calendarReveal: false,
        });
      }else{
        const payload = JSON.parse(JSON.stringify(state));
        await window.firebaseBridge.saveUserState(user.uid, payload);
      }
    }catch(err){
      console.error("Cloud load failed:", err);
    }finally{
      applyingCloudState = false;
    }
  }

  function initFirebaseAuth(){
    if(authInitDone) return;
    if(!window.firebaseBridge?.ready) return;
    authInitDone = true;

    loginBtn?.addEventListener("click", async () => {
      try{
        await window.firebaseBridge.loginWithGoogle();
      }catch(err){
        console.error(err);
        alert(t().loginFailed);
      }
    });

    logoutBtn?.addEventListener("click", async () => {
      try{
        await window.firebaseBridge.logoutUser();
      }catch(err){
        console.error(err);
        alert(t().logoutFailed);
      }
    });

    window.firebaseBridge.onAuthStateChanged(window.firebaseBridge.auth, async (user) => {
      if(user){
        await handleSignedInUser(user);
      }else{
        currentUser = null;
        updateAuthUI();
      }
    });

    updateAuthUI();
  }

  function t(){ return I18N[state.ui.lang || "hu"]; }
  const prefersReduced = () => (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const weekBody = $("weekBody");
  const dailyWeekSpot = $("dailyWeekSpot");
  const weekRange = $("weekRange");
  const todayPillText = $("todayPillText");
  const syncDot = $("syncDot");
  const countdownPill = $("countdownPill");

  const prevWeekBtn = $("prevWeekBtn");
  const nextWeekBtn = $("nextWeekBtn");
  const thisWeekBtn = $("thisWeekBtn");

  const weekSortBtn = $("weekSortBtn");
  const weekSortMenu = $("weekSortMenu");

  const addForm = $("addForm");
  const habitInput = $("habitInput");
  const habitList = $("habitList");
  const habitListWrap = $("habitListWrap");
  const habitPanelToggle = $("habitPanelToggle");

  const taskForm = $("taskForm");
  const taskInput = $("taskInput");
  const taskList = $("taskList");
  const taskEmpty = $("taskEmpty");
  const taskDayLabel = $("taskDayLabel");
  const dailyTasksCard = $("dailyTasksCard");
  const carryBox = $("carryBox");
  const carryText = $("carryText");
  const carryAllBtn = $("carryAllBtn");
  const carryDismissBtn = $("carryDismissBtn");
  const exportBtn = $("exportBtn");
  const importBtn = $("importBtn");
  const importFile = $("importFile");

  const chartCanvas = $("successChart");
  const chartHint = $("chartHint");

  const statHabits = $("statHabits");
  const statTodayPct = $("statTodayPct");
  const statWeekChecks = $("statWeekChecks");
  const statBestStreak = $("statBestStreak");
  const statTodayCard = $("statTodayCard");

  const rangeBtn = $("rangeBtn");
  const rangeLabel = $("rangeLabel");
  const rangeMenu = $("rangeMenu");

  const heatGrid = $("heatGrid");
  const heatY = $("heatY");
  const heatX = $("heatX");
  const heatPct = $("heatPct");
  const heatTip = $("heatTip");
  const leg0 = $("leg0");
  const leg1 = $("leg1");
  const leg2 = $("leg2");
  const leg3 = $("leg3");
  const leg4 = $("leg4");
  const heatPrev = $("heatPrev");
  const heatNowBtn = $("heatNowBtn");
  const heatNext = $("heatNext");

  const viewWeekBtn = $("viewWeek");
  const viewYearBtn = $("viewYear");
  const weekHeatWrap = $("weekHeatWrap");
  const yearWrap = $("yearWrap");
  const yearGrid = $("yearGrid");
  let heatNavBusy = false;

  const paletteMenu = $("paletteMenu");
  const paletteBody = $("paletteBody");
  const palClose = $("palClose");

  function animateSwap(el, dir, doRender, onDone){
    if(!el){ doRender(); if(onDone) onDone(); return; }
    if(prefersReduced()){ doRender(); if(onDone) onDone(); return; }

    let doneCalled = false;
    const finish = () => {
      if(doneCalled) return;
      doneCalled = true;
      if(onDone) onDone();
    };

    el.classList.add("animSlide");
    const out = (dir === "left") ? "animOutLeft" : "animOutRight";
    const inn = (dir === "left") ? "animInLeft"  : "animInRight";

    el.classList.remove("animOutLeft","animOutRight","animInLeft","animInRight");
    el.classList.add(out);

    const onOutEnd = () => {
      el.removeEventListener("animationend", onOutEnd);
      doRender();
      el.classList.remove(out);

      if(!el.isConnected || getComputedStyle(el).display === "none"){
        finish();
        return;
      }

      el.classList.add(inn);
      const onInEnd = () => {
        el.removeEventListener("animationend", onInEnd);
        el.classList.remove(inn);
        finish();
      };
      el.addEventListener("animationend", onInEnd, { once:true });

      setTimeout(() => {
        el.classList.remove(inn);
        finish();
      }, 280);
    };
    el.addEventListener("animationend", onOutEnd, { once:true });

    setTimeout(() => {
      el.classList.remove(out);
      finish();
    }, 240);
  }

  function initCardShine(){
    document.querySelectorAll("[data-card]").forEach(card=>{
      card.addEventListener("mousemove", (ev)=>{
        const r = card.getBoundingClientRect();
        const x = ((ev.clientX - r.left) / r.width) * 100;
        const y = ((ev.clientY - r.top) / r.height) * 100;
        card.style.setProperty("--mx", `${x.toFixed(2)}%`);
        card.style.setProperty("--my", `${y.toFixed(2)}%`);
      });
    });
  }

  function onMove(e){
    if(prefersReduced()) return;
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);
    document.documentElement.style.setProperty("--px", (x * 12).toFixed(2));
    document.documentElement.style.setProperty("--py", (y * 9).toFixed(2));
  }
  window.addEventListener("mousemove", onMove, { passive:true });

  let viewWeekStart = startOfWeekMonday(new Date());

  function addHabit(name){
    const trimmed = String(name).trim();
    if(!trimmed) return false;

    const id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
    const iso = todayISO();

    state.habits.push({
      id,
      name: trimmed,
      createdAt: Date.now(),
      color: pickUniqueHabitColor(),
      activeRanges: [{ start: iso, end: null }],
    });

    ensureHabitChecks(id);
    saveState();
    return true;
  }
  function activeHabitCountForDate(iso){
    let c = 0;
    for(const h of state.habits){
      if(habitIsActiveOn(h, iso)) c++;
    }
    if(hasDailyTasksOn(iso)) c++;
    return c;
  }

  function doneCountForDate(iso){
    let total = 0;
    for(const h of state.habits){
      if(!habitIsActiveOn(h, iso)) continue;
      const map = state.checks[h.id] || {};
      if(isDoneVal(map[iso])) total++;
    }
    if(isDailyTasksDoneOn(iso)) total++;
    return total;
  }

  function doneCountForWeek(weekStart){
    let total = 0;
    for(let i=0; i<7; i++){
      total += doneCountForDate(toISODate(addDays(weekStart, i)));
    }
    return total;
  }

  function totalChecksForWeek(weekStart){
    let total = 0;
    for(let i=0;i<7;i++){
      total += activeHabitCountForDate(toISODate(addDays(weekStart, i)));
    }
    return total;
  }

  function successPctForDate(iso){
    const active = activeHabitCountForDate(iso);
    if(active <= 0) return 0;
    const done = doneCountForDate(iso);
    return Math.max(0, Math.min(100, Math.round((done / active) * 100)));
  }

  function weekDoneForHabit(habitId, weekStart){
    if(habitId === DAILY_TASKS_ID){
      let total = 0;
      for(let i=0;i<7;i++){
        const iso = toISODate(addDays(weekStart,i));
        if(isDailyTasksDoneOn(iso)) total++;
      }
      return total;
    }

    const habit = state.habits.find(h=>h.id===habitId);
    if(!habit) return 0;

    const map = state.checks[habitId] || {};
    let total = 0;
    for(let i=0;i<7;i++){
      const iso = toISODate(addDays(weekStart,i));
      if(!habitIsActiveOn(habit, iso)) continue;
      if(isDoneVal(map[iso])) total++;
    }
    return total;
  }

  function computeStreak(habitId){
    if(habitId === DAILY_TASKS_ID) return dailyTaskStreak();

    const habit = state.habits.find(h=>h.id===habitId);
    if(!habit) return 0;

    const map = state.checks[habitId] || {};
    const today = new Date();
    today.setHours(0,0,0,0);
    const tIso = toISODate(today);

    if(!habitIsActiveOn(habit, tIso)) return 0;

    let cursor = today;
    if(!isDoneVal(map[tIso])) cursor = addDays(cursor, -1);

    let streak = 0;
    while(true){
      const iso = toISODate(cursor);
      if(!habitIsActiveOn(habit, iso)) break;
      if(!isDoneVal(map[iso])) break;
      streak++;
      cursor = addDays(cursor, -1);
    }
    return streak;
  }

  function computeMaxStreakAllHabits(){
    let max = Math.max(1, dailyTaskStreak());
    for(const h of state.habits){
      const s = computeStreak(h.id);
      if(s > max) max = s;
    }
    return max;
  }

  function computeBestStreakAllHabits(){
    let best = dailyTaskBestStreak();

    for(const h of state.habits){
      const map = state.checks[h.id] || {};
      const dates = Object.keys(map).sort();
      let cur = 0;
      let prev = null;

      for(const iso of dates){
        if(!habitIsActiveOn(h, iso)) continue;
        if(!isDoneVal(map[iso])) continue;

        if(prev === null){
          cur = 1;
        }else{
          const prevD = dateFromISO(prev);
          const thisD = dateFromISO(iso);
          const diff = Math.round((thisD - prevD) / 86400000);
          cur = (diff === 1 && habitIsActiveOn(h, prev)) ? (cur + 1) : 1;
        }

        prev = iso;
        if(cur > best) best = cur;
      }
    }

    return best;
  }
  const confettiCanvas = document.getElementById("confettiCanvas");
  const confettiCtx = confettiCanvas.getContext("2d");
  let confettiRunning = false;
  let confettiQueue = 0;

  const CONF_COLORS = [
    "rgba(124,255,221,.95)",
    "rgba(124,166,255,.95)",
    "rgba(167,122,227,.92)",
    "rgba(255,107,134,.85)",
  ];
  function pickConfColor(){
    const r = Math.random();
    if(r < 0.42) return CONF_COLORS[0];
    if(r < 0.82) return CONF_COLORS[1];
    if(r < 0.96) return CONF_COLORS[2];
    return CONF_COLORS[3];
  }
  function resizeConfetti(){
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    confettiCanvas.width = Math.floor(window.innerWidth * dpr);
    confettiCanvas.height = Math.floor(window.innerHeight * dpr);
    confettiCtx.setTransform(dpr,0,0,dpr,0,0);
  }
  window.addEventListener("resize", resizeConfetti);
  resizeConfetti();

  function burstConfetti(){
    if(confettiRunning){ confettiQueue++; return; }
    confettiRunning = true;

    const W = window.innerWidth;
    const H = window.innerHeight;

    const pieces = [];
    const N = 170;

    for(let i=0;i<N;i++){
      pieces.push({
        x: W * 0.5 + (Math.random()*320 - 160),
        y: H * 0.22 + (Math.random()*120 - 60),
        vx: (Math.random()*2 - 1) * 4.2,
        vy: (Math.random()*-1) * 7.8 - 5.2,
        g: 0.18 + Math.random()*0.10,
        w: 6 + Math.random()*6,
        h: 2 + Math.random()*4,
        a: 1,
        rot: Math.random()*Math.PI*2,
        vr: (Math.random()*2 - 1) * 0.12,
        c: pickConfColor(),
      });
    }

    const start = performance.now();
    const dur = 2400;

    function tick(t){
      const dt = (t - start);
      confettiCtx.clearRect(0,0,W,H);

      for(const p of pieces){
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;

        p.a = 1 - Math.max(0, (dt - (dur*0.55)) / (dur*0.45));
        if(p.a < 0) p.a = 0;

        confettiCtx.globalAlpha = p.a;
        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate(p.rot);
        confettiCtx.fillStyle = p.c;
        confettiCtx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
        confettiCtx.restore();
      }
      confettiCtx.globalAlpha = 1;

      if(dt < dur) requestAnimationFrame(tick);
      else{
        confettiCtx.clearRect(0,0,W,H);
        confettiRunning = false;
        if(confettiQueue > 0){ confettiQueue--; burstConfetti(); }
      }
    }
    requestAnimationFrame(tick);
  }

  function flashTodayCard(){
    const card = document.getElementById("statTodayCard");
    if(!card) return;
    card.animate([
      { boxShadow: "inset 0 0 0 1px rgba(124,255,221,.20), 0 0 0 0 rgba(124,255,221,0)", transform: "translateY(0px)" },
      { boxShadow: "inset 0 0 0 1px rgba(124,255,221,.30), 0 0 0 6px rgba(124,255,221,.08)", transform: "translateY(-1px)" },
      { boxShadow: "inset 0 0 0 1px rgba(124,255,221,.20), 0 0 0 0 rgba(124,255,221,0)", transform: "translateY(0px)" },
    ], { duration: 560, easing: "ease-out" });
  }

  function celebrateIfFull(iso){
    const totalActive = activeHabitCountForDate(iso);
    if(totalActive === 0) return;
    if(successPctForDate(iso) !== 100) return;

    burstConfetti();

    const today = new Date(); today.setHours(0,0,0,0);
    if(iso === toISODate(today)) flashTodayCard();
  }

  let lastPop = null;

  function cycleCheck(habitId, iso){
    if(habitId === DAILY_TASKS_ID){
      setSelectedDate(iso);
        render({
          weekReveal: false,
          habitReveal: false,
          chartAnimate: false,
          calendarReveal: false,
          taskReveal: false,
        });
        focusDailyTasksPanel({ scrollOnMobile: true });
      return;
    }

    state.ui.selectedDateISO = iso;

    const habit = state.habits.find(h=>h.id===habitId);
    if(!habit) return;
    if(!habitIsActiveOn(habit, iso)) return;

    ensureHabitChecks(habitId);
    const m = state.checks[habitId];
    const prev = m[iso];

    let next;
    if(!isDoneVal(prev)) next = 1;
    else if(prev === 1) next = 2;
    else next = 0;

    const becameDoneFromEmpty = (!isDoneVal(prev) && (next === 1 || next === 2));
    if(next === 0) delete m[iso];
    else m[iso] = next;

    lastPop = becameDoneFromEmpty ? { habitId, iso } : null;

    saveState();

    render({
      weekReveal: false,
      habitReveal: false,
      chartAnimate: true,
      calendarReveal: false,
      taskReveal: false,
    });

    if(becameDoneFromEmpty) celebrateIfFull(iso);
  }
  function downloadBlob(filename, blob){
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  function downloadText(filename, text){
    downloadBlob(filename, new Blob([text], { type: "application/json" }));
  }

  exportBtn?.addEventListener("click", ()=>{
    const payload = { exportedAt: new Date().toISOString(), schemaVersion: SCHEMA_VERSION, data: state };
    const d = new Date();
    const stamp = `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
    downloadText(`habit-tracker-backup-${stamp}.json`, JSON.stringify(payload, null, 2));

    state.ui.lastBackupISO = toISODate(new Date());
    saveState();
    updateBackupButton();
  });

  importBtn?.addEventListener("click", ()=>{
    importFile.value = "";
    importFile.click();
  });

  importFile?.addEventListener("change", async ()=>{
    const file = importFile.files?.[0];
    if(!file) return;
    try{
      const parsed = JSON.parse(await file.text());
      const incoming = migrateToCurrentSchema(parsed?.data ?? parsed);
      if(!confirm(t().confirmImport)) return;
      state.habits = incoming.habits;
      state.checks = incoming.checks;
      state.tasks = incoming.tasks;
      state.ui = incoming.ui;
      state.schemaVersion = SCHEMA_VERSION;
      saveState();
      render({
        weekReveal: false,
        habitReveal: false,
        chartAnimate: false,
        calendarReveal: false,
      });
      alert(t().importOk);
    }catch{
      alert(t().importFail);
    }
  });

  function setRangeDays(days){
    state.ui.rangeDays = days;
    saveState();
    rangeLabel.textContent = t().rangeDays(days);
    [...rangeMenu.querySelectorAll(".ddItem")].forEach(el=>{
      el.classList.toggle("active", parseInt(el.dataset.value,10) === days);
    });
    drawSuccessChart(true);
  }
  function openRangeMenu(){
    const r = rangeBtn.getBoundingClientRect();
    const menuW = 170;
    const menuH = 170;
    let left = r.right - menuW;
    let top = r.bottom + 10;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if(left < 12) left = 12;
    if(left + menuW > vw - 12) left = vw - menuW - 12;
    if(top + menuH > vh - 12) top = r.top - menuH - 10;
    if(top < 12) top = 12;

    rangeMenu.style.left = `${Math.round(left)}px`;
    rangeMenu.style.top = `${Math.round(top)}px`;
    rangeMenu.classList.add("open");
    rangeMenu.setAttribute("aria-hidden","false");
  }
  function closeRangeMenu(){
    rangeMenu.classList.remove("open");
    rangeMenu.setAttribute("aria-hidden","true");
  }
  function toggleRangeMenu(){
    if(rangeMenu.classList.contains("open")) closeRangeMenu();
    else openRangeMenu();
  }
  rangeBtn.addEventListener("click", (e)=>{ e.stopPropagation(); toggleRangeMenu(); });
  rangeBtn.addEventListener("keydown", (e)=>{
    if(e.key==="Enter" || e.key===" "){ e.preventDefault(); toggleRangeMenu(); }
    if(e.key==="Escape") closeRangeMenu();
  });
  rangeMenu.addEventListener("click", (e)=>{
    e.stopPropagation();
    const item = e.target.closest(".ddItem");
    if(!item) return;
    setRangeDays(parseInt(item.dataset.value,10));
    closeRangeMenu();
  });

  function setWeekSort(key){
    state.ui.weekSort = key;
    saveState();
    weekSortBtn.title = t().sortTitle(key);

    [...weekSortMenu.querySelectorAll(".ddItem")].forEach(el=>{
      el.classList.toggle("active", el.dataset.value === key);
    });

    animateSwap(weekBody, "left", ()=>{
      render({
        weekReveal: true,
        habitReveal: false,
        chartAnimate: true,
        calendarReveal: false,
      });
    });
  }
  function openWeekSortMenu(){
    const r = weekSortBtn.getBoundingClientRect();
    const menuW = 240;
    const menuH = 220;
    let left = r.right - menuW;
    let top = r.bottom + 10;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if(left < 12) left = 12;
    if(left + menuW > vw - 12) left = vw - menuW - 12;
    if(top + menuH > vh - 12) top = r.top - menuH - 10;
    if(top < 12) top = 12;

    weekSortMenu.style.left = `${Math.round(left)}px`;
    weekSortMenu.style.top = `${Math.round(top)}px`;
    weekSortMenu.classList.add("open");
    weekSortMenu.setAttribute("aria-hidden","false");
  }
  function closeWeekSortMenu(){
    weekSortMenu.classList.remove("open");
    weekSortMenu.setAttribute("aria-hidden","true");
  }
  function toggleWeekSortMenu(){
    if(weekSortMenu.classList.contains("open")) closeWeekSortMenu();
    else openWeekSortMenu();
  }
  weekSortBtn.addEventListener("click", (e)=>{ e.stopPropagation(); toggleWeekSortMenu(); });
  weekSortBtn.addEventListener("keydown", (e)=>{
    if(e.key==="Enter" || e.key===" "){ e.preventDefault(); toggleWeekSortMenu(); }
    if(e.key==="Escape") closeWeekSortMenu();
  });
  weekSortMenu.addEventListener("click", (e)=>{
    e.stopPropagation();
    const item = e.target.closest(".ddItem");
    if(!item) return;
    setWeekSort(item.dataset.value);
    closeWeekSortMenu();
  });

  let paletteForHabitId = null;
  function openPaletteMenuFor(habitId, anchorEl){
    paletteForHabitId = habitId;
    paletteBody.innerHTML = "";

    for(const pal of PALETTES){
      const row = document.createElement("div");
      row.className = "palRow";
      row.innerHTML = `
        <div class="palLabel">${pal.name}</div>
        <div class="palDots"></div>
      `;
      const dots = row.querySelector(".palDots");
      pal.shades.forEach(hex=>{
        const d = document.createElement("div");
        d.className = "palDot";
        d.style.background = hex;
        d.addEventListener("click", (ev)=>{
          ev.stopPropagation();
          const h = state.habits.find(x=>x.id===paletteForHabitId);
          if(!h) return;
          h.color = hex;
          saveState();
          closePaletteMenu();
          render({
            weekReveal: false,
            habitReveal: false,
            chartAnimate: true,
            calendarReveal: false,
          });
        });
        dots.appendChild(d);
      });
      paletteBody.appendChild(row);
    }

    const r = anchorEl.getBoundingClientRect();
    const menuW = 320;
    const menuH = 280;
    let left = r.left;
    let top = r.bottom + 10;

    const vw = window.innerWidth, vh = window.innerHeight;
    if(left + menuW > vw - 12) left = vw - menuW - 12;
    if(left < 12) left = 12;
    if(top + menuH > vh - 12) top = r.top - menuH - 10;
    if(top < 12) top = 12;

    paletteMenu.style.left = `${Math.round(left)}px`;
    paletteMenu.style.top = `${Math.round(top)}px`;
    paletteMenu.classList.add("open");
    paletteMenu.setAttribute("aria-hidden","false");
  }
  function closePaletteMenu(){
    paletteForHabitId = null;
    paletteMenu.classList.remove("open");
    paletteMenu.setAttribute("aria-hidden","true");
  }
  palClose?.addEventListener("click", (e)=>{ e.stopPropagation(); closePaletteMenu(); });

  function closeAccountMenu(){
    if(!accountMenu || !accountBtn) return;
    accountMenu.classList.remove("open");
    accountMenu.setAttribute("aria-hidden","true");
    accountBtn.setAttribute("aria-expanded","false");
  }
  function toggleAccountMenu(){
    if(!accountMenu || !accountBtn) return;
    const open = accountMenu.classList.toggle("open");
    accountMenu.setAttribute("aria-hidden", open ? "false" : "true");
    accountBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  accountBtn?.addEventListener("click", (e)=>{ e.stopPropagation(); toggleAccountMenu(); });
  accountMenu?.addEventListener("click", (e)=>{ e.stopPropagation(); });

  document.addEventListener("click", ()=>{ closeRangeMenu(); closeWeekSortMenu(); closePaletteMenu(); closeAccountMenu(); });
  document.addEventListener("keydown", (e)=>{ if(e.key==="Escape"){ closeRangeMenu(); closeWeekSortMenu(); closePaletteMenu(); closeAccountMenu(); }});
  window.addEventListener("resize", ()=>{ closeRangeMenu(); closeWeekSortMenu(); closePaletteMenu(); closeAccountMenu(); drawSuccessChart(false); });

  function setLang(lang){
    state.ui.lang = (lang === "en") ? "en" : "hu";
    saveState();
    applyLang();
  }
  $("langHU").addEventListener("click", (e)=>{ e.stopPropagation(); setLang("hu"); });
  $("langEN").addEventListener("click", (e)=>{ e.stopPropagation(); setLang("en"); });

  function msToHMS(ms){
    ms = Math.max(0, ms);
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
  }
  function updateCountdown(){
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24,0,0,0);
    const diff = midnight.getTime() - now.getTime();
    countdownPill.textContent = `⏳ ${msToHMS(diff)}`;
    updateBackupButton();
  }

  function updateBackupButton(){
    if(!exportBtn) return;
    const iso = String(state.ui?.lastBackupISO || "");
    const ok = /^\d{4}-\d{2}-\d{2}$/.test(iso);

    exportBtn.classList.remove("hasBackup","fresh","stale");
    if(!ok){
      exportBtn.style.removeProperty("--bh");
      exportBtn.title = (state.ui.lang === "en") ? "No backup yet" : "Még nincs backup";
      return;
    }

    const today = new Date(); today.setHours(0,0,0,0);
    const d0 = new Date(iso + "T00:00:00"); d0.setHours(0,0,0,0);

    const days = Math.max(0, Math.floor((today - d0) / 86400000));
    const t7 = Math.min(1, days / 7);

    const hue = 160 + (350 - 160) * t7;
    exportBtn.style.setProperty("--bh", hue.toFixed(1));
    exportBtn.classList.add("hasBackup");
    exportBtn.classList.toggle("fresh", days === 0);
    exportBtn.classList.toggle("stale", days >= 7);

    const dateTxt = (state.ui.lang === "en") ? iso : formatHU(d0);
    if(state.ui.lang === "en"){
      const s = (days === 1) ? "" : "s";
      exportBtn.title = `Last backup: ${iso} (${days} day${s} ago)`;
    }else{
      exportBtn.title = `Utolsó backup: ${dateTxt} (${days} napja)`;
    }
  }

  function updateNavHints(){
    const curWeekStart = startOfWeekMonday(new Date());
    const diffWeeks = Math.round((viewWeekStart - curWeekStart) / (86400000*7));
    prevWeekBtn.classList.toggle("navHint", diffWeeks > 0);
    nextWeekBtn.classList.toggle("navHint", diffWeeks < 0);
    thisWeekBtn.classList.toggle("accent", diffWeeks === 0);

    const v = (state.ui.heatView || "week");
    if(v === "year"){
      const yo = Number(state.ui.yearOffset || 0);
      heatPrev.classList.toggle("navHint", yo > 0);
      heatNext.classList.toggle("navHint", yo < 0);
      heatNowBtn?.classList.toggle("accent", yo === 0);
    }else{
      const off = Math.floor(state.ui.heatOffsetWeeks || 0);
      heatPrev.classList.toggle("navHint", off > 0);
      heatNext.classList.toggle("navHint", off < 0);
      heatNowBtn?.classList.toggle("accent", off === 0);
    }
  }

  function setHeatView(v){
    const next = (v === "year") ? "year" : "week";
    if(state.ui.heatView === next) return;
    if(heatNavBusy) return;

    const fromEl = (state.ui.heatView === "year") ? yearWrap : weekHeatWrap;
    const dir = (next === "year") ? "left" : "right";

    heatNavBusy = true;
    animateSwap(fromEl, dir, ()=>{
      state.ui.heatView = next;
      saveState();
      renderCalendar(false);
    }, ()=>{ heatNavBusy = false; });
  }
  viewWeekBtn.addEventListener("click",(e)=>{ e.stopPropagation(); setHeatView("week"); });
  viewYearBtn.addEventListener("click",(e)=>{ e.stopPropagation(); setHeatView("year"); });

  heatPrev.addEventListener("click", (e)=>{
    e.stopPropagation();
    if(heatNavBusy) return;

    const v = (state.ui.heatView || "week");
    const target = (v === "year") ? yearWrap : weekHeatWrap;

    heatNavBusy = true;
    animateSwap(target, "right", ()=>{
      if(v === "year"){
        state.ui.yearOffset = (state.ui.yearOffset || 0) - 1;
      }else{
        state.ui.heatOffsetWeeks = (state.ui.heatOffsetWeeks || 0) - 1;
      }
      saveState();
      renderCalendar(false);
    }, ()=>{ heatNavBusy = false; });
  });

  heatNowBtn?.addEventListener("click", (e)=>{
    e.stopPropagation();
    if(heatNavBusy) return;

    const v = (state.ui.heatView || "week");
    const target = (v === "year") ? yearWrap : weekHeatWrap;
    const cur = (v === "year") ? Number(state.ui.yearOffset || 0) : Number(state.ui.heatOffsetWeeks || 0);
    if(cur === 0) return;

    heatNavBusy = true;
    const dir = (cur < 0) ? "left" : "right";
    animateSwap(target, dir, ()=>{
      if(v === "year") state.ui.yearOffset = 0;
      else state.ui.heatOffsetWeeks = 0;
      saveState();
      renderCalendar(false);
    }, ()=>{ heatNavBusy = false; });
  });

  heatNext.addEventListener("click", (e)=>{
    e.stopPropagation();
    if(heatNavBusy) return;

    const v = (state.ui.heatView || "week");
    const target = (v === "year") ? yearWrap : weekHeatWrap;

    heatNavBusy = true;
    animateSwap(target, "left", ()=>{
      if(v === "year"){
        state.ui.yearOffset = (state.ui.yearOffset || 0) + 1;
      }else{
        state.ui.heatOffsetWeeks = (state.ui.heatOffsetWeeks || 0) + 1;
      }
      saveState();
      renderCalendar(false);
    }, ()=>{ heatNavBusy = false; });
  });

  function updateHabitPanelUI(opts = {}){
    if(!habitListWrap || !habitPanelToggle || !habitList) return;
    const { instant = false } = opts;
    const listStyle = getComputedStyle(habitList);
    const mt = parseFloat(listStyle.marginTop || "0") || 0;
    const mb = parseFloat(listStyle.marginBottom || "0") || 0;
    const firstLine = habitList.querySelector(".habitline");
    const firstLineHeight = firstLine ? Math.ceil(firstLine.getBoundingClientRect().height) : 72;
    const collapsedHeight = Math.max(78, Math.ceil(mt + firstLineHeight + 2));
    const open = !!state.ui.habitsPanelOpen;
    const label = (state.ui.lang === "en") ? (open ? "Collapse" : "Expand") : (open ? "Összecsukás" : "Lenyitás");

    habitListWrap.classList.add("measuring");
    const openHeight = Math.max(collapsedHeight, Math.ceil(habitList.scrollHeight + mt + mb));
    habitListWrap.classList.remove("measuring");

    habitListWrap.classList.toggle("open", open);
    habitListWrap.classList.toggle("collapsed", !open);
    habitPanelToggle.classList.toggle("open", open);
    habitPanelToggle.setAttribute("aria-expanded", open ? "true" : "false");
    habitPanelToggle.setAttribute("aria-label", label);
    habitPanelToggle.title = label;

    if(instant){
      const prev = habitListWrap.style.transition;
      habitListWrap.style.transition = "none";
      habitListWrap.style.height = open ? `${openHeight}px` : `${collapsedHeight}px`;
      habitListWrap.offsetHeight;
      habitListWrap.style.transition = prev;
      return;
    }

    if(open){
      habitListWrap.style.height = `${openHeight}px`;
      return;
    }

    const current = Math.max(collapsedHeight, Math.ceil(habitListWrap.getBoundingClientRect().height));
    habitListWrap.style.height = `${current}px`;
    requestAnimationFrame(()=>{
      habitListWrap.style.height = `${collapsedHeight}px`;
    });
  }

  window.addEventListener("resize", ()=> updateHabitPanelUI({ instant:true }));

  habitPanelToggle?.addEventListener("click", (e)=>{
    e.stopPropagation();
    state.ui.habitsPanelOpen = !state.ui.habitsPanelOpen;
    saveState();
    updateHabitPanelUI({ instant:false });
    drawSuccessChart(false);
  });

  habitListWrap?.addEventListener("transitionend", (e)=>{
    if(e.propertyName !== "height") return;
    drawSuccessChart(false);
  });
  function renderHabitList(withReveal=false){
    const L = t();
    habitList.innerHTML = "";

    if(state.habits.length === 0) return;

    const iso = todayISO();

    for(let idx=0; idx<state.habits.length; idx++){
      const h = state.habits[idx];
      ensureHabitColor(h);
      ensureHabitChecks(h.id);
      h.activeRanges = normalizeRanges(h.activeRanges);

      const isActive = habitIsActiveOn(h, iso);

      const line = document.createElement("div");
      line.className = "habitline" + (withReveal ? " revealItem" : "") + (isActive ? "" : " passive");
      if(withReveal && !prefersReduced()){
        line.style.animationDelay = `${Math.min(160, idx * 18)}ms`;
      }

      line.innerHTML = `
        <div class="habitlineLeft">
          <div class="swatchBtn" style="--habitColor:${h.color}" title="Color"></div>
          <div class="name" title="Double click / edit">${escapeHtml(h.name)}</div>
        </div>

        <div style="display:flex; gap:8px; align-items:center;">
          <button class="btn small ${isActive ? "toggleOn" : "toggleOff"}" type="button" data-toggle>${isActive ? L.active : L.passive}</button>
          <button class="iconBtn" type="button" title="${L.editTitle}">&#9998;</button>
          <button class="btn danger" type="button">${L.delete}</button>
        </div>
      `;

      const sw = line.querySelector(".swatchBtn");
      sw.addEventListener("click", (e)=>{
        e.stopPropagation();
        openPaletteMenuFor(h.id, sw);
      });

      const toggleBtn = line.querySelector("[data-toggle]");
      toggleBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        setHabitActive(h.id, !isActive);
        render({
          weekReveal: false,
          habitReveal: false,
          chartAnimate: true,
          calendarReveal: false,
          taskReveal: false,
        });
      });

      const nameEl = line.querySelector(".name");
      const editBtn = line.querySelector(".iconBtn");

      function beginEdit(){
        const current = h.name;
        const input = document.createElement("input");
        input.className = "nameEdit";
        input.type = "text";
        input.value = current;
        input.maxLength = 50;

        nameEl.replaceWith(input);
        input.focus();
        input.select();

        function commit(){
          const v = input.value.trim();
          h.name = v ? v : current;
          saveState();
          render({
            weekReveal: false,
            habitReveal: false,
            chartAnimate: true,
            calendarReveal: false,
            taskReveal: false,
          });
        }
        function cancel(){
          render({
            weekReveal: false,
            habitReveal: false,
            chartAnimate: false,
            calendarReveal: false,
            taskReveal: false,
          });
        }

        input.addEventListener("keydown", (ev)=>{
          if(ev.key === "Enter") commit();
          if(ev.key === "Escape") cancel();
        });
        input.addEventListener("blur", commit);
      }

      nameEl.addEventListener("dblclick", (e)=>{ e.stopPropagation(); beginEdit(); });
      editBtn.addEventListener("click", (e)=>{ e.stopPropagation(); beginEdit(); });

      line.querySelector(".btn.danger").addEventListener("click", (e)=>{
        e.stopPropagation();
        if(confirm(L.confirmDelete(h.name))){
          state.habits = state.habits.filter(x=>x.id!==h.id);
          delete state.checks[h.id];
          saveState();
          render({
            weekReveal: false,
            habitReveal: false,
            chartAnimate: true,
            calendarReveal: false,
            taskReveal: false,
          });
        }
      });

      habitList.appendChild(line);
    }
  }
  function getSortedHabitsForWeek(){
    const habits = [...state.habits];
    const key = state.ui.weekSort || "created";
    const tie = (a,b) => (a.createdAt - b.createdAt);

    if(key === "abc"){
      habits.sort((a,b)=> a.name.localeCompare(b.name, state.ui.lang==="en" ? "en" : "hu") || tie(a,b));
    }else if(key === "streak"){
      habits.sort((a,b)=> (computeStreak(b.id) - computeStreak(a.id)) || tie(a,b));
    }else if(key === "week"){
      habits.sort((a,b)=> (weekDoneForHabit(b.id, viewWeekStart) - weekDoneForHabit(a.id, viewWeekStart)) || tie(a,b));
    }else{
      habits.sort(tie);
    }

    return habits;
  }
  function flameScaleFromRatio(r){
    const min = 0.90;
    const max = 1.42;
    const rr = Math.max(0, Math.min(1, r));
    return (min + (max-min)*rr).toFixed(3);
  }

  function flameSVG(){
    return `
      <svg class="flameIcon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"/>
      </svg>
    `;
  }

  function focusDailyTasksPanel(options = {}){
    if(!dailyTasksCard) return;

    const { scrollOnMobile = false } = options;
    const shouldScroll = !!(scrollOnMobile && window.matchMedia && window.matchMedia("(max-width: 960px)").matches);

    dailyTasksCard.classList.remove("cardPulse");
    void dailyTasksCard.offsetWidth;
    dailyTasksCard.classList.add("cardPulse");

    if(shouldScroll){
      dailyTasksCard.scrollIntoView({
        behavior: prefersReduced() ? "auto" : "smooth",
        block: "start"
      });
    }

    setTimeout(() => {
      dailyTasksCard.classList.remove("cardPulse");
    }, 760);
  }

  function renderDailyTasksWeekStrip(withReveal=false){
    if(!dailyWeekSpot) return;

    const L = t();
    const days = [...Array(7)].map((_,i)=>addDays(viewWeekStart,i));
    const dayIso = days.map(toISODate);

    const today = new Date();
    today.setHours(0,0,0,0);
    const todayIsoStr = toISODate(today);
    const selIso = selectedDateISO();

    let doneWeek = 0;
    let totalWeek = 0;
    for(const iso of dayIso){
      doneWeek += doneDailyTaskCount(iso);
      totalWeek += tasksForDate(iso).length;
    }

    const row = document.createElement("div");
    row.className = "dailyWeekRow" + (withReveal ? " revealItem" : "");

    const left = document.createElement("div");
    left.className = "dailyWeekLeft";
    left.innerHTML = `
      <div class="dailyWeekTitleWrap">
        <div class="dailyWeekTitle">${escapeHtml(L.dailyTasksFixed)}</div>
      </div>
      <div class="dailyWeekMeta">${escapeHtml(L.partialTasks(doneWeek, totalWeek))}</div>
    `;

    const right = document.createElement("div");
    right.className = "dailyWeekRight";

    const checks = document.createElement("div");
    checks.className = "dailyWeekChecks";

    for(let i=0; i<7; i++){
      const iso = dayIso[i];
      const total = tasksForDate(iso).length;
      const done = doneDailyTaskCount(iso);
      const on = total > 0 && done === total;
      const partial = total > 0 && done > 0 && done < total;
      const empty = total === 0;
      const isToday = iso === todayIsoStr;
      const isSelected = iso === selIso;

      const cell = document.createElement("button");
      cell.type = "button";
      cell.className =
        "dailyWeekCell" +
        (isToday ? " today" : "") +
        (isSelected ? " selected" : "") +
        (on ? " done" : "") +
        (partial ? " partial" : "") +
        (empty ? " empty" : "");
      cell.title = escapeHtml(L.partialTasks(done, total));
      cell.innerHTML = `
        <span class="dwDow">${escapeHtml(L.daysShort[i])}</span>
        <span class="dwVal">${done}/${total}</span>
      `;
      cell.addEventListener("click", (e)=>{
        e.stopPropagation();
        setSelectedDate(iso);
        render({
          weekReveal: false,
          habitReveal: false,
          chartAnimate: false,
          calendarReveal: false,
          taskReveal: false,
        });
        focusDailyTasksPanel({ scrollOnMobile: true });
      });
      checks.appendChild(cell);
    }

    right.appendChild(checks);
    row.appendChild(left);
    row.appendChild(right);

    dailyWeekSpot.innerHTML = "";
    dailyWeekSpot.appendChild(row);
  }

  function renderWeekTable(withReveal=false){
    const L = t();
    const days = [...Array(7)].map((_,i)=>addDays(viewWeekStart,i));
    const dayIso = days.map(toISODate);

    const today = new Date();
    today.setHours(0,0,0,0);
    const todayIsoStr = toISODate(today);
    const selIso = selectedDateISO();

    const { weekNo, weekYear } = isoWeekInfo(days[0]);
    const chip = L.weekChip(weekYear, weekNo);
    const rangeTxt = (state.ui.lang==="en")
      ? `${formatEN(days[0])} — ${formatEN(days[6])}`
      : `${formatHU(days[0])} — ${formatHU(days[6])}`;
    weekRange.innerHTML = `<span class="weekChip">${chip}</span><span>${rangeTxt}</span>`;

    weekBody.innerHTML = "";

    const habits = getSortedHabitsForWeek();
    if(habits.length === 0){
      weekBody.innerHTML = `<tr><td colspan="2"><div class="muted">${L.addHint}</div></td></tr>`;
      return;
    }

    const maxStreak = Math.max(1, computeMaxStreakAllHabits());
    let popApplied = false;

    for(let hi=0; hi<habits.length; hi++){
      const habit = habits[hi];
      const isDaily = habit.id === DAILY_TASKS_ID;

      if(!isDaily){
        ensureHabitChecks(habit.id);
        ensureHabitColor(habit);
        habit.activeRanges = normalizeRanges(habit.activeRanges);
      }

      const s = computeStreak(habit.id);
      const ratio = (s <= 0) ? 0 : (s / maxStreak);
      const fs = flameScaleFromRatio(ratio);

      const sNum = parseFloat(fs);
      const dy = Math.min(4, Math.max(0, (sNum - 1) * 7));

      const badgeHtml = (s === 0)
        ? `<span class="streakBadge zero" title="Streak"><span class="streakNum">0</span></span>`
        : `<span class="streakBadge" style="--hcol:${habit.color}; --flameScale:${fs}; --flameDy:${dy.toFixed(2)}px" title="Streak">
             ${flameSVG()}
             <span class="streakNum">${s}</span>
           </span>`;

      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 2;

      const rowWrap = document.createElement("div");
      rowWrap.className = "rowWrap" + (withReveal ? " revealItem" : "");
      rowWrap.style.setProperty("--habitColor", habit.color);
      if(withReveal && !prefersReduced()){
        rowWrap.style.animationDelay = `${Math.min(220, hi * 26)}ms`;
      }

      const activeAny = dayIso.some(iso => isDaily ? hasDailyTasksOn(iso) : habitIsActiveOn(habit, iso));
      if(!activeAny) rowWrap.classList.add("inactiveAll");

      const left = document.createElement("div");
      left.className = "rowLeft";
      left.innerHTML = `
        <div class="habit-name">
          ${badgeHtml}
          <div class="hn-title">${escapeHtml(habit.name)}</div>
        </div>
      `;

      const right = document.createElement("div");
      right.className = "rowRight";

      const checks = document.createElement("div");
      checks.className = "checks";
      checks.style.setProperty("--habitColor", habit.color);

      for(let i=0;i<7;i++){
        const iso = dayIso[i];
        const activeOnDay = isDaily ? hasDailyTasksOn(iso) : habitIsActiveOn(habit, iso);

        const val = isDaily
          ? (isDailyTasksDoneOn(iso) ? 1 : 0)
          : (activeOnDay ? state.checks[habit.id]?.[iso] : 0);

        const on = isDaily
          ? isDailyTasksDoneOn(iso)
          : (activeOnDay ? isDoneVal(val) : false);

        const partial = isDaily ? isDailyTasksPartialOn(iso) : false;
        const isToday = iso === todayIsoStr;

        const shouldPop = !isDaily && !!lastPop && lastPop.habitId === habit.id && lastPop.iso === iso && on;
        if(shouldPop) popApplied = true;

        const tClass = isDaily
          ? ""
          : (val === 2 ? "t-moon" : (val === 1 ? "t-check" : ""));

        const dayTitle = isDaily && activeOnDay
          ? L.partialTasks(doneDailyTaskCount(iso), tasksForDate(iso).length)
          : "";

        const cell = document.createElement("div");
        cell.className =
          "day" +
          (isToday ? " today" : "") +

          (activeOnDay ? "" : " inactive");

        if(withReveal) cell.classList.add("revealCell");
        if(withReveal && !prefersReduced()){
          cell.style.animationDelay = `${Math.min(260, (hi * 18) + (i * 12))}ms`;
        }

        cell.innerHTML = `
          <div class="dow">${L.daysShort[i]}</div>
          <div class="tick ${on ? "on":""} ${tClass} ${partial ? "partial" : ""} ${shouldPop ? "pop":""}" title="${escapeHtml(dayTitle)}">
            <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
            </svg>
          </div>
          <div class="date">${pad2(days[i].getMonth()+1)}/${pad2(days[i].getDate())}</div>
        `;

        cell.addEventListener("click", (e)=>{
          e.stopPropagation();

          if(isDaily){
            setSelectedDate(iso);
            render({
              weekReveal: false,
              habitReveal: false,
              chartAnimate: false,
              calendarReveal: false,
              taskReveal: false,
            });
            focusDailyTasksPanel({ scrollOnMobile: true });
            return;
          }

          if(activeOnDay){
            cycleCheck(habit.id, iso);
          }else{
            setSelectedDate(iso);
            render({
              weekReveal: false,
              habitReveal: false,
              chartAnimate: false,
              calendarReveal: false,
              taskReveal: false,
            });
          }
        });

        checks.appendChild(cell);
      }

      right.appendChild(checks);
      rowWrap.appendChild(left);
      rowWrap.appendChild(right);
      td.appendChild(rowWrap);
      tr.appendChild(td);
      weekBody.appendChild(tr);
    }

    if(popApplied) lastPop = null;
  }
  let chartAnimRAF = 0;
  let chartPrev = [];


  function syncSuccessChartHeight(){
    if(!chartCanvas) return;
    chartCanvas.style.removeProperty("height");
  }
  function drawSuccessChart(animate=true){
    const L = t();
    const daysBack = state.ui.rangeDays;
    const today = new Date(); today.setHours(0,0,0,0);

    const labels = [];
    const values = [];
    for(let i=daysBack-1; i>=0; i--){
      const d = addDays(today, -i);
      const iso = toISODate(d);
      labels.push(`${pad2(d.getMonth()+1)}/${pad2(d.getDate())}`);
      values.push(successPctForDate(iso));
    }

    chartHint.textContent = state.habits.length ? L.lastDays(daysBack) : "";

    const canvas = chartCanvas;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    if(!ctx) return;
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if(cssW <= 0 || cssH <= 0) return;
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);

    const W = cssW, H = cssH;
    const padL=52, padR=16, padT=16, padB=28;
    const innerW = W - padL - padR;
    const innerH = H - padT - padB;

    const n = values.length;
    const gap = Math.max(4, Math.floor(innerW/(n*10)));
    const barW = (innerW - gap*(n-1))/n;

    const grad = ctx.createLinearGradient(0,padT,0,padT+innerH);
    grad.addColorStop(0,"rgba(124,255,221,.85)");
    grad.addColorStop(1,"rgba(124,166,255,.50)");

    function roundRect(x,y,w,h,r){
      const rr = Math.min(r,w/2,h/2);
      ctx.beginPath();
      ctx.moveTo(x+rr,y);
      ctx.arcTo(x+w,y,x+w,y+h,rr);
      ctx.arcTo(x+w,y+h,x,y+h,rr);
      ctx.arcTo(x,y+h,x,y,rr);
      ctx.arcTo(x,y,x+w,y,rr);
      ctx.closePath();
    }

    function drawFrame(frameValues){
      ctx.clearRect(0,0,W,H);

      ctx.lineWidth=1;
      [0,25,50,75,100].forEach(tk=>{
        const y = padT + innerH - (tk/100)*innerH;
        ctx.strokeStyle="rgba(255,255,255,.075)";
        ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(W-padR,y); ctx.stroke();
        ctx.fillStyle="rgba(255,255,255,.38)";
        ctx.font="12px system-ui";
        ctx.textAlign="right";
        ctx.textBaseline="middle";
        ctx.fillText(`${tk}%`, padL-8, y);
      });

      for(let i=0;i<n;i++){
        const v = frameValues[i] ?? 0;
        const h = (v/100)*innerH;
        const x = padL + i*(barW+gap);
        const y = padT + innerH - h;

        ctx.fillStyle="rgba(255,255,255,.045)";
        roundRect(x,padT,barW,innerH,10); ctx.fill();

        ctx.fillStyle = activeHabitCountForDate(toISODate(addDays(today, -(daysBack-1-i)))) ? grad : "rgba(255,255,255,.09)";
        roundRect(x,y,barW,h,10); ctx.fill();
      }

      ctx.fillStyle="rgba(255,255,255,.42)";
      ctx.font="11px system-ui";
      ctx.textAlign="center";
      ctx.textBaseline="top";
      const step = Math.ceil(n/7);
      for(let i=0;i<n;i+=step){
        const x = padL + i*(barW+gap) + barW/2;
        ctx.fillText(labels[i], x, H-padB+6);
      }
    }

    const prev = chartPrev.slice(-n);
    const start = Array.from({length:n}, (_,i)=> (prev[i] ?? values[i] ?? 0));

    if(!animate || prefersReduced()){
      chartPrev = values.slice();
      drawFrame(values);
      return;
    }

    if(chartAnimRAF) cancelAnimationFrame(chartAnimRAF);

    const dur = 420;
    const t0 = performance.now();
    function easeOutCubic(x){ return 1 - Math.pow(1-x, 3); }

    const tick = (now)=>{
      const p = Math.min(1, (now - t0) / dur);
      const e = easeOutCubic(p);
      const frame = start.map((a,i)=> a + (values[i]-a)*e);
      drawFrame(frame);
      if(p < 1){
        chartAnimRAF = requestAnimationFrame(tick);
      }else{
        chartPrev = values.slice();
        chartAnimRAF = 0;
      }
    };
    chartAnimRAF = requestAnimationFrame(tick);
  }

  function pctToHeat(pct){
    const tt = Math.max(0, Math.min(1, pct/100));
    const L = 18 + tt * 37;
    const A = 0.10 + tt * 0.55;
    return {
      bg: `hsla(210, 85%, ${L}%, ${A})`,
      border: `hsla(210, 85%, ${Math.min(65, L+10)}%, ${0.18 + tt*0.18})`
    };
  }

  function weekPct(weekStart){
    let sum = 0;
    for(let i=0;i<7;i++){
      const iso = toISODate(addDays(weekStart,i));
      sum += successPctForDate(iso);
    }
    return Math.round(sum / 7);
  }

  function renderHeatmap(withReveal=false){
    const Lng = t();
    heatPrev.title = Lng.heatPrevTitle;
    heatNext.title = Lng.heatNextTitle;

    $("heatSub").textContent = Lng.heatSub;

    const styles = [0,25,50,75,100].map(pctToHeat);
    [leg0,leg1,leg2,leg3,leg4].forEach((el,i)=>{
      el.style.background = styles[i].bg;
      el.style.borderColor = styles[i].border;
    });

    heatY.innerHTML = "";
    for(const s of Lng.daysLong){
      const d = document.createElement("div");
      d.textContent = s;
      heatY.appendChild(d);
    }

    heatGrid.innerHTML = "";
    heatX.innerHTML = "";
    heatPct.innerHTML = "";

    const today = new Date(); today.setHours(0,0,0,0);
    const todayIsoStr = toISODate(today);
    const curWeekStart = startOfWeekMonday(today);
    const curWeekStartIso = toISODate(curWeekStart);

    const totalWeeks = 12;
    const offsetWeeks = Math.floor(state.ui.heatOffsetWeeks || 0);

    const anchorCol = 9; // 0-based: current week starts at the 10th column by default
    const startWeekStart = addDays(curWeekStart, (offsetWeeks - anchorCol) * 7);

    for(let col=0; col<totalWeeks; col++){
      const ws = addDays(startWeekStart, col*7);
      const { weekNo, weekYear } = isoWeekInfo(ws);

      const isCur = (toISODate(ws) === curWeekStartIso);

      const x = document.createElement("div");
      x.textContent = Lng.weekX(weekNo);
      x.title = Lng.weekChip(weekYear, weekNo);
      if(isCur) x.classList.add("current");
      if(withReveal) x.classList.add("revealItem");
      if(withReveal && !prefersReduced()) x.style.animationDelay = `${Math.min(200, col*18)}ms`;
      heatX.appendChild(x);

      const p = document.createElement("div");
      p.textContent = `${weekPct(ws)}%`;
      p.title = Lng.weekChip(weekYear, weekNo);
      if(isCur) p.classList.add("current");
      if(withReveal) p.classList.add("revealItem");
      if(withReveal && !prefersReduced()) p.style.animationDelay = `${Math.min(240, 80 + col*18)}ms`;
      heatPct.appendChild(p);
    }

    for(let col=0; col<totalWeeks; col++){
      const weekStart = addDays(startWeekStart, col*7);
      for(let row=0; row<7; row++){
        const day = addDays(weekStart, row);
        const iso = toISODate(day);

        const pct = successPctForDate(iso);
        const st = pctToHeat(pct);

        const cell = document.createElement("div");
        cell.className = "heatDay" + (iso === todayIsoStr ? " today" : "");
        cell.style.background = st.bg;
        cell.style.borderColor = st.border;

        if(withReveal) cell.classList.add("revealCell");
        if(withReveal && !prefersReduced()){
          cell.style.animationDelay = `${Math.min(360, (col*16) + (row*10))}ms`;
        }

        cell.addEventListener("mouseenter", (e)=>{
          const dateTxt = (state.ui.lang==="en") ? formatEN(day) : formatHU(day);
          heatTip.textContent = `${dateTxt} • ${pct}%`;
          heatTip.style.display = "block";
          heatTip.style.left = (e.clientX + 14) + "px";
          heatTip.style.top = (e.clientY - 10) + "px";
        });
        cell.addEventListener("mousemove", (e)=>{
          heatTip.style.left = (e.clientX + 14) + "px";
          heatTip.style.top = (e.clientY - 10) + "px";
        });
        cell.addEventListener("mouseleave", ()=>{ heatTip.style.display = "none"; });

        heatGrid.appendChild(cell);
      }
    }
  }

  function isoWeeksInYear(y){
    return isoWeekInfo(new Date(y, 11, 28)).weekNo;
  }
  function isoWeekStartFromYearWeek(y, weekNo){
    const jan4 = new Date(y, 0, 4);
    const w1 = startOfWeekMonday(jan4);
    return addDays(w1, (weekNo - 1) * 7);
  }

  function renderYearView(withReveal=false){
    const Lng = t();
    yearGrid.innerHTML = "";

    const baseYear = new Date().getFullYear();
    const yearOffsetNum = Number(state.ui?.yearOffset ?? 0);
    const safeYearOffset = Number.isFinite(yearOffsetNum) ? Math.floor(yearOffsetNum) : 0;
    const year = baseYear + safeYearOffset;
    const totalWeeksRaw = isoWeeksInYear(year);
    const totalWeeks = (Number.isFinite(totalWeeksRaw) && totalWeeksRaw > 0) ? totalWeeksRaw : 52;

    const now = new Date(); now.setHours(0,0,0,0);
    const cur = isoWeekInfo(now);

    const styles = [0,25,50,75,100].map(pctToHeat);
    [leg0,leg1,leg2,leg3,leg4].forEach((el,i)=>{
      el.style.background = styles[i].bg;
      el.style.borderColor = styles[i].border;
    });

    const isCurrentYear = (year === baseYear);
    $("heatSub").innerHTML = `<span class="${isCurrentYear ? "yearBig" : "yearNorm"}">${year}</span><span class="subSep">•</span>${escapeHtml(Lng.yearSubLabel)}`;

    if(state.habits.length === 0){
      const empty = document.createElement("div");
      empty.className = "muted";
      empty.textContent = Lng.addHint;
      yearGrid.appendChild(empty);
      return;
    }

    for(let w=1; w<=totalWeeks; w++){
      const ws = isoWeekStartFromYearWeek(year, w);
      const we = addDays(ws, 6);
      const pct = weekPct(ws);
      const st = pctToHeat(pct);

      const cell = document.createElement("div");
      cell.className = "yearCell";
      cell.style.background = st.bg;
      cell.style.borderColor = st.border;

      if(year === cur.weekYear && w === cur.weekNo) cell.classList.add("current");

      if(withReveal) cell.classList.add("revealItem");
      if(withReveal && !prefersReduced()){
        cell.style.animationDelay = `${Math.min(420, w * 10)}ms`;
      }

      const wkLabel = Lng.yearWeekLabel(w);
      cell.innerHTML = `
        <div class="wk">${escapeHtml(wkLabel)}</div>
        <div class="pct">${pct}%</div>
      `;

      cell.addEventListener("mouseenter",(e)=>{
        const from = (state.ui.lang==="en") ? formatEN(ws) : formatHU(ws);
        const to   = (state.ui.lang==="en") ? formatEN(we) : formatHU(we);
        heatTip.textContent = `${wkLabel} • ${from} — ${to} • ${pct}%`;
        heatTip.style.display = "block";
        heatTip.style.left = (e.clientX + 14) + "px";
        heatTip.style.top  = (e.clientY - 10) + "px";
      });
      cell.addEventListener("mousemove",(e)=>{
        heatTip.style.left = (e.clientX + 14) + "px";
        heatTip.style.top  = (e.clientY - 10) + "px";
      });
      cell.addEventListener("mouseleave",()=>{ heatTip.style.display="none"; });

      yearGrid.appendChild(cell);
    }

    if(yearGrid.children.length === 0){
      const empty = document.createElement("div");
      empty.className = "muted";
      empty.textContent = Lng.addHint;
      yearGrid.appendChild(empty);
    }

    heatPrev.title = Lng.yearPrevTitle;
    heatNext.title = Lng.yearNextTitle;
  }

  function renderCalendar(withReveal=false){
    const Lng = t();
    const v = (state.ui.heatView || "week");

    viewWeekBtn.textContent = Lng.viewWeek;
    viewYearBtn.textContent = Lng.viewYear;
    if(heatNowBtn) heatNowBtn.textContent = Lng.todayBtn;

    viewWeekBtn.classList.toggle("active", v === "week");
    viewYearBtn.classList.toggle("active", v === "year");

    if(v === "year"){
      weekHeatWrap.style.display = "none";
      yearWrap.style.display = "block";
      renderYearView(withReveal);
    }else{
      yearWrap.style.display = "none";
      weekHeatWrap.style.display = "block";
      renderHeatmap(withReveal);
    }
    updateNavHints();
  }

  let todayPctPrev = 0;
  function animateTextNumber(el, from, to, suffix="", dur=240){
    if(!el) return;
    if(prefersReduced()){ el.textContent = `${Math.round(to)}${suffix}`; return; }

    const t0 = performance.now();
    const f = Number(from)||0;
    const tt = Number(to)||0;
    function easeOut(x){ return 1 - Math.pow(1-x, 3); }

    const step = (now)=>{
      const p = Math.min(1, (now - t0) / dur);
      const v = f + (tt - f) * easeOut(p);
      el.textContent = `${Math.round(v)}${suffix}`;
      if(p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderTaskPanel(withReveal=false){
    const L = t();
    const iso = selectedDateISO();
    const d = dateFromISO(iso);
    const dateTxt = (state.ui.lang === "en") ? formatEN(d) : formatHU(d);

    taskDayLabel.textContent = L.selectedDay(dateTxt);
    taskInput.placeholder = L.taskPlaceholder;
    taskEmpty.textContent = L.noTasks;

    const list = tasksForDate(iso);
    taskList.innerHTML = "";

    const showCarry = carryPromptVisible(iso);
    carryBox.style.display = showCarry ? "" : "none";
    if(showCarry){
      carryText.textContent = L.carryTitle(getCarryCandidates(iso).length);
    }

    taskEmpty.style.display = list.length ? "none" : "";

    for(let idx=0; idx<list.length; idx++){
      const item = list[idx];

      const line = document.createElement("div");
      line.className = "taskLine" + (item.done ? " done" : "") + (withReveal ? " revealItem" : "");
      if(withReveal && !prefersReduced()){
        line.style.animationDelay = `${Math.min(180, idx * 22)}ms`;
      }

      line.innerHTML = `
        <button class="taskCheck ${item.done ? "on" : ""}" type="button" aria-label="toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </button>
        <div class="taskText">${escapeHtml(item.text)}</div>
        <button class="iconBtn" type="button" title="${L.taskDeleteTitle}">&times;</button>
      `;

      line.querySelector(".taskCheck").addEventListener("click", (e)=>{
        e.stopPropagation();
        toggleTaskDone(iso, item.id);
      });

      line.querySelector(".iconBtn").addEventListener("click", (e)=>{
        e.stopPropagation();
        deleteTaskFromDate(iso, item.id);
      });

      taskList.appendChild(line);
    }
  }
  function renderStats(){
    const L = t();
    const today = new Date();
    const todayIsoStr = toISODate(today);

    const dateTxt = (state.ui.lang==="en") ? formatEN(today) : formatHU(today);

    const activeToday = activeHabitCountForDate(todayIsoStr);
    statHabits.textContent = String(activeToday);

    const weekDone = doneCountForWeek(viewWeekStart);
    const weekTotal = totalChecksForWeek(viewWeekStart);
    statWeekChecks.textContent = `${weekDone} / ${weekTotal}`;

    statBestStreak.textContent = String(computeBestStreakAllHabits());

    const todayPct = activeToday ? Math.round((doneCountForDate(todayIsoStr) / activeToday) * 100) : 0;
    animateTextNumber(statTodayPct, todayPctPrev, todayPct, "%", 240);
    todayPctPrev = todayPct;

    statTodayCard.classList.toggle("good", todayPct === 100 && activeToday > 0);

    const footerDate = document.getElementById("footerDate");
    footerDate.textContent = L.footerDate(dateTxt);
    updateBackupButton();
  }

  function applyLang(){
    const L = t();

    $("hWeek").textContent = L.weekView;
    $("hNewHabit").textContent = L.newHabit;
    $("hDailyTasks").textContent = L.dailyTasksPanel;
    $("taskInput").placeholder = L.taskPlaceholder;
    $("taskAddBtn").textContent = L.add;
    $("carryAllBtn").textContent = L.carryAdd;
    $("carryDismissBtn").textContent = L.carryDismiss;
    $("taskEmpty").textContent = L.noTasks;    $("addBtn").textContent = L.add;
    $("exportBtn").textContent = L.backup;
    $("importBtn").textContent = L.import;
    $("hSuccess").textContent = L.success;
    $("kHabits").textContent = L.habits;
    $("kToday").textContent = L.todaySuccess;
    $("kWeekChecks").textContent = L.weekChecks;
    $("kBestStreak").textContent = L.bestStreak;
    $("hCalendar").textContent = L.calendar;
    $("lessLbl").textContent = L.less;
    $("moreLbl").textContent = L.more;
    $("thHabit").textContent = L.thHabit;
    $("thWeek").textContent = L.thWeek;
    $("thisWeekBtn").textContent = L.todayBtn;

    $("habitInput").placeholder = L.placeholder;
    $("palTitle").textContent = L.palTitle;
    $("palClose").textContent = L.palClose;

    $("r7").textContent = L.r7;
    $("r14").textContent = L.r14;
    $("r30").textContent = L.r30;
    $("rangeLabel").textContent = L.rangeDays(state.ui.rangeDays);

    $("sCreated").textContent = L.sCreated;
    $("sAbc").textContent = L.sAbc;
    $("sStreak").textContent = L.sStreak;
    $("sWeek").textContent = L.sWeek;

    weekSortBtn.title = L.sortTitle(state.ui.weekSort);

    $("langHU").classList.toggle("active", state.ui.lang === "hu");
    $("langEN").classList.toggle("active", state.ui.lang === "en");

    updateAuthUI();

    render({
      weekReveal: false,
      habitReveal: false,
      chartAnimate: false,
      calendarReveal: false,
    });
  }

  function render(opts = {}){
    const {
      weekReveal = false,
      habitReveal = false,
      chartAnimate = true,
      calendarReveal = false,
      taskReveal = false,
    } = opts;

    state.habits.sort((a,b)=>a.createdAt - b.createdAt);
    for(const h of state.habits){
      ensureHabitColor(h);
      ensureHabitChecks(h.id);
      h.activeRanges = normalizeRanges(h.activeRanges);
    }

    renderDailyTasksWeekStrip(weekReveal);
    renderWeekTable(weekReveal);
    renderHabitList(habitReveal);
    updateHabitPanelUI({ instant:true });
    renderTaskPanel(taskReveal);
    renderStats();
    renderCalendar(calendarReveal);
    syncSuccessChartHeight();
    drawSuccessChart(chartAnimate);
    updateCountdown();
    updateNavHints();
  }
  prevWeekBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    animateSwap(weekBody, "right", ()=>{
      viewWeekStart = addDays(viewWeekStart, -7);
      render({
        weekReveal: true,
        habitReveal: false,
        chartAnimate: true,
        calendarReveal: false,
      });
    });
  });

  nextWeekBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    animateSwap(weekBody, "left", ()=>{
      viewWeekStart = addDays(viewWeekStart, 7);
      render({
        weekReveal: true,
        habitReveal: false,
        chartAnimate: true,
        calendarReveal: false,
      });
    });
  });

  thisWeekBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    animateSwap(weekBody, "left", ()=>{
      viewWeekStart = startOfWeekMonday(new Date());
      render({
        weekReveal: true,
        habitReveal: false,
        chartAnimate: true,
        calendarReveal: false,
      });
    });
  });

  addForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const added = addHabit(habitInput.value);
    habitInput.value = "";
    habitInput.focus();

    if(added){
      render({
        weekReveal: false,
        habitReveal: true,
        chartAnimate: true,
        calendarReveal: false,
      });
    }
  });
  taskForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const iso = selectedDateISO();
    const added = addTaskToDate(iso, taskInput.value);
    taskInput.value = "";
    taskInput.focus();

    if(added){
      render({
        weekReveal: false,
        habitReveal: false,
        chartAnimate: true,
        calendarReveal: false,
        taskReveal: true,
      });
    }
  });

  carryAllBtn.addEventListener("click", ()=>{
    const iso = selectedDateISO();
    carryOverTasksToDate(iso);
    render({
      weekReveal: false,
      habitReveal: false,
      chartAnimate: true,
      calendarReveal: false,
      taskReveal: true,
    });
  });

  carryDismissBtn.addEventListener("click", ()=>{
    const iso = selectedDateISO();
    markCarryHandled(iso);
    render({
      weekReveal: false,
      habitReveal: false,
      chartAnimate: false,
      calendarReveal: false,
      taskReveal: false,
    });
  });

  initCardShine();
  applyLang();

  window.addEventListener("firebase-ready", initFirebaseAuth);
  if(window.firebaseBridge?.ready) initFirebaseAuth();

  [...weekSortMenu.querySelectorAll(".ddItem")].forEach(el=>{
    el.classList.toggle("active", el.dataset.value === (state.ui.weekSort || "created"));
  });

  drawSuccessChart(false);
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();



























