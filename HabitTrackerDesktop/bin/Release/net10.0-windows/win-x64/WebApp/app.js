const STORAGE_KEY = "personal-habit-tracker-v1";
const CALENDAR_EVENTS_KEY = "personal-habit-tracker-calendar-events-v1";
const THEME_KEY = "personal-habit-tracker-theme";
const SCHEME_KEY = "personal-habit-tracker-scheme";
const LANGUAGE_KEY = "personal-habit-tracker-language";
const USERNAME_KEY = "personal-habit-tracker-username";
const LOCALES = {
  hu: "hu-HU",
  en: "en-US",
  pl: "pl-PL",
  de: "de-DE"
};
const TRANSLATIONS = {
  hu: {
    title: "Szokáskövető",
    eyebrow: "Terv követő v0.0.1",
    language: "Nyelv",
    editProfile: "Név módosítása",
    heroCopy: "Kövesd, ami számít és nézd át a hetedet felesleges bonyodalmak nélkül.",
    light: "Világos",
    dark: "Sötét",
    scheme: "Oldal séma",
    today: "Ma",
    overview: "Áttekintés",
    calendar: "Naptár",
    addGoal: "Új cél",
    addEvent: "Adj hozzá egy eseményt!",
    habitName: "Szokás neve",
    habitReason: "Miért fontos?",
    frequency: "Ritmus",
    color: "Szín",
    daily: "Napi",
    weekly: "Heti",
    weeklyTarget: "Heti cél",
    weeklyTargetAuto: "Heti cél (automatikus)",
    addHabit: "Szokás hozzáadása",
    backup: "Biztonsági mentés",
    backupTitle: "Adatok exportálása és importálása",
    backupCopy: "Mentsd le a szokásaidat egy fájlba, vagy tölts vissza egy korábbi mentést.",
    export: "Adatok exportálása",
    import: "Mentés visszatöltése",
    weeklyView: "Heti nézet",
    yourHabits: "Szokásaid",
    loadSamples: "Minta betöltése",
    momentum: "Lendület",
    weeklyOverview: "Heti áttekintés",
    monthlyView: "Havi nézet",
    prev: "Előző",
    next: "Következő",
    googleCalendar: "Google Naptár",
    importCalendar: "Naptár importálása",
    importCalendarCopy: "Tölts fel egy Google Naptárból exportált `.ics` fájlt. Az események külön naptári bejegyzésként jelennek meg, és a többnapos programok minden érintett napra átnyúlnak.",
    googleImport: "Google Naptár import",
    manualEvent: "Kézi esemény",
    addProgram: "Program hozzáadása",
    eventName: "Esemény neve",
    startDate: "Kezdőnap",
    endDate: "Zárónap",
    allDay: "Egész napos esemény",
    startTime: "Kezdés",
    endTime: "Befejezés",
    notes: "Megjegyzés",
    saveEvent: "Esemény mentése",
    cancelEdit: "Szerkesztés megszakítása",
    firstLaunch: "Első indítás",
    whatCallYou: "Hogy szólíthatlak?",
    welcomeCopy: "Írd be a neved, és a Habit Tracker személyre szabottan fog köszönteni.",
    yourName: "Neved",
    letsStart: "Kezdjük",
    eventDetails: "Program részletei",
    edit: "Szerkesztés",
    delete: "Törlés",
    close: "Bezárás",
    when: "Mikor",
    duration: "Időtartam",
    source: "Forrás",
    noteEmpty: "Nincs megjegyzés.",
    habitDeletedAria: "Szokás törlése",
    weekSelect: "Heti jelölés: válaszd ki a napot",
    todayDone: "Ma {done} / {total} szokás van kipipálva",
    todayEmpty: "Add hozzá az első szokásodat, és indulhat a lendület",
    statToday: "Mai teljesítmény",
    statTodayDetail: "Gyors állapotkép a mai napról",
    statNoHabit: "Még nincs szokás",
    statBest: "Legjobb jelenlegi sorozat",
    statBestDetail: "Ez most a legerősebb ritmusod",
    statThirty: "Elmúlt 30 napos teljesítmény",
    statThirtyDetail: "Átlagos teljesítési arány minden szokásnál",
    statWeeklyWins: "Heti sikerek",
    statWeeklyWinsDetail: "Ennyi szokás halad jól ezen a héten",
    emptyHabits: "Itt még nincs semmi. Adj hozzá egy szokást fent, és a követő helyben, a böngésződben menti az adatokat.",
    noReason: "Még nincs megjegyzés",
    dailyHabit: "Napi szokás",
    streak: "{count} napos sorozat",
    progressWeek: "{done}/{target} ezen a héten",
    dayDone: "KÉSZ",
    dayOpen: "NYITOTT",
    todayReady: "Mai nap kész",
    quickCheck: "Mai nap gyors pipálása",
    emptyWeekly: "Itt jelenik meg a heti áttekintés, amint lesznek követett szokásaid.",
    completedWeek: "{done} / {target} teljesítve ezen a héten",
    noMarks: "Nincs jelölés",
    friend: "Barátom",
    profile: "Profil",
    profileCopy: "Itt bármikor átírhatod, hogyan szólítson meg az app. A többi adatod megmarad.",
    saveName: "Név mentése",
    exportSuccess: "Az adatok exportálása sikerült.",
    importSuccess: "A mentés visszatöltése sikerült.",
    importError: "A fájl nem olvasható be. Válassz érvényes JSON mentést.",
    unnamedHabit: "Névtelen szokás",
    eventRequired: "Az esemény neve és dátuma kötelező.",
    eventEndError: "A zárónap nem lehet korábbi a kezdőnapnál.",
    eventTimeError: "Az aznapi befejezés legyen későbbi a kezdésnél.",
    eventSaved: "Az esemény mentése sikerült.",
    eventUpdated: "Az esemény frissítése sikerült.",
    sampleLoaded: "Minta szokások betöltve.",
    calendarImportSuccess: "{count} naptári esemény importálva.",
    calendarImportError: "Nem sikerült feldolgozni a naptárfájlt. Exportálj `.ics` fájlt a Google Naptárból, majd próbáld újra.",
    unnamedEvent: "Névtelen esemény",
    importedCalendar: "Importált naptár",
    manualEntry: "Kézzel rögzített",
    eventDeleted: "Az esemény törlése sikerült.",
    allDayShort: "egész nap",
    allDayLabel: "Egész napos",
    multiDayAllDay: "Többnapos, egész napos",
    exampleName: "Például: Pisti",
    exampleHabit: "Reggeli séta",
    exampleReason: "Egyenletesebbé teszi az energiaszintemet",
    exampleEvent: "Például: Edzés",
    exampleNotes: "Rövid leírás vagy helyszín",
    unknownAuthor: "Ismeretlen"
  },
  en: {
    title: "Habit Tracker",
    eyebrow: "Plan tracker v0.0.1",
    language: "Language",
    editProfile: "Edit name",
    heroCopy: "Track what matters and review your week without unnecessary complications.",
    light: "Light",
    dark: "Dark",
    scheme: "Page theme",
    today: "Today",
    overview: "Overview",
    calendar: "Calendar",
    addGoal: "New goal",
    addEvent: "Add an event!",
    habitName: "Habit name",
    habitReason: "Why is it important?",
    frequency: "Rhythm",
    color: "Color",
    daily: "Daily",
    weekly: "Weekly",
    weeklyTarget: "Weekly target",
    weeklyTargetAuto: "Weekly target (automatic)",
    addHabit: "Add habit",
    backup: "Backup",
    backupTitle: "Export and import data",
    backupCopy: "Save your habits to a file or restore an earlier backup.",
    export: "Export data",
    import: "Restore backup",
    weeklyView: "Weekly view",
    yourHabits: "Your habits",
    loadSamples: "Load samples",
    momentum: "Momentum",
    weeklyOverview: "Weekly overview",
    monthlyView: "Monthly view",
    prev: "Previous",
    next: "Next",
    googleCalendar: "Google Calendar",
    importCalendar: "Import calendar",
    importCalendarCopy: "Upload an `.ics` file exported from Google Calendar. Events appear as separate calendar entries, and multi-day programs span every affected day.",
    googleImport: "Import Google Calendar",
    manualEvent: "Manual event",
    addProgram: "Add program",
    eventName: "Event name",
    startDate: "Start date",
    endDate: "End date",
    allDay: "All-day event",
    startTime: "Start",
    endTime: "End",
    notes: "Notes",
    saveEvent: "Save event",
    cancelEdit: "Cancel editing",
    firstLaunch: "First launch",
    whatCallYou: "What should I call you?",
    welcomeCopy: "Enter your name and Habit Tracker will greet you personally.",
    yourName: "Your name",
    letsStart: "Let's start",
    eventDetails: "Program details",
    edit: "Edit",
    delete: "Delete",
    close: "Close",
    when: "When",
    duration: "Duration",
    source: "Source",
    noteEmpty: "No notes.",
    habitDeletedAria: "Delete habit",
    weekSelect: "Weekly check: choose the day",
    todayDone: "Today {done} / {total} habits are checked off",
    todayEmpty: "Add your first habit and build momentum",
    statToday: "Today's completion",
    statTodayDetail: "Quick snapshot of today",
    statNoHabit: "No habits yet",
    statBest: "Best current streak",
    statBestDetail: "This is your strongest rhythm right now",
    statThirty: "Last 30 days performance",
    statThirtyDetail: "Average completion rate across habits",
    statWeeklyWins: "Weekly wins",
    statWeeklyWinsDetail: "Habits progressing well this week",
    emptyHabits: "There is nothing here yet. Add a habit above and the tracker will save everything locally in your browser.",
    noReason: "No note yet",
    dailyHabit: "Daily habit",
    streak: "{count}-day streak",
    progressWeek: "{done}/{target} this week",
    dayDone: "DONE",
    dayOpen: "OPEN",
    todayReady: "Today done",
    quickCheck: "Quick check for today",
    emptyWeekly: "Your weekly overview will appear here once you start tracking habits.",
    completedWeek: "{done} / {target} completed this week",
    noMarks: "No entries",
    friend: "Friend",
    profile: "Profile",
    profileCopy: "You can change how the app addresses you at any time. Your other data will stay intact.",
    saveName: "Save name",
    exportSuccess: "Data export completed successfully.",
    importSuccess: "Backup restored successfully.",
    importError: "The file could not be read. Choose a valid JSON backup.",
    unnamedHabit: "Untitled habit",
    eventRequired: "Event name and dates are required.",
    eventEndError: "The end date cannot be earlier than the start date.",
    eventTimeError: "For same-day events, the end time must be later than the start time.",
    eventSaved: "Event saved successfully.",
    eventUpdated: "Event updated successfully.",
    sampleLoaded: "Sample habits loaded.",
    calendarImportSuccess: "{count} calendar events imported.",
    calendarImportError: "The calendar file could not be processed. Export an `.ics` file from Google Calendar and try again.",
    unnamedEvent: "Untitled event",
    importedCalendar: "Imported calendar",
    manualEntry: "Manually added",
    eventDeleted: "Event deleted successfully.",
    allDayShort: "all day",
    allDayLabel: "All day",
    multiDayAllDay: "Multi-day, all day",
    exampleName: "For example: Alex",
    exampleHabit: "Morning walk",
    exampleReason: "It balances my energy levels",
    exampleEvent: "For example: Workout",
    exampleNotes: "Short description or location",
    unknownAuthor: "Unknown"
  },
  pl: {
    title: "Śledzik nawyków",
    eyebrow: "Planer v0.0.1",
    language: "Język",
    editProfile: "Zmień imię",
    heroCopy: "Śledź to, co ważne, i przeglądaj swój tydzień bez zbędnych komplikacji.",
    light: "Jasny",
    dark: "Ciemny",
    scheme: "Motyw strony",
    today: "Dziś",
    overview: "Przegląd",
    calendar: "Kalendarz",
    addGoal: "Nowy cel",
    addEvent: "Dodaj wydarzenie!",
    habitName: "Nazwa nawyku",
    habitReason: "Dlaczego to ważne?",
    frequency: "Rytm",
    color: "Kolor",
    daily: "Codziennie",
    weekly: "Tygodniowo",
    weeklyTarget: "Cel tygodniowy",
    weeklyTargetAuto: "Cel tygodniowy (automatyczny)",
    addHabit: "Dodaj nawyk",
    backup: "Kopia zapasowa",
    backupTitle: "Eksport i import danych",
    backupCopy: "Zapisz swoje nawyki do pliku lub przywróć wcześniejszą kopię.",
    export: "Eksportuj dane",
    import: "Przywróć kopię",
    weeklyView: "Widok tygodniowy",
    yourHabits: "Twoje nawyki",
    loadSamples: "Wczytaj przykłady",
    momentum: "Tempo",
    weeklyOverview: "Przegląd tygodnia",
    monthlyView: "Widok miesięczny",
    prev: "Poprzedni",
    next: "Następny",
    googleCalendar: "Google Kalendarz",
    importCalendar: "Import kalendarza",
    importCalendarCopy: "Wgraj plik `.ics` wyeksportowany z Google Calendar. Wydarzenia pojawią się jako osobne wpisy, a wielodniowe programy obejmą każdy odpowiedni dzień.",
    googleImport: "Import Google Calendar",
    manualEvent: "Ręczne wydarzenie",
    addProgram: "Dodaj program",
    eventName: "Nazwa wydarzenia",
    startDate: "Data rozpoczęcia",
    endDate: "Data zakończenia",
    allDay: "Wydarzenie całodniowe",
    startTime: "Początek",
    endTime: "Koniec",
    notes: "Notatka",
    saveEvent: "Zapisz wydarzenie",
    cancelEdit: "Anuluj edycję",
    firstLaunch: "Pierwsze uruchomienie",
    whatCallYou: "Jak mam się do Ciebie zwracać?",
    welcomeCopy: "Wpisz swoje imię, a Habit Tracker będzie witał Cię osobiście.",
    yourName: "Twoje imię",
    letsStart: "Zaczynajmy",
    eventDetails: "Szczegóły programu",
    edit: "Edytuj",
    delete: "Usuń",
    close: "Zamknij",
    when: "Kiedy",
    duration: "Czas trwania",
    source: "Źródło",
    noteEmpty: "Brak notatki.",
    habitDeletedAria: "Usuń nawyk",
    weekSelect: "Tygodniowe oznaczanie: wybierz dzień",
    todayDone: "Dziś zaznaczono {done} / {total} nawyków",
    todayEmpty: "Dodaj pierwszy nawyk i zacznij budować tempo",
    statToday: "Dzisiejsze wykonanie",
    statTodayDetail: "Szybki podgląd dzisiejszego dnia",
    statNoHabit: "Brak nawyków",
    statBest: "Najlepsza obecna seria",
    statBestDetail: "To teraz Twój najmocniejszy rytm",
    statThirty: "Wynik z ostatnich 30 dni",
    statThirtyDetail: "Średni poziom realizacji wszystkich nawyków",
    statWeeklyWins: "Tygodniowe sukcesy",
    statWeeklyWinsDetail: "Tyle nawyków idzie dobrze w tym tygodniu",
    emptyHabits: "Jeszcze nic tu nie ma. Dodaj nawyk powyżej, a aplikacja zapisze dane lokalnie w przeglądarce.",
    noReason: "Brak notatki",
    dailyHabit: "Codzienny nawyk",
    streak: "Seria {count} dni",
    progressWeek: "{done}/{target} w tym tygodniu",
    dayDone: "GOTOWE",
    dayOpen: "OTWARTE",
    todayReady: "Dziś gotowe",
    quickCheck: "Szybkie odhaczenie dzisiaj",
    emptyWeekly: "Tutaj pojawi się tygodniowy przegląd, gdy zaczniesz śledzić nawyki.",
    completedWeek: "{done} / {target} ukończono w tym tygodniu",
    noMarks: "Brak wpisów",
    friend: "Przyjacielu",
    profile: "Profil",
    profileCopy: "Tutaj możesz zmienić sposób, w jaki aplikacja się do Ciebie zwraca. Pozostałe dane zostaną zachowane.",
    saveName: "Zapisz imię",
    exportSuccess: "Eksport danych zakończony powodzeniem.",
    importSuccess: "Kopia została przywrócona.",
    importError: "Nie udało się odczytać pliku. Wybierz poprawną kopię JSON.",
    unnamedHabit: "Nienazwany nawyk",
    eventRequired: "Nazwa wydarzenia i daty są wymagane.",
    eventEndError: "Data zakończenia nie może być wcześniejsza niż data rozpoczęcia.",
    eventTimeError: "Dla wydarzeń jednodniowych godzina zakończenia musi być późniejsza od rozpoczęcia.",
    eventSaved: "Wydarzenie zapisano.",
    eventUpdated: "Wydarzenie zaktualizowano.",
    sampleLoaded: "Załadowano przykładowe nawyki.",
    calendarImportSuccess: "Zaimportowano {count} wydarzeń z kalendarza.",
    calendarImportError: "Nie udało się przetworzyć pliku kalendarza. Wyeksportuj plik `.ics` z Google Calendar i spróbuj ponownie.",
    unnamedEvent: "Nienazwane wydarzenie",
    importedCalendar: "Zaimportowany kalendarz",
    manualEntry: "Dodane ręcznie",
    eventDeleted: "Wydarzenie usunięto.",
    allDayShort: "cały dzień",
    allDayLabel: "Całodniowe",
    multiDayAllDay: "Wielodniowe, całodniowe",
    exampleName: "Na przykład: Piotr",
    exampleHabit: "Poranny spacer",
    exampleReason: "Wyrównuje mój poziom energii",
    exampleEvent: "Na przykład: Trening",
    exampleNotes: "Krótki opis lub lokalizacja",
    unknownAuthor: "Nieznany"
  },
  de: {
    title: "Gewohnheitstracker",
    eyebrow: "Plan-Tracker v0.0.1",
    language: "Sprache",
    editProfile: "Name ändern",
    heroCopy: "Behalte im Blick, was zählt, und sieh dir deine Woche ohne unnötige Umwege an.",
    light: "Hell",
    dark: "Dunkel",
    scheme: "Seitenschema",
    today: "Heute",
    overview: "Übersicht",
    calendar: "Kalender",
    addGoal: "Neues Ziel",
    addEvent: "Ereignis hinzufügen!",
    habitName: "Name der Gewohnheit",
    habitReason: "Warum ist das wichtig?",
    frequency: "Rhythmus",
    color: "Farbe",
    daily: "Täglich",
    weekly: "Wöchentlich",
    weeklyTarget: "Wochenziel",
    weeklyTargetAuto: "Wochenziel (automatisch)",
    addHabit: "Gewohnheit hinzufügen",
    backup: "Sicherung",
    backupTitle: "Daten exportieren und importieren",
    backupCopy: "Speichere deine Gewohnheiten in einer Datei oder stelle eine frühere Sicherung wieder her.",
    export: "Daten exportieren",
    import: "Sicherung wiederherstellen",
    weeklyView: "Wochenansicht",
    yourHabits: "Deine Gewohnheiten",
    loadSamples: "Beispiele laden",
    momentum: "Momentum",
    weeklyOverview: "Wochenüberblick",
    monthlyView: "Monatsansicht",
    prev: "Zurück",
    next: "Weiter",
    googleCalendar: "Google Kalender",
    importCalendar: "Kalender importieren",
    importCalendarCopy: "Lade eine aus Google Calendar exportierte `.ics`-Datei hoch. Ereignisse erscheinen als eigene Kalendereinträge, und mehrtägige Programme erstrecken sich über alle betroffenen Tage.",
    googleImport: "Google Kalender importieren",
    manualEvent: "Manuelles Ereignis",
    addProgram: "Programm hinzufügen",
    eventName: "Ereignisname",
    startDate: "Startdatum",
    endDate: "Enddatum",
    allDay: "Ganztägiges Ereignis",
    startTime: "Beginn",
    endTime: "Ende",
    notes: "Notiz",
    saveEvent: "Ereignis speichern",
    cancelEdit: "Bearbeitung abbrechen",
    firstLaunch: "Erster Start",
    whatCallYou: "Wie soll ich dich nennen?",
    welcomeCopy: "Gib deinen Namen ein und Habit Tracker begrüßt dich persönlich.",
    yourName: "Dein Name",
    letsStart: "Los geht's",
    eventDetails: "Programmdetails",
    edit: "Bearbeiten",
    delete: "Löschen",
    close: "Schließen",
    when: "Wann",
    duration: "Dauer",
    source: "Quelle",
    noteEmpty: "Keine Notiz.",
    habitDeletedAria: "Gewohnheit löschen",
    weekSelect: "Wöchentliche Markierung: Wähle den Tag",
    todayDone: "Heute sind {done} / {total} Gewohnheiten abgehakt",
    todayEmpty: "Füge deine erste Gewohnheit hinzu und starte den Schwung",
    statToday: "Heutige Erfüllung",
    statTodayDetail: "Schneller Überblick über heute",
    statNoHabit: "Noch keine Gewohnheiten",
    statBest: "Beste aktuelle Serie",
    statBestDetail: "Das ist im Moment dein stärkster Rhythmus",
    statThirty: "Leistung der letzten 30 Tage",
    statThirtyDetail: "Durchschnittliche Erfüllungsrate über alle Gewohnheiten",
    statWeeklyWins: "Wochenerfolge",
    statWeeklyWinsDetail: "So viele Gewohnheiten laufen diese Woche gut",
    emptyHabits: "Hier ist noch nichts. Füge oben eine Gewohnheit hinzu, und der Tracker speichert alles lokal in deinem Browser.",
    noReason: "Noch keine Notiz",
    dailyHabit: "Tägliche Gewohnheit",
    streak: "{count}-Tage-Serie",
    progressWeek: "{done}/{target} diese Woche",
    dayDone: "FERTIG",
    dayOpen: "OFFEN",
    todayReady: "Heute erledigt",
    quickCheck: "Heute schnell abhaken",
    emptyWeekly: "Hier erscheint dein Wochenüberblick, sobald du Gewohnheiten verfolgst.",
    completedWeek: "{done} / {target} diese Woche erfüllt",
    noMarks: "Keine Einträge",
    friend: "Freund",
    profile: "Profil",
    profileCopy: "Hier kannst du jederzeit ändern, wie dich die App anspricht. Deine übrigen Daten bleiben erhalten.",
    saveName: "Name speichern",
    exportSuccess: "Daten erfolgreich exportiert.",
    importSuccess: "Sicherung erfolgreich wiederhergestellt.",
    importError: "Die Datei konnte nicht gelesen werden. Wähle eine gültige JSON-Sicherung.",
    unnamedHabit: "Unbenannte Gewohnheit",
    eventRequired: "Ereignisname und Datum sind erforderlich.",
    eventEndError: "Das Enddatum darf nicht vor dem Startdatum liegen.",
    eventTimeError: "Bei eintägigen Ereignissen muss die Endzeit nach der Startzeit liegen.",
    eventSaved: "Ereignis erfolgreich gespeichert.",
    eventUpdated: "Ereignis erfolgreich aktualisiert.",
    sampleLoaded: "Beispielgewohnheiten geladen.",
    calendarImportSuccess: "{count} Kalendereinträge importiert.",
    calendarImportError: "Die Kalenderdatei konnte nicht verarbeitet werden. Exportiere eine `.ics`-Datei aus Google Calendar und versuche es erneut.",
    unnamedEvent: "Unbenanntes Ereignis",
    importedCalendar: "Importierter Kalender",
    manualEntry: "Manuell erfasst",
    eventDeleted: "Ereignis erfolgreich gelöscht.",
    allDayShort: "ganztägig",
    allDayLabel: "Ganztägig",
    multiDayAllDay: "Mehrtägig, ganztägig",
    exampleName: "Zum Beispiel: Peter",
    exampleHabit: "Morgenspaziergang",
    exampleReason: "Es gleicht mein Energielevel aus",
    exampleEvent: "Zum Beispiel: Training",
    exampleNotes: "Kurze Beschreibung oder Ort",
    unknownAuthor: "Unbekannt"
  }
};
const DAILY_QUOTES = [
  {
    quote: {
      hu: "Nem számít, milyen lassan haladsz, amíg nem állsz meg.",
      en: "It does not matter how slowly you go as long as you do not stop.",
      pl: "Nie ma znaczenia, jak wolno idziesz, dopóki się nie zatrzymujesz.",
      de: "Es spielt keine Rolle, wie langsam du gehst, solange du nicht stehen bleibst."
    },
    author: "Konfuciusz"
  },
  {
    quote: {
      hu: "Higgy benne, hogy képes vagy rá, és már félig meg is érkeztél.",
      en: "Believe you can and you're halfway there.",
      pl: "Uwierz, że możesz, a jesteś już w połowie drogi.",
      de: "Glaube daran, dass du es kannst, und du bist schon halb dort."
    },
    author: "Theodore Roosevelt"
  },
  {
    quote: {
      hu: "A nagyszerű munka egyetlen útja az, ha szereted, amit csinálsz.",
      en: "The only way to do great work is to love what you do.",
      pl: "Jedynym sposobem, by wykonywać świetną pracę, jest kochać to, co robisz.",
      de: "Der einzige Weg, großartige Arbeit zu leisten, ist, zu lieben, was du tust."
    },
    author: "Steve Jobs"
  },
  {
    quote: {
      hu: "A cselekvés megszünteti a kételyt.",
      en: "Action eliminates doubt.",
      pl: "Działanie eliminuje wątpliwości.",
      de: "Handeln beseitigt Zweifel."
    },
    author: "Nashid Sharrief"
  },
  {
    quote: {
      hu: "Ha elfáradsz, tanulj meg pihenni, ne feladni.",
      en: "If you get tired, learn to rest, not to quit.",
      pl: "Jeśli się zmęczysz, naucz się odpoczywać, a nie poddawać.",
      de: "Wenn du müde wirst, lerne dich auszuruhen, nicht aufzugeben."
    },
    author: "Banksy"
  },
  {
    quote: {
      hu: "Nem kell látnod az egész lépcsőt, csak tedd meg az első lépést.",
      en: "You don't have to see the whole staircase, just take the first step.",
      pl: "Nie musisz widzieć całych schodów, po prostu zrób pierwszy krok.",
      de: "Du musst nicht die ganze Treppe sehen, mach einfach den ersten Schritt."
    },
    author: "Martin Luther King"
  },
  {
    quote: {
      hu: "Minden, amire valaha vágytál, a félelmen túl vár rád.",
      en: "Everything you've ever wanted is on the other side of fear.",
      pl: "Wszystko, czego kiedykolwiek pragnąłeś, znajduje się po drugiej stronie strachu.",
      de: "Alles, was du dir je gewünscht hast, liegt auf der anderen Seite der Angst."
    },
    author: "George Addair"
  },
  {
    quote: {
      hu: "A siker nem végleges, a kudarc nem végzetes: a folytatáshoz szükséges bátorság az, ami igazán számít.",
      en: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      pl: "Sukces nie jest ostateczny, porażka nie jest śmiertelna: liczy się odwaga, by iść dalej.",
      de: "Erfolg ist nicht endgültig, Scheitern ist nicht fatal: Es ist der Mut weiterzumachen, der zählt."
    },
    author: "Winston Churchill"
  },
  {
    quote: {
      hu: "Tedd meg, amit tudsz, azzal amid van, ott ahol vagy.",
      en: "Do what you can, with what you have, where you are.",
      pl: "Rób, co możesz, z tym, co masz, tam, gdzie jesteś.",
      de: "Tu, was du kannst, mit dem, was du hast, dort, wo du bist."
    },
    author: "Theodore Roosevelt"
  },
  {
    quote: {
      hu: "Tedd minden napodat a saját mesterműveddé.",
      en: "Make each day your masterpiece.",
      pl: "Uczyń każdy dzień swoim arcydziełem.",
      de: "Mach jeden Tag zu deinem Meisterwerk."
    },
    author: "John Wooden"
  },
  {
    quote: {
      hu: "A jövő attól függ, mit teszel ma.",
      en: "The future depends on what you do today.",
      pl: "Przyszłość zależy od tego, co robisz dzisiaj.",
      de: "Die Zukunft hängt davon ab, was du heute tust."
    },
    author: "Mahatma Gandhi"
  },
  {
    quote: {
      hu: "A szokásaid alakítják a jövődet, jóval azelőtt, hogy észrevennéd.",
      en: "Your habits shape your future long before you notice it.",
      pl: "Twoje nawyki kształtują twoją przyszłość na długo, zanim to zauważysz.",
      de: "Deine Gewohnheiten formen deine Zukunft lange bevor du es bemerkst."
    },
    author: "Ismeretlen"
  },
  {
    quote: {
      hu: "A fegyelem az a híd, ami összeköti a célokat az eredményekkel.",
      en: "Discipline is the bridge between goals and results.",
      pl: "Dyscyplina jest mostem między celami a wynikami.",
      de: "Disziplin ist die Brücke zwischen Zielen und Ergebnissen."
    },
    author: "Jim Rohn"
  },
  {
    quote: {
      hu: "Ne várj a tökéletes pillanatra, ragadd meg ezt a pillanatot, és tedd tökéletessé.",
      en: "Don't wait for the perfect moment, take this moment and make it perfect.",
      pl: "Nie czekaj na idealny moment, wykorzystaj ten moment i uczyń go idealnym.",
      de: "Warte nicht auf den perfekten Moment, nimm diesen Moment und mach ihn perfekt."
    },
    author: "Zoey Sayward"
  },
  {
    quote: {
      hu: "A siker az apró erőfeszítések összege, amelyeket nap mint nap megismételsz.",
      en: "Success is the sum of small efforts repeated day in and day out.",
      pl: "Sukces jest sumą małych wysiłków powtarzanych dzień po dniu.",
      de: "Erfolg ist die Summe kleiner Anstrengungen, die Tag für Tag wiederholt werden."
    },
    author: "Robert Collier"
  },
  {
    quote: {
      hu: "A kitartás nem hosszú verseny, hanem sok rövid verseny egymás után.",
      en: "Perseverance is not one long race; it is many short races one after another.",
      pl: "Wytrwałość to nie jeden długi bieg, lecz wiele krótkich biegów jeden po drugim.",
      de: "Ausdauer ist kein einziges langes Rennen, sondern viele kurze Rennen nacheinander."
    },
    author: "Walter Elliot"
  },
  {
    quote: {
      hu: "Légy erősebb a kifogásaidnál.",
      en: "Be stronger than your excuses.",
      pl: "Bądź silniejszy niż swoje wymówki.",
      de: "Sei stärker als deine Ausreden."
    },
    author: "Ismeretlen"
  },
  {
    quote: {
      hu: "A kezdet mindig nehezebb, mint a folytatás.",
      en: "The beginning is always harder than the continuation.",
      pl: "Początek jest zawsze trudniejszy niż kontynuacja.",
      de: "Der Anfang ist immer schwerer als das Weitermachen."
    },
    author: "Ismeretlen"
  },
  {
    quote: {
      hu: "Nem az motiváció tart életben, hanem a rendszer, amit felépítesz.",
      en: "It is not motivation that keeps you going, but the system you build.",
      pl: "To nie motywacja cię napędza, lecz system, który budujesz.",
      de: "Nicht Motivation hält dich am Laufen, sondern das System, das du aufbaust."
    },
    author: "Ismeretlen"
  },
  {
    quote: {
      hu: "Minden szakértő valaha kezdő volt.",
      en: "Every expert was once a beginner.",
      pl: "Każdy ekspert był kiedyś początkującym.",
      de: "Jeder Experte war einmal Anfänger."
    },
    author: "Helen Hayes"
  },
  {
    quote: {
      hu: "A következetesség többet ér, mint az alkalmi lelkesedés.",
      en: "Consistency is worth more than occasional enthusiasm.",
      pl: "Konsekwencja jest więcej warta niż okazjonalny zapał.",
      de: "Beständigkeit ist mehr wert als gelegentliche Begeisterung."
    },
    author: "Ismeretlen"
  },
  {
    quote: {
      hu: "Egy év múlva hálás leszel magadnak azért, hogy ma nem adtad fel.",
      en: "A year from now you will be grateful that you did not give up today.",
      pl: "Za rok będziesz sobie wdzięczny, że dziś się nie poddałeś.",
      de: "In einem Jahr wirst du dir dankbar sein, dass du heute nicht aufgegeben hast."
    },
    author: "Ismeretlen"
  },
  {
    quote: {
      hu: "A célokhoz vezető út a napi döntéseidben rejlik.",
      en: "The path to your goals lies in your daily decisions.",
      pl: "Droga do twoich celów kryje się w twoich codziennych decyzjach.",
      de: "Der Weg zu deinen Zielen liegt in deinen täglichen Entscheidungen."
    },
    author: "Ismeretlen"
  },
  {
    quote: {
      hu: "Nem kell jobbnak lenned mindenkinél, csak jobbnak, mint tegnap voltál.",
      en: "You do not need to be better than everyone else, only better than you were yesterday.",
      pl: "Nie musisz być lepszy od wszystkich, tylko lepszy niż byłeś wczoraj.",
      de: "Du musst nicht besser sein als alle anderen, nur besser als du gestern warst."
    },
    author: "Ismeretlen"
  }
];

const sampleHabits = [
  {
    id: crypto.randomUUID(),
    name: "Reggeli nyújtás",
    reason: "Jobban indul tőle a nap",
    frequency: "daily",
    target: 7,
    color: "#f97316",
    completions: [dateOffset(0), dateOffset(-1), dateOffset(-2), dateOffset(-4)],
    createdAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    name: "Mélymunka blokk",
    reason: "Védjen napi egy fókuszált órát",
    frequency: "weekly",
    target: 4,
    color: "#0f766e",
    completions: [dateOffset(0), dateOffset(-1), dateOffset(-3), dateOffset(-5)],
    createdAt: new Date().toISOString()
  }
];

const state = {
  habits: loadHabits(),
  calendarEvents: loadCalendarEvents(),
  theme: loadTheme(),
  scheme: loadScheme(),
  language: loadLanguage(),
  activeView: "overview",
  calendarDate: startOfMonth(new Date()),
  isEditingProfile: false,
  editingCalendarEventId: ""
};

const habitForm = document.getElementById("habitForm");
const habitsList = document.getElementById("habitsList");
const statsGrid = document.getElementById("statsGrid");
const weeklyOverview = document.getElementById("weeklyOverview");
const todayLabel = document.getElementById("todayLabel");
const midnightCountdown = document.getElementById("midnightCountdown");
const focusSummary = document.getElementById("focusSummary");
const heroGreeting = document.getElementById("heroGreeting");
const dailyQuote = document.getElementById("dailyQuote");
const resetSamplesButton = document.getElementById("resetSamplesButton");
const habitCardTemplate = document.getElementById("habitCardTemplate");
const habitFrequencyInput = document.getElementById("habitFrequency");
const habitTargetInput = document.getElementById("habitTarget");
const habitColorInput = document.getElementById("habitColor");
const targetLabel = document.getElementById("targetLabel");
const lightModeButton = document.getElementById("lightModeButton");
const darkModeButton = document.getElementById("darkModeButton");
const welcomeModal = document.getElementById("welcomeModal");
const welcomeForm = document.getElementById("welcomeForm");
const welcomeNameInput = document.getElementById("welcomeName");
const welcomeCopy = document.getElementById("welcomeCopy");
const welcomeSubmitButton = document.getElementById("welcomeSubmitButton");
const editProfileButton = document.getElementById("editProfileButton");
const exportDataButton = document.getElementById("exportDataButton");
const importDataButton = document.getElementById("importDataButton");
const importFileInput = document.getElementById("importFileInput");
const backupStatus = document.getElementById("backupStatus");
const importCalendarButton = document.getElementById("importCalendarButton");
const calendarFileInput = document.getElementById("calendarFileInput");
const calendarStatus = document.getElementById("calendarStatus");
const calendarEventForm = document.getElementById("calendarEventForm");
const calendarEventStartDateInput = document.getElementById("calendarEventStartDate");
const calendarEventEndDateInput = document.getElementById("calendarEventEndDate");
const calendarEventAllDayInput = document.getElementById("calendarEventAllDay");
const calendarEventStartTimeInput = document.getElementById("calendarEventStartTime");
const calendarEventEndTimeInput = document.getElementById("calendarEventEndTime");
const calendarEventColorInput = document.getElementById("calendarEventColor");
const calendarEventNameInput = document.getElementById("calendarEventName");
const calendarEventNotesInput = document.getElementById("calendarEventNotes");
const calendarEventSubmitButton = document.getElementById("calendarEventSubmitButton");
const cancelCalendarEditButton = document.getElementById("cancelCalendarEditButton");
const calendarTimeRow = document.getElementById("calendarTimeRow");
const overviewTabButton = document.getElementById("overviewTabButton");
const calendarTabButton = document.getElementById("calendarTabButton");
const overviewView = document.getElementById("overviewView");
const calendarView = document.getElementById("calendarView");
const prevMonthButton = document.getElementById("prevMonthButton");
const nextMonthButton = document.getElementById("nextMonthButton");
const calendarMonthLabel = document.getElementById("calendarMonthLabel");
const calendarWeekdays = document.getElementById("calendarWeekdays");
const calendarGrid = document.getElementById("calendarGrid");
const tabBar = document.querySelector(".tab-bar");
const themeSwitch = document.querySelector(".theme-switch");
const schemeSelect = document.getElementById("schemeSelect");
const languageSelect = document.getElementById("languageSelect");
const calendarEventModal = document.getElementById("calendarEventModal");
const closeCalendarEventModalButton = document.getElementById("closeCalendarEventModalButton");
const editCalendarEventButton = document.getElementById("editCalendarEventButton");
const deleteCalendarEventButton = document.getElementById("deleteCalendarEventButton");
const calendarEventModalTitle = document.getElementById("calendarEventModalTitle");
const calendarEventModalWhen = document.getElementById("calendarEventModalWhen");
const calendarEventModalDuration = document.getElementById("calendarEventModalDuration");
const calendarEventModalSource = document.getElementById("calendarEventModalSource");
const calendarEventModalNotes = document.getElementById("calendarEventModalNotes");

initialize();

function initialize() {
  languageSelect.value = state.language;
  applyLanguage();
  updateMidnightCountdown();
  window.setInterval(updateMidnightCountdown, 1000);

  applyTheme(state.theme);
  applyScheme(state.scheme);
  syncTargetInput();
  syncCalendarEventTimeInputs();
  seedCalendarEventForm();
  updateGreeting();
  schemeSelect.value = state.scheme;

  habitForm.addEventListener("submit", handleCreateHabit);
  habitFrequencyInput.addEventListener("change", syncTargetInput);
  lightModeButton.addEventListener("click", () => setTheme("light"));
  darkModeButton.addEventListener("click", () => setTheme("dark"));
  schemeSelect.addEventListener("change", (event) => setScheme(event.target.value));
  languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
  welcomeForm.addEventListener("submit", handleWelcomeSubmit);
  editProfileButton.addEventListener("click", openProfileEditor);
  exportDataButton.addEventListener("click", exportAppData);
  importDataButton.addEventListener("click", () => importFileInput.click());
  importFileInput.addEventListener("change", handleImportData);
  importCalendarButton.addEventListener("click", () => calendarFileInput.click());
  calendarFileInput.addEventListener("change", handleCalendarImport);
  calendarEventForm.addEventListener("submit", handleCreateCalendarEvent);
  calendarEventAllDayInput.addEventListener("change", syncCalendarEventTimeInputs);
  calendarEventStartDateInput.addEventListener("change", syncCalendarEventEndDate);
  overviewTabButton.addEventListener("click", () => setActiveView("overview"));
  calendarTabButton.addEventListener("click", () => setActiveView("calendar"));
  prevMonthButton.addEventListener("click", () => shiftCalendarMonth(-1));
  nextMonthButton.addEventListener("click", () => shiftCalendarMonth(1));
  closeCalendarEventModalButton.addEventListener("click", closeCalendarEventModal);
  editCalendarEventButton.addEventListener("click", handleEditCalendarEvent);
  deleteCalendarEventButton.addEventListener("click", handleDeleteCalendarEvent);
  cancelCalendarEditButton.addEventListener("click", resetCalendarEventForm);
  calendarEventModal.addEventListener("click", (event) => {
    if (event.target === calendarEventModal) {
      closeCalendarEventModal();
    }
  });
  resetSamplesButton.addEventListener("click", () => {
    state.habits = structuredClone(sampleHabits);
    persistHabits();
    setBackupStatus(t("sampleLoaded"), "success");
    render();
  });

  if (!loadUserName()) {
    openWelcomeModal();
  }

  render();
}

function handleCreateHabit(event) {
  event.preventDefault();

  const formData = new FormData(habitForm);
  const frequency = String(formData.get("habitFrequency"));
  const habit = {
    id: crypto.randomUUID(),
    name: String(formData.get("habitName")).trim(),
    reason: String(formData.get("habitReason")).trim(),
    frequency,
    target: frequency === "daily" ? 7 : Number(formData.get("habitTarget")) || 1,
    color: String(formData.get("habitColor")) || "#f97316",
    completions: [],
    createdAt: new Date().toISOString()
  };

  state.habits.unshift(habit);
  habitForm.reset();
  habitColorInput.value = "#f97316";
  syncTargetInput();
  persistHabits();
  render();
}

function render() {
  updateGreeting();
  renderTabs();
  renderStats();
  renderHabits();
  renderWeeklyOverview();
  renderCalendar();
}

function renderStats() {
  const totalHabits = state.habits.length;
  const completedToday = state.habits.filter((habit) => isCompleteOnDate(habit, todayKey())).length;
  const bestStreak = state.habits.reduce((max, habit) => Math.max(max, getStreak(habit)), 0);
  const consistency = totalHabits === 0
    ? 0
    : Math.round(state.habits.reduce((sum, habit) => sum + getThirtyDayRate(habit), 0) / totalHabits);

  focusSummary.textContent = totalHabits
    ? t("todayDone", { done: completedToday, total: totalHabits })
    : t("todayEmpty");

  const cards = [
    {
      label: t("statToday"),
      value: `${completedToday}/${totalHabits || 0}`,
      detail: totalHabits ? t("statTodayDetail") : t("statNoHabit")
    },
    {
      label: t("statBest"),
      value: formatStreakValue(bestStreak),
      detail: t("statBestDetail")
    },
    {
      label: t("statThirty"),
      value: `${consistency}%`,
      detail: t("statThirtyDetail")
    },
    {
      label: t("statWeeklyWins"),
      value: `${countWeeklyWins()}`,
      detail: t("statWeeklyWinsDetail")
    }
  ];

  statsGrid.innerHTML = cards.map((card) => `
    <article class="stat-card">
      <p class="stat-label">${card.label}</p>
      <p class="stat-value">${card.value}</p>
      <p class="stat-detail">${card.detail}</p>
    </article>
  `).join("");
}

function renderHabits() {
  habitsList.innerHTML = "";

  if (!state.habits.length) {
    habitsList.innerHTML = `
      <div class="empty-state">
        ${t("emptyHabits")}
      </div>
    `;
    return;
  }

  const weekDates = getCurrentWeekDates();
  const weekdayNames = getWeekdayNames();

  state.habits.forEach((habit) => {
    const fragment = habitCardTemplate.content.cloneNode(true);
    const article = fragment.querySelector(".habit-card");
    const title = fragment.querySelector(".habit-title");
    const reason = fragment.querySelector(".habit-reason");
    const frequency = fragment.querySelector(".habit-frequency");
    const streak = fragment.querySelector(".habit-streak");
    const progress = fragment.querySelector(".habit-progress");
    const weekLabel = fragment.querySelector(".habit-week-label");
    const week = fragment.querySelector(".habit-week");
    const toggleButton = fragment.querySelector(".toggle-button");
    const deleteButton = fragment.querySelector(".delete-button");

    weekLabel.textContent = t("weekSelect");
    article.style.setProperty("--habit-color", habit.color);
    title.textContent = habit.name;
    reason.textContent = habit.reason || t("noReason");
    frequency.textContent = habit.frequency === "daily"
      ? t("dailyHabit")
      : formatWeeklyFrequency(habit.target);
    streak.textContent = t("streak", { count: getStreak(habit) });
    progress.textContent = t("progressWeek", {
      done: getWeeklyCompletions(habit),
      target: getWeeklyTarget(habit)
    });

    week.innerHTML = "";

    weekDates.forEach((date, index) => {
      const button = document.createElement("button");
      const done = isCompleteOnDate(habit, date);
      const isToday = date === todayKey();
      const isFuture = date > todayKey();

      button.type = "button";
      button.className = "day-pill";
      button.style.setProperty("--habit-color", habit.color);
      button.classList.toggle("is-complete", done);
      button.classList.toggle("is-today", isToday);
      button.classList.toggle("is-future", isFuture);
      button.disabled = isFuture;
      button.innerHTML = `
        <strong>${weekdayNames[index]}</strong>
        <small>${formatShortDate(date)}</small>
        <span>${done ? t("dayDone") : t("dayOpen")}</span>
      `;

      if (!isFuture) {
        button.addEventListener("click", () => {
          toggleCompletion(habit.id, date);
        });
      }

      week.appendChild(button);
    });

    const todayDone = isCompleteOnDate(habit, todayKey());
    toggleButton.textContent = todayDone ? t("todayReady") : t("quickCheck");
    toggleButton.classList.toggle("is-complete", todayDone);
    toggleButton.addEventListener("click", () => {
      toggleCompletion(habit.id, todayKey());
    });

    deleteButton.addEventListener("click", () => {
      state.habits = state.habits.filter((entry) => entry.id !== habit.id);
      persistHabits();
      render();
    });
    deleteButton.setAttribute("aria-label", t("habitDeletedAria"));
    deleteButton.textContent = t("delete");

    habitsList.appendChild(fragment);
  });
}

function renderWeeklyOverview() {
  weeklyOverview.innerHTML = "";

  if (!state.habits.length) {
    weeklyOverview.innerHTML = `
      <div class="empty-state">
        ${t("emptyWeekly")}
      </div>
    `;
    return;
  }

  state.habits.forEach((habit) => {
    const completed = getWeeklyCompletions(habit);
    const target = getWeeklyTarget(habit);
    const percent = Math.min(100, Math.round((completed / target) * 100));
    const wrapper = document.createElement("article");
    wrapper.className = "weekly-card";
    wrapper.style.setProperty("--habit-color", habit.color);
    wrapper.innerHTML = `
      <div class="weekly-header">
        <div>
          <div class="weekly-title">${habit.name}</div>
          <div class="weekly-progress">${t("completedWeek", { done: completed, target })}</div>
        </div>
        <div class="weekly-progress">${percent}%</div>
      </div>
      <div class="meter">
        <div style="width: ${percent}%"></div>
      </div>
    `;
    weeklyOverview.appendChild(wrapper);
  });
}

function toggleCompletion(habitId, date) {
  const habit = state.habits.find((entry) => entry.id === habitId);
  if (!habit) {
    return;
  }

  if (habit.completions.includes(date)) {
    habit.completions = habit.completions.filter((entry) => entry !== date);
  } else {
    habit.completions = [...habit.completions, date].sort();
  }

  persistHabits();
  render();
}

function countWeeklyWins() {
  return state.habits.filter((habit) => getWeeklyCompletions(habit) >= getWeeklyTarget(habit)).length;
}

function getWeeklyCompletions(habit) {
  const weekDates = new Set(getCurrentWeekDates());
  return habit.completions.filter((date) => weekDates.has(date)).length;
}

function getWeeklyTarget(habit) {
  return habit.frequency === "daily" ? 7 : habit.target;
}

function getStreak(habit) {
  const completions = new Set(habit.completions);
  let streak = 0;

  for (let index = 0; index < 365; index += 1) {
    const key = dateOffset(-index);
    if (completions.has(key)) {
      streak += 1;
      continue;
    }

    if (index === 0) {
      continue;
    }

    break;
  }

  return streak;
}

function getThirtyDayRate(habit) {
  const completions = new Set(habit.completions);
  let total = 0;

  for (let index = 0; index < 30; index += 1) {
    if (completions.has(dateOffset(-index))) {
      total += 1;
    }
  }

  return Math.round((total / 30) * 100);
}

function getCurrentWeekDates() {
  const monday = startOfWeek(new Date());
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return toDateKey(date);
  });
}

function renderTabs() {
  const isOverview = state.activeView === "overview";
  tabBar.dataset.active = isOverview ? "overview" : "calendar";
  overviewTabButton.classList.toggle("is-active", isOverview);
  overviewTabButton.setAttribute("aria-selected", String(isOverview));
  calendarTabButton.classList.toggle("is-active", !isOverview);
  calendarTabButton.setAttribute("aria-selected", String(!isOverview));
  overviewView.classList.toggle("is-active", isOverview);
  calendarView.classList.toggle("is-active", !isOverview);
}

function setActiveView(view) {
  const previousView = state.activeView;
  state.activeView = view;
  render();
  animateTabTransition(view, previousView);
}

async function shiftCalendarMonth(offset) {
  const next = new Date(state.calendarDate);
  next.setMonth(next.getMonth() + offset);
  state.calendarDate = startOfMonth(next);
  renderCalendar();
}

function renderCalendar() {
  calendarMonthLabel.textContent = new Intl.DateTimeFormat(locale(), {
    year: "numeric",
    month: "long"
  }).format(state.calendarDate);

  calendarWeekdays.innerHTML = getWeekdayNames().map((day) => `
    <div class="calendar-weekday">${day}</div>
  `).join("");

  const dates = getCalendarGridDates(state.calendarDate);
  const completionsByDate = buildCompletionMap();
  const calendarEventsByDate = buildCalendarEventMap();

  calendarGrid.innerHTML = dates.map((date) => {
    const key = toDateKey(date);
    const isCurrentMonth = date.getMonth() === state.calendarDate.getMonth();
    const isToday = key === todayKey();
    const items = [
      ...(calendarEventsByDate.get(key) || []),
      ...(completionsByDate.get(key) || [])
    ];

    const pills = items.length
      ? items.map((item) => `
          <button
            class="calendar-pill ${item.kind === "habit" ? "is-habit" : ""} ${item.kind === "event" ? "is-clickable" : ""}"
            type="button"
            style="background:${item.color}"
            ${item.kind === "event" ? `data-event-id="${item.id}"` : "disabled"}
          >${item.name}</button>
        `).join("")
      : `<div class="backup-copy">${t("noMarks")}</div>`;

    return `
      <article class="calendar-day ${isCurrentMonth ? "" : "is-other-month"} ${isToday ? "is-today" : ""}">
        <div class="calendar-day-number">${date.getDate()}</div>
        <div class="calendar-day-list">${pills}</div>
      </article>
    `;
  }).join("");

  calendarGrid.querySelectorAll("[data-event-id]").forEach((button) => {
    button.addEventListener("click", () => openCalendarEventModal(button.dataset.eventId));
  });
}

function getCalendarGridDates(baseDate) {
  const firstDay = startOfMonth(baseDate);
  const start = startOfWeek(firstDay);
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
}

function buildCompletionMap() {
  const map = new Map();

  state.habits.forEach((habit) => {
    habit.completions.forEach((date) => {
      const entry = map.get(date) || [];
      entry.push({ name: habit.name, color: habit.color, kind: "habit" });
      map.set(date, entry);
    });
  });

  return map;
}

function buildCalendarEventMap() {
  const map = new Map();

  state.calendarEvents.forEach((event) => {
    const dates = getDatesBetween(event.startDate, event.endDate);
    dates.forEach((date) => {
      const entry = map.get(date) || [];
      entry.push({ id: event.id, name: event.name, color: event.color, kind: "event" });
      map.set(date, entry);
    });
  });

  return map;
}

function isCompleteOnDate(habit, date) {
  return habit.completions.includes(date);
}

function todayKey() {
  return toDateKey(new Date());
}

function dateOffset(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return toDateKey(date);
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function startOfWeek(date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const diff = (day + 6) % 7;
  copy.setHours(0, 0, 0, 0);
  copy.setDate(copy.getDate() - diff);
  return copy;
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat(locale(), {
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(`${date}T00:00:00`));
}

function formatWeeklyFrequency(target) {
  const labels = {
    hu: `${target} alkalom hetente`,
    en: `${target} times per week`,
    pl: `${target} razy w tygodniu`,
    de: `${target} Mal pro Woche`
  };
  return labels[state.language] || labels.hu;
}

function formatStreakValue(count) {
  const labels = {
    hu: `${count} nap`,
    en: `${count} days`,
    pl: `${count} dni`,
    de: `${count} Tage`
  };
  return labels[state.language] || labels.hu;
}

function loadHabits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return structuredClone(sampleHabits);
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : structuredClone(sampleHabits);
  } catch {
    return structuredClone(sampleHabits);
  }
}

function loadCalendarEvents() {
  try {
    const raw = localStorage.getItem(CALENDAR_EVENTS_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? sanitizeCalendarEvents(parsed) : [];
  } catch {
    return [];
  }
}

function persistHabits() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.habits));
}

function persistCalendarEvents() {
  localStorage.setItem(CALENDAR_EVENTS_KEY, JSON.stringify(state.calendarEvents));
}

function loadTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  return storedTheme === "dark" ? "dark" : "light";
}

function loadUserName() {
  return localStorage.getItem(USERNAME_KEY)?.trim() || "";
}

function loadScheme() {
  const storedScheme = localStorage.getItem(SCHEME_KEY);
  return ["aurora", "sand", "graphite"].includes(storedScheme) ? storedScheme : "aurora";
}

function loadLanguage() {
  const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
  return ["hu", "en", "pl", "de"].includes(storedLanguage) ? storedLanguage : "hu";
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  animateThemeTransition();
  applyTheme(theme);
}

function setScheme(scheme) {
  state.scheme = scheme;
  localStorage.setItem(SCHEME_KEY, scheme);
  animateThemeTransition();
  applyScheme(scheme);
}

function setLanguage(language) {
  state.language = ["hu", "en", "pl", "de"].includes(language) ? language : "hu";
  localStorage.setItem(LANGUAGE_KEY, state.language);
  applyLanguage();
  render();
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeSwitch.dataset.active = theme;
  lightModeButton.classList.toggle("is-active", theme === "light");
  darkModeButton.classList.toggle("is-active", theme === "dark");
}

function applyScheme(scheme) {
  document.body.dataset.scheme = scheme;
}

function t(key, variables = {}) {
  const dictionary = TRANSLATIONS[state.language] || TRANSLATIONS.hu;
  const fallback = TRANSLATIONS.hu[key] || key;
  const template = dictionary[key] || fallback;
  return Object.entries(variables).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function locale() {
  return LOCALES[state.language] || LOCALES.hu;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.title = t("title");
  dailyQuote.textContent = getDailyQuote();
  todayLabel.innerHTML = formatHeroDate(new Date());

  setText("eyebrowLabel", t("eyebrow"));
  setText("editProfileButton", t("editProfile"));
  setText("heroCopy", t("heroCopy"));
  setText("lightModeButton", t("light"));
  setText("darkModeButton", t("dark"));
  setText("schemeLabel", t("scheme"));
  setText("heroDateLabel", t("today"));
  setText("overviewTabButton", t("overview"));
  setText("calendarTabButton", t("calendar"));
  setText("addPanelKicker", t("addGoal"));
  setText("addPanelTitle", t("addEvent"));
  setText("habitNameLabel", t("habitName"));
  setText("habitReasonLabel", t("habitReason"));
  setText("habitFrequencyLabel", t("frequency"));
  setText("habitColorLabel", t("color"));
  setText("habitSubmitButton", t("addHabit"));
  setText("backupKicker", t("backup"));
  setText("backupTitle", t("backupTitle"));
  setText("backupCopy", t("backupCopy"));
  setText("exportDataButton", t("export"));
  setText("importDataButton", t("import"));
  setText("habitsPanelKicker", t("weeklyView"));
  setText("habitsPanelTitle", t("yourHabits"));
  setText("resetSamplesButton", t("loadSamples"));
  setText("insightsKicker", t("momentum"));
  setText("insightsTitle", t("weeklyOverview"));
  setText("calendarKicker", t("calendar"));
  setText("calendarTitle", t("monthlyView"));
  setText("prevMonthButton", t("prev"));
  setText("nextMonthButton", t("next"));
  setText("calendarImportKicker", t("googleCalendar"));
  setText("calendarImportTitle", t("importCalendar"));
  setText("calendarImportCopy", t("importCalendarCopy"));
  setText("importCalendarButton", t("googleImport"));
  setText("manualEventKicker", t("manualEvent"));
  setText("manualEventTitle", t("addProgram"));
  setText("calendarEventNameLabel", t("eventName"));
  setText("calendarEventStartDateLabel", t("startDate"));
  setText("calendarEventEndDateLabel", t("endDate"));
  setText("calendarEventColorLabel", t("color"));
  setText("calendarEventAllDayLabel", t("allDay"));
  setText("calendarEventStartTimeLabel", t("startTime"));
  setText("calendarEventEndTimeLabel", t("endTime"));
  setText("calendarEventNotesLabel", t("notes"));
  setText("calendarEventSubmitButton", state.editingCalendarEventId ? t("edit") : t("saveEvent"));
  setText("cancelCalendarEditButton", t("cancelEdit"));
  setText("welcomeKicker", state.isEditingProfile ? t("profile") : t("firstLaunch"));
  setText("welcomeTitle", t("whatCallYou"));
  setText("welcomeCopy", state.isEditingProfile ? t("profileCopy") : t("welcomeCopy"));
  setText("welcomeNameLabel", t("yourName"));
  setText("welcomeSubmitButton", state.isEditingProfile ? t("saveName") : t("letsStart"));
  setText("eventModalKicker", t("eventDetails"));
  setText("editCalendarEventButton", t("edit"));
  setText("deleteCalendarEventButton", t("delete"));
  setText("closeCalendarEventModalButton", t("close"));
  setText("eventModalWhenLabel", t("when"));
  setText("eventModalDurationLabel", t("duration"));
  setText("eventModalSourceLabel", t("source"));
  setText("eventModalNotesLabel", t("notes"));

  setPlaceholder("welcomeName", t("exampleName"));
  setPlaceholder("habitName", t("exampleHabit"));
  setPlaceholder("habitReason", t("exampleReason"));
  setPlaceholder("calendarEventName", t("exampleEvent"));
  setPlaceholder("calendarEventNotes", t("exampleNotes"));

  habitFrequencyInput.options[0].textContent = t("daily");
  habitFrequencyInput.options[1].textContent = t("weekly");
  syncTargetInput();
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setPlaceholder(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.placeholder = value;
  }
}

function formatHeroDate(date) {
  const localeValue = locale();
  const monthDay = new Intl.DateTimeFormat(localeValue, {
    month: "long",
    day: "numeric"
  }).format(date);
  const weekday = new Intl.DateTimeFormat(localeValue, {
    weekday: "long"
  }).format(date);

  const titleCase = (value) =>
    value ? value.charAt(0).toUpperCase() + value.slice(1) : value;

  return `${titleCase(monthDay)},<br>${titleCase(weekday)}`;
}

function syncTargetInput() {
  const isDaily = habitFrequencyInput.value === "daily";
  habitTargetInput.value = isDaily ? "7" : "4";
  habitTargetInput.disabled = isDaily;
  targetLabel.firstChild.textContent = isDaily ? t("weeklyTargetAuto") : t("weeklyTarget");
}

function formatUserName(value) {
  if (!value) {
    return t("friend");
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function updateGreeting() {
  const userName = formatUserName(loadUserName());
  const greetings = { hu: "Szia", en: "Hi", pl: "Cześć", de: "Hallo" };
  heroGreeting.textContent = `${greetings[state.language] || greetings.hu}, ${userName}!`;
}

function getDailyQuote() {
  const today = todayKey();
  const parts = today.split("-").map(Number);
  const seed = parts[0] + parts[1] + parts[2];
  const selectedQuote = DAILY_QUOTES[seed % DAILY_QUOTES.length];
  const quoteText = selectedQuote.quote[state.language] || selectedQuote.quote.hu;
  const authorText = selectedQuote.author === "Ismeretlen" ? t("unknownAuthor") : selectedQuote.author;
  return `„${quoteText}” ~ ${authorText}`;
}

function updateMidnightCountdown() {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);

  const diffMs = Math.max(0, nextMidnight.getTime() - now.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  midnightCountdown.textContent = `\u23F3 ${hours}:${minutes}:${seconds}`;
}

function openWelcomeModal() {
  state.isEditingProfile = false;
  setText("welcomeKicker", t("firstLaunch"));
  setText("welcomeCopy", t("welcomeCopy"));
  setText("welcomeSubmitButton", t("letsStart"));
  welcomeNameInput.value = "";
  welcomeNameInput.placeholder = t("exampleName");
  welcomeModal.classList.add("is-open");
  welcomeModal.setAttribute("aria-hidden", "false");
  welcomeNameInput.focus();
}

function getWeekdayNames() {
  const monday = startOfWeek(new Date());
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return new Intl.DateTimeFormat(locale(), { weekday: "long" }).format(date).toUpperCase();
  });
}

function closeWelcomeModal() {
  welcomeModal.classList.remove("is-open");
  welcomeModal.setAttribute("aria-hidden", "true");
}

function openProfileEditor() {
  state.isEditingProfile = true;
  setText("welcomeKicker", t("profile"));
  setText("welcomeCopy", t("profileCopy"));
  setText("welcomeSubmitButton", t("saveName"));
  welcomeNameInput.value = loadUserName();
  welcomeNameInput.placeholder = t("exampleName");
  welcomeModal.classList.add("is-open");
  welcomeModal.setAttribute("aria-hidden", "false");
  welcomeNameInput.focus();
  welcomeNameInput.select();
}

function handleWelcomeSubmit(event) {
  event.preventDefault();
  const name = String(new FormData(welcomeForm).get("welcomeName")).trim();

  if (!name) {
    welcomeNameInput.focus();
    return;
  }

  localStorage.setItem(USERNAME_KEY, name);
  updateGreeting();
  state.isEditingProfile = false;
  closeWelcomeModal();
}

function exportAppData() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    userName: loadUserName(),
    theme: state.theme,
    habits: state.habits,
    calendarEvents: state.calendarEvents
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = todayKey();

  link.href = url;
  link.download = `habit-tracker-backup-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  setBackupStatus(t("exportSuccess"), "success");
}

async function handleImportData(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  try {
    const raw = await file.text();
    const parsed = JSON.parse(raw);

    if (!parsed || !Array.isArray(parsed.habits)) {
      throw new Error("invalid_backup");
    }

    state.habits = sanitizeHabits(parsed.habits);
    state.calendarEvents = Array.isArray(parsed.calendarEvents) ? sanitizeCalendarEvents(parsed.calendarEvents) : [];
    persistHabits();
    persistCalendarEvents();

    if (typeof parsed.userName === "string" && parsed.userName.trim()) {
      localStorage.setItem(USERNAME_KEY, parsed.userName.trim());
      updateGreeting();
    }

    if (parsed.theme === "light" || parsed.theme === "dark") {
      setTheme(parsed.theme);
    }

    setBackupStatus(t("importSuccess"), "success");
    render();
  } catch {
    setBackupStatus(t("importError"), "error");
  } finally {
    importFileInput.value = "";
  }
}

function sanitizeHabits(habits) {
  return habits
    .filter((habit) => habit && typeof habit.name === "string")
    .map((habit) => ({
      id: typeof habit.id === "string" && habit.id ? habit.id : crypto.randomUUID(),
      name: habit.name.trim() || t("unnamedHabit"),
      reason: typeof habit.reason === "string" ? habit.reason.trim() : "",
      frequency: habit.frequency === "weekly" ? "weekly" : "daily",
      target: clampTarget(habit.frequency === "weekly" ? Number(habit.target) || 1 : 7),
      color: typeof habit.color === "string" && habit.color ? habit.color : "#f97316",
      completions: Array.isArray(habit.completions)
        ? habit.completions.filter((entry) => typeof entry === "string")
        : [],
      createdAt: typeof habit.createdAt === "string" ? habit.createdAt : new Date().toISOString()
    }));
}

function clampTarget(value) {
  return Math.min(7, Math.max(1, value));
}

function setBackupStatus(message, type = "") {
  setStatusMessage(backupStatus, message, type);
}

function seedCalendarEventForm() {
  const today = todayKey();
  calendarEventStartDateInput.value = today;
  calendarEventEndDateInput.value = today;
  calendarEventColorInput.value = "#2563eb";
  calendarEventStartTimeInput.value = "09:00";
  calendarEventEndTimeInput.value = "10:00";
}

function syncCalendarEventEndDate() {
  if (!calendarEventEndDateInput.value || calendarEventEndDateInput.value < calendarEventStartDateInput.value) {
    calendarEventEndDateInput.value = calendarEventStartDateInput.value;
  }
}

function syncCalendarEventTimeInputs() {
  const isAllDay = calendarEventAllDayInput.checked;
  calendarTimeRow.hidden = isAllDay;
  calendarEventStartTimeInput.disabled = isAllDay;
  calendarEventEndTimeInput.disabled = isAllDay;
}

function handleCreateCalendarEvent(event) {
  event.preventDefault();
  const isEditing = Boolean(state.editingCalendarEventId);
  const originalEvent = isEditing
    ? state.calendarEvents.find((entry) => entry.id === state.editingCalendarEventId)
    : null;

  const formData = new FormData(calendarEventForm);
  const name = String(formData.get("calendarEventName")).trim();
  const startDate = String(formData.get("calendarEventStartDate"));
  const endDate = String(formData.get("calendarEventEndDate"));
  const allDay = Boolean(formData.get("calendarEventAllDay"));
  const startTime = allDay ? "" : String(formData.get("calendarEventStartTime"));
  const endTime = allDay ? "" : String(formData.get("calendarEventEndTime"));

  if (!name || !startDate || !endDate) {
    setStatusMessage(calendarStatus, t("eventRequired"), "error");
    return;
  }

  if (endDate < startDate) {
    setStatusMessage(calendarStatus, t("eventEndError"), "error");
    return;
  }

  if (!allDay && startTime && endTime && endTime <= startTime && startDate === endDate) {
    setStatusMessage(calendarStatus, t("eventTimeError"), "error");
    return;
  }

  const calendarEvent = {
    id: state.editingCalendarEventId || crypto.randomUUID(),
    name,
    startDate,
    endDate,
    allDay,
    startTime,
    endTime,
    notes: String(formData.get("calendarEventNotes")).trim(),
    color: String(formData.get("calendarEventColor")) || randomCalendarColor(name),
    source: originalEvent?.source || "manual"
  };

  if (isEditing) {
    state.calendarEvents = state.calendarEvents.map((entry) =>
      entry.id === state.editingCalendarEventId ? calendarEvent : entry
    );
  } else {
    state.calendarEvents.push(calendarEvent);
  }

  persistCalendarEvents();
  resetCalendarEventForm();
  renderCalendar();
  setStatusMessage(
    calendarStatus,
    isEditing ? t("eventUpdated") : t("eventSaved"),
    "success"
  );
}

function resetCalendarEventForm() {
  state.editingCalendarEventId = "";
  calendarEventForm.reset();
  calendarEventAllDayInput.checked = true;
  seedCalendarEventForm();
  syncCalendarEventTimeInputs();
  calendarEventSubmitButton.textContent = t("saveEvent");
  cancelCalendarEditButton.hidden = true;
}

async function handleCalendarImport(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  try {
    const raw = await file.text();
    const importedEvents = parseIcsToCalendarEvents(raw);

    if (!importedEvents.length) {
      throw new Error("no_events");
    }

    mergeImportedCalendarEvents(importedEvents);
    persistCalendarEvents();
    render();
    setStatusMessage(
      calendarStatus,
      t("calendarImportSuccess", { count: importedEvents.length }),
      "success"
    );
  } catch {
    setStatusMessage(
      calendarStatus,
      t("calendarImportError"),
      "error"
    );
  } finally {
    calendarFileInput.value = "";
  }
}

function parseIcsToCalendarEvents(raw) {
  const normalized = unfoldIcsLines(raw);
  const events = normalized.split("BEGIN:VEVENT").slice(1);
  const importedEvents = [];

  events.forEach((eventBlock) => {
    const summary = getIcsField(eventBlock, "SUMMARY");
    if (!summary) {
      return;
    }

    const normalizedName = decodeIcsText(summary).trim();
    if (!normalizedName) {
      return;
    }

    const dtStartLine = getIcsLine(eventBlock, "DTSTART");
    const dtEndLine = getIcsLine(eventBlock, "DTEND");
    const dateRange = extractEventDateRange(dtStartLine, dtEndLine);

    if (!dateRange) {
      return;
    }

    importedEvents.push({
      id: crypto.randomUUID(),
      name: normalizedName,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      allDay: dateRange.allDay,
      startTime: dateRange.startTime,
      endTime: dateRange.endTime,
      notes: "",
      color: randomCalendarColor(normalizedName),
      source: "import"
    });
  });

  return importedEvents;
}

function unfoldIcsLines(raw) {
  return raw.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
}

function getIcsField(block, fieldName) {
  const line = getIcsLine(block, fieldName);

  if (!line) {
    return "";
  }

  return line.slice(line.indexOf(":") + 1).trim();
}

function getIcsLine(block, fieldName) {
  return block
    .split(/\r?\n/)
    .find((entry) => entry.startsWith(`${fieldName}:`) || entry.startsWith(`${fieldName};`)) || "";
}

function decodeIcsText(value) {
  return value
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\n/g, " ")
    .replace(/\\\\/g, "\\");
}

function extractEventDateRange(dtStartLine, dtEndLine) {
  const startValue = dtStartLine ? dtStartLine.slice(dtStartLine.indexOf(":") + 1).trim() : "";
  const endValue = dtEndLine ? dtEndLine.slice(dtEndLine.indexOf(":") + 1).trim() : "";
  const startDate = extractDateKey(startValue);

  if (!startDate) {
    return null;
  }

  const isAllDay = dtStartLine.includes("VALUE=DATE");
  const rawEndDate = extractDateKey(endValue);
  let endDate = startDate;

  if (rawEndDate) {
    if (isAllDay) {
      const previousDay = new Date(`${rawEndDate}T00:00:00`);
      previousDay.setDate(previousDay.getDate() - 1);
      endDate = toDateKey(previousDay);
    } else {
      endDate = rawEndDate;
    }
  }

  if (endDate < startDate) {
    endDate = startDate;
  }

  return {
    startDate,
    endDate,
    allDay: isAllDay,
    startTime: isAllDay ? "" : extractTimeValue(startValue),
    endTime: isAllDay ? "" : extractTimeValue(endValue)
  };
}

function extractDateKey(value) {
  if (!value) {
    return "";
  }

  const match = value.match(/(\d{4})(\d{2})(\d{2})/);
  if (!match) {
    return "";
  }

  return `${match[1]}-${match[2]}-${match[3]}`;
}

function extractTimeValue(value) {
  const match = value.match(/T(\d{2})(\d{2})/);
  if (!match) {
    return "";
  }

  return `${match[1]}:${match[2]}`;
}

function mergeImportedCalendarEvents(importedEvents) {
  const existingKeys = new Set(
    state.calendarEvents.map((event) => `${event.name}|${event.startDate}|${event.endDate}|${event.startTime}|${event.endTime}|${event.allDay}`)
  );

  importedEvents.forEach((event) => {
    const key = `${event.name}|${event.startDate}|${event.endDate}|${event.startTime}|${event.endTime}|${event.allDay}`;
    if (!existingKeys.has(key)) {
      state.calendarEvents.push(event);
      existingKeys.add(key);
    }
  });
}

function randomCalendarColor(seedText) {
  const palette = ["#f97316", "#0f766e", "#2563eb", "#7c3aed", "#db2777", "#ca8a04"];
  let hash = 0;

  for (const char of seedText) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return palette[hash % palette.length];
}

function sanitizeCalendarEvents(events) {
  return events
    .filter((event) => event && typeof event.name === "string")
    .map((event) => ({
      id: typeof event.id === "string" && event.id ? event.id : crypto.randomUUID(),
      name: event.name.trim() || t("unnamedEvent"),
      startDate: typeof event.startDate === "string" ? event.startDate : todayKey(),
      endDate: typeof event.endDate === "string" ? event.endDate : (typeof event.startDate === "string" ? event.startDate : todayKey()),
      allDay: typeof event.allDay === "boolean" ? event.allDay : !event.startTime,
      startTime: typeof event.startTime === "string" ? event.startTime : "",
      endTime: typeof event.endTime === "string" ? event.endTime : "",
      notes: typeof event.notes === "string" ? event.notes.trim() : "",
      color: typeof event.color === "string" && event.color ? event.color : randomCalendarColor(event.name || "event"),
      source: event.source === "import" ? "import" : "manual"
    }));
}

function getDatesBetween(startDate, endDate) {
  const dates = [];
  const cursor = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);

  while (cursor.getTime() <= end.getTime()) {
    dates.push(toDateKey(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function setStatusMessage(element, message, type = "") {
  element.textContent = message;
  element.classList.remove("is-success", "is-error");

  if (type) {
    element.classList.add(`is-${type}`);
  }
}

function openCalendarEventModal(eventId) {
  const event = state.calendarEvents.find((entry) => entry.id === eventId);
  if (!event) {
    return;
  }

  editCalendarEventButton.dataset.eventId = event.id;
  deleteCalendarEventButton.dataset.eventId = event.id;
  calendarEventModalTitle.textContent = event.name;
  calendarEventModalWhen.textContent = formatEventWhen(event);
  calendarEventModalDuration.textContent = formatEventDuration(event);
  calendarEventModalSource.textContent = event.source === "import" ? t("importedCalendar") : t("manualEntry");
  calendarEventModalNotes.textContent = event.notes || t("noteEmpty");
  calendarEventModal.classList.add("is-open");
  calendarEventModal.setAttribute("aria-hidden", "false");
}

function closeCalendarEventModal() {
  editCalendarEventButton.dataset.eventId = "";
  deleteCalendarEventButton.dataset.eventId = "";
  calendarEventModal.classList.remove("is-open");
  calendarEventModal.setAttribute("aria-hidden", "true");
}

function handleEditCalendarEvent() {
  const eventId = editCalendarEventButton.dataset.eventId;
  const event = state.calendarEvents.find((entry) => entry.id === eventId);
  if (!event) {
    return;
  }

  state.editingCalendarEventId = event.id;
  calendarEventNameInput.value = event.name;
  calendarEventStartDateInput.value = event.startDate;
  calendarEventEndDateInput.value = event.endDate;
  calendarEventAllDayInput.checked = event.allDay;
  calendarEventStartTimeInput.value = event.startTime || "09:00";
  calendarEventEndTimeInput.value = event.endTime || "10:00";
  calendarEventColorInput.value = event.color || "#2563eb";
  calendarEventNotesInput.value = event.notes || "";
  syncCalendarEventTimeInputs();
  calendarEventSubmitButton.textContent = t("eventUpdated").replace(".", "");
  cancelCalendarEditButton.hidden = false;
  closeCalendarEventModal();
  setActiveView("calendar");
  calendarEventForm.scrollIntoView({ behavior: "smooth", block: "start" });
  calendarEventNameInput.focus();
}

function handleDeleteCalendarEvent() {
  const eventId = deleteCalendarEventButton.dataset.eventId;
  if (!eventId) {
    return;
  }

  state.calendarEvents = state.calendarEvents.filter((entry) => entry.id !== eventId);
  persistCalendarEvents();
  if (state.editingCalendarEventId === eventId) {
    resetCalendarEventForm();
  }
  closeCalendarEventModal();
  renderCalendar();
  setStatusMessage(calendarStatus, t("eventDeleted"), "success");
}

function formatEventWhen(event) {
  const startDate = formatLongDate(event.startDate);
  const endDate = formatLongDate(event.endDate);

  if (event.allDay) {
    return event.startDate === event.endDate
      ? `${startDate}, ${t("allDayShort")}`
      : `${startDate} - ${endDate}, ${t("allDayShort")}`;
  }

  const startTime = event.startTime || "--:--";
  const endTime = event.endTime || "--:--";

  return event.startDate === event.endDate
    ? `${startDate}, ${startTime} - ${endTime}`
    : `${startDate}, ${startTime} - ${endDate}, ${endTime}`;
}

function formatEventDuration(event) {
  if (event.allDay) {
    return event.startDate === event.endDate ? t("allDayLabel") : t("multiDayAllDay");
  }

  if (event.startDate === event.endDate) {
    return `${event.startTime || "--:--"} - ${event.endTime || "--:--"}`;
  }

  return `${event.startDate} - ${event.endDate}`;
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat(locale(), {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date(`${date}T00:00:00`));
}

function animateThemeTransition() {
  document.body.classList.add("theme-animating");
  window.clearTimeout(animateThemeTransition.timeoutId);
  animateThemeTransition.timeoutId = window.setTimeout(() => {
    document.body.classList.remove("theme-animating");
  }, 280);
}

function animateTabTransition(view, previousView) {
  if (view === previousView) {
    return;
  }

  const target = view === "overview" ? overviewView : calendarView;
  target.classList.remove("is-entering");
  void target.offsetWidth;
  target.classList.add("is-entering");

  window.setTimeout(() => {
    target.classList.remove("is-entering");
  }, 260);
}


