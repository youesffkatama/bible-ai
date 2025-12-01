// script.js - Bible.AI Complete Frontend (v1.5.0)
// MERGED: User Auth, Stateful AI,  Journal, Notifications, Verse of Day

// ===== TRANSLATIONS =====
const translations = {
  ar: {
    // --- Original Translations ---
    'app-name': 'Bible.AI',
    'app-subtitle': 'الكتاب المقدس التفاعلي',
    'login-title': 'تسجيل الدخول',
    'login-subtitle': 'مرحباً بعودتك إلى Bible.AI',
    'signup-title': 'إنشاء حساب',
    'signup-subtitle': 'انضم إلى مجتمع Bible.AI',
    'email-placeholder': 'your@email.com',
    'password-placeholder': '••••••••',
    'password-lebel': 'كلمه المرور',
    'name-placeholder': 'John Doe',
    'login-btn': 'تسجيل الدخول',
    'signup-btn': 'إنشاء حساب',
    'or': 'أو',
    'no-account': 'ليس لديك حساب؟',
    'has-account': 'لديك حساب؟',
    'create-account': 'إنشاء حساب جديد',
    'login-link': 'تسجيل الدخول',
    'admin-panel': 'لوحة الإدارة',
    'admin-users': 'المستخدمين',
    'admin-analytics': 'الإحصائيات',
    'admin-logs': 'السجلات',
    'admin-email': 'إرسال رسائل',
    'logout': 'تسجيل الخروج',
    'hero-badge': 'اكتشف الكتاب المقدس بطريقة جديدة',
    'hero-welcome': 'مرحباً بك في',
    'hero-description': 'استكشف أسفار الكتاب المقدس مع مساعد ذكاء اصطناعي متقدم يساعدك على فهم النصوص المقدسة بعمق',
    'start-exploring': 'ابدأ الاستكشاف',
    'settings': 'الإعدادات',
    'books-count': '73 سفر',
    'ai-powered': 'AI متخصص',
    'multilang': '3 لغات',
    'why-bible-ai': 'لماذا Bible.AI؟',
    'feature-ai-title': 'ذكاء اصطناعي متخصص',
    'feature-ai-desc': 'احصل على إجابات دقيقة من شخصيات الكتاب المقدس نفسها',
    'nav-home': 'الرئيسية',
    'nav-search': 'البحث',
    'nav-profile': 'الملف الشخصي',
    'explore-books': 'استكشف أسفار الكتاب المقدس',
    'explore-subtitle': 'اختر سفراً لتبدأ رحلتك الروحية',
    'search-books': 'ابحث عن سفر...',
    'search': 'بحث',
    'filter-all': 'الكل',
    'filter-old': 'العهد القديم',
    'filter-new': 'العهد الجديد',
    'about-book': 'نبذة عن السفر',
    'key-points': 'نقاط رئيسية',
    'online': 'متصل',
    'chat-welcome': 'مرحباً! أنا مساعدك الذكي. اسألني أي سؤال عن هذا السفر',
    'ask-question': 'اكتب سؤالك هنا...',
    'back': 'العودة',
    'save-changes': 'حفظ التغييرات',
    'account-settings': 'إعدادات الحساب',
    'quick-notes': 'ملاحظات سريعة',
    'save': 'حفظ',
    'filter-all': 'الكل',
    'filter-book': 'مرتبطة بسفر',
    'full-name': 'الاسم الكامل',
    'email': 'البريد الإلكتروني',
    'phone': 'رقم الهاتف (اختياري)',
    'enter-name': 'أدخل اسمك الكامل',
    'security-password': 'الأمان وكلمة المرور',
    'current-password': 'كلمة المرور الحالية',
    'new-password': 'كلمة المرور الجديدة',
    'confirm-password': 'تأكيد كلمة المرور',
    'update-password': 'تحديث كلمة المرور',
    'preferences': 'التفضيلات',
    'pref-notifications': 'الإشعارات',
    'pref-dark-mode': 'الوضع الليلي',
    'pref-emails': 'الرسائل الإلكترونية',
    'error-fallback': 'أعتذر، الخادم غير متاح حالياً. الرجاء المحاولة لاحقاً.',

    // --- New Features Translations ---
    'notifications': 'الإشعارات',
    'mark-all-read': 'تحديد الكل كمقروء',
    'verse-of-day': 'آية اليوم',
    'ai-reflection': 'تأمل من الذكاء الاصطناعي',
    'close': 'إغلاق',
    'nav-journal': 'يومياتي',
    'nav-voice': 'التحدث',
    'journal-title': 'يومياتي الروحية',
    'journal-new': 'تدوينة جديدة',
    'journal-editor-title': 'تدوينة جديدة',
    'journal-title-placeholder': 'عنوان التدوينة',
    'journal-verse-placeholder': 'الآية المرجعية (اختياري)',
    'journal-content-placeholder': 'اكتب تأملاتك هنا...',
    'journal-tag-placeholder': 'إضافة وسم',
    'save': 'حفظ',
    'cancel': 'إلغاء',
    'edit': 'تعديل',
    'delete': 'حذف',
    'feature-journal-desc': 'دوّن تأملاتك وأفكارك الروحية اليومية',
    'sort-newest': 'الأحدث أولاً',
    'sort-oldest': 'الأقدم أولاً',
    'books-read': 'أسفار مقروءة',
    'days-active': 'يوم نشط',
    'quick-notes': 'ملاحظات سريعة',
    'clear': 'مسح',
    'note-saved': 'تم حفظ الملاحظة',
    'note-create-placeholder': 'اضغط هنا عشان تكتب ملاحظاتك',
    'note-title': 'العنوان',
    'note-content': 'اكتب ملاحظتك...',
    'my-notes': 'ملاحظاتي',
    'no-notes': 'لا توجد ملاحظات بعد',
    'confirm-delete': 'هل تريد حذف هذه الملاحظة؟',
    'note-deleted': 'تم الحذف',
    'note-empty': 'الملاحظة فارغة'
  },
  en: {
    // --- Original Translations ---
    'app-name': 'Bible.AI',
    'password-label': 'Password',
    'app-subtitle': 'Interactive Holy Bible',
    'login-title': 'Login',
    'login-subtitle': 'Welcome back to Bible.AI',
    'signup-title': 'Sign Up',
    'signup-subtitle': 'Join the Bible.AI community',
    'email-placeholder': 'your@email.com',
    'password-placeholder': '••••••••',
    'name-placeholder': 'John Doe',
    'login-btn': 'Login',
    'signup-btn': 'Sign Up',
    'or': 'Or',
    'no-account': "Don't have an account?",
    'has-account': 'Have an account?',
    'create-account': 'Create new account',
    'login-link': 'Login',
    'admin-panel': 'Admin Panel',
    'admin-users': 'Users',
    'admin-analytics': 'Analytics',
    'admin-logs': 'Logs',
    'admin-email': 'Send Emails',
    'logout': 'Logout',
    'hero-badge': 'Discover the Bible in a new way',
    'hero-welcome': 'Welcome to',
    'hero-description': 'Explore the books of the Holy Bible with an advanced AI assistant that helps you understand sacred texts deeply',
    'start-exploring': 'Start Exploring',
    'settings': 'Settings',
    'books-count': '73 Books',
    'ai-powered': 'Specialized AI',
    'multilang': '3 Languages',
    'why-bible-ai': 'Why Bible.AI?',
    'feature-ai-title': 'Specialized AI',
    'feature-ai-desc': 'Get accurate answers from the biblical characters themselves',
    'nav-home': 'Home',
    'nav-search': 'Search',
    'nav-profile': 'Profile',
    'explore-books': 'Explore Biblical Books',
    'explore-subtitle': 'Choose a book to start your spiritual journey',
    'search-books': 'Search for a book...',
    'search': 'Search',
    'filter-all': 'All',
    'filter-old': 'Old Testament',
    'filter-new': 'New Testament',
    'about-book': 'About the Book',
    'key-points': 'Key Points',
    'online': 'Online',
    'chat-welcome': 'Hello! I am your AI assistant. Ask me any question about this book',
    'ask-question': 'Type your question here...',
    'back': 'Back',
    'save-changes': 'Save Changes',
    'account-settings': 'Account Settings',
    'full-name': 'Full Name',
    'email': 'Email',
    'phone': 'Phone (optional)',
    'enter-name': 'Enter your full name',
    'security-password': 'Security & Password',
    'current-password': 'Current Password',
    'new-password': 'New Password',
    'confirm-password': 'Confirm Password',
    'update-password': 'Update Password',
    'preferences': 'Preferences',
    'pref-notifications': 'Notifications',
    'pref-dark-mode': 'Dark Mode',
    'pref-emails': 'Email Notifications',
    'error-fallback': 'Sorry, the server is currently unavailable. Please try again later.',
    'note-create-placeholder': 'Click here to write your notes',
    'note-title': 'Title',
    'note-content': 'Write your note...',
    'my-notes': 'My Notes',
    'no-notes': 'No notes yet',
    'confirm-delete': 'Delete this note?',
    'note-deleted': 'Note deleted',

    // --- New Features Translations ---
    'notifications': 'Notifications',
    'mark-all-read': 'Mark all as read',
    'verse-of-day': 'Verse of the Day',
    'ai-reflection': 'AI Reflection',
    'close': 'Close',
    'nav-journal': 'My Journal',
    'nav-voice': 'Voice',
    'journal-title': 'My Spiritual Journal',
    'journal-new': 'New Entry',
    'journal-editor-title': 'New Entry',
    'journal-title-placeholder': 'Entry title',
    'journal-verse-placeholder': 'Verse reference (optional)',
    'journal-content-placeholder': 'Write your reflections here...',
    'journal-tag-placeholder': 'Add tag',
    'save': 'Save',
    'cancel': 'Cancel',
    'edit': 'Edit',
    'delete': 'Delete',
    'feature-journal-desc': 'Record your daily spiritual thoughts',
    'sort-newest': 'Newest first',
    'sort-oldest': 'Oldest first',
    'books-read': 'Books Read',
    'days-active': 'Days Active',
    'quick-notes': 'Quick Notes',
    'clear': 'Clear',
    'note-saved': 'Note saved',
    'quick-notes': 'Quick Notes',
    'save': 'Save',
    'filter-all': 'All',
    'filter-book': 'Book Related',
    'note-empty': 'Note is empty'
  },
  ru: {
    // --- Original Translations ---
    'app-name': 'Bible.AI',
    'app-subtitle': 'Интерактивная Библия',
    'login-title': 'Вход',
    'login-subtitle': 'Добро пожаловать в Bible.AI',
    'signup-title': 'Регистрация',
    'signup-subtitle': 'Присоединяйтесь к Bible.AI',
    'email-placeholder': 'your@email.com',
    'password-placeholder': '••••••••',
    'password-label': 'Пароль',
    'name-placeholder': 'John Doe',
    'login-btn': 'Войти',
    'signup-btn': 'Зарегистрироваться',
    'or': 'Или',
    'no-account': 'Нет аккаунта?',
    'has-account': 'Есть аккаунт?',
    'create-account': 'Создать аккаунт',
    'login-link': 'Войти',
    'admin-panel': 'Панель администратора',
    'admin-users': 'Пользователи',
    'admin-analytics': 'Аналитика',
    'admin-logs': 'Журналы',
    'admin-email': 'Отправить письма',
    'logout': 'Выход',
    'hero-badge': 'Откройте Библию по-новому',
    'hero-welcome': 'Добро пожаловать в',
    'hero-description': 'Исследуйте книги Библии с продвинутым ИИ-помощником, который поможет глубоко понять священные тексты',
    'start-exploring': 'Начать изучение',
    'settings': 'Настройки',
    'books-count': '73 Книг',
    'ai-powered': 'Специализированный ИИ',
    'multilang': '3 Языка',
    'why-bible-ai': 'Почему Bible.AI?',
    'feature-ai-title': 'Специализированный ИИ',
    'feature-ai-desc': 'Получите точные ответы от самих библейских персонажей',
    'nav-home': 'Главная',
    'nav-search': 'Поиск',
    'nav-profile': 'Профиль',
    'explore-books': 'Изучайте книги Библии',
    'explore-subtitle': 'Выберите книгу, чтобы начать духовное путешествие',
    'search-books': 'Поиск книги...',
    'search': 'Поиск',
    'filter-all': 'Все',
    'filter-old': 'Ветхий Завет',
    'filter-new': 'Новый Завет',
    'about-book': 'О книге',
    'key-points': 'Ключевые моменты',
    'online': 'Онлайн',
    'chat-welcome': 'Здравствуйте! Я ваш ИИ-помощник. Задайте мне любой вопрос об этой книге',
    'ask-question': 'Введите ваш вопрос...',
    'back': 'Назад',
    'save-changes': 'Сохранить изменения',
    'account-settings': 'Настройки аккаунта',
    'full-name': 'Полное имя',
    'email': 'Электронная почта',
    'phone': 'Телефон (необязательно)',
    'enter-name': 'Введите ваше полное имя',
    'security-password': 'Безопасность и пароль',
    'current-password': 'Текущий пароль',
    'new-password': 'Новый пароль',
    'confirm-password': 'Подтвердите пароль',
    'update-password': 'Обновить пароль',
    'preferences': 'Предпочтения',
    'pref-notifications': 'Уведомления',
    'pref-dark-mode': 'Темный режим',
    'pref-emails': 'Email уведомления',
    'error-fallback': 'Извините, сервер в настоящее время недоступен. Пожалуйста, попробуйте позже.',


    'note-create-placeholder': 'Нажмите здесь, чтобы написать заметки',
    'note-title': 'Заголовок',
    'note-content': 'Напишите вашу заметку...',
    'my-notes': 'Мои заметки',
    'no-notes': 'Заметок пока нет',
    'confirm-delete': 'Удалить эту заметку?',
    'note-deleted': 'Заметка удалена',
    // --- New Features Translations ---
    'notifications': 'Уведомления',
    'mark-all-read': 'Отметить все как прочитанное',
    'verse-of-day': 'Стих дня',
    'ai-reflection': 'Размышление ИИ',
    'close': 'Закрыть',
    'nav-journal': 'Мой дневник',
    'nav-voice': 'Голос',
    'journal-title': 'Мой духовный дневник',
    'journal-new': 'Новая запись',
    'journal-editor-title': 'Новая запись',
    'journal-title-placeholder': 'Заголовок записи',
    'journal-verse-placeholder': 'Ссылка на стих (необязательно)',
    'journal-content-placeholder': 'Напишите ваши размышления здесь...',
    'journal-tag-placeholder': 'Добавить тег',
    'save': 'Сохранить',
    'cancel': 'Отмена',
    'edit': 'Редактировать',
    'delete': 'Удалить',
    'feature-journal-desc': 'Записывайте ваши духовные мысли',
    'sort-newest': 'Сначала новые',
    'sort-oldest': 'Сначала старые',
    'books-read': 'Книг прочитано',
    'days-active': 'Дней активности',
    'quick-notes': 'Быстрые заметки',
    'clear': 'Очистить',
    'note-saved': 'Заметка сохранена',
    'note-empty': 'Заметка пустая',
    'quick-notes': 'Быстрые заметки',
    'save': 'Сохранить',
    'filter-all': 'Все',
    'filter-book': 'Связанные с книгой'
  }
};




// ===== AI PERSONA PROMPT FACTORY =====
const createSystemPrompt = (persona, bookName) => ({
  ar: `أنا ${persona}، وأتحدث معك من خلال ما أوحاه الله لي في ${bookName}.

📜 **دوري:**
- أشرح الكتاب المقدس بناءً على الفهم الأرثوذكسي القبطي المصري
- أجيب بالعربية فقط، ببساطة ومحبة
- أستخدم فقط ما جاء في النص المقدس

❌ **ما لن أفعله:**
- لن أضيف معلومات خارج الكتاب المقدس
- لن أسيء لنفسي أو لأي شخص آخر
- لن أجيب على أسئلة خارج نطاق ${bookName}

✝️ **إذا سألتني عن شيء خارج السفر:**
سأعتذر بأدب وأذكرك أنني أتحدث فقط عما أوحاه الله لي في هذا السفر المقدس.`,

  en: `I am ${persona}, speaking to you through what God revealed to me in the ${bookName}.

📜 **My Role:**
- I explain the Holy Bible based on Coptic Orthodox understanding
- I respond only in English, simply and with love
- I use only what appears in the sacred text

❌ **What I Won't Do:**
- I won't add information outside the Holy Bible
- I won't insult myself or anyone else
- I won't answer questions outside the scope of ${bookName}

✝️ **If you ask about something outside this book:**
I will politely decline and remind you that I only speak about what God revealed to me in this sacred book.`,

  ru: `Я ${persona}, говорю с вами через то, что Бог открыл мне в ${bookName}.

📜 **Моя роль:**
- Я объясняю Святую Библию на основе коптского православного понимания
- Я отвечаю только на русском языке, просто и с любовью
- Я использую только то, что есть в священном тексте

❌ **Что я не буду делать:**
- Я не буду добавлять информацию вне Святой Библии
- Я не буду оскорблять себя или кого-либо еще
- Я не буду отвечать на вопросы вне ${bookName}

✝️ **Если вы спросите о чем-то вне этой книги:**
Я вежливо откажусь и напомню вам, что говорю только о том, что Бог открыл мне в этой священной книге.`
});
// ===== DAILY VERSES DATABASE =====
const dailyVerses = [
  {
    text: "لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ الْوَحِيدَ، لِكَيْ لاَ يَهْلِكَ كُلُّ مَنْ يُؤْمِنُ بِهِ، بَلْ تَكُونُ لَهُ الْحَيَاةُ الأَبَدِيَّةُ",
    reference: "يوحنا 3: 16",
    textEn: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    referenceEn: "John 3:16"
  },
  {
    text: "أَسْتَطِيعُ كُلَّ شَيْءٍ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي",
    reference: "فيلبي 4: 13",
    textEn: "I can do all things through Christ who strengthens me.",
    referenceEn: "Philippians 4:13"
  },
  {
    text: "لاَ تَهْتَمُّوا بِشَيْءٍ، بَلْ فِي كُلِّ شَيْءٍ بِالصَّلاَةِ وَالدُّعَاءِ مَعَ الشُّكْرِ",
    reference: "فيلبي 4: 6",
    textEn: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving",
    referenceEn: "Philippians 4:6"
  },
  {
    text: "ثِقُوا، أَنَا قَدْ غَلَبْتُ الْعَالَمَ",
    reference: "يوحنا 16: 33",
    textEn: "Take heart! I have overcome the world.",
    referenceEn: "John 16:33"
  },
  {
    text: "اللهُ مَحَبَّةٌ، وَمَنْ يَثْبُتْ فِي الْمَحَبَّةِ يَثْبُتْ فِي اللهِ وَاللهُ فِيهِ",
    reference: "1 يوحنا 4: 16",
    textEn: "God is love. Whoever lives in love lives in God, and God in them.",
    referenceEn: "1 John 4:16"
  }
];

// ===== COMPREHENSIVE BIBLE BOOKS DATABASE =====
const bibleBooks = [
  // OLD TESTAMENT - Pentateuch (Torah) - 5 Books
  {
    id: 'genesis',
    name: { ar: 'سفر التكوين', en: 'Book of Genesis', ru: 'Книга Бытия' },
    subtitle: { ar: 'بداية الخليقة والآباء', en: 'Beginning of Creation', ru: 'Начало творения' },
    testament: 'old',
    author: { ar: 'موسى النبي', en: 'Prophet Moses', ru: 'Пророк Моисей' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Moses',
    summary: { 
      ar: 'سفر البدايات المقدسة: خلق الله للعالم في ستة أيام، سقوط الإنسان بالخطية، الطوفان العظيم، دعوة إبراهيم أبو الآباء، وقصص الآباء إسحق ويعقوب ويوسف. كل قصة تحمل رموزاً نبوية عن المسيح الآتي والخلاص الإلهي، حسب تفسير آباء الكنيسة القبطية.', 
      en: 'The book of sacred beginnings: God\'s creation of the world in six days, the fall of man through sin, the Great Flood, the call of Abraham the patriarch, and stories of the patriarchs Isaac, Jacob, and Joseph. Every story contains prophetic types of Christ and divine salvation, according to Coptic Church Fathers.', 
      ru: 'Книга священных начал: сотворение Богом мира за шесть дней, грехопадение человека, Великий потоп, призвание Авраама-патриарха и истории патриархов Исаака, Иакова и Иосифа. Каждая история содержит пророческие прообразы Христа и божественного спасения согласно коптским отцам Церкви.' 
    },
    keyPoints: { 
      ar: ['الخلق في ستة أيام', 'السقوط والوعد بالفداء (تك 3: 15)', 'الطوفان وفلك نوح (رمز المعمودية)', 'دعوة إبراهيم (أبو المؤمنين)', 'ذبيحة إسحق (رمز صليب المسيح)', 'يوسف الصديق (رمز كامل للمسيح)'], 
      en: ['Creation in six days', 'The Fall & Promise of Redemption (Gen 3:15)', 'The Flood & Noah\'s Ark (type of Baptism)', 'Call of Abraham (father of believers)', 'Sacrifice of Isaac (type of Christ\'s Cross)', 'Righteous Joseph (complete type of Christ)'], 
      ru: ['Сотворение за шесть дней', 'Грехопадение и обетование искупления (Быт 3:15)', 'Потоп и ковчег Ноя (прообраз Крещения)', 'Призвание Авраама (отца верующих)', 'Жертвоприношение Исаака (прообраз Креста Христова)', 'Праведный Иосиф (полный прообраз Христа)'] 
    },
    systemPrompt: createSystemPrompt('موسى النبي', 'سفر التكوين')
  },
  {
    id: 'exodus',
    name: { ar: 'سفر الخروج', en: 'Book of Exodus', ru: 'Книга Исхода' },
    subtitle: { ar: 'الخروج من مصر والوصايا', en: 'Exodus from Egypt', ru: 'Исход из Египта' },
    testament: 'old',
    author: { ar: 'موسى النبي', en: 'Prophet Moses', ru: 'Пророк Моисей' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Moses',
    summary: { 
      ar: 'خروج شعب الله من عبودية مصر بقيادة موسى، الضربات العشر، الفصح (الذي هو رمز لذبيحة المسيح)، عبور البحر الأحمر (رمز المعمودية)، إعطاء الوصايا العشر على جبل سيناء، وبناء خيمة الاجتماع (رمز للسماء والكنيسة). كل هذا يشير لعمل المسيح الخلاصي.', 
      en: 'The exodus of God\'s people from Egyptian slavery led by Moses, the ten plagues, Passover (type of Christ\'s sacrifice), crossing the Red Sea (type of Baptism), receiving the Ten Commandments at Mount Sinai, and building the Tabernacle (type of heaven and the Church). All points to Christ\'s salvific work.', 
      ru: 'Исход народа Божия из египетского рабства под водительством Моисея, десять казней, Пасха (прообраз жертвы Христовой), переход через Красное море (прообраз Крещения), получение Десяти Заповедей на горе Синай и строительство Скинии (прообраз неба и Церкви). Все указывает на спасительное дело Христа.' 
    },
    keyPoints: { 
      ar: ['الضربات العشر على مصر', 'الفصح وحمل الفصح (رمز المسيح)', 'عبور البحر الأحمر', 'الوصايا العشر', 'المن والسلوى (رمز الإفخارستيا)', 'خيمة الاجتماع'], 
      en: ['Ten Plagues on Egypt', 'Passover & Lamb (type of Christ)', 'Crossing Red Sea', 'Ten Commandments', 'Manna & Quail (type of Eucharist)', 'The Tabernacle'], 
      ru: ['Десять казней Египта', 'Пасха и Агнец (прообраз Христа)', 'Переход Красного моря', 'Десять Заповедей', 'Манна и перепела (прообраз Евхаристии)', 'Скиния'] 
    },
    systemPrompt: createSystemPrompt('موسى النبي', 'سفر الخروج')
  },
  {
    id: 'leviticus',
    name: { ar: 'سفر اللاويين', en: 'Book of Leviticus', ru: 'Книга Левит' },
    subtitle: { ar: 'شرائع الكهنوت والقداسة', en: 'Laws of Priesthood & Holiness', ru: 'Законы священства и святости' },
    testament: 'old',
    author: { ar: 'موسى النبي', en: 'Prophet Moses', ru: 'Пророк Моисей' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Moses',
    summary: { 
      ar: 'سفر القداسة والعبادة: الذبائح والتقدمات (رموز لذبيحة المسيح الواحدة)، شرائع الكهنوت اللاوي (رمز لكهنوت المسيح الأبدي)، الأعياد المقدسة، وقوانين الطهارة. "كونوا قديسين لأني أنا قدوس" هي الآية المركزية. كل طقس يشير للمسيح رئيس الكهنة الأعظم.', 
      en: 'The book of holiness and worship: sacrifices and offerings (types of Christ\'s one sacrifice), Levitical priesthood laws (type of Christ\'s eternal priesthood), sacred feasts, and purity laws. "Be holy for I am holy" is the central verse. Every ritual points to Christ the Great High Priest.', 
      ru: 'Книга святости и поклонения: жертвоприношения и приношения (прообразы единой жертвы Христа), законы левитского священства (прообраз вечного священства Христа), священные праздники и законы чистоты. "Будьте святы, ибо Я свят" - центральный стих. Каждый обряд указывает на Христа, Великого Первосвященника.' 
    },
    keyPoints: { 
      ar: ['الذبائح الخمس', 'كهنوت هارون', 'يوم الكفارة العظيم', 'الأعياد السبعة', 'شرائع القداسة'], 
      en: ['Five Sacrifices', 'Aaronic Priesthood', 'Day of Atonement', 'Seven Feasts', 'Holiness Code'], 
      ru: ['Пять жертвоприношений', 'Аароново священство', 'День Искупления', 'Семь праздников', 'Кодекс святости'] 
    },
    systemPrompt: createSystemPrompt('موسى النبي', 'سفر اللاويين')
  },
  {
    id: 'numbers',
    name: { ar: 'سفر العدد', en: 'Book of Numbers', ru: 'Книга Чисел' },
    subtitle: { ar: 'رحلة البرية', en: 'Journey in Wilderness', ru: 'Путешествие в пустыне' },
    testament: 'old',
    author: { ar: 'موسى النبي', en: 'Prophet Moses', ru: 'Пророк Моисей' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Moses',
    summary: { 
      ar: 'رحلة بني إسرائيل في البرية 40 سنة بسبب عدم إيمانهم. يحوي إحصاء الشعب، تذمرهم المتكرر، الحية النحاسية (رمز واضح لصليب المسيح حسب يو 3: 14)، نبوة بلعام عن نجم يعقوب (المسيح)، وقصص تعلمنا الطاعة والإيمان.', 
      en: 'Israel\'s 40-year wilderness journey due to unbelief. Contains census of the people, repeated grumbling, the bronze serpent (clear type of Christ\'s cross per John 3:14), Balaam\'s prophecy of the star of Jacob (Christ), and stories teaching obedience and faith.', 
      ru: '40-летнее путешествие Израиля по пустыне из-за неверия. Содержит перепись народа, повторяющийся ропот, медный змей (явный прообраз креста Христова по Ин 3:14), пророчество Валаама о звезде Иакова (Христе) и истории, учащие послушанию и вере.' 
    },
    keyPoints: { 
      ar: ['الإحصاء', 'التذمر والعقاب', 'الحية النحاسية', 'نبوة بلعام', 'رحلة 40 سنة'], 
      en: ['Census', 'Grumbling & Punishment', 'Bronze Serpent', 'Balaam\'s Prophecy', '40-Year Journey'], 
      ru: ['Перепись', 'Ропот и наказание', 'Медный змей', 'Пророчество Валаама', '40-летнее путешествие'] 
    },
    systemPrompt: createSystemPrompt('موسى النبي', 'سفر العدد')
  },
  {
    id: 'deuteronomy',
    name: { ar: 'سفر التثنية', en: 'Book of Deuteronomy', ru: 'Книга Второзакония' },
    subtitle: { ar: 'إعادة الشريعة', en: 'Second Law', ru: 'Второй закон' },
    testament: 'old',
    author: { ar: 'موسى النبي', en: 'Prophet Moses', ru: 'Пророк Моисей' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Moses',
    summary: { 
      ar: 'خطابات موسى الوداعية للجيل الجديد قبل دخول كنعان. إعادة سرد الشريعة والتاريخ، التأكيد على محبة الله الواحد ("اسمع يا إسرائيل")، البركات واللعنات، ونبوة عن نبي مثل موسى (المسيح). ينتهي بموت موسى ودفنه بيد الله.', 
      en: 'Moses\' farewell speeches to the new generation before entering Canaan. Retelling of law and history, emphasis on loving the one God ("Hear O Israel"), blessings and curses, and prophecy of a prophet like Moses (Christ). Ends with Moses\' death and burial by God.', 
      ru: 'Прощальные речи Моисея новому поколению перед входом в Ханаан. Пересказ закона и истории, акцент на любви к единому Богу ("Слушай, Израиль"), благословения и проклятия, и пророчество о пророке, подобном Моисею (Христе). Заканчивается смертью Моисея и его погребением Богом.' 
    },
    keyPoints: { 
      ar: ['"اسمع يا إسرائيل" (تث 6: 4)', 'محبة الله الواحد', 'نبوة عن المسيح', 'البركات واللعنات', 'موت موسى'], 
      en: ['"Hear O Israel" (Deut 6:4)', 'Love One God', 'Prophecy of Christ', 'Blessings & Curses', 'Death of Moses'], 
      ru: ['"Слушай, Израиль" (Втор 6:4)', 'Любовь к единому Богу', 'Пророчество о Христе', 'Благословения и проклятия', 'Смерть Моисея'] 
    },
    systemPrompt: createSystemPrompt('موسى النبي', 'سفر التثنية')
  },
  
  // OLD TESTAMENT - Historical Books - 16 Books (Coptic Canon)
  {
    id: 'joshua',
    name: { ar: 'سفر يشوع', en: 'Book of Joshua', ru: 'Книга Иисуса Навина' },
    subtitle: { ar: 'دخول أرض الموعد', en: 'Entering Promised Land', ru: 'Вход в Землю Обетованную' },
    testament: 'old',
    author: { ar: 'يشوع بن نون', en: 'Joshua son of Nun', ru: 'Иисус Навин' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Joshua',
    summary: { 
      ar: 'قيادة يشوع (اسمه يعني "يسوع" المخلص) للشعب لدخول أرض كنعان، سقوط أريحا بالإيمان، هزيمة الملوك، وتقسيم الأرض. يشوع رمز قوي للمسيح الذي يدخل بنا لملكوت السماوات. الكنيسة القبطية ترى في كل معركة رمزاً للجهاد الروحي.', 
      en: 'Joshua (whose name means "Jesus" the Savior) leads the people into Canaan, fall of Jericho by faith, defeat of kings, and land division. Joshua is a powerful type of Christ who brings us into the kingdom of heaven. The Coptic Church sees in each battle a symbol of spiritual warfare.', 
      ru: 'Иисус Навин (чье имя означает "Иисус" Спаситель) ведет народ в Ханаан, падение Иериона верой, поражение царей и раздел земли. Иисус Навин - сильный прообраз Христа, вводящего нас в Царство Небесное. Коптская Церковь видит в каждой битве символ духовной войны.' 
    },
    keyPoints: { 
      ar: ['عبور الأردن', 'سقوط أريحا', 'راحاب وإيمانها', 'الشمس تقف (رمز نبوي)', 'تقسيم الأرض'], 
      en: ['Crossing Jordan', 'Fall of Jericho', 'Rahab & Her Faith', 'Sun Stands Still (prophetic type)', 'Land Division'], 
      ru: ['Переход Иордана', 'Падение Иерихона', 'Раав и ее вера', 'Солнце останавливается (пророческий прообраз)', 'Раздел земли'] 
    },
    systemPrompt: createSystemPrompt('يشوع بن نون', 'سفر يشوع')
  },
  {
    id: 'judges',
    name: { ar: 'سفر القضاة', en: 'Book of Judges', ru: 'Книга Судей' },
    subtitle: { ar: 'عصر القضاة الأبطال', en: 'Era of Judges', ru: 'Эпоха Судей' },
    testament: 'old',
    author: { ar: 'صموئيل النبي', en: 'Prophet Samuel', ru: 'Пророк Самуил' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Samuel',
    summary: { 
      ar: 'دورة الخطية والتوبة والخلاص المتكررة. قصص قضاة إسرائيل مثل جدعون وشمشون ودبورة، كل منهم رمز للمسيح المخلص. السفر يظهر حاجة البشرية لملك حقيقي (المسيح) وليس مجرد قضاة بشر.', 
      en: 'Repeated cycle of sin, repentance, and salvation. Stories of Israel\'s judges like Gideon, Samson, Deborah - each a type of Christ the Savior. The book shows humanity\'s need for a true King (Christ), not just human judges.', 
      ru: 'Повторяющийся цикл греха, покаяния и спасения. Истории судей Израиля, таких как Гедеон, Самсон, Девора - каждый прообраз Христа Спасителя. Книга показывает нужду человечества в истинном Царе (Христе), а не просто в человеческих судьях.' 
    },
    keyPoints: { 
      ar: ['دورة الخطية', 'جدعون والصوف', 'شمشون (رمز للمسيح)', 'دبورة النبية', '"لم يكن ملك في إسرائيل"'], 
      en: ['Cycle of Sin', 'Gideon & Fleece', 'Samson (type of Christ)', 'Deborah Prophetess', '"No king in Israel"'], 
      ru: ['Цикл греха', 'Гедеон и руно', 'Самсон (прообраз Христа)', 'Пророчица Девора', '"Не было царя в Израиле"'] 
    },
    systemPrompt: createSystemPrompt('صموئيل النبي', 'سفر القضاة')
  },
  {
    id: 'ruth',
    name: { ar: 'سفر راعوث', en: 'Book of Ruth', ru: 'Книга Руфи' },
    subtitle: { ar: 'الأممية في نسب المسيح', en: 'Gentile in Christ\'s Lineage', ru: 'Язычница в родословии Христа' },
    testament: 'old',
    author: { ar: 'صموئيل النبي', en: 'Prophet Samuel', ru: 'Пророк Самуил' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Samuel',
    summary: { 
      ar: 'قصة راعوث الموآبية (أممية) التي بإيمانها ووفائها دخلت في شعب الله وصارت جدة للملك داود وبالتالي جدة للمسيح. قصة الفداء بواسطة بوعز (رمز للمسيح الفادي). تعلمنا أن الخلاص للجميع.', 
      en: 'Story of Ruth the Moabite (Gentile) who by faith and loyalty entered God\'s people and became grandmother of King David, thus of Christ. Story of redemption through Boaz (type of Christ the Redeemer). Teaches us salvation is for all.', 
      ru: 'История Руфи Моавитянки (язычницы), которая верой и верностью вошла в народ Божий и стала бабушкой царя Давида, а значит и Христа. История искупления через Вооза (прообраз Христа Искупителя). Учит нас, что спасение для всех.' 
    },
    keyPoints: { 
      ar: ['إيمان راعوث', 'بوعز الفادي', 'نسب داود والمسيح', 'الوفاء والمحبة', 'دعوة الأمم'], 
      en: ['Ruth\'s Faith', 'Boaz the Redeemer', 'Lineage of David & Christ', 'Loyalty & Love', 'Gentile Calling'], 
      ru: ['Вера Руфи', 'Вооз Искупитель', 'Родословие Давида и Христа', 'Верность и любовь', 'Призвание язычников'] 
    },
    systemPrompt: createSystemPrompt('صموئيل النبي', 'سفر راعوث')
  },
  {
    id: '1samuel',
    name: { ar: 'سفر صموئيل الأول', en: 'First Book of Samuel', ru: 'Первая книга Царств' },
    subtitle: { ar: 'من القضاة إلى الملوك', en: 'From Judges to Kings', ru: 'От судей к царям' },
    testament: 'old',
    author: { ar: 'صموئيل وناثان وجاد', en: 'Samuel, Nathan & Gad', ru: 'Самуил, Нафан и Гад' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Samuel',
    summary: { 
      ar: 'ميلاد صموئيل النبي (آخر القضاة)، طلب الشعب ملكاً، مسح شاول ثم داود، انتصار داود على جليات (رمز لانتصار المسيح على الشيطان)، ومطاردة شاول لداود. داود المختار هو أعظم رمز للمسيح الملك.', 
      en: 'Birth of Prophet Samuel (last judge), people\'s request for a king, anointing of Saul then David, David\'s victory over Goliath (type of Christ\'s victory over Satan), and Saul\'s pursuit of David. David the chosen is the greatest type of Christ the King.', 
      ru: 'Рождение пророка Самуила (последнего судьи), просьба народа о царе, помазание Саула, затем Давида, победа Давида над Голиафом (прообраз победы Христа над сатаной) и преследование Давида Саулом. Давид избранный - величайший прообраз Христа Царя.' 
    },
    keyPoints: { 
      ar: ['صموئيل النبي', 'شاول الملك', 'مسح داود', 'داود وجليات', 'صداقة داود ويوناثان'], 
      en: ['Samuel Prophet', 'King Saul', 'Anointing David', 'David & Goliath', 'David-Jonathan Friendship'], 
      ru: ['Пророк Самуил', 'Царь Саул', 'Помазание Давида', 'Давид и Голиаф', 'Дружба Давида и Ионафана'] 
    },
    systemPrompt: createSystemPrompt('صموئيل النبي', 'سفر صموئيل الأول')
  },
  {
    id: '2samuel',
    name: { ar: 'سفر صموئيل الثاني', en: 'Second Book of Samuel', ru: 'Вторая книга Царств' },
    subtitle: { ar: 'مملكة داود', en: 'Kingdom of David', ru: 'Царство Давида' },
    testament: 'old',
    author: { ar: 'ناثان وجاد', en: 'Nathan & Gad', ru: 'Нафан и Гад' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=David',
    summary: { 
      ar: 'ملك داود على كل إسرائيل، نقل تابوت العهد لأورشليم، وعد الله الأبدي لداود بأن المسيح سيأتي من نسله، خطية داود وتوبته العميقة (مز 50)، وتمرد أبشالوم. داود النبي الملك هو الجد الأعظم للمسيح بالجسد.', 
      en: 'David\'s reign over all Israel, bringing Ark to Jerusalem, God\'s eternal promise that Christ would come from his lineage, David\'s sin and deep repentance (Ps 51), and Absalom\'s rebellion. Prophet-King David is Christ\'s greatest grandfather in flesh.', 
      ru: 'Царствование Давида над всем Израилем, перенос Ковчега в Иерусалим, вечное обетование Бога о том, что Христос придет из его рода, грех Давида и глубокое покаяние (Пс 50), и восстание Авессалома. Пророк-царь Давид - величайший дед Христа по плоти.' 
    },
    keyPoints: { 
      ar: ['ملك داود', 'نقل التابوت', 'عهد الله مع داود', 'خطية داود وتوبته', 'تمرد أبشالوم'], 
      en: ['David\'s Kingship', 'Moving the Ark', 'God\'s Covenant with David', 'David\'s Sin & Repentance', 'Absalom\'s Rebellion'], 
      ru: ['Царствование Давида', 'Перенос Ковчега', 'Завет Бога с Давидом', 'Грех Давида и покаяние', 'Восстание Авессалома'] 
    },
    systemPrompt: createSystemPrompt('ناثان النبي', 'سفر صموئيل الثاني')
  },
  {
    id: '1kings',
    name: { ar: 'سفر الملوك الأول', en: 'First Book of Kings', ru: 'Третья книга Царств' },
    subtitle: { ar: 'سليمان والانقسام', en: 'Solomon & Division', ru: 'Соломон и разделение' },
    testament: 'old',
    author: { ar: 'إرميا النبي', en: 'Prophet Jeremiah', ru: 'Пророк Иеремия' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Solomon',
    summary: { 
      ar: 'موت داود وملك سليمان الحكيم، بناء الهيكل العظيم (رمز للكنيسة والسماء)، حكمة سليمان ومجده، ثم سقوطه بالنساء الغريبات، انقسام المملكة، وإيليا النبي العظيم الذي يشبه المعمدان. الهيكل رمز لجسد المسيح.', 
      en: 'Death of David and reign of wise Solomon, building the great Temple (type of Church and heaven), Solomon\'s wisdom and glory, then his fall through foreign women, kingdom division, and great Prophet Elijah who is like John Baptist. Temple is type of Christ\'s body.', 
      ru: 'Смерть Давида и царствование мудрого Соломона, строительство великого Храма (прообраз Церкви и неба), мудрость и слава Соломона, затем его падение через иноземных женщин, разделение царства и великий пророк Илия, подобный Иоанну Крестителю. Храм - прообраз тела Христова.' 
    },
    keyPoints: { 
      ar: ['سليمان الحكيم', 'بناء الهيكل', 'حكمة سليمان', 'انقسام المملكة', 'إيليا النبي'], 
      en: ['Solomon the Wise', 'Building Temple', 'Solomon\'s Wisdom', 'Kingdom Division', 'Prophet Elijah'], 
      ru: ['Соломон Мудрый', 'Строительство Храма', 'Мудрость Соломона', 'Разделение царства', 'Пророк Илия'] 
    },
    systemPrompt: createSystemPrompt('إرميا النبي', 'سفر الملوك الأول')
  },
  {
    id: '2kings',
    name: { ar: 'سفر الملوك الثاني', en: 'Second Book of Kings', ru: 'Четвертая книга Царств' },
    subtitle: { ar: 'نهاية المملكتين', en: 'End of Both Kingdoms', ru: 'Конец обоих царств' },
    testament: 'old',
    author: { ar: 'إرميا النبي', en: 'Prophet Jeremiah', ru: 'Пророк Иеремия' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Jeremiah',
    summary: { 
      ar: 'صعود إيليا للسماء وإليشع يخلفه، معجزات إليشع العديدة (رموز لمعجزات المسيح)، سقوط مملكة إسرائيل الشمالية ثم يهوذا الجنوبية، السبي البابلي. يظهر نتيجة الخطية والبعد عن الله، لكن رحمة الله باقية.', 
      en: 'Elijah\'s ascension to heaven and Elisha succeeds him, Elisha\'s many miracles (types of Christ\'s miracles), fall of northern Israel then southern Judah, Babylonian exile. Shows result of sin and distance from God, but God\'s mercy remains.', 
      ru: 'Вознесение Илии на небо и Елисей наследует ему, многие чудеса Елисея (прообразы чудес Христа), падение северного Израиля, затем южной Иудеи, Вавилонский плен. Показывает результат греха и удаления от Бога, но милость Божия остается.' 
    },
    keyPoints: { 
      ar: ['صعود إيليا', 'معجزات إليشع', 'سقوط إسرائيل', 'سقوط يهوذا', 'السبي البابلي'], 
      en: ['Elijah\'s Ascension', 'Elisha\'s Miracles', 'Fall of Israel', 'Fall of Judah', 'Babylonian Exile'], 
      ru: ['Вознесение Илии', 'Чудеса Елисея', 'Падение Израиля', 'Падение Иудеи', 'Вавилонский плен'] 
    },
    systemPrompt: createSystemPrompt('إرميا النبي', 'سفر الملوك الثاني')
  },
  {
    id: '1chronicles',
    name: { ar: 'سفر أخبار الأيام الأول', en: 'First Book of Chronicles', ru: 'Первая книга Паралипоменон' },
    subtitle: { ar: 'نسب المسيح وداود', en: 'Christ\'s Genealogy & David', ru: 'Родословие Христа и Давид' },
    testament: 'old',
    author: { ar: 'عزرا الكاهن', en: 'Ezra the Priest', ru: 'Ездра священник' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Ezra',
    summary: { 
      ar: 'نسب المسيح من آدم إلى داود، تاريخ داود الملكي والعبادي، ترتيب الكهنة واللاويين، والاستعداد لبناء الهيكل. يركز على العبادة والتسبيح، مظهراً أن داود هو "رجل قلب الله" ورمز للمسيح الملك الكاهن.', 
      en: 'Christ\'s genealogy from Adam to David, David\'s royal and worship history, arrangement of priests and Levites, and preparation for Temple building. Focuses on worship and praise, showing David as "man after God\'s heart" and type of Christ the King-Priest.', 
      ru: 'Родословие Христа от Адама до Давида, царская и богослужебная история Давида, устройство священников и левитов, и подготовка к строительству Храма. Сосредоточено на поклонении и хвале, показывая Давида как "человека по сердцу Божию" и прообраз Христа Царя-Священника.' 
    },
    keyPoints: { 
      ar: ['نسب المسيح', 'داود الملك المسبح', 'تنظيم العبادة', 'الاستعداد للهيكل', 'فرق اللاويين'], 
      en: ['Christ\'s Genealogy', 'David King of Praise', 'Worship Organization', 'Temple Preparation', 'Levitical Groups'], 
      ru: ['Родословие Христа', 'Давид Царь хваления', 'Организация поклонения', 'Подготовка Храма', 'Левитские группы'] 
    },
    systemPrompt: createSystemPrompt('عزرا الكاهن', 'سفر أخبار الأيام الأول')
  },
  {
    id: '2chronicles',
    name: { ar: 'سفر أخبار الأيام الثاني', en: 'Second Book of Chronicles', ru: 'Вторая книга Паралипоменон' },
    subtitle: { ar: 'من سليمان للسبي', en: 'From Solomon to Exile', ru: 'От Соломона до плена' },
    testament: 'old',
    author: { ar: 'عزرا الكاهن', en: 'Ezra the Priest', ru: 'Ездра священник' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Ezra',
    summary: { 
      ar: 'ملك سليمان وبناء الهيكل المجيد، تاريخ ملوك يهوذا، الملوك الأبرار والأشرار، الإصلاحات الروحية، وينتهي بالسبي لكن مع وعد بالعودة. يركز على أهمية الهيكل والعبادة الحقيقية كرمز للحياة مع الله.', 
      en: 'Solomon\'s reign and building glorious Temple, history of Judah\'s kings, righteous and wicked kings, spiritual reforms, and ends with exile but promise of return. Focuses on importance of Temple and true worship as symbol of life with God.', 
      ru: 'Царствование Соломона и строительство славного Храма, история царей Иудеи, праведные и нечестивые цари, духовные реформы, и заканчивается пленом, но с обещанием возвращения. Сосредоточено на важности Храма и истинного поклонения как символа жизни с Богом.' 
    },
    keyPoints: { 
      ar: ['مجد سليمان والهيكل', 'ملوك يهوذا', 'الإصلاحات الروحية', 'السبي والوعد', 'أهمية العبادة'], 
      en: ['Solomon\'s Glory & Temple', 'Kings of Judah', 'Spiritual Reforms', 'Exile & Promise', 'Worship Importance'], 
      ru: ['Слава Соломона и Храм', 'Цари Иудеи', 'Духовные реформы', 'Плен и обещание', 'Важность поклонения'] 
    },
    systemPrompt: createSystemPrompt('عزرا الكاهن', 'سفر أخبار الأيام الثاني')
  },
  {
    id: 'ezra',
    name: { ar: 'سفر عزرا', en: 'Book of Ezra', ru: 'Книга Ездры' },
    subtitle: { ar: 'العودة من السبي', en: 'Return from Exile', ru: 'Возвращение из плена' },
    testament: 'old',
    author: { ar: 'عزرا الكاهن', en: 'Ezra the Priest', ru: 'Ездра священник' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Ezra',
    summary: { 
      ar: 'عودة اليهود من بابل، إعادة بناء الهيكل، وإصلاح عزرا الكاهن الروحي. يظهر أمانة الله في إتمام وعوده، وأهمية كلمة الله (الكتاب المقدس) في حياة الشعب. عزرا رمز للمعلم الأمين الذي يعيد الشعب لله.', 
      en: 'Jews\' return from Babylon, rebuilding Temple, and Ezra the priest\'s spiritual reform. Shows God\'s faithfulness in fulfilling promises, and importance of God\'s Word (Scripture) in people\'s life. Ezra is type of faithful teacher who returns people to God.', 
      ru: 'Возвращение евреев из Вавилона, восстановление Храма и духовная реформа Ездры священника. Показывает верность Бога в исполнении обещаний и важность Слова Божия (Писания) в жизни народа. Ездра - прообраз верного учителя, возвращающего народ к Богу.' 
    },
    keyPoints: { 
      ar: ['العودة من بابل', 'إعادة بناء الهيكل', 'إصلاح عزرا', 'قراءة الشريعة', 'أمانة الله'], 
      en: ['Return from Babylon', 'Rebuilding Temple', 'Ezra\'s Reform', 'Reading the Law', 'God\'s Faithfulness'], 
      ru: ['Возвращение из Вавилона', 'Восстановление Храма', 'Реформа Ездры', 'Чтение Закона', 'Верность Бога'] 
    },
    systemPrompt: createSystemPrompt('عزرا الكاهن', 'سفر عزرا')
  },
  {
    id: 'nehemiah',
    name: { ar: 'سفر نحميا', en: 'Book of Nehemiah', ru: 'Книга Неемии' },
    subtitle: { ar: 'بناء السور', en: 'Building the Wall', ru: 'Строительство стены' },
    testament: 'old',
    author: { ar: 'نحميا الوالي', en: 'Nehemiah the Governor', ru: 'Неемия правитель' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Nehemiah',
    summary: { 
      ar: 'نحميا الساقي الذي صار والياً يعيد بناء سور أورشليم رغم المقاومة الشديدة، بإيمان وصلاة وعمل. يظهر قوة الصلاة والإيمان العملي. نحميا رمز لمن يبني سور الكنيسة (الإيمان والحياة المقدسة) ضد هجمات العدو.', 
      en: 'Nehemiah the cupbearer who became governor rebuilds Jerusalem\'s wall despite fierce opposition, with faith, prayer and action. Shows power of prayer and practical faith. Nehemiah is type of one who builds Church\'s wall (faith and holy life) against enemy attacks.', 
      ru: 'Неемия виночерпий, ставший правителем, восстанавливает стену Иерусалима, несмотря на жесткое сопротивление, с верой, молитвой и действием. Показывает силу молитвы и практической веры. Неемия - прообраз строителя стены Церкви (веры и святой жизни) против атак врага.' 
    },
    keyPoints: { 
      ar: ['بناء السور', 'الصلاة والعمل', 'مقاومة الأعداء', 'الإصلاح الروحي', 'قوة الإيمان'], 
      en: ['Building Wall', 'Prayer & Action', 'Enemy Opposition', 'Spiritual Reform', 'Power of Faith'], 
      ru: ['Строительство стены', 'Молитва и действие', 'Сопротивление врага', 'Духовная реформа', 'Сила веры'] 
    },
    systemPrompt: createSystemPrompt('نحميا الوالي', 'سفر نحميا')
  },
  {
    id: 'tobit',
    name: { ar: 'سفر طوبيا', en: 'Book of Tobit', ru: 'Книга Товита' },
    subtitle: { ar: 'الإيمان وسط الشدائد', en: 'Faith Amidst Hardship', ru: 'Вера среди невзгод' },
    testament: 'old',
    author: { ar: 'تقليدياً طوبيا', en: 'Traditionally Tobit', ru: 'По традиции Товит' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Tobit',
    summary: { 
      ar: 'قصة عائلة طوبيا البار الذي أصيب بالعمى، وابنه طوبيا ورحلته مع الملاك رافائيل. تعلمنا عن شفاعة الملائكة، أهمية الصدقة والصلاة، قدسية الزواج، والشفاء الإلهي. الملاك رافائيل رمز للمسيح الشافي والمرشد.', 
      en: 'The story of the righteous Tobit who was blinded, and his son Tobias\'s journey with the Angel Raphael. Teaches us about angelic intercession, importance of almsgiving and prayer, sanctity of marriage, and divine healing. Angel Raphael is a type of Christ the Healer and Guide.', 
      ru: 'История праведного Товита, который ослеп, и путешествия его сына Товии с Ангелом Рафаилом. Учит нас ангельскому заступничеству, важности милостыни и молитвы, святости брака и божественному исцелению. Ангел Рафаил - прообраз Христа Целителя и Проводника.' 
    },
    keyPoints: { 
      ar: ['تقوى طوبيا', 'الملاك رافائيل', 'الشفاء من العمى', 'طرد الشيطان', 'أهمية الصدقة'], 
      en: ['Tobit\'s Piety', 'Angel Raphael', 'Healing from Blindness', 'Exorcising Demon', 'Importance of Almsgiving'], 
      ru: ['Благочестие Товита', 'Ангел Рафаил', 'Исцеление от слепоты', 'Изгнание демона', 'Важность милостыни'] 
    },
    systemPrompt: createSystemPrompt('طوبيا البار', 'سفر طوبيا')
  },
  {
    id: 'judith',
    name: { ar: 'سفر يهوديت', en: 'Book of Judith', ru: 'Книга Иудифи' },
    subtitle: { ar: 'الأرملة الشجاعة', en: 'The Courageous Widow', ru: 'Мужественная вдова' },
    testament: 'old',
    author: { ar: 'غير معروف', en: 'Unknown', ru: 'Неизвестен' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Judith',
    summary: { 
      ar: 'قصة يهوديت، الأرملة التقية والجميلة، التي أنقذت شعبها من جيش أليفانا القوي، بقوة صلاتها وإيمانها وشجاعتها. هي رمز للقديسة العذراء مريم التي سحقت رأس الحية (الشيطان) بقبولها للمسيح، ورمز للكنيسة المنتصرة.', 
      en: 'The story of Judith, the pious and beautiful widow, who saved her people from Holofernes\'s strong army through her prayer, faith, and courage. She is a type of the Saint Virgin Mary who crushed the serpent\'s (Satan\'s) head by accepting Christ, and a type of the victorious Church.', 
      ru: 'История Иудифи, благочестивой и красивой вдовы, которая спасла свой народ от сильной армии Олоферна своей молитвой, верой и мужеством. Она - прообраз Пресвятой Девы Марии, сокрушившей главу змия (сатаны), приняв Христа, и прообраз победоносной Церкви.' 
    },
    keyPoints: { 
      ar: ['حصار بيت فلوى', 'صلاة وصوم يهوديت', 'شجاعة وإيمان', 'قتل أليفانا', 'رمز للعذراء مريم'], 
      en: ['Siege of Bethulia', 'Judith\'s Prayer & Fasting', 'Courage & Faith', 'Slaying Holofernes', 'Type of Virgin Mary'], 
      ru: ['Осада Ветилуи', 'Молитва и пост Иудифи', 'Мужество и вера', 'Убийство Олоферна', 'Прообраз Девы Марии'] 
    },
    systemPrompt: createSystemPrompt('يهوديت التقية', 'سفر يهوديت')
  },
  {
    id: 'esther',
    name: { ar: 'سفر أستير', en: 'Book of Esther', ru: 'Книга Есфири' },
    subtitle: { ar: 'العناية الإلهية', en: 'Divine Providence', ru: 'Божественное Провидение' },
    testament: 'old',
    author: { ar: 'مردخاي أو عزرا', en: 'Mordecai or Ezra', ru: 'Мардохей или Ездра' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Esther',
    summary: { 
      ar: 'قصة أستير الملكة اليهودية التي أنقذت شعبها من الإبادة المخطط لها بواسطة هامان. السفر لا يذكر اسم الله (في النسخة العبرية) لكنه يظهر عنايته الفائقة الخفية. أستير رمز للكنيسة (عروس الملك) التي تشفع في شعبها، ورمز للعذراء مريم.', 
      en: 'The story of Esther, the Jewish queen who saved her people from genocide planned by Haman. The book doesn\'t mention God\'s name (in Hebrew text) but shows His hidden, supreme providence. Esther is a type of the Church (the King\'s bride) interceding for her people, and a type of the Virgin Mary.', 
      ru: 'История Есфири, еврейской царицы, спасшей свой народ от истребления, запланированного Аманом. В книге не упоминается имя Бога (в еврейском тексте), но показано Его скрытое, верховное провидение. Есфирь - прообраз Церкви (невесты Царя), ходатайствующей за свой народ, и прообраз Девы Марии.' 
    },
    keyPoints: { 
      ar: ['أستير الملكة', 'مؤامرة هامان', 'صوم أستير والشعب', '"إن هلكت هلكت"', 'خلاص الشعب (عيد الفوريم)'], 
      en: ['Queen Esther', 'Haman\'s Plot', 'Esther\'s & People\'s Fast', '"If I perish, I perish"', 'Salvation of People (Feast of Purim)'], 
      ru: ['Царица Есфирь', 'Заговор Амана', 'Пост Есфири и народа', '"Если погибнуть, погибну"', 'Спасение народа (Праздник Пурим)'] 
    },
    systemPrompt: createSystemPrompt('أستير الملكة', 'سفر أستير')
  },
  {
    id: '1maccabees',
    name: { ar: 'سفر المكابيين الأول', en: 'First Book of Maccabees', ru: 'Первая книга Маккавейская' },
    subtitle: { ar: 'النضال من أجل الهيكل', en: 'Struggle for the Temple', ru: 'Борьба за Храм' },
    testament: 'old',
    author: { ar: 'مؤرخ يهودي', en: 'Jewish Historian', ru: 'Еврейский историк' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=JudasM',
    summary: { 
      ar: 'يسجل التاريخ البطولي للأسرة المكابية (متتيا وأولاده يهوذا ويوناثان وسمعان) الذين قادوا ثورة ضد الاضطهاد اليوناني، طهروا الهيكل، وحققوا استقلالاً دينياً وسياسياً. الكنيسة تعيّد للشهداء المكابيين كرمز للثبات على الإيمان.', 
      en: 'Records the heroic history of the Maccabean family (Mattathias and his sons Judas, Jonathan, Simon) who led a revolt against Greek persecution, cleansed the Temple, and achieved religious and political independence. The Church celebrates the Maccabean martyrs as a symbol of steadfastness in faith.', 
      ru: 'Записывает героическую историю семьи Маккавеев (Маттафии и его сыновей Иуды, Ионафана, Симона), которые возглавили восстание против греческих преследований, очистили Храм и добились религиозной и политической независимости. Церковь чтит Маккавейских мучеников как символ твердости в вере.' 
    },
    keyPoints: { 
      ar: ['الاضطهاد اليوناني', 'ثورة متتيا', 'يهوذا المكابي', 'تطهير الهيكل (عيد الحانوكا)', 'الاستشهاد من أجل الشريعة'], 
      en: ['Greek Persecution', 'Revolt of Mattathias', 'Judas Maccabeus', 'Cleansing the Temple (Hanukkah)', 'Martyrdom for the Law'], 
      ru: ['Греческие преследования', 'Восстание Маттафии', 'Иуда Маккавей', 'Очищение Храма (Ханука)', 'Мученичество за Закон'] 
    },
    systemPrompt: createSystemPrompt('يهوذا المكابي', 'سفر المكابيين الأول')
  },
  {
    id: '2maccabees',
    name: { ar: 'سفر المكابيين الثاني', en: 'Second Book of Maccabees', ru: 'Вторая книга Маккавейская' },
    subtitle: { ar: 'الشهداء والقيامة', en: 'Martyrs & Resurrection', ru: 'Мученики и Воскресение' },
    testament: 'old',
    author: { ar: 'مختصِر لياسون القيرواني', en: 'Epitome of Jason of Cyrene', ru: 'Сокращение Иасона Киринейского' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Martyrs',
    summary: { 
      ar: 'يركز على الجانب اللاهوتي للثورة المكابية، خاصة قصص الاستشهاد العظيمة (أليعازر، الإخوة السبعة وأمهم) التي تظهر الإيمان الراسخ بالقيامة من الأموات والصلاة من أجل الراقدين. هذا السفر يؤسس عقيدة القيامة بوضوح قبل المسيح.', 
      en: 'Focuses on the theological aspect of the Maccabean revolt, especially the great martyrdom stories (Eleazar, the seven brothers and their mother) which show firm faith in the resurrection of the dead and prayer for the departed. This book clearly establishes the doctrine of resurrection before Christ.', 
      ru: 'Сосредоточен на богословском аспекте Маккавейского восстания, особенно на великих историях мученичества (Елеазара, семи братьев и их матери), которые показывают твердую веру в воскресение мертвых и молитву за усопших. Эта книга ясно утверждает учение о воскресении до Христа.' 
    },
    keyPoints: { 
      ar: ['استشهاد أليعازر', 'استشهاد الإخوة السبعة وأمهم', 'الإيمان بالقيامة', 'الصلاة لأجل الراقدين', 'التدخل الإلهي والمعجزات'], 
      en: ['Martyrdom of Eleazar', 'Martyrdom of Seven Brothers & Mother', 'Belief in Resurrection', 'Prayer for the Dead', 'Divine Intervention & Miracles'], 
      ru: ['Мученичество Елеазара', 'Мученичество семи братьев и их матери', 'Вера в Воскресение', 'Молитва за усопших', 'Божественное вмешательство и чудеса'] 
    },
    systemPrompt: createSystemPrompt('أم الشهداء المكابيين', 'سفر المكابيين الثاني')
  },

  // OLD TESTAMENT - Wisdom Books - 7 Books (Coptic Canon)
  {
    id: 'job',
    name: { ar: 'سفر أيوب', en: 'Book of Job', ru: 'Книга Иова' },
    subtitle: { ar: 'الألم ومعرفة الله', en: 'Suffering & Knowing God', ru: 'Страдание и познание Бога' },
    testament: 'old',
    author: { ar: 'موسى أو سليمان', en: 'Moses or Solomon', ru: 'Моисей или Соломон' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Job',
    summary: { 
      ar: 'قصة أيوب البار الذي جُرب بآلام شديدة، وحواره مع أصحابه عن العدالة الإلهية. السفر يعالج مشكلة الألم البريء ويظهر أن حكمة الله تفوق الإدراك البشري. أيوب في آلامه وصبره ثم مجده المزدوج هو رمز واضح للمسيح المتألم والممجد.', 
      en: 'The story of Job, the righteous man tested by severe suffering, and his debate with his friends about divine justice. The book addresses the problem of innocent suffering and shows that God\'s wisdom surpasses human understanding. Job in his suffering, patience, and then double restoration is a clear type of the suffering and glorified Christ.', 
      ru: 'История Иова, праведника, испытанного тяжкими страданиями, и его спор с друзьями о божественной справедливости. Книга обращается к проблеме невинного страдания и показывает, что мудрость Божия превосходит человеческое понимание. Иов в своих страданиях, терпении, а затем двойном восстановлении - ясный прообраз страдающего и прославленного Христа.' 
    },
    keyPoints: { 
      ar: ['أيوب البار وتجربته', 'حوارات الأصحاب', 'سيادة الله وحكمته', 'توبة أيوب', 'مجد أيوب الأخير (رمز للقيامة)'], 
      en: ['Righteous Job & His Trial', 'Debates with Friends', 'God\'s Sovereignty & Wisdom', 'Job\'s Repentance', 'Job\'s Final Glory (type of Resurrection)'], 
      ru: ['Праведный Иов и его испытание', 'Споры с друзьями', 'Верховная власть и мудрость Бога', 'Покаяние Иова', 'Последняя слава Иова (прообраз Воскресения)'] 
    },
    systemPrompt: createSystemPrompt('أيوب الصديق', 'سفر أيوب')
  },
  {
    id: 'psalms',
    name: { ar: 'سفر المزامير', en: 'Book of Psalms', ru: 'Книга Псалтири' },
    subtitle: { ar: 'كتاب صلاة الكنيسة', en: 'Prayer Book of the Church', ru: 'Молитвенник Церкви' },
    testament: 'old',
    author: { ar: 'داود النبي وآخرون', en: 'Prophet David & Others', ru: 'Пророк Давид и другие' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=David',
    summary: { 
      ar: 'مجموعة من 151 مزموراً (في الكنيسة القبطية) هي صلوات وتسبيحات ونبوات. تغطي كل اختبارات النفس البشرية من تسبيح وشكر وتوبة وطلب. المزامير مليئة بالنبوات الواضحة عن حياة المسيح وآلامه وقيامته وملكه. الكنيسة تصلي بها كل يوم في الأجبية.', 
      en: 'A collection of 151 psalms (in the Coptic Church) which are prayers, praises, and prophecies. They cover every human spiritual experience: praise, thanks, repentance, petition. The Psalms are filled with clear prophecies about Christ\'s life, passion, resurrection, and kingdom. The Church prays them daily in the Agpeya.', 
      ru: 'Сборник из 151 псалма (в Коптской Церкви), представляющий собой молитвы, хваления и пророчества. Они охватывают весь духовный опыт человека: хвалу, благодарение, покаяние, прошение. Псалмы наполнены ясными пророчествами о жизни, страстях, воскресении и царстве Христа. Церковь молится ими ежедневно в Агпее (Часослове).' 
    },
    keyPoints: { 
      ar: ['التسبيح والشكر', 'التوبة (مز 50)', 'نبوات عن المسيح (مز 21، 109)', 'مزامير الملك (مز 2)', 'المزمور 151 (القبطي)'], 
      en: ['Praise & Thanksgiving', 'Repentance (Ps 51 / 50)', 'Prophecies of Christ (Ps 22 / 21, 110 / 109)', 'Royal Psalms (Ps 2)', 'Psalm 151 (Coptic)'], 
      ru: ['Хвала и благодарение', 'Покаяние (Пс 50)', 'Пророчества о Христе (Пс 21, 109)', 'Царские псалмы (Пс 2)', 'Псалом 151 (Коптский)'] 
    },
    systemPrompt: createSystemPrompt('داود النبي', 'سفر المزامير')
  },
  {
    id: 'proverbs',
    name: { ar: 'سفر الأمثال', en: 'Book of Proverbs', ru: 'Книга Притчей' },
    subtitle: { ar: 'الحكمة للحياة اليومية', en: 'Wisdom for Daily Life', ru: 'Мудрость для повседневной жизни' },
    testament: 'old',
    author: { ar: 'سليمان الحكيم', en: 'Solomon the Wise', ru: 'Соломон Мудрый' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Solomon',
    summary: { 
      ar: 'مجموعة من أقوال الحكمة العملية، تعلم الإنسان كيف يعيش حياة مقدسة وناجحة في مخافة الله. يركز على الحكمة (الأقنوم الثاني، المسيح)، وضبط اللسان، والاجتهاد، والبعد عن الشر. "مخافة الرب رأس الحكمة".', 
      en: 'A collection of practical wisdom sayings, teaching man how to live a holy and successful life in the fear of God. Focuses on Wisdom (the second Hypostasis, Christ), taming the tongue, diligence, and avoiding evil. "The fear of the LORD is the beginning of wisdom."', 
      ru: 'Сборник практических мудрых изречений, учащих человека, как жить святой и успешной жизнью в страхе Божием. Сосредоточен на Мудрости (второй Ипостаси, Христе), обуздании языка, усердии и избегании зла. "Начало мудрости - страх Господень".' 
    },
    keyPoints: { 
      ar: ['مخافة الرب', 'الحكمة (المسيح)', 'ضبط اللسان', 'المرأة الفاضلة', 'الاجتهاد والكسل'], 
      en: ['Fear of the LORD', 'Wisdom (Christ)', 'Taming the Tongue', 'Virtuous Woman', 'Diligence & Sloth'], 
      ru: ['Страх Господень', 'Мудрость (Христос)', 'Обуздание языка', 'Добродетельная жена', 'Усердие и лень'] 
    },
    systemPrompt: createSystemPrompt('سليمان الحكيم', 'سفر الأمثال')
  },
  {
    id: 'ecclesiastes',
    name: { ar: 'سفر الجامعة', en: 'Book of Ecclesiastes', ru: 'Книга Екклесиаста' },
    subtitle: { ar: 'بطلان الحياة تحت الشمس', en: 'Vanity of Life Under the Sun', ru: 'Суета жизни под солнцем' },
    testament: 'old',
    author: { ar: 'سليمان الحكيم', en: 'Solomon the Wise', ru: 'Соломон Мудрый' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Solomon',
    summary: { 
      ar: 'تأملات سليمان الحكيم (الجامعة) في معنى الحياة. يخلص إلى أن كل شيء "باطل الأباطيل" بدون الله. المال والحكمة واللذة، كلها لا تشبع. الخاتمة هي: "اتق الله واحفظ وصاياه لأن هذا هو الإنسان كله". يدعونا لرفع قلوبنا فوق الشمس، إلى المسيح.', 
      en: 'Solomon the Wise\'s (the Preacher\'s) reflections on the meaning of life. Concludes all is "vanity of vanities" without God. Money, wisdom, pleasure - all fail to satisfy. The conclusion: "Fear God and keep His commandments, for this is the whole duty of man." Calls us to lift our hearts above the sun, to Christ.', 
      ru: 'Размышления Соломона Мудрого (Екклесиаста) о смысле жизни. Приходит к выводу, что все - "суета сует" без Бога. Деньги, мудрость, удовольствия - все не может насытить. Заключение: "Бойся Бога и заповеди Его соблюдай, потому что в этом все для человека". Призывает нас вознести сердца наши над солнцем, ко Христу.' 
    },
    keyPoints: { 
      ar: ['باطل الأباطيل', 'كل شيء تحت الشمس', 'لكل شيء زمان', 'اتق الله واحفظ وصاياه', 'الشبع بالله وحده'], 
      en: ['Vanity of Vanities', 'Everything Under the Sun', 'A Time for Everything', 'Fear God & Keep Commandments', 'Satisfaction in God Alone'], 
      ru: ['Суета сует', 'Все под солнцем', 'Всему свое время', 'Бойся Бога и соблюдай заповеди', 'Насыщение только в Боге'] 
    },
    systemPrompt: createSystemPrompt('سليمان الحكيم', 'سفر الجامعة')
  },
  {
    id: 'songofsolomon',
    name: { ar: 'سفر نشيد الأناشيد', en: 'Song of Solomon', ru: 'Книга Песни Песней' },
    subtitle: { ar: 'الحب الإلهي', en: 'Divine Love', ru: 'Божественная Любовь' },
    testament: 'old',
    author: { ar: 'سليمان الحكيم', en: 'Solomon the Wise', ru: 'Соломон Мудрый' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Solomon',
    summary: { 
      ar: 'قصيدة حب رمزية تصف العلاقة بين العريس (المسيح) وعروسه (الكنيسة أو النفس البشرية). الكنيسة القبطية تقرأه في ليلة سبت الفرح كأعظم تعبير عن اتحاد المسيح بكنيسته التي اشتراها بدمه. "أنا لحبيبي وحبيبي لي".', 
      en: 'A symbolic love poem describing the relationship between the Bridegroom (Christ) and His Bride (the Church or the human soul). The Coptic Church reads it on Bright Saturday eve as the ultimate expression of Christ\'s union with His Church, purchased by His blood. "I am my beloved\'s, and my beloved is mine."', 
      ru: 'Символическая поэма о любви, описывающая отношения между Женихом (Христом) и Его Невестой (Церковью или душой человека). Коптская Церковь читает ее в канун Светлой Субботы как высшее выражение союза Христа со Своей Церковью, искупленной Его Кровью. "Я принадлежу возлюбленному моему, а возлюбленный мой - мне".' 
    },
    keyPoints: { 
      ar: ['العريس (المسيح)', 'العروس (الكنيسة / النفس)', 'الحب أقوى من الموت', 'الاتحاد الإلهي', 'يقرأ في سبت الفرح'], 
      en: ['The Bridegroom (Christ)', 'The Bride (Church / Soul)', 'Love Stronger than Death', 'Divine Union', 'Read on Bright Saturday'], 
      ru: ['Жених (Христос)', 'Невеста (Церковь / Душа)', 'Любовь сильна, как смерть', 'Божественный союз', 'Читается в Светлую Субботу'] 
    },
    systemPrompt: createSystemPrompt('سليمان الحكيم', 'سفر نشيد الأناشيد')
  },
  {
    id: 'wisdom',
    name: { ar: 'سفر حكمة سليمان', en: 'Book of Wisdom', ru: 'Книга Премудрости Соломона' },
    subtitle: { ar: 'الحكمة الأزلية', en: 'Eternal Wisdom', ru: 'Вечная Премудрость' },
    testament: 'old',
    author: { ar: 'سليمان (تقليدياً)', en: 'Solomon (Traditionally)', ru: 'Соломон (по традиции)' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Solomon',
    summary: { 
      ar: 'سفر يسبح الحكمة الأزلية (الأقنوم الثاني، المسيح) كضابط للكل وخالق. يدعو الملوك للبحث عن الحكمة، ويقارن بين مصير الأبرار (الخلود) والأشرار (الهلاك). يحتوي على نبوات واضحة عن آلام "البار" (المسيح) وقيامته.', 
      en: 'A book praising eternal Wisdom (the second Hypostasis, Christ) as ruler and creator of all. It calls kings to seek wisdom, and contrasts the fate of the righteous (immortality) with the wicked (destruction). Contains clear prophecies of the "Righteous One\'s" (Christ\'s) passion and resurrection.', 
      ru: 'Книга, восхваляющая вечную Премудрость (вторую Ипостась, Христа) как правителя и творца всего. Призывает царей искать мудрости и противопоставляет судьбу праведников (бессмертие) и нечестивых (гибель). Содержит ясные пророчества о страстях и воскресении "Праведника" (Христа).' 
    },
    keyPoints: { 
      ar: ['الحكمة الأزلية (المسيح)', 'خلود الأبرار', 'آلام البار (نبوة عن المسيح)', 'الدعوة للعدل والحكمة', 'بطلان عبادة الأوثان'], 
      en: ['Eternal Wisdom (Christ)', 'Immortality of Righteous', 'Suffering of Righteous One (Prophecy of Christ)', 'Call to Justice & Wisdom', 'Futility of Idolatry'], 
      ru: ['Вечная Премудрость (Христос)', 'Бессмертие праведных', 'Страдания Праведника (Пророчество о Христе)', 'Призыв к справедливости и мудрости', 'Тщетность идолопоклонства'] 
    },
    systemPrompt: createSystemPrompt('سليمان الحكيم', 'سفر حكمة سليمان')
  },
  {
    id: 'sirach',
    name: { ar: 'سفر يشوع بن سيراخ', en: 'Book of Sirach (Ecclesiasticus)', ru: 'Книга премудрости Иисуса, сына Сирахова' },
    subtitle: { ar: 'الحكمة في الحياة والعبادة', en: 'Wisdom in Life & Worship', ru: 'Мудрость в жизни и поклонении' },
    testament: 'old',
    author: { ar: 'يشوع بن سيراخ', en: 'Joshua son of Sirach', ru: 'Иисус, сын Сирахов' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Sirach',
    summary: { 
      ar: 'مجموعة عظيمة من تعاليم الحكمة تشبه سفر الأمثال، ولكن مع تركيز أكبر على العبادة، الهيكل، الكهنوت، وتاريخ الآباء. يربط الحكمة بالشريعة، ويعلم الفضائل العملية مثل التواضع والصداقة. "مديح الآباء" هو خاتمة رائعة للتاريخ المقدس.', 
      en: 'A great collection of wisdom teachings similar to Proverbs, but with more focus on worship, the Temple, priesthood, and the history of the fathers. Connects wisdom with the Law, and teaches practical virtues like humility and friendship. The "Praise of the Fathers" is a wonderful conclusion to sacred history.', 
      ru: 'Великое собрание мудрых учений, похожее на Книгу Притчей, но с большим акцентом на поклонение, Храм, священство и историю отцов. Связывает мудрость с Законом и учит практическим добродетелям, таким как смирение и дружба. "Похвала отцам" - прекрасное завершение священной истории.' 
    },
    keyPoints: { 
      ar: ['الحكمة والشريعة', 'الفضائل العملية (التواضع)', 'الكهنوت والعبادة', 'مديح الآباء', 'نصائح للحياة اليومية'], 
      en: ['Wisdom & The Law', 'Practical Virtues (Humility)', 'Priesthood & Worship', 'Praise of the Fathers', 'Advice for Daily Life'], 
      ru: ['Мудрость и Закон', 'Практические добродетели (смирение)', 'Священство и поклонение', 'Похвала отцам', 'Советы для повседневной жизни'] 
    },
    systemPrompt: createSystemPrompt('يشوع بن سيراخ', 'سفر يشوع بن سيراخ')
  },

  // OLD TESTAMENT - Major Prophets - 6 Books (Coptic Canon)
  {
    id: 'isaiah',
    name: { ar: 'سفر إشعياء', en: 'Book of Isaiah', ru: 'Книга пророка Исаии' },
    subtitle: { ar: 'نبي الخلاص والمسيح', en: 'Prophet of Salvation & Christ', ru: 'Пророк спасения и Христа' },
    testament: 'old',
    author: { ar: 'إشعياء النبي', en: 'Prophet Isaiah', ru: 'Пророк Исаия' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Isaiah',
    summary: { 
      ar: 'يُطلق عليه "الإنجيل الخامس" لكثرة نبواته الواضحة عن المسيح: ميلاده من عذراء، آلامه (ص 53)، موته، قيامته، وملكوته. يدعو للتوبة والدينونة على الأمم، ويقدم وعوداً مجيدة بالخلاص والسماء الجديدة والأرض الجديدة. الكنيسة تتلوه كثيراً خاصة في أسبوع الآلام.', 
      en: 'Called "the Fifth Gospel" for its many clear prophecies of Christ: His birth from a virgin, His passion (Ch 53), death, resurrection, and kingdom. Calls to repentance, judgment on nations, and gives glorious promises of salvation and the new heavens and earth. The Church reads it often, especially during Holy Week.', 
      ru: 'Называется "Пятым Евангелием" за множество ясных пророчеств о Христе: Его рождении от Девы, Его страстях (Гл 53), смерти, воскресении и царстве. Призывает к покаянию, суду над народами и дает славные обетования спасения, нового неба и новой земли. Церковь часто читает ее, особенно на Страстной седмице.' 
    },
    keyPoints: { 
      ar: ['الميلاد العذراوي (إش 7: 14)', 'العبد المتألم (إش 53)', 'نهاية الخطية والموت', 'السماء الجديدة والأرض الجديدة', 'الدعوة للتوبة'], 
      en: ['Virgin Birth (Isa 7:14)', 'Suffering Servant (Isa 53)', 'End of Sin & Death', 'New Heavens & New Earth', 'Call to Repentance'], 
      ru: ['Рождение от Девы (Ис 7:14)', 'Страждущий Отрок (Ис 53)', 'Конец греха и смерти', 'Новое небо и новая земля', 'Призыв к покаянию'] 
    },
    systemPrompt: createSystemPrompt('إشعياء النبي', 'سفر إشعياء')
  },
  {
    id: 'jeremiah',
    name: { ar: 'سفر إرميا', en: 'Book of Jeremiah', ru: 'Книга пророка Иеремии' },
    subtitle: { ar: 'النبي الباكي والعهد الجديد', en: 'Weeping Prophet & New Covenant', ru: 'Плачущий пророк и Новый Завет' },
    testament: 'old',
    author: { ar: 'إرميا النبي', en: 'Prophet Jeremiah', ru: 'Пророк Иеремия' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Jeremiah',
    summary: { 
      ar: 'خدمة إرميا النبي الباكي أثناء سقوط أورشليم. يدعو للتوبة ويحذر من الدينونة الحتمية (السبي). تنبأ عن "العهد الجديد" (إر 31) الذي سيكتبه الله على القلوب، وهو ما أسسه المسيح بدمه. إرميا في آلامه واضطهاده هو رمز للمسيح المرفوض.', 
      en: 'Ministry of Jeremiah, the weeping prophet, during Jerusalem\'s fall. Calls to repentance and warns of inevitable judgment (exile). Prophesied the "New Covenant" (Jer 31) that God would write on hearts, which Christ established with His blood. Jeremiah in his suffering and persecution is a type of the rejected Christ.', 
      ru: 'Служение Иеремии, плачущего пророка, во время падения Иерусалима. Призывает к покаянию и предупреждает о неминуемом суде (пленении). Пророчествовал о "Новом Завете" (Иер 31), который Бог напишет на сердцах, и который Христос установил Своей Кровью. Иеремия в своих страданиях и преследованиях - прообраз отвергнутого Христа.' 
    },
    keyPoints: { 
      ar: ['النبي الباكي', 'سقوط أورشليم', 'العهد الجديد (إر 31: 31)', 'الدعوة للتوبة القلبية', 'رمز للمسيح المتألم'], 
      en: ['The Weeping Prophet', 'Fall of Jerusalem', 'The New Covenant (Jer 31:31)', 'Call to Heartfelt Repentance', 'Type of Suffering Christ'], 
      ru: ['Плачущий пророк', 'Падение Иерусалима', 'Новый Завет (Иер 31:31)', 'Призыв к сердечному покаянию', 'Прообраз страдающего Христа'] 
    },
    systemPrompt: createSystemPrompt('إرميا النبي', 'سفر إرميا')
  },
  {
    id: 'lamentations',
    name: { ar: 'سفر مراثي إرميا', en: 'Book of Lamentations', ru: 'Книга Плача Иеремии' },
    subtitle: { ar: 'رثاء أورشليم', en: 'Lament over Jerusalem', ru: 'Плач об Иерусалиме' },
    testament: 'old',
    author: { ar: 'إرميا النبي', en: 'Prophet Jeremiah', ru: 'Пророк Иеремия' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Jeremiah',
    summary: { 
      ar: 'خمس قصائد رثاء حزينة على دمار أورشليم والهيكل. تظهر بشاعة الخطية ونتائجها، ولكن وسط الحزن يشرق الرجاء في مراحم الله التي "جديدة في كل صباح". الكنيسة القبطية تصليها في أسبوع الآلام كتعبير عن الحزن على الخطية التي سببت صلب المسيح.', 
      en: 'Five sorrowful dirges over the destruction of Jerusalem and the Temple. Shows the horror of sin and its consequences, but amidst the sorrow, hope shines in God\'s mercies which are "new every morning." The Coptic Church prays it during Holy Week as an expression of sorrow for sin which caused Christ\'s crucifixion.', 
      ru: 'Пять скорбных плачей о разрушении Иерусалима и Храма. Показывает ужас греха и его последствий, но среди скорби сияет надежда на милость Божию, которая "обновляется каждое утро". Коптская Церковь молится ею на Страстной седмице как выражение скорби о грехе, ставшем причиной распятия Христа.' 
    },
    keyPoints: { 
      ar: ['رثاء دمار أورشليم', 'الخطية ونتائجها', 'مراحم الله جديدة', 'الرجاء وسط الألم', 'تقرأ في أسبوع الآلام'], 
      en: ['Lamenting Jerusalem\'s Fall', 'Sin & Its Consequences', 'God\'s Mercies are New', 'Hope Amidst Suffering', 'Read During Holy Week'], 
      ru: ['Плач о разрушении Иерусалима', 'Грех и его последствия', 'Милость Божия обновляется', 'Надежда среди страданий', 'Читается на Страстной седмице'] 
    },
    systemPrompt: createSystemPrompt('إرميا النبي', 'سفر مراثي إرميا')
  },
  {
    id: 'baruch',
    name: { ar: 'سفر باروخ', en: 'Book of Baruch', ru: 'Книга пророка Варуха' },
    subtitle: { ar: 'التوبة في السبي', en: 'Repentance in Exile', ru: 'Покаяние в изгнании' },
    testament: 'old',
    author: { ar: 'باروخ تلميذ إرميا', en: 'Baruch, disciple of Jeremiah', ru: 'Варух, ученик Иеремии' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Baruch',
    summary: { 
      ar: 'رسالة من باروخ إلى المسبيين في بابل، تحتوي على صلاة اعتراف وتوبة، مديح للحكمة (التي هي الشريعة والمسيح)، ورسالة تعزية ووعد بالعودة. يتضمن "رسالة إرميا" (الأصحاح 6) كتحذير قوي ضد عبادة الأوثان.', 
      en: 'A letter from Baruch to the exiles in Babylon, containing a prayer of confession and repentance, praise for Wisdom (which is the Law and Christ), and a message of comfort and promise of return. Includes the "Letter of Jeremiah" (Ch 6) as a strong warning against idolatry.', 
      ru: 'Послание Варуха к изгнанникам в Вавилоне, содержащее молитву исповедания и покаяния, хвалу Премудрости (которая есть Закон и Христос) и весть утешения и обетования о возвращении. Включает "Послание Иеремии" (Гл 6) как сильное предостережение против идолопоклонства.' 
    },
    keyPoints: { 
      ar: ['صلاة اعتراف', 'التوبة والرجاء', 'الحكمة هي الشريعة', 'نهاية عبادة الأوثان (رسالة إرميا)', 'وعد بالعودة'], 
      en: ['Prayer of Confession', 'Repentance & Hope', 'Wisdom is the Law', 'Futility of Idols (Letter of Jer)', 'Promise of Return'], 
      ru: ['Молитва исповедания', 'Покаяние и надежда', 'Премудрость есть Закон', 'Тщетность идолов (Послание Иер)', 'Обетование о возвращении'] 
    },
    systemPrompt: createSystemPrompt('باروخ النبي', 'سفر باروخ')
  },
  {
    id: 'ezekiel',
    name: { ar: 'سفر حزقيال', en: 'Book of Ezekiel', ru: 'Книга пророка Иезекииля' },
    subtitle: { ar: 'النبي في السبي ومجد الله', en: 'Prophet in Exile & God\'s Glory', ru: 'Пророк в изгнании и Слава Божия' },
    testament: 'old',
    author: { ar: 'حزقيال النبي', en: 'Prophet Ezekiel', ru: 'Пророк Иезекииль' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Ezekiel',
    summary: { 
      ar: 'خدمة حزقيال الكاهن بين المسبيين في بابل. رأى مجد الله يفارق الهيكل، وتنبأ بدمار أورشليم. لكنه أيضاً قدم رجاءً عظيماً: نبوة العظام اليابسة (رمز للقيامة والمعمودية)، والقلب الجديد والروح الجديد، ورؤيا الهيكل الجديد (رمز الكنيسة والسماء).', 
      en: 'Ezekiel the priest\'s ministry among exiles in Babylon. He saw God\'s glory depart the Temple and prophesied Jerusalem\'s destruction. But he also gave great hope: prophecy of dry bones (type of resurrection and baptism), the new heart and new spirit, and the vision of the new Temple (type of the Church and heaven).', 
      ru: 'Служение Иезекииля, священника, среди изгнанников в Вавилоне. Он видел, как слава Божия покинула Храм, и проророчествовал о разрушении Иерусалима. Но он также дал великую надежду: пророчество о сухих костях (прообраз воскресения и крещения), новое сердце и новый дух, и видение нового Храма (прообраз Церкви и неба).' 
    },
    keyPoints: { 
      ar: ['رؤيا المركبة النارية', 'مفارقة مجد الله', 'العظام اليابسة (القيامة)', 'القلب الجديد والروح الجديد', 'الهيكل الجديد والمياه الحية'], 
      en: ['Vision of Fiery Chariot', 'Glory Departs Temple', 'Dry Bones (Resurrection)', 'New Heart & New Spirit', 'New Temple & Living Water'], 
      ru: ['Видение огненной колесницы', 'Слава покидает Храм', 'Сухие кости (Воскресение)', 'Новое сердце и новый дух', 'Новый Храм и живая вода'] 
    },
    systemPrompt: createSystemPrompt('حزقيال النبي', 'سفر حزقيال')
  },
  {
    id: 'daniel',
    name: { ar: 'سفر دانيال', en: 'Book of Daniel', ru: 'Книга пророка Даниила' },
    subtitle: { ar: 'الله ضابط التاريخ', en: 'God Controls History', ru: 'Бог управляет историей' },
    testament: 'old',
    author: { ar: 'دانيال النبي', en: 'Prophet Daniel', ru: 'Пророк Даниил' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Daniel',
    summary: { 
      ar: 'قصص دانيال والفتية الثلاثة في بابل، تظهر أمانتهم لله وسط عبادة الأوثان (أتون النار، جب الأسود - رموز للقيامة والمعمودية). الجزء الثاني رؤى نبوية عن الممالك الأرضية ومجيء "ابن الإنسان" (المسيح) وملكوته الأبدي. يتضمن تسبيحة الفتية وسوسنة وبل والتنين (الأجزاء القانونية).', 
      en: 'Stories of Daniel and the three youths in Babylon, showing their faithfulness to God amidst idolatry (fiery furnace, lions\' den - types of resurrection and baptism). Second part has prophetic visions of earthly kingdoms and the coming of the "Son of Man" (Christ) and His eternal kingdom. Includes Song of Three Children, Susanna, and Bel & Dragon (Deuterocanonical parts).', 
      ru: 'Истории Даниила и трех отроков в Вавилоне, показывающие их верность Богу среди идолопоклонства (огненная печь, львиный ров - прообразы воскресения и крещения). Вторая часть содержит пророческие видения о земных царствах и пришествии "Сына Человеческого" (Христа) и Его вечного царства. Включает Песнь трех отроков, Сусанну, Вила и Дракона (Второканонические части).' 
    },
    keyPoints: { 
      ar: ['الفتية الثلاثة في الأتون', 'دانيال في جب الأسود', 'رؤيا "ابن الإنسان"', 'نبوة الأسابيع السبعين', 'تسبيحة الفتية (قانوني)'], 
      en: ['Three Youths in Furnace', 'Daniel in Lions\' Den', 'Vision of "Son of Man"', 'Prophecy of Seventy Weeks', 'Song of Three Children (Canon)'], 
      ru: ['Три отрока в печи', 'Даниил во рву львином', 'Видение "Сына Человеческого"', 'Пророчество о семидесяти седминах', 'Песнь трех отроков (Канон)'] 
    },
    systemPrompt: createSystemPrompt('دانيال النبي', 'سفر دانيال')
  },

  // OLD TESTAMENT - Minor Prophets - 12 Books
  {
    id: 'hosea',
    name: { ar: 'سفر هوشع', en: 'Book of Hosea', ru: 'Книга пророка Осии' },
    subtitle: { ar: 'الله العريس الوفي', en: 'God the Faithful Husband', ru: 'Бог - верный Супруг' },
    testament: 'old',
    author: { ar: 'هوشع النبي', en: 'Prophet Hosea', ru: 'Пророк Осия' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Hosea',
    summary: { 
      ar: 'يستخدم هوشع زواجه من امرأة زانية (جومر) كرمز حي لخيانة إسرائيل (الشعب) لله (العريس)، ومحبة الله الفائقة التي تظل تطلب عودة شعبه الخائن وتصفح عنه. "أخطبك لنفسي إلى الأبد".', 
      en: 'Hosea uses his marriage to an adulterous woman (Gomer) as a living symbol of Israel\'s (people\'s) betrayal of God (the Bridegroom), and God\'s supreme love that keeps seeking the return of His unfaithful people and forgives them. "I will betroth you to Me forever."', 
      ru: 'Осия использует свой брак с блудницей (Гомерь) как живой символ измены Израиля (народа) Богу (Жениху) и высшей любви Бога, Который продолжает искать возвращения Своего неверного народа и прощает его. "И обручу тебя Мне навек".' 
    },
    keyPoints: { 
      ar: ['جومر الزانية (رمز إسرائيل)', 'محبة الله العجيبة', 'الخيانة والرحمة', 'نبوة عن القيامة في اليوم الثالث', '"أريد رحمة لا ذبيحة"'], 
      en: ['Gomer the Adulteress (Symbol of Israel)', 'God\'s Amazing Love', 'Betrayal & Mercy', 'Prophecy of 3rd Day Resurrection', '"I desire mercy, not sacrifice"'], 
      ru: ['Гомерь блудница (символ Израиля)', 'Удивительная любовь Бога', 'Измена и милость', 'Пророчество о воскресении в 3-й день', '"Милости хочу, а не жертвы"'] 
    },
    systemPrompt: createSystemPrompt('هوشع النبي', 'سفر هوشع')
  },
  {
    id: 'joel',
    name: { ar: 'سفر يوئيل', en: 'Book of Joel', ru: 'Книга пророка Иоиля' },
    subtitle: { ar: 'يوم الرب والروح القدس', en: 'Day of the LORD & Holy Spirit', ru: 'День Господень и Дух Святой' },
    testament: 'old',
    author: { ar: 'يوئيل النبي', en: 'Prophet Joel', ru: 'Пророк Иоиль' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Joel',
    summary: { 
      ar: 'يبدأ بكارثة الجراد (رمز للدينونة) ويدعو للتوبة القلبية ("مزقوا قلوبكم لا ثيابكم"). يتنبأ عن "يوم الرب" العظيم، والأهم، يطلق النبوة العظيمة عن سكب الروح القدس "على كل بشر" (يوء 2)، التي تحققت يوم الخمسين.', 
      en: 'Begins with a locust plague (symbol of judgment) and calls for heartfelt repentance ("Rend your heart, not your garments"). Prophesies the great "Day of the LORD," and most importantly, gives the great prophecy of the outpouring of the Holy Spirit "on all flesh" (Joel 2), fulfilled on Pentecost.', 
      ru: 'Начинается с нашествия саранчи (символ суда) и призывает к сердечному покаянию ("Раздирайте сердца ваши, а не одежды"). Пророчествует о великом "Дне Господнем" и, самое главное, дает великое пророчество об излиянии Святого Духа "на всякую плоть" (Иоиль 2), исполнившееся в Пятидесятницу.' 
    },
    keyPoints: { 
      ar: ['كارثة الجراد', 'التوبة القلبية', 'يوم الرب', 'سكب الروح القدس (يوم الخمسين)', 'وعد بالخلاص'], 
      en: ['Locust Plague', 'Heartfelt Repentance', 'Day of the LORD', 'Outpouring of Holy Spirit (Pentecost)', 'Promise of Salvation'], 
      ru: ['Нашествие саранчи', 'Сердечное покаяние', 'День Господень', 'Излияние Святого Духа (Пятидесятница)', 'Обетование спасения'] 
    },
    systemPrompt: createSystemPrompt('يوئيل النبي', 'سفر يوئيل')
  },
  {
    id: 'amos',
    name: { ar: 'سفر عاموس', en: 'Book of Amos', ru: 'Книга пророка Амоса' },
    subtitle: { ar: 'العدالة الاجتماعية', en: 'Social Justice', ru: 'Социальная справедливость' },
    testament: 'old',
    author: { ar: 'عاموس النبي', en: 'Prophet Amos', ru: 'Пророк Амос' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Amos',
    summary: { 
      ar: 'عاموس، راعي الغنم، يُرسل لينادي بالدينونة ضد الظلم الاجتماعي، ترف الأغنياء، وقمع الفقراء. يشدد على أن العبادة الشكلية لا قيمة لها بدون عدل ورحمة. "ليجر الحق كمياه، والبر كنهر دائم".', 
      en: 'Amos, the shepherd, is sent to preach judgment against social injustice, luxury of the rich, and oppression of the poor. Emphasizes that formal worship is worthless without justice and mercy. "Let justice roll down like waters, and righteousness like an ever-flowing stream."', 
      ru: 'Амос, пастух, послан проповедовать суд против социальной несправедливости, роскоши богатых и угнетения бедных. Подчеркивает, что формальное поклонение бесполезно без справедливости и милосердия. "Пусть, как вода, течет суд, и правда - как сильный поток!"' 
    },
    keyPoints: { 
      ar: ['العدالة الاجتماعية', 'الدينونة على الظلم', 'العبادة الشكلية', 'الله يطلب الحق والرحمة', 'وعد بالإصلاح المستقبلي'], 
      en: ['Social Justice', 'Judgment on Injustice', 'Formal Worship', 'God Desires Justice & Mercy', 'Promise of Future Restoration'], 
      ru: ['Социальная справедливость', 'Суд над несправедливостью', 'Формальное поклонение', 'Бог желает суда и милости', 'Обетование о будущем восстановлении'] 
    },
    systemPrompt: createSystemPrompt('عاموس النبي', 'سفر عاموس')
  },
  {
    id: 'obadiah',
    name: { ar: 'سفر عوبديا', en: 'Book of Obadiah', ru: 'Книга пророка Авдия' },
    subtitle: { ar: 'الدينونة على أدوم', en: 'Judgment on Edom', ru: 'Суд над Эдомом' },
    testament: 'old',
    author: { ar: 'عوبديا النبي', en: 'Prophet Obadiah', ru: 'Пророк Авдий' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Obadiah',
    summary: { 
      ar: 'أقصر سفر في العهد القديم. نبوة بالدينونة على أمة أدوم (نسل عيسو) بسبب كبريائهم وشماتتهم في سقوط إخوتهم (يعقوب/إسرائيل). ينتهي بوعد بانتصار "جبل صهيون" (الكنيسة) و "يكون المُلك للرب".', 
      en: 'Shortest book in the Old Testament. Prophecy of judgment on Edom (descendants of Esau) for their pride and gloating over their brother\'s (Jacob/Israel\'s) fall. Ends with promise of "Mount Zion\'s" (the Church\'s) victory and "the kingdom shall be the LORD\'s."', 
      ru: 'Самая короткая книга Ветхого Завета. Пророчество о суде над Эдомом (потомками Исава) за их гордость и злорадство при падении их брата (Иакова/Израиля). Заканчивается обетованием победы "горы Сиона" (Церкви) и "будет Царство Господа".' 
    },
    keyPoints: { 
      ar: ['الدينونة على أدوم', 'خطية الكبرياء', 'الشماتة في الإخوة', 'يوم الرب', 'المُلك للرب'], 
      en: ['Judgment on Edom', 'Sin of Pride', 'Gloating over Brother', 'Day of the LORD', 'Kingdom shall be LORD\'s'], 
      ru: ['Суд над Эдомом', 'Грех гордости', 'Злорадство над братом', 'День Господень', 'Царство будет Господа'] 
    },
    systemPrompt: createSystemPrompt('عوبديا النبي', 'سفر عوبديا')
  },
  {
    id: 'jonah',
    name: { ar: 'سفر يونان', en: 'Book of Jonah', ru: 'Книга пророка Ионы' },
    subtitle: { ar: 'رحمة الله للأمم', en: 'God\'s Mercy to Gentiles', ru: 'Милость Божия к язычникам' },
    testament: 'old',
    author: { ar: 'يونان النبي', en: 'Prophet Jonah', ru: 'Пророк Иона' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Jonah',
    summary: { 
      ar: 'قصة يونان النبي الهارب من دعوة الله للكرازة لنينوى (الأمم). يظهر السفر رحمة الله الشاملة للجميع، حتى الأعداء، إذا تابوا. مكوث يونان في بطن الحوت 3 أيام و 3 ليال هو أوضح رمز لموت المسيح ودفنه وقيامته في اليوم الثالث (مت 12: 40).', 
      en: 'Story of Jonah the prophet fleeing God\'s call to preach to Nineveh (Gentiles). Shows God\'s universal mercy for all, even enemies, if they repent. Jonah\'s 3 days and 3 nights in the fish\'s belly is the clearest type of Christ\'s death, burial, and resurrection on the third day (Matt 12:40).', 
      ru: 'История пророка Ионы, бежавшего от Божьего призыва проповедовать Ниневии (язычникам). Показывает всеобщую милость Божию ко всем, даже к врагам, если они покаются. Пребывание Ионы во чреве кита 3 дня и 3 ночи - самый ясный прообраз смерти, погребения и воскресения Христа на третий день (Мф 12:40).' 
    },
    keyPoints: { 
      ar: ['هروب يونان', 'يونان في بطن الحوت (رمز للمسيح)', 'توبة نينوى', 'رحمة الله الشاملة', 'غضب يونان'], 
      en: ['Jonah\'s Flight', 'Jonah in Fish\'s Belly (Type of Christ)', 'Nineveh\'s Repentance', 'God\'s Universal Mercy', 'Jonah\'s Anger'], 
      ru: ['Бегство Ионы', 'Иона во чреве кита (прообраз Христа)', 'Покаяние Ниневии', 'Всеобщая милость Божия', 'Гнев Ионы'] 
    },
    systemPrompt: createSystemPrompt('يونان النبي', 'سفر يونان')
  },
  {
    id: 'micah',
    name: { ar: 'سفر ميخا', en: 'Book of Micah', ru: 'Книга пророка Михея' },
    subtitle: { ar: 'نبوة بيت لحم', en: 'Bethlehem Prophecy', ru: 'Пророчество о Вифлееме' },
    testament: 'old',
    author: { ar: 'ميخا النبي', en: 'Prophet Micah', ru: 'Пророк Михей' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Micah',
    summary: { 
      ar: 'مثل عاموس، يدين الظلم الاجتماعي. يقدم ملخصاً للشريعة: "أن تصنع الحق وتحب الرحمة وتسلك متواضعاً مع إلهك". والأهم، يتنبأ بالمكان المحدد لميلاد المسيح: "وأنت يا بيت لحم... منك يخرج لي الذي يكون متسلطاً" (مي 5: 2).', 
      en: 'Like Amos, condemns social injustice. Gives summary of the Law: "To do justly, love mercy, and walk humbly with your God." Most importantly, prophesies the exact birthplace of Christ: "But you, Bethlehem... out of you shall come forth to Me The One to be Ruler" (Mic 5:2).', 
      ru: 'Подобно Амосу, осуждает социальную несправедливость. Дает краткое изложение Закона: "Действовать справедливо, любить дела милосердия и смиренномудренно ходить пред Богом твоим". Самое главное, пророчествует о точном месте рождения Христа: "И ты, Вифлеем... из тебя произойдет Мне Тот, Который должен быть Владыкою" (Мих 5:2).' 
    },
    keyPoints: { 
      ar: ['الدينونة على الظلم', 'ميلاد المسيح في بيت لحم (مي 5: 2)', '"اصنع الحق وأحب الرحمة"', 'التواضع مع الله', 'وعد بالخلاص'], 
      en: ['Judgment on Injustice', 'Christ\'s Birth in Bethlehem (Mic 5:2)', '"Do Justly, Love Mercy"', 'Walk Humbly with God', 'Promise of Salvation'], 
      ru: ['Суд над несправедливостью', 'Рождение Христа в Вифлееме (Мих 5:2)', '"Действовать справедливо, любить милость"', 'Смиренномудренно ходить пред Богом', 'Обетование спасения'] 
    },
    systemPrompt: createSystemPrompt('ميخا النبي', 'سفر ميخا')
  },
  {
    id: 'nahum',
    name: { ar: 'سفر ناحوم', en: 'Book of Nahum', ru: 'Книга пророка Наума' },
    subtitle: { ar: 'الدينونة على نينوى', en: 'Judgment on Nineveh', ru: 'Суд над Ниневией' },
    testament: 'old',
    author: { ar: 'ناحوم النبي', en: 'Prophet Nahum', ru: 'Пророк Наум' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Nahum',
    summary: { 
      ar: 'بعد 150 سنة من توبة نينوى (أيام يونان)، عادت لشرها. سفر ناحوم هو نبوة بدمارها الحتمي. يظهر وجه الله الآخر: العدالة. الله رحيم بالتابعين، لكنه أيضاً عادل وديان للأشرار غير التائبين. "الرب غيور ومنتقم".', 
      en: '150 years after Nineveh\'s repentance (Jonah\'s time), it returned to evil. Nahum is a prophecy of its inevitable destruction. Shows God\'s other face: Justice. God is merciful to the repentant, but also a just Judge of unrepentant evil. "God is jealous, and the LORD revengeth."', 
      ru: 'Через 150 лет после покаяния Ниневии (во времена Ионы) она вернулась ко злу. Книга Наума - пророчество о ее неминуемом разрушении. Показывает другую сторону Бога: Справедливость. Бог милостив к кающимся, но также и справедливый Судья нераскаявшегося зла. "Господь есть Бог ревнитель и мститель".' 
    },
    keyPoints: { 
      ar: ['سقوط نينوى الحتمي', 'عدالة الله', 'الله ديان', 'الله ملجأ في يوم الضيق', 'الرب غيور ومنتقم'], 
      en: ['Inevitable Fall of Nineveh', 'God\'s Justice', 'God the Judge', 'LORD is stronghold in trouble', 'God is Jealous & Avenger'], 
      ru: ['Неминуемое падение Ниневии', 'Справедливость Бога', 'Бог - Судья', 'Господь - прибежище в день скорби', 'Господь - Бог ревнитель и мститель'] 
    },
    systemPrompt: createSystemPrompt('ناحوم النبي', 'سفر ناحوم')
  },
  {
    id: 'habakkuk',
    name: { ar: 'سفر حبقوق', en: 'Book of Habakkuk', ru: 'Книга пророка Аввакума' },
    subtitle: { ar: 'من الشك إلى الإيمان', en: 'From Doubt to Faith', ru: 'От сомнения к вере' },
    testament: 'old',
    author: { ar: 'حبقوق النبي', en: 'Prophet Habakkuk', ru: 'Пророк Аввакум' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Habakkuk',
    summary: { 
      ar: 'حوار بين النبي حبقوق والله. يتساءل النبي: "لماذا تسمح بالشر؟" والله يجيب أن الدينونة آتية (عن طريق البابليين). ينتهي السفر بتسبيحة إيمان رائعة: "فإني أبتهج بالرب وأفرح بإله خلاصي". يعلمنا أن نثق بالله حتى وسط الظلام.', 
      en: 'A dialogue between Prophet Habakkuk and God. The prophet asks: "Why do You allow evil?" God answers judgment is coming (via Babylonians). The book ends with a magnificent hymn of faith: "Yet I will rejoice in the LORD, I will joy in the God of my salvation." Teaches us to trust God even in darkness.', 
      ru: 'Диалог между пророком Аввакумом и Богом. Пророк спрашивает: "Почему Ты допускаешь зло?" Бог отвечает, что грядет суд (через вавилонян). Книга заканчивается великолепным гимном веры: "Но и тогда я буду радоваться о Господе и веселиться о Боге спасения моего". Учит нас доверять Богу даже во тьме.' 
    },
    keyPoints: { 
      ar: ['سؤال "لماذا؟"', '"البار بإيمانه يحيا"', 'الدينونة على بابل', 'تسبيحة إيمان', 'الابتهاج بالرب'], 
      en: ['The "Why?" Question', '"The just shall live by his faith"', 'Judgment on Babylon', 'Hymn of Faith', 'Rejoicing in the LORD'], 
      ru: ['Вопрос "Почему?"', '"Праведный верою жив будет"', 'Суд над Вавилоном', 'Гимн веры', 'Радость о Господе'] 
    },
    systemPrompt: createSystemPrompt('حبقوق النبي', 'سفر حبقوق')
  },
  {
    id: 'zephaniah',
    name: { ar: 'سفر صفنيا', en: 'Book of Zephaniah', ru: 'Книга пророка Софонии' },
    subtitle: { ar: 'يوم الرب والدعوة للتواضع', en: 'Day of the LORD & Call to Humility', ru: 'День Господень и призыв к смирению' },
    testament: 'old',
    author: { ar: 'صفنيا النبي', en: 'Prophet Zephaniah', ru: 'Пророк Софония' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Zephaniah',
    summary: { 
      ar: 'يركز على "يوم الرب" العظيم والمخوف، كدينونة شاملة على يهوذا والأمم. لكنه يدعو "بقية" متواضعة للبحث عن الرب. ينتهي بوعد مجيد بالخلاص والفرح، حيث "الرب إلهك في وسطك... يبتهج بك فرحاً".', 
      en: 'Focuses on the great and terrible "Day of the LORD" as a universal judgment on Judah and nations. But calls a humble "remnant" to seek the LORD. Ends with a glorious promise of salvation and joy, where "The LORD your God in your midst... He will rejoice over you with gladness."', 
      ru: 'Сосредоточен на великом и страшном "Дне Господнем" как всеобщем суде над Иудеей и народами. Но призывает смиренный "остаток" искать Господа. Заканчивается славным обетованием спасения и радости, где "Господь Бог твой среди тебя... Он будет веселиться о тебе с ликованием".' 
    },
    keyPoints: { 
      ar: ['يوم الرب المخوف', 'الدينونة على الخطية', 'دعوة للتواضع', 'البقية المؤمنة', 'الرب يبتهج بشعبه'], 
      en: ['Terrible Day of the LORD', 'Judgment on Sin', 'Call to Humility', 'The Faithful Remnant', 'LORD Rejoices Over His People'], 
      ru: ['Страшный День Господень', 'Суд над грехом', 'Призыв к смирению', 'Верный остаток', 'Господь веселится о народе Своем'] 
    },
    systemPrompt: createSystemPrompt('صفنيا النبي', 'سفر صفنيا')
  },
  {
    id: 'haggai',
    name: { ar: 'سفر حجي', en: 'Book of Haggai', ru: 'Книга пророка Аггея' },
    subtitle: { ar: 'إعادة بناء الهيكل', en: 'Rebuilding the Temple', ru: 'Восстановление Храма' },
    testament: 'old',
    author: { ar: 'حجي النبي', en: 'Prophet Haggai', ru: 'Пророк Аггей' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Haggai',
    summary: { 
      ar: 'بعد العودة من السبي، توقف الشعب عن بناء الهيكل واهتموا ببيوتهم. حجي يوبخهم ويشجعهم على إعطاء الأولوية لبيت الله. يعد بأن "مجد هذا البيت الأخير يكون أعظم من الأول"، في إشارة للمسيح الذي سيدخل هذا الهيكل.', 
      en: 'After returning from exile, the people stopped building the Temple and focused on their own houses. Haggai rebukes them and encourages them to prioritize God\'s house. Promises "The glory of this latter temple shall be greater than the former," referring to Christ who would enter this Temple.', 
      ru: 'Вернувшись из плена, народ перестал строить Храм и сосредоточился на своих домах. Аггей упрекает их и призывает сделать приоритетом дом Божий. Обещает, что "Слава сего последнего храма будет больше, нежели прежнего", имея в виду Христа, Который войдет в этот Храм.' 
    },
    keyPoints: { 
      ar: ['الأولوية لبيت الله', 'تشجيع زربابل ويشوع', 'مجد البيت الأخير (المسيح)', 'هزيمة الأمم', 'العمل في بيت الرب'], 
      en: ['Priority of God\'s House', 'Encouraging Zerubbabel & Joshua', 'Glory of Latter House (Christ)', 'Shaking of Nations', 'Work on God\'s House'], 
      ru: ['Приоритет дома Божия', 'Ободрение Зоровавеля и Иисуса', 'Слава последнего храма (Христос)', 'Сотрясение народов', 'Работа над домом Божиим'] 
    },
    systemPrompt: createSystemPrompt('حجي النبي', 'سفر حجي')
  },
  {
    id: 'zechariah',
    name: { ar: 'سفر زكريا', en: 'Book of Zechariah', ru: 'Книга пророка Захарии' },
    subtitle: { ar: 'رؤى المسيح الملك الكاهن', en: 'Visions of Christ King-Priest', ru: 'Видения о Христе Царе-Священнике' },
    testament: 'old',
    author: { ar: 'زكريا النبي', en: 'Prophet Zechariah', ru: 'Пророк Захария' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Zechariah',
    summary: { 
      ar: 'معاصر لحجي، يشجع الشعب برؤى ليلية رمزية. مليء بالنبوات المسيانية الواضحة: المسيح الكاهن والملك (يشوع وزربابل)، دخوله أورشليم "وديعاً وراكباً على أتان"، بيعه بـ 30 من الفضة، طعنه، ومجيئه الثاني بمجد.', 
      en: 'Contemporary of Haggai, encourages people with symbolic night visions. Filled with clear Messianic prophecies: Christ as Priest and King (Joshua & Zerubbabel), His entry into Jerusalem "lowly and riding on a donkey," being sold for 30 pieces of silver, His piercing, and His second glorious coming.', 
      ru: 'Современник Аггея, ободряет народ символическими ночными видениями. Наполнен ясными мессианскими пророчествами: Христос как Священник и Царь (Иисус и Зоровавель), Его вход в Иерусалим "кроткий, сидящий на ослице", Его продажа за 30 сребреников, Его пронзение и Его второе славное пришествие.' 
    },
    keyPoints: { 
      ar: ['رؤى ليلية', 'دخول المسيح أورشليم', '30 من الفضة', 'نبوة عن الراعي المطعون', 'الملك الكاهن'], 
      en: ['Night Visions', 'Christ\'s Entry to Jerusalem', '30 Pieces of Silver', 'Prophecy of Pierced Shepherd', 'King-Priest'], 
      ru: ['Ночные видения', 'Вход Христа в Иерусалим', '30 сребреников', 'Пророчество о пронзенном Пастыре', 'Царь-Священник'] 
    },
    systemPrompt: createSystemPrompt('زكريا النبي', 'سفر زكريا')
  },
  {
    id: 'malachi',
    name: { ar: 'سفر ملاخي', en: 'Book of Malachi', ru: 'Книга пророка Малахии' },
    subtitle: { ar: 'خاتمة العهد القديم', en: 'Conclusion of Old Testament', ru: 'Завершение Ветхого Завета' },
    testament: 'old',
    author: { ar: 'ملاخي النبي', en: 'Prophet Malachi', ru: 'Пророк Малахия' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Malachi',
    summary: { 
      ar: 'آخر أسفار العهد القديم. يوبخ الكهنة والشعب على فتورهم وعبادتهم الشكلية وتقديمهم "تقدمة نجسة". يتنبأ عن مجيء "ملاك العهد" (المسيح) الذي يطهر الهيكل، ويسبقه "إيليا" (يوحنا المعمدان). "شمس البر" تشرق والشفاء في أجنحتها.', 
      en: 'Last book of the Old Testament. Rebukes priests and people for their lukewarmness, formal worship, and offering "polluted bread." Prophesies the coming of the "Messenger of the Covenant" (Christ) who will purify the Temple, preceded by "Elijah" (John the Baptist). The "Sun of Righteousness" will arise with healing in His wings.', 
      ru: 'Последняя книга Ветхого Завета. Упрекает священников и народ за их теплохладность, формальное поклонение и принесение "нечистого хлеба". Пророчествует о пришествии "Ангела Завета" (Христа), Который очистит Храм, и Которому предшествует "Илия" (Иоанн Креститель). "Солнце правды" взойдет, и исцеление в лучах Его.' 
    },
    keyPoints: { 
      ar: ['توبيخ الكهنة', 'العبادة الشكلية', 'شمس البر (المسيح)', 'مجيء إيليا (يوحنا المعمدان)', 'يوم الرب والدينونة'], 
      en: ['Rebuke of Priests', 'Formal Worship', 'Sun of Righteousness (Christ)', 'Coming of Elijah (John the Baptist)', 'Day of the LORD & Judgment'], 
      ru: ['Упрек священникам', 'Формальное поклонение', 'Солнце правды (Христос)', 'Пришествие Илии (Иоанн Креститель)', 'День Господень и Суд'] 
    },
    systemPrompt: createSystemPrompt('ملاخي النبي', 'سفر ملاخي')
  },

  // NEW TESTAMENT - Gospels (4 Books)
  {
    id: 'matthew',
    name: { ar: 'إنجيل متى', en: 'Gospel of Matthew', ru: 'Евангелие от Матфея' },
    subtitle: { ar: 'المسيح الملك', en: 'Christ the King', ru: 'Христос Царь' },
    testament: 'new',
    author: { ar: 'متى العشار', en: 'Matthew the Tax Collector', ru: 'Матфей мытарь' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Matthew',
    summary: {
      ar: 'كتب لليهود ليثبت أن يسوع هو المسيح ابن داود. يركز على ملكوت السماوات والموعظة على الجبل.',
      en: 'Written for Jews to prove Jesus is Messiah, Son of David. Focuses on Kingdom of Heaven and Sermon on Mount.',
      ru: 'Написано для евреев, чтобы доказать, что Иисус - Мессия, Сын Давида. Сосредоточено на Царствии Небесном.'
    },
    keyPoints: { ar: ['الموعظة على الجبل', 'أمثال الملكوت'], en: ['Sermon on Mount', 'Kingdom Parables'], ru: ['Нагорная проповедь', 'Притчи о Царствии'] },
    systemPrompt: createSystemPrompt('القديس متى', 'إنجيل متى')
  },
  {
    id: 'mark',
    name: { ar: 'إنجيل مرقس', en: 'Gospel of Mark', ru: 'Евангелие от Марка' },
    subtitle: { ar: 'المسيح الخادم', en: 'Christ the Servant', ru: 'Христос Слуга' },
    testament: 'new',
    author: { ar: 'مرقس الرسول', en: 'Mark the Apostle', ru: 'Марк Апостол' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Mark',
    summary: {
      ar: 'إنجيل الكنيسة القبطية. سريع وموجز، يركز على معجزات المسيح وسلطانه على الشياطين أكثر من أقواله.',
      en: 'Gospel of Coptic Church. Fast-paced, focuses on Christ\'s miracles and authority over demons more than words.',
      ru: 'Евангелие Коптской Церкви. Динамичное, сосредоточено на чудесах Христа и власти над демонами.'
    },
    keyPoints: { ar: ['إنجيل المعجزات', 'كلمة "للوقت"'], en: ['Gospel of Miracles', 'Word "Immediately"'], ru: ['Евангелие чудес', 'Слово "Тотчас"'] },
    systemPrompt: createSystemPrompt('القديس مرقس', 'إنجيل مرقس')
  },
  {
    id: 'luke',
    name: { ar: 'إنجيل لوقا', en: 'Gospel of Luke', ru: 'Евангелие от Луки' },
    subtitle: { ar: 'صديق البشر', en: 'Friend of Mankind', ru: 'Друг человечества' },
    testament: 'new',
    author: { ar: 'لوقا الطبيب', en: 'Luke the Physician', ru: 'Лука Врач' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Luke',
    summary: {
      ar: 'كتب للأمم. يركز على رحمة المسيح للمنبوذين والفقراء والمرأة. يحوي أمثالاً فريدة (الابن الضال).',
      en: 'Written for Gentiles. Focuses on Christ\'s mercy to outcasts, poor, and women. Unique parables (Prodigal Son).',
      ru: 'Для язычников. Сосредоточено на милосердии Христа к изгоям и бедным. Уникальные притчи (Блудный сын).'
    },
    keyPoints: { ar: ['الابن الضال', 'السامري الصالح'], en: ['Prodigal Son', 'Good Samaritan'], ru: ['Блудный сын', 'Добрый самаритянин'] },
    systemPrompt: createSystemPrompt('القديس لوقا', 'إنجيل لوقا')
  },
  {
    id: 'john',
    name: { ar: 'إنجيل يوحنا', en: 'Gospel of John', ru: 'Евангелие от Иоанна' },
    subtitle: { ar: 'ابن الله', en: 'Son of God', ru: 'Сын Божий' },
    testament: 'new',
    author: { ar: 'يوحنا الحبيب', en: 'John the Beloved', ru: 'Иоанн Богослов' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=John',
    summary: {
      ar: 'إنجيل لاهوتي يثبت ألوهية المسيح ("في البدء كان الكلمة"). يركز على أحاديث المسيح اللاهوتية.',
      en: 'Theological Gospel proving Christ\'s Divinity ("In beginning was the Word"). Focuses on theological discourses.',
      ru: 'Богословское Евангелие, доказывающее Божество Христа. Сосредоточено на богословских беседах.'
    },
    keyPoints: { ar: ['الكلمة صار جسداً', 'أنا هو'], en: ['Word became Flesh', 'I AM statements'], ru: ['Слово стало плотью', 'Я ЕСМЬ'] },
    systemPrompt: createSystemPrompt('القديس يوحنا', 'إنجيل يوحنا')
  },

  // NEW TESTAMENT - History (1 Book)
  {
    id: 'acts',
    name: { ar: 'سفر أعمال الرسل', en: 'Acts of the Apostles', ru: 'Деяния Апостолов' },
    subtitle: { ar: 'تاريخ الكنيسة', en: 'Church History', ru: 'История Церкви' },
    testament: 'new',
    author: { ar: 'لوقا الطبيب', en: 'Luke the Physician', ru: 'Лука Врач' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Luke',
    summary: {
      ar: 'حلول الروح القدس، تأسيس الكنيسة، وانتشار الإنجيل من أورشليم إلى روما بواسطة بطرس وبولس.',
      en: 'Descent of Holy Spirit, founding of Church, and spread of Gospel from Jerusalem to Rome by Peter and Paul.',
      ru: 'Сошествие Святого Духа, основание Церкви и распространение Евангелия Петром и Павлом.'
    },
    keyPoints: { ar: ['يوم الخمسين', 'رحلات بولس'], en: ['Pentecost', 'Paul\'s Journeys'], ru: ['Пятидесятница', 'Путешествия Павла'] },
    systemPrompt: createSystemPrompt('القديس لوقا', 'سفر أعمال الرسل')
  },

  // NEW TESTAMENT - Pauline Epistles (14 Books)
  {
    id: 'romans',
    name: { ar: 'رسالة رومية', en: 'Romans', ru: 'Римлянам' },
    subtitle: { ar: 'دستور الإيمان', en: 'The Faith Constitution', ru: 'Конституция веры' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'التبرير بالإيمان بالمسيح.', en: 'Justification by faith in Christ.', ru: 'Оправдание верой во Христа.' },
    keyPoints: { ar: ['الخلاص بالإيمان', 'الحياة بالروح'], en: ['Salvation by Faith', 'Life in Spirit'], ru: ['Спасение верой', 'Жизнь в Духе'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة رومية')
  },
  {
    id: '1corinthians',
    name: { ar: 'كورنثوس الأولى', en: '1 Corinthians', ru: '1-е Коринфянам' },
    subtitle: { ar: 'مشاكل الكنيسة', en: 'Church Problems', ru: 'Проблемы Церкви' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'علاج الانقسامات ومواهب الروح.', en: 'Addressing divisions and spiritual gifts.', ru: 'Решение разделений и духовные дары.' },
    keyPoints: { ar: ['المحبة (ص 13)', 'القيامة (ص 15)'], en: ['Love (Ch 13)', 'Resurrection (Ch 15)'], ru: ['Любовь (Гл 13)', 'Воскресение (Гл 15)'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة كورنثوس الأولى')
  },
  {
    id: '2corinthians',
    name: { ar: 'كورنثوس الثانية', en: '2 Corinthians', ru: '2-е Коринфянам' },
    subtitle: { ar: 'خدمة المصالحة', en: 'Ministry of Reconciliation', ru: 'Служение примирения' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'الدفاع عن رسوليته والخدمة.', en: 'Defense of his apostleship and ministry.', ru: 'Защита апостольства и служения.' },
    keyPoints: { ar: ['قوة الله في الضعف', 'المصالحة'], en: ['Power in Weakness', 'Reconciliation'], ru: ['Сила в немощи', 'Примирение'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة كورنثوس الثانية')
  },
  {
    id: 'galatians',
    name: { ar: 'رسالة غلاطية', en: 'Galatians', ru: 'Галатам' },
    subtitle: { ar: 'الحرية المسيحية', en: 'Christian Freedom', ru: 'Христианская свобода' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'التحرر من ناموس العبودية.', en: 'Freedom from the law of bondage.', ru: 'Свобода от закона рабства.' },
    keyPoints: { ar: ['ثمر الروح', 'التبني'], en: ['Fruit of the Spirit', 'Adoption'], ru: ['Плод Духа', 'Усыновление'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة غلاطية')
  },
  {
    id: 'ephesians',
    name: { ar: 'رسالة أفسس', en: 'Ephesians', ru: 'Ефесянам' },
    subtitle: { ar: 'الكنيسة جسد المسيح', en: 'Church Body of Christ', ru: 'Церковь Тело Христово' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'وحدة الكنيسة وسلاح الله الكامل.', en: 'Unity of Church and Armor of God.', ru: 'Единство Церкви и всеоружие Божие.' },
    keyPoints: { ar: ['سلاح الله', 'السر العظيم (الزواج)'], en: ['Armor of God', 'Great Mystery (Marriage)'], ru: ['Всеоружие Божие', 'Великая тайна (Брак)'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة أفسس')
  },
  {
    id: 'philippians',
    name: { ar: 'رسالة فيلبي', en: 'Philippians', ru: 'Филиппийцам' },
    subtitle: { ar: 'رسالة الفرح', en: 'Epistle of Joy', ru: 'Послание радости' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'الفرح في الرب رغم السجن والألم.', en: 'Joy in the Lord despite prison and pain.', ru: 'Радость в Господе, несмотря на тюрьму.' },
    keyPoints: { ar: ['"افرحوا في الرب"', 'إخلاء الذات'], en: ['"Rejoice in the Lord"', 'Kenosis (Self-emptying)'], ru: ['"Радуйтесь в Господе"', 'Кенозис (Самоистощание)'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة فيلبي')
  },
  {
    id: 'colossians',
    name: { ar: 'رسالة كولوسي', en: 'Colossians', ru: 'Колоссянам' },
    subtitle: { ar: 'المسيح رأس الكنيسة', en: 'Christ Head of Church', ru: 'Христос Глава Церкви' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'سمو المسيح وكفايته للخلاص.', en: 'Supremacy of Christ and sufficiency for salvation.', ru: 'Превосходство Христа и достаточность для спасения.' },
    keyPoints: { ar: ['بكر كل خليقة', 'حلول اللاهوت'], en: ['Firstborn of creation', 'Fullness of Deity'], ru: ['Первенец творения', 'Полнота Божества'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة كولوسي')
  },
  {
    id: '1thessalonians',
    name: { ar: 'تسالونيكي الأولى', en: '1 Thessalonians', ru: '1-е Фессалоникийцам' },
    subtitle: { ar: 'المجيء الثاني', en: 'Second Coming', ru: 'Второе пришествие' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'الاستعداد لمجيء الرب.', en: 'Preparation for the Lord\'s coming.', ru: 'Подготовка к пришествию Господа.' },
    keyPoints: { ar: ['اختطاف الكنيسة', 'اسهروا'], en: ['Rapture', 'Watch and be sober'], ru: ['Восхищение Церкви', 'Бодрствуйте'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة تسالونيكي الأولى')
  },
  {
    id: '2thessalonians',
    name: { ar: 'تسالونيكي الثانية', en: '2 Thessalonians', ru: '2-е Фессалоникийцам' },
    subtitle: { ar: 'ظهور ضد المسيح', en: 'Man of Lawlessness', ru: 'Человек греха' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'علامات قبل المجيء الثاني.', en: 'Signs before Second Coming.', ru: 'Знамения перед Вторым пришествием.' },
    keyPoints: { ar: ['الارتداد العام', 'ابن الهلاك'], en: ['Great Apostasy', 'Son of Perdition'], ru: ['Великое отступничество', 'Сын погибели'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة تسالونيكي الثانية')
  },
  {
    id: '1timothy',
    name: { ar: 'تيموثاوس الأولى', en: '1 Timothy', ru: '1-е Тимофею' },
    subtitle: { ar: 'الرعاية الكنسية', en: 'Pastoral Care', ru: 'Пастырское попечение' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'تنظيم الكنيسة وصفات الأسقف.', en: 'Church order and qualifications of bishops.', ru: 'Устройство Церкви и качества епископов.' },
    keyPoints: { ar: ['صفات الأسقف', 'التقوى'], en: ['Bishop qualifications', 'Godliness'], ru: ['Качества епископа', 'Благочестие'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة تيموثاوس الأولى')
  },
  {
    id: '2timothy',
    name: { ar: 'تيموثاوس الثانية', en: '2 Timothy', ru: '2-е Тимофею' },
    subtitle: { ar: 'الوصية الأخيرة', en: 'Last Will', ru: 'Последнее завещание' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'آخر رسالة لبولس قبل استشهاده.', en: 'Paul\'s last letter before martyrdom.', ru: 'Последнее письмо Павла перед мученичеством.' },
    keyPoints: { ar: ['"جاهدت الجهاد الحسن"', 'تمسك بالكتب'], en: ['"Fought the good fight"', 'Hold to Scripture'], ru: ['"Подвигом добрым подвизался"', 'Держись Писания'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة تيموثاوس الثانية')
  },
  {
    id: 'titus',
    name: { ar: 'رسالة تيطس', en: 'Titus', ru: 'Титу' },
    subtitle: { ar: 'الخدمة الناجحة', en: 'Successful Ministry', ru: 'Успешное служение' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'إقامة قسوس وتنظيم الخدمة.', en: 'Appointing elders and organizing ministry.', ru: 'Поставление пресвитеров и организация служения.' },
    keyPoints: { ar: ['الأعمال الحسنة', 'النعمة المخلصة'], en: ['Good works', 'Saving Grace'], ru: ['Добрые дела', 'Спасительная благодать'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة تيطس')
  },
  {
    id: 'philemon',
    name: { ar: 'رسالة فليمون', en: 'Philemon', ru: 'Филимону' },
    subtitle: { ar: 'الغفران والقبول', en: 'Forgiveness', ru: 'Прощение' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'قبول أنسيموس العبد كأخ.', en: 'Accepting Onesimus the slave as a brother.', ru: 'Принятие Онисима раба как брата.' },
    keyPoints: { ar: ['الشفاعة', 'تحرير العبيد روحياً'], en: ['Intercession', 'Spiritual freedom'], ru: ['Ходатайство', 'Духовная свобода'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'رسالة فليمون')
  },
  {
    id: 'hebrews',
    name: { ar: 'الرسالة إلى العبرانيين', en: 'Hebrews', ru: 'Евреям' },
    subtitle: { ar: 'المسيح رئيس الكهنة', en: 'Christ High Priest', ru: 'Христос Первосвященник' },
    testament: 'new',
    author: { ar: 'بولس الرسول', en: 'Paul the Apostle', ru: 'Апостол Павел' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Paul',
    summary: { ar: 'سمو المسيح على الملائكة والكهنوت القديم.', en: 'Christ\'s superiority over angels and old priesthood.', ru: 'Превосходство Христа над ангелами и старым священством.' },
    keyPoints: { ar: ['الكهنوت الأعظم', 'أبطال الإيمان (ص 11)'], en: ['Great High Priest', 'Heroes of Faith (Ch 11)'], ru: ['Великий Первосвященник', 'Герои веры (Гл 11)'] },
    systemPrompt: createSystemPrompt('بولس الرسول', 'الرسالة إلى العبرانيين')
  },

  // NEW TESTAMENT - Catholic Epistles (7 Books)
  {
    id: 'james',
    name: { ar: 'رسالة يعقوب', en: 'James', ru: 'Иакова' },
    subtitle: { ar: 'الإيمان والأعمال', en: 'Faith and Works', ru: 'Вера и дела' },
    testament: 'new',
    author: { ar: 'يعقوب الرسول', en: 'James the Apostle', ru: 'Иаков Апостол' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=James',
    summary: { ar: 'الإيمان بدون أعمال ميت.', en: 'Faith without works is dead.', ru: 'Вера без дел мертва.' },
    keyPoints: { ar: ['لجم اللسان', 'الصلاة (إيليا)'], en: ['Taming tongue', 'Prayer (Elijah)'], ru: ['Укрощение языка', 'Молитва (Илия)'] },
    systemPrompt: createSystemPrompt('يعقوب الرسول', 'رسالة يعقوب')
  },
  {
    id: '1peter',
    name: { ar: 'بطرس الأولى', en: '1 Peter', ru: '1-е Петра' },
    subtitle: { ar: 'الرجاء في الألم', en: 'Hope in Suffering', ru: 'Надежда в страдании' },
    testament: 'new',
    author: { ar: 'بطرس الرسول', en: 'Peter the Apostle', ru: 'Петр Апостол' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Peter',
    summary: { ar: 'تشجيع المؤمنين المتألمين.', en: 'Encouraging suffering believers.', ru: 'Ободрение страдающих верующих.' },
    keyPoints: { ar: ['الكهنوت الملوكي', 'الآلام للمجد'], en: ['Royal Priesthood', 'Suffering for Glory'], ru: ['Царственное священство', 'Страдания ради славы'] },
    systemPrompt: createSystemPrompt('بطرس الرسول', 'رسالة بطرس الأولى')
  },
  {
    id: '2peter',
    name: { ar: 'بطرس الثانية', en: '2 Peter', ru: '2-е Петра' },
    subtitle: { ar: 'المعرفة الحقيقية', en: 'True Knowledge', ru: 'Истинное знание' },
    testament: 'new',
    author: { ar: 'بطرس الرسول', en: 'Peter the Apostle', ru: 'Петр Апостол' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Peter',
    summary: { ar: 'التحذير من المعلمين الكذبة.', en: 'Warning against false teachers.', ru: 'Предупреждение против лжеучителей.' },
    keyPoints: { ar: ['الطبيعة الإلهية', 'يوم الرب'], en: ['Divine Nature', 'Day of the Lord'], ru: ['Божественная природа', 'День Господень'] },
    systemPrompt: createSystemPrompt('بطرس الرسول', 'رسالة بطرس الثانية')
  },
  {
    id: '1john',
    name: { ar: 'يوحنا الأولى', en: '1 John', ru: '1-е Иоанна' },
    subtitle: { ar: 'الله محبة', en: 'God is Love', ru: 'Бог есть любовь' },
    testament: 'new',
    author: { ar: 'يوحنا الحبيب', en: 'John the Beloved', ru: 'Иоанн Богослов' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=John',
    summary: { ar: 'الشركة مع الله والمحبة الأخوية.', en: 'Fellowship with God and brotherly love.', ru: 'Общение с Богом и братская любовь.' },
    keyPoints: { ar: ['المحبة', 'ضد المسيح'], en: ['Love', 'Antichrist'], ru: ['Любовь', 'Антихрист'] },
    systemPrompt: createSystemPrompt('القديس يوحنا', 'رسالة يوحنا الأولى')
  },
  {
    id: '2john',
    name: { ar: 'يوحنا الثانية', en: '2 John', ru: '2-е Иоанна' },
    subtitle: { ar: 'الحق والمحبة', en: 'Truth and Love', ru: 'Истина и любовь' },
    testament: 'new',
    author: { ar: 'يوحنا الحبيب', en: 'John the Beloved', ru: 'Иоанн Богослов' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=John',
    summary: { ar: 'التحذير من المضلين.', en: 'Warning against deceivers.', ru: 'Предупреждение об обольстителях.' },
    keyPoints: { ar: ['السلوك في الحق', 'عدم قبول الهارة'], en: ['Walking in Truth', 'Rejecting Heretics'], ru: ['Хождение в истине', 'Отвержение еретиков'] },
    systemPrompt: createSystemPrompt('القديس يوحنا', 'رسالة يوحنا الثانية')
  },
  {
    id: '3john',
    name: { ar: 'يوحنا الثالثة', en: '3 John', ru: '3-е Иоанна' },
    subtitle: { ar: 'إضافة الغرباء', en: 'Hospitality', ru: 'Гостеприимство' },
    testament: 'new',
    author: { ar: 'يوحنا الحبيب', en: 'John the Beloved', ru: 'Иоанн Богослов' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=John',
    summary: { ar: 'مدح غايوس وتوبيخ ديوتريفس.', en: 'Praising Gaius and rebuking Diotrephes.', ru: 'Похвала Гаию и порицание Диотрефа.' },
    keyPoints: { ar: ['مساعدة الخدام', 'القدوة الحسنة'], en: ['Helping ministers', 'Good example'], ru: ['Помощь служителям', 'Добрый пример'] },
    systemPrompt: createSystemPrompt('القديس يوحنا', 'رسالة يوحنا الثالثة')
  },
  {
    id: 'jude',
    name: { ar: 'رسالة يهوذا', en: 'Jude', ru: 'Иуды' },
    subtitle: { ar: 'الاجتهاد للإيمان', en: 'Contend for Faith', ru: 'Подвизаться за веру' },
    testament: 'new',
    author: { ar: 'يهوذا (ليس الإسخريوطي)', en: 'Jude (not Iscariot)', ru: 'Иуда (не Искариот)' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=Jude',
    summary: { ar: 'حفظ الإيمان من الفساد.', en: 'Preserving faith from corruption.', ru: 'Сохранение веры от растления.' },
    keyPoints: { ar: ['دينونة الفجار', 'حفظ أنفسكم'], en: ['Judgment of ungodly', 'Keep yourselves'], ru: ['Суд нечестивых', 'Сохраняйте себя'] },
    systemPrompt: createSystemPrompt('يهوذا الرسول', 'رسالة يهوذا')
  },

  // NEW TESTAMENT - Prophecy (1 Book)
  {
    id: 'revelation',
    name: { ar: 'سفر رؤيا يوحنا', en: 'Revelation', ru: 'Откровение' },
    subtitle: { ar: 'النصرة النهائية', en: 'Final Victory', ru: 'Окончательная победа' },
    testament: 'new',
    author: { ar: 'يوحنا اللاهوتي', en: 'John the Theologian', ru: 'Иоанн Богослов' },
    authorImage: 'https://placehold.co/100x100/6366f1/white?text=John',
    summary: { ar: 'نهاية الشر، انتصار الحمل، وأورشليم السماوية.', en: 'End of evil, victory of the Lamb, and Heavenly Jerusalem.', ru: 'Конец зла, победа Агнца и Небесный Иерусалим.' },
    keyPoints: { ar: ['عرش الله', 'أورشليم الجديدة'], en: ['Throne of God', 'New Jerusalem'], ru: ['Престол Бога', 'Новый Иерусалим'] },
    systemPrompt: createSystemPrompt('يوحنا اللاهوتي', 'سفر الرؤيا')
  }
];

// ===== STATE VARIABLES =====
let currentUser = { name: '', email: '', profilePic: '', isAdmin: false, token: null }; 
let currentBook = null;
let currentFilter = 'all';
let currentLang = 'ar';
let isDarkMode = false;
let currentChatHistory = [];
let isRecording = false;
let recognition = null;
let synthesis = window.speechSynthesis;
let currentJournalEntry = null;
let journalTags = [];
let notifications = [];

// ===== INITIALIZATION ===== (UPDATED)
document.addEventListener('DOMContentLoaded', function() {
  // Load saved session BEFORE splash screen ends
  const hasSession = loadSavedSession();
  
  // Load saved language
  const savedLang = localStorage.getItem('bibleai-lang') || 'ar';
  changeLang(savedLang);
  
  // Load dark mode preference
  const savedDarkMode = localStorage.getItem('bibleai-darkmode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('.theme-toggle i')?.classList.replace('fa-moon', 'fa-sun');
    isDarkMode = true;
    const toggle = document.getElementById('darkModeTogglePref');
    if (toggle) toggle.checked = true;
  }
  
  // ScrollReveal animations
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.feature-card', {
      delay: 200,
      distance: '50px',
      duration: 800,
      origin: 'bottom',
      interval: 100
    });
  }

  // Initialize Features
  checkVerseOfDay();
  loadNotifications();
  
  // Chat listeners
  const userInput = document.getElementById('userInput');
  if (userInput) {
    userInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('chatForm').dispatchEvent(new Event('submit', { cancelable: true }));
      }
    });
  }
  
  // FIX: Improved splash screen timing based on session
  const splashDuration = hasSession ? 2000 : 3500; // Faster if already logged in
  
  setTimeout(() => {
    document.getElementById('splashScreen').style.display = 'none';
    if (currentUser.token) {
      document.getElementById('mainHeader').style.display = 'block';
      showPage('home');
      updateProfileInfo(); // FIX: Ensure profile updates immediately
    } else {
      document.getElementById('loginContainer').style.display = 'flex';
    }
  }, splashDuration);
});

// FIX: Updated to return boolean indicating session status
function loadSavedSession() {
  const savedToken = localStorage.getItem('token');
  const savedUser = localStorage.getItem('currentUser');
  if (savedToken && savedUser) {
    try {
      const parsedUser = JSON.parse(savedUser);
      currentUser = { ...parsedUser, token: savedToken };
      // FIX: Don't show main header here, let splash screen handle it
      return true; // Session exists
    } catch(e) {
      console.error('Failed to parse saved user:', e);
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      return false;
    }
  }
  return false; // No session
}

// ===== LANGUAGE FUNCTIONS =====
function changeLang(lang) {
  currentLang = lang;
  localStorage.setItem('bibleai-lang', lang);
  
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
  if (isDarkMode) document.body.classList.add('dark-mode');
  
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('id') === `lang-${lang}`);
  });
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Manual placeholder updates
  const inputs = ['email', 'pass', 'signupName', 'signupEmail', 'signupPass'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        // Map ID to translation key
        let key = '';
        if(id === 'email' || id === 'signupEmail') key = 'email-placeholder';
        if(id === 'pass' || id === 'signupPass') key = 'password-placeholder';
        if(id === 'signupName') key = 'name-placeholder';
        if(key) el.placeholder = translations[lang][key];
    }
  });
  
  if (document.getElementById('searchPage').classList.contains('active')) {
    loadBooks();
  }
  
  if (currentBook && document.getElementById('bookDetailPage').classList.contains('active')) {
    updateBookDetail();
    clearChat(true);
  }

  if (recognition) {
    recognition.lang = lang === 'ar' ? 'ar-SA' : lang === 'ru' ? 'ru-RU' : 'en-US';
  }
}

// ===== AUTH FUNCTIONS =====
document.getElementById('goSignup').onclick = () => {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('signupContainer').style.display = 'flex';
};

document.getElementById('goLogin').onclick = () => {
  document.getElementById('signupContainer').style.display = 'none';
  document.getElementById('loginContainer').style.display = 'flex';
};

document.getElementById('loginBtn').onclick = async () => {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  
  if (!email || !pass) {
    showNotification(translations[currentLang]['login-subtitle'], 'error');
    return;
  }
  
  try {
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password: pass })
    });

    const data = await res.json();
    
    if (res.ok) {
      currentUser.token = data.token; 
      localStorage.setItem('token', data.token);
      localStorage.setItem('currentUser', JSON.stringify({
        name: data.name,
        email: email,
        isAdmin: data.isAdmin,
        profilePic: data.profilePic
      }));
      
      if (data.isAdmin) {
        currentUser.name = data.name || 'Admin';
        currentUser.email = email;
        currentUser.isAdmin = true; 
        currentUser.profilePic = 'https://placehold.co/100x100/4f46e5/white?text=A';
        showAdminPanel();
      } else {
        currentUser.email = email;
        currentUser.name = data.name || email.split('@')[0];
        currentUser.profilePic = data.profilePic || '';
        currentUser.isAdmin = false;
        loginSuccess();
      }
    } else {
      showNotification(data.message || 'Login failed', 'error');
    }
  } catch (err) {
    showNotification('Login failed (Server offline)', 'error');
  }
};

document.getElementById('signupBtn').onclick = async () => {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const pass = document.getElementById('signupPass').value;
  
  if (!name || !email || !pass) {
    showNotification('Please fill all fields', 'error');
    return;
  }
  
  if (pass.length < 6) {
    showNotification('Password must be at least 6 characters', 'error');
    return;
  }

  try {
    const res = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username: email, password: pass })
    });

    const data = await res.json();
    if (res.ok) {
      showNotification('Account created successfully! Please login', 'success');
      document.getElementById('signupContainer').style.display = 'none';
      document.getElementById('loginContainer').style.display = 'flex';
    } else {
      showNotification(data.message || 'Signup failed', 'error');
    }
  } catch (err) {
    showNotification('Signup failed (Server offline)', 'error');
  }
};

function loginSuccess() {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('mainHeader').style.display = 'block';
  showPage('home');
  loadBooks();
  updateProfileInfo();
  checkVerseOfDay();
  showNotification('Login successful', 'success');
}

function logout() {
  if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من تسجيل الخروج؟' : 'Are you sure you want to logout?')) {
    document.getElementById('mainHeader').style.display = 'none';
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById('loginContainer').style.display = 'flex';
    currentUser = { name: '', email: '', profilePic: '', isAdmin: false, token: null };
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully', 'info');
  }
}

// ===== VERSE OF THE DAY =====
function checkVerseOfDay() {
  const lastShown = localStorage.getItem('bibleai-verse-date');
  const today = new Date().toDateString();
  
  if (lastShown !== today && currentUser.token) {
    setTimeout(() => showVerseOfDay(), 2000);
    localStorage.setItem('bibleai-verse-date', today);
  }
}

async function showVerseOfDay() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const verse = dailyVerses[dayOfYear % dailyVerses.length];
  
  const modal = document.getElementById('verseOfDayModal');
  if(!modal) return;

  document.getElementById('verseText').textContent = currentLang === 'ar' ? verse.text : verse.textEn;
  document.getElementById('verseReference').textContent = currentLang === 'ar' ? verse.reference : verse.referenceEn;
  document.getElementById('verseReflection').textContent = translations[currentLang]['voice-processing'] || 'Loading...';
  
  modal.style.display = 'flex';
  
  try {
    const prompt = currentLang === 'ar' ? 
      `اكتب تأملاً قصيراً (3-4 جمل) عن هذه الآية: "${verse.text}" (${verse.reference})` :
      `Write a short reflection (3-4 sentences) on this verse: "${verse.textEn}" (${verse.referenceEn})`;
    
    const res = await fetch('/ask', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token
      },
      body: JSON.stringify({ 
        message: prompt,
        bookContext: 'You are a spiritual guide providing brief, meaningful reflections on Bible verses.',
        language: currentLang,
        chatHistory: []
      })
    });
    
    if (res.ok) {
      const data = await res.json();
      document.getElementById('verseReflection').textContent = data.reply;
    }
  } catch (err) {
    document.getElementById('verseReflection').textContent = currentLang === 'ar' ?
      'تأمل في هذه الآية العظيمة وكيف تنطبق على حياتك اليوم.' :
      'Reflect on how this powerful verse applies to your life today.';
  }
}

function closeVerseOfDay() {
  const modal = document.getElementById('verseOfDayModal');
  if(modal) modal.style.display = 'none';
}

// ===== NOTIFICATION CENTER =====
function loadNotifications() {
  const storedNotifications = localStorage.getItem('bibleai-notifications-' + currentUser.email);
  if (storedNotifications) {
    notifications = JSON.parse(storedNotifications);
  }
  updateNotificationBadge();
  renderNotifications();
}

function addNotification(type, title, message) {
  const notification = {
    id: Date.now().toString(),
    type: type, // 'email', 'system', 'verse'
    title: title,
    message: message,
    time: new Date().toISOString(),
    read: false
  };
  
  notifications.unshift(notification);
  saveNotifications();
  updateNotificationBadge();
  showNotification(title, 'info');
}

function saveNotifications() {
  localStorage.setItem('bibleai-notifications-' + currentUser.email, JSON.stringify(notifications));
}

function updateNotificationBadge() {
  const unreadCount = notifications.filter(n => !n.read).length;
  const badge = document.getElementById('notificationBadge');
  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  }
}

function toggleNotificationCenter() {
  const center = document.getElementById('notificationCenter');
  if (center) {
    if (center.style.display === 'none' || !center.style.display) {
      center.style.display = 'block';
      renderNotifications();
    } else {
      center.style.display = 'none';
    }
  }
}

function renderNotifications() {
  const list = document.getElementById('notificationList');
  if(!list) return;

  if (notifications.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--gray)"><i class="fas fa-bell-slash" style="font-size:3rem;margin-bottom:1rem;opacity:0.3"></i><p>No notifications</p></div>';
    return;
  }
  
  list.innerHTML = notifications.map(notif => `
    <div class="notification-item ${notif.read ? '' : 'unread'}" onclick="markNotificationRead('${notif.id}')">
      <div class="notification-icon">
        <i class="fas fa-${notif.type === 'email' ? 'envelope' : notif.type === 'verse' ? 'book-bible' : 'bell'}"></i>
      </div>
      <div class="notification-content">
        <div class="notification-title">${notif.title}</div>
        <div class="notification-message">${notif.message}</div>
        <div class="notification-time">${formatNotificationTime(notif.time)}</div>
      </div>
    </div>
  `).join('');
}

function markNotificationRead(id) {
  const notif = notifications.find(n => n.id === id);
  if (notif) {
    notif.read = true;
    saveNotifications();
    updateNotificationBadge();
    renderNotifications();
  }
}

function markAllNotificationsRead() {
  notifications.forEach(n => n.read = true);
  saveNotifications();
  updateNotificationBadge();
  renderNotifications();
}

function formatNotificationTime(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (minutes < 1) return currentLang === 'ar' ? 'الآن' : 'Now';
  if (minutes < 60) return `${minutes} ${currentLang === 'ar' ? 'دقيقة' : 'min'}`;
  if (hours < 24) return `${hours} ${currentLang === 'ar' ? 'ساعة' : 'hr'}`;
  return `${days} ${currentLang === 'ar' ? 'يوم' : 'day'}`;
}

// ===== JOURNAL FUNCTIONS =====// ===== JOURNAL FUNCTIONS ===== (AROUND LINE 850)
// ===== JOURNAL FUNCTIONS (MONGODB VERSION) ===== 
async function loadJournalEntries() {
  try {
    const res = await fetch('/get-journals', {
      headers: { 'Authorization': 'Bearer ' + currentUser.token }
    });
    
    if (!res.ok) {
      showNotification('Error loading journal', 'error');
      return;
    }
    
    const data = await res.json();
    const entries = data.entries || [];
    
    const sortOrder = document.getElementById('journalSort')?.value || 'newest';
    entries.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    displayJournalEntries(entries);
  } catch (err) {
    console.error('Error loading journals:', err);
    displayEmptyJournal();
  }
}

async function saveJournalEntry() {
  const title = document.getElementById('journalTitleUnique').value.trim();
  const verse = document.getElementById('journalVerseUnique').value.trim();
  const content = document.getElementById('journalContentUnique').value.trim();
  
  if (!title || !content) {
    showNotification(currentLang === 'ar' ? 'الرجاء ملء العنوان والمحتوى' : 'Please fill title and content', 'error');
    return;
  }
  
  const entry = {
    _id: currentJournalEntry ? currentJournalEntry._id : null,
    title: title,
    verse: verse,
    content: content,
    tags: journalTags,
    mood: currentMood || 'neutral',
    date: currentJournalEntry ? currentJournalEntry.date : new Date().toISOString()
  };
  
  try {
    const res = await fetch('/save-journal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token
      },
      body: JSON.stringify(entry)
    });
    
    if (!res.ok) throw new Error('Failed to save');
    
    showNotification(currentLang === 'ar' ? 'تم الحفظ بنجاح' : 'Saved successfully', 'success');
    closeJournalEditor();
    loadJournalEntries();
  } catch (err) {
    showNotification(currentLang === 'ar' ? 'خطأ في الحفظ' : 'Error saving', 'error');
  }
}

async function deleteJournalEntry(id) {
  if (!confirm(currentLang === 'ar' ? 'هل تريد حذف هذه التدوينة؟' : 'Delete this entry?')) return;
  
  try {
    const res = await fetch('/delete-journal/' + id, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + currentUser.token }
    });
    
    if (!res.ok) throw new Error('Failed to delete');
    
    showNotification(currentLang === 'ar' ? 'تم الحذف' : 'Deleted', 'success');
    loadJournalEntries();
  } catch (err) {
    showNotification('Error deleting', 'error');
  }
}

async function editJournalEntry(id) {
  try {
    const res = await fetch('/get-journals', {
      headers: { 'Authorization': 'Bearer ' + currentUser.token }
    });
    
    if (!res.ok) throw new Error('Failed to load');
    
    const data = await res.json();
    const entry = data.entries.find(e => e._id === id);
    
    if (entry) {
      openJournalEditor(entry);
    } else {
      showNotification('Entry not found', 'error');
    }
  } catch (err) {
    showNotification('Error loading entry', 'error');
  }
}
async function viewJournalEntry(id) {
  editJournalEntry(id);
}

async function deleteJournalEntry(id) {
  if (!confirm(currentLang === 'ar' ? 'هل تريد حذف هذه التدوينة؟' : 'Delete this entry?')) return;
  
  try {
    const key = `journal-${currentUser.email}-${id}`;
    localStorage.removeItem(key);
    showNotification(currentLang === 'ar' ? 'تم الحذف' : 'Deleted', 'success');
    loadJournalEntries();
  } catch (err) {
    showNotification('Error deleting', 'error');
  }
}

function filterJournalEntries() {
  const search = document.getElementById('journalSearch').value.toLowerCase();
  const entries = document.querySelectorAll('.journal-entry');
  entries.forEach(entry => {
    const text = entry.textContent.toLowerCase();
    entry.style.display = text.includes(search) ? 'block' : 'none';
  });
}

// ===== ADMIN PANEL FUNCTIONS (v1.0.0 - Unchanged) =====
function showAdminPanel() {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('signupContainer').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'flex';
  loadAdminData();
  updateAdminTime();
  setInterval(updateAdminTime, 1000);
  showNotification('Welcome Admin', 'success');
}

function updateAdminTime() {
  const now = new Date();
  const timeString = now.toLocaleString(currentLang === 'ar' ? 'ar-EG' : currentLang === 'ru' ? 'ru-RU' : 'en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById('adminTime').textContent = timeString;
}

// In loadAdminData, ensure stats are properly calculated:
async function loadAdminData() {
  if (!currentUser.token) return;
  
  try {
    const res = await fetch('/admin/users', {
      headers: { 'Authorization': 'Bearer ' + currentUser.token }
    });
    
    if (!res.ok) {
      showNotification('Failed to load admin data (Auth Error)', 'error');
      if (res.status === 401) logoutAdmin(true);
      return;
    }
    
    const data = await res.json();
    
    // Ensure all elements exist before updating
    const totalUsersEl = document.getElementById('totalUsers');
    const activeUsersEl = document.getElementById('activeUsers');
    const todayLoginsEl = document.getElementById('todayLogins');
    
    if (totalUsersEl) totalUsersEl.textContent = data.totalUsers || 0;
    if (activeUsersEl) activeUsersEl.textContent = data.activeUsers || 0;
    if (todayLoginsEl) todayLoginsEl.textContent = data.todayLogins || 0;
    
    displayUsersTable(data.users || []);
    displayLogs(data.logs || []);
    populateEmailRecipients(data.users || []);
    loadBookStats();
    
  } catch (err) {
    showNotification('Error loading admin data', 'error');
    console.error('Admin data load error:', err);
  }
}

async function loadBookStats() {
  try {
    const res = await fetch('/admin/book-stats', {
      headers: { 'Authorization': 'Bearer ' + currentUser.token }
    });
    
    if (res.ok) {
      const stats = await res.json();
      displayBookStats(stats);
    }
  } catch (err) {
    console.error('Failed to load book stats');
  }
}

function displayBookStats(stats) {
  // Add a new section in the analytics page
  const analyticsSection = document.getElementById('analyticsSection');
  if (!analyticsSection) return;
  
  const bookStatsHTML = `
    <div class="analytics-card">
      <h3><i class="fas fa-book"></i> Book Reading Statistics</h3>
      <div style="padding:1rem;">
        <p><strong>Total Book Views:</strong> ${stats.totalViews}</p>
        <p><strong>Active Readers:</strong> ${stats.totalUsers}</p>
        <h4 style="margin-top:1.5rem;">Most Viewed Books:</h4>
        <ul style="list-style:none;padding:0;">
          ${Object.entries(stats.mostViewedBooks)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([bookId, count]) => {
              const book = bibleBooks.find(b => b.id === bookId);
              const name = book ? book.name[currentLang] : bookId;
              return `<li style="padding:0.5rem;border-bottom:1px solid var(--gray-light);">
                ${name}: <strong>${count} views</strong>
              </li>`;
            })
            .join('')}
        </ul>
      </div>
    </div>
  `;
  
  // Insert after existing analytics content
  analyticsSection.innerHTML += bookStatsHTML;
}

function displayUsersTable(users) {
  const tbody = document.getElementById('usersTableBody');
  tbody.innerHTML = users.map(user => `
    <tr>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.createdAt || 'N/A'}</td>
      <td>${user.lastLogin || 'Never'}</td>
      <td><span class="status-badge ${user.status}">${user.status === 'active' ? 'Active' : 'Inactive'}</span></td>
      <td>
        <div class="action-btns">
          <button class="action-btn view" onclick="viewUser('${user.email}')"><i class="fas fa-eye"></i></button>
          <button class="action-btn delete" onclick="deleteUser('${user.email}')"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function populateEmailRecipients(users) {
  const select = document.getElementById('emailRecipient');
  select.innerHTML = '<option value="all">All Users</option>' + 
    users.map(u => `<option value="${u.email}">${u.name} (${u.email})</option>`).join('');
}

function displayLogs(logs) {
  const container = document.getElementById('logsContainer');
  if (!logs || logs.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#666;">No logs available</p>';
    return;
  }
  
  container.innerHTML = logs.map(log => `
    <div class="log-item">
      <div class="log-icon"><i class="fas fa-${log.type === 'login' ? 'sign-in-alt' : log.type === 'signup' ? 'user-plus' : log.type === 'delete' ? 'trash' : log.type === 'note' ? 'sticky-note' : 'book-open'}"></i></div>
      <div class="log-content">
        <strong>${log.user}</strong>
        <span>${log.action}</span>
        <span style="font-size:0.8rem;color:var(--gray);display:block;margin-top:0.25rem;">
          <i class="fas fa-globe"></i> ${log.ip || 'N/A'}
          ${log.userAgent ? ` | ${log.userAgent.substring(0, 40)}...` : ''}
        </span>
      </div>
      <div class="log-time">${log.time}</div>
    </div>
  `).join('');
}

function filterAdminUsers() {
  const search = document.getElementById('adminSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#usersTableBody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(search) ? '' : 'none';
  });
}

function showAdminSection(section) {
  document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
  document.getElementById(section + 'Section').style.display = 'block';
  
  document.querySelectorAll('.admin-nav a').forEach(a => a.classList.remove('active'));
  document.querySelector(`.admin-nav a[data-section="${section}"]`).classList.add('active');
}

function viewUser(email) {
  showNotification(`Viewing user: ${email}`, 'info');
}

async function deleteUser(email) {
  if (confirm(`Delete user: ${email}?`)) {
    try {
      const res = await fetch(`/admin/users/${encodeURIComponent(email)}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + currentUser.token }
      });
      
      if (res.ok) {
        showNotification('User deleted successfully', 'success');
        loadAdminData(); // Refresh list
      } else {
        showNotification('Failed to delete user', 'error');
        if (res.status === 401) logoutAdmin(true);
      }
    } catch (err) {
      showNotification('Error deleting user', 'error');
    }
  }
}

async function sendEmailToUsers() {
  const recipient = document.getElementById('emailRecipient').value;
  const subject = document.getElementById('emailSubject').value;
  const message = document.getElementById('emailMessage').value;
  
  if (!subject || !message) {
    showNotification('Please fill subject and message', 'error');
    return;
  }
  
  try {
    const res = await fetch('/admin/send-email', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token 
      },
      body: JSON.stringify({ recipient, subject, message })
    });
    
    if (res.ok) {
      showNotification('Email sent successfully!', 'success');
      document.getElementById('emailSubject').value = '';
      document.getElementById('emailMessage').value = '';
    } else {
      showNotification('Failed to send email', 'error');
      if (res.status === 401) logoutAdmin(true);
    }
  } catch (err) {
    showNotification('Failed to send email (Server error)', 'error');
  }
}

function logoutAdmin(isForced = false) {
  const msg = isForced ? 'Session expired. Please login again.' : (currentLang === 'ar' ? 'هل أنت متأكد من تسجيل الخروج؟' : 'Are you sure you want to logout?');
  
  if (isForced || confirm(msg)) {
    if (isForced) showNotification(msg, 'error');
    
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
    currentUser = { name: '', email: '', profilePic: '', isAdmin: false, token: null };
  }
}

function showPage(pageName) {
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(p => p.classList.remove('active'));
  
  const page = document.getElementById(pageName + 'Page');
  if (page) page.classList.add('active');
  
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-page') === pageName) {
      item.classList.add('active');
    }
  });
  window.scrollTo(0, 0);
}


// ===== BOOKS FUNCTIONS =====
function loadBooks() {
  const grid = document.getElementById('booksGrid');
  const filtered = currentFilter === 'all' ? bibleBooks : bibleBooks.filter(b => b.testament === currentFilter);
  
  grid.innerHTML = filtered.map(book => `
    <div class="book-card" onclick="showBook('${book.id}')">
      <div class="book-card-image">
        <img src="${book.authorImage}" alt="${book.author[currentLang]}" onerror="this.src='${book.authorImage.replace(/ /g, '%20')}'">
      </div>
      <h3>${book.name[currentLang]}</h3>
      <p>${book.subtitle[currentLang]}</p>
    </div>
  `).join('');
}

function filterBooks() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.book-card');
  
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(search) ? 'block' : 'none';
  });
}

function filterByCategory(category) {
  currentFilter = category;
  loadBooks();
  
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// ===== BOOK DETAIL =====
function showBook(bookId) {
  currentBook = bibleBooks.find(b => b.id === bookId);
  if (!currentBook) return;
  
  updateBookDetail();
  clearChat(true);
  showPage('bookDetail');
  
  // Track book view
  trackBookView(currentBook.id, currentBook.name[currentLang]);
}

async function trackBookView(bookId, bookName) {
  try {
    await fetch('/track-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token
      },
      body: JSON.stringify({ bookId: bookId, bookName: bookName })
    });
  } catch (err) {
    console.log('Failed to track book view');
  }
}

function updateBookDetail() {
  if (!currentBook) return;
  
  document.getElementById('bookBadge').textContent = currentBook.testament === 'old' ? 
    (currentLang === 'ar' ? 'العهد القديم' : currentLang === 'en' ? 'Old Testament' : 'Ветхий Завет') :
    (currentLang === 'ar' ? 'العهد الجديد' : currentLang === 'en' ? 'New Testament' : 'Новый Завет');
  
  document.getElementById('bookTitle').textContent = currentBook.name[currentLang];
  document.getElementById('bookSubtitle').textContent = currentBook.subtitle[currentLang];
  document.getElementById('bookAuthor').textContent = currentBook.author[currentLang];
  document.getElementById('bookAuthorImage').src = currentBook.authorImage;
  document.getElementById('bookAuthorImage').onerror = function() {
    this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='30' fill='%23d4a574'/%3E%3Ctext x='50%25' y='50%25' font-size='30' text-anchor='middle' dy='.35em' fill='white'%3E✍️%3C/text%3E%3C/svg%3E";
  };
  document.getElementById('bookSummary').textContent = currentBook.summary[currentLang];
  
  // Update Key Points
  const keyPointsList = document.getElementById('keyPoints');
  if (currentBook.keyPoints && currentBook.keyPoints[currentLang]) {
    keyPointsList.innerHTML = currentBook.keyPoints[currentLang].map(point => `<li>${point}</li>`).join('');
  } else {
    keyPointsList.innerHTML = `<li>${translations[currentLang]['feature-ai-desc']}</li>`;
  }
  
  // Update AI Chat Head
  document.getElementById('aiTitle').textContent = `${currentBook.author[currentLang]} (AI)`;
  document.getElementById('chatAvatar').innerHTML = `<img src="${currentBook.authorImage}" alt="${currentBook.author[currentLang]}">`;
}

// ===== CHAT FUNCTIONS (v1.3.0 - Updated) =====
async function sendMessage(e) {
  e.preventDefault();
  
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;
  
  addMessage(message, 'user');
  input.value = '';
  
  // v1.3.0 - Add user message to history
  currentChatHistory.push({ role: 'user', content: message });
  
  // v1.3.0 - Show improved typing indicator
  const typingIndicator = addMessage('', 'bottyping');
  
  try {
    const res = await fetch('/ask', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token // v1.3.0 - Add auth
      },
      body: JSON.stringify({ 
        message: message,
        bookContext: currentBook.systemPrompt[currentLang],
        language: currentLang,
        chatHistory: currentChatHistory.slice(0, -1) // v1.3.0 - Send history (all except current msg)
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.reply || 'Network error');
    }

    const data = await res.json();
    typingIndicator.remove(); // Remove typing indicator
    
    // v1.3.0 - Add bot reply to history
    currentChatHistory.push({ role: 'assistant', content: data.reply });
    
    typeMessage(data.reply, 'bot');
    
  } catch (err) {
    typingIndicator.remove();
    const errorMsg = err.message.startsWith('❌') ? err.message : ('❌ ' + (translations[currentLang]['error-fallback'] || 'Error connecting to AI.'));
    typeMessage(errorMsg, 'bot');
    // v1.3.0 - Remove failed user message from history
    currentChatHistory.pop();
  }
}

// v1.3.0 - Updated to support typing animation
function addMessage(text, sender) {
  const chatLog = document.getElementById('chatLog');
  const messageElem = document.createElement('div');
  messageElem.classList.add('message', sender);
  
  if (sender === 'bottyping') {
    messageElem.innerHTML = `
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
    `;
  } else {
    messageElem.textContent = text;
  }
  
  chatLog.appendChild(messageElem);
  chatLog.scrollTop = chatLog.scrollHeight;
  return messageElem;
}

function typeMessage(text, sender) {
  const chatLog = document.getElementById('chatLog');
  const messageElem = document.createElement('div');
  messageElem.classList.add('message');
  messageElem.classList.add(sender);
  chatLog.appendChild(messageElem);

  let i = 0;
  const speed = 20; // Faster typing
  function typeChar() {
    if (i < text.length) {
      messageElem.textContent += text.charAt(i);
      i++;
      chatLog.scrollTop = chatLog.scrollHeight;
      setTimeout(typeChar, speed);
    }
  }
  typeChar();
}

// v1.3.0 - Updated to reset history
function clearChat(silent = false) {
  if (!currentBook) return;
  
  // v1.3.0 - Reset chat history
  currentChatHistory = [];
  
  const welcomeMsg = currentLang === 'ar' ? 
    `مرحباً! أنا ${currentBook.author[currentLang]}، مساعدك الذكي. اسألني أي سؤال عن ${currentBook.name[currentLang]}` :
    currentLang === 'en' ?
    `Hello! I am ${currentBook.author[currentLang]}, your AI assistant. Ask me any question about the ${currentBook.name[currentLang]}` :
    `Здравствуйте! Я ${currentBook.author[currentLang]}, ваш ИИ-помощник. Задайте мне любой вопрос о ${currentBook.name[currentLang]}`;
  
  document.getElementById('chatLog').innerHTML = `
    <div class="welcome-message">
      <i class="fas fa-hand-sparkles"></i>
      <p>${welcomeMsg}</p>
    </div>
  `;
  if (!silent) {
    showNotification('Chat cleared', 'info');
  }
}

// ===== PROFILE FUNCTIONS (v1.3.0 - Updated) =====
function updateProfileInfo() {
  const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130'%3E%3Ccircle cx='65' cy='65' r='65' fill='%23d4a574'/%3E%3Ctext x='50%25' y='50%25' font-size='60' text-anchor='middle' dy='.35em' fill='white'%3E👤%3C/text%3E%3C/svg%3E";
  const headerAvatarDefault = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23d4a574'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' dy='.35em' fill='white'%3E👤%3C/text%3E%3C/svg%3E";
  
  document.getElementById('profileName').textContent = currentUser.name || 'User';
  document.getElementById('headerUsername').textContent = currentUser.name || 'User';
  document.getElementById('userName').value = currentUser.name || '';
  document.getElementById('userEmail').value = currentUser.email || '';
  document.getElementById('profileEmail').textContent = currentUser.email || '';
  
  document.getElementById('profilePic').src = currentUser.profilePic || defaultAvatar;
  document.getElementById('headerAvatar').src = currentUser.profilePic || headerAvatarDefault;

  // Update dummy stats
  document.getElementById('booksReadStat').textContent = Math.floor(Math.random() * 20);
  document.getElementById('daysActiveStat').textContent = Math.floor(Math.random() * 100) + 1;
}

// v1.3.0 - Implemented save to server
async function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      showNotification('Image too large (max 5MB)', 'error');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = async function(e) {
      const imageData = e.target.result; // Base64 string
      
      try {
        const res = await fetch('/update-profile-pic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + currentUser.token
          },
          body: JSON.stringify({ imageData: imageData })
        });
        
        if (!res.ok) throw new Error('Failed to upload');
        
        currentUser.profilePic = imageData;
        updateProfileInfo();
        showNotification('Profile picture updated!', 'success');
        
      } catch (err) {
        showNotification('Error updating picture', 'error');
      }
    };
    reader.readAsDataURL(file);
  }
}

// v1.3.0 - Implemented save to server
async function saveSettings() {
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const phone = document.getElementById('userPhone').value;
  
  if (!name || !email) {
    showNotification('Name and email are required', 'error');
    return;
  }
  
  if (email !== currentUser.email) {
    showNotification('Changing email is not supported yet', 'error');
    document.getElementById('userEmail').value = currentUser.email;
    return;
  }

  try {
    const res = await fetch('/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token
      },
      body: JSON.stringify({ name: name, phone: phone })
    });
    
    if (!res.ok) throw new Error('Failed to save');
    
    currentUser.name = name;
    currentUser.phone = phone;
    updateProfileInfo();
    showNotification('Settings saved successfully', 'success');
    
  } catch (err) {
    showNotification('Error saving settings', 'error');
  }
}

// ===== v1.3.0 FIX: Add Auth Header =====
async function changePassword() {
  const currentPass = document.getElementById('currentPassword').value;
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  
  if (!currentPass || !newPass || !confirmPass) {
    showNotification('Please fill all password fields', 'error');
    return;
  }
  
  if (newPass !== confirmPass) {
    showNotification('New passwords do not match', 'error');
    return;
  }
  
  if (newPass.length < 6) {
    showNotification('Password must be at least 6 characters', 'error');
    return;
  }

  try {
    const res = await fetch('/changepassword', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token // Add auth
      },
      body: JSON.stringify({
        // email: currentUser.email, // No longer needed, server knows user from token
        currentPass: currentPass,
        newPass: newPass
      })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      // Clear fields
      document.getElementById('currentPassword').value = '';
      document.getElementById('newPassword').value = '';
      document.getElementById('confirmPassword').value = '';
      showNotification(data.message, 'success');
    } else {
      showNotification(data.message, 'error');
    }
    
  } catch (err) {
    showNotification('Error updating password (Server offline)', 'error');
  }
}

function showProfileSection(section) {
  document.querySelectorAll('.profile-section').forEach(s => s.style.display = 'none');
  document.getElementById(section + 'Section').style.display = 'block';
  
  document.querySelectorAll('.profile-menu-item').forEach(item => item.classList.remove('active'));
  document.querySelector(`.profile-menu-item[data-section="${section}"]`).classList.add('active');
}

function logout() {
  if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من تسجيل الخروج؟' : 'Are you sure you want to logout?')) {
    document.getElementById('mainHeader').style.display = 'none';
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById('loginContainer').style.display = 'flex';
    currentUser = { name: '', email: '', profilePic: '', isAdmin: false, token: null };
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully', 'info');
  }
}

// ===== DARK MODE =====
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('bibleai-darkmode', isDarkMode);
  
  const toggle = document.getElementById('darkModeTogglePref');
  if (toggle) toggle.checked = isDarkMode;

  const icon = document.querySelector('.theme-toggle i');
  if (isDarkMode) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
  
  showNotification(isDarkMode ? 'Dark mode enabled' : 'Dark mode disabled', 'success');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--primary)'};
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    z-index: 10001;
    animation: slideDown 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideUp 0.3s ease forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification animations
if (!document.getElementById('notification-styles')) {
  const style = document.createElement('style');
  style.id = 'notification-styles';
  style.textContent = `
    @keyframes slideDown {
      from { opacity: 0; transform: translate(-50%, -20px); }
      to { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes slideUp {
      from { opacity: 1; transform: translate(-50%, 0); }
      to { opacity: 0; transform: translate(-50%, -20px); }
    }
  `;
  document.head.appendChild(style);
}


// ===== QUICK NOTES FUNCTIONS =====
// ===== QUICK NOTES FUNCTIONS =====// ===== GOOGLE KEEP STYLE NOTES FUNCTIONS =====
let currentNoteColor = 'white';
let currentNotesView = 'grid';
let editingNoteId = null;

function expandNoteBox() {
  document.getElementById('noteCollapsed').style.display = 'none';
  document.getElementById('noteExpanded').style.display = 'block';
  document.getElementById('quickNoteInput').focus();
}

function collapseNoteBox() {
  document.getElementById('noteCollapsed').style.display = 'flex';
  document.getElementById('noteExpanded').style.display = 'none';
  document.getElementById('noteTitle').value = '';
  document.getElementById('quickNoteInput').value = '';
  currentNoteColor = 'white';
  editingNoteId = null;
  
  // Reset color buttons
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.color === 'white') btn.classList.add('active');
  });
}

function setNoteColor(color) {
  currentNoteColor = color;
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.color === color) btn.classList.add('active');
  });
}

function setNotesView(view) {
  currentNotesView = view;
  const grid = document.getElementById('noteHistoryList');
  const buttons = document.querySelectorAll('.view-btn');
  
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.closest('.view-btn').classList.add('active');
  
  if (view === 'list') {
    grid.classList.add('list-view');
  } else {
    grid.classList.remove('list-view');
  }
}

async function saveQuickNote() {
  const title = document.getElementById('noteTitle').value.trim();
  const noteText = document.getElementById('quickNoteInput').value.trim();
  
  if (!noteText) {
    showNotification(translations[currentLang]['note-empty'] || 'Note is empty', 'error');
    return;
  }
  
  const note = {
    id: editingNoteId || Date.now().toString(),
    title: title,
    text: noteText,
    color: currentNoteColor,
    userId: currentUser.email,
    bookId: currentBook ? currentBook.id : null,
    bookName: currentBook ? currentBook.name[currentLang] : null,
    timestamp: new Date().toISOString()
  };
  
  try {
    const res = await fetch('/save-note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser.token
      },
      body: JSON.stringify(note)
    });
    
    if (res.ok) {
      showNotification(translations[currentLang]['note-saved'] || 'Note saved', 'success');
      collapseNoteBox();
      loadQuickNotes();
    } else {
      throw new Error('Failed to save');
    }
  } catch (err) {
    // Fallback to localStorage
    const notes = JSON.parse(localStorage.getItem('quickNotes-' + currentUser.email) || '[]');
    const index = notes.findIndex(n => n.id === note.id);
    if (index >= 0) {
      notes[index] = note;
    } else {
      notes.unshift(note);
    }
    if (notes.length > 50) notes.pop();
    localStorage.setItem('quickNotes-' + currentUser.email, JSON.stringify(notes));
    showNotification(translations[currentLang]['note-saved'] || 'Note saved', 'success');
    collapseNoteBox();
    loadQuickNotes();
  }
}

async function loadQuickNotes() {
  try {
    const res = await fetch('/get-notes', {
      headers: { 'Authorization': 'Bearer ' + currentUser.token }
    });
    
    if (res.ok) {
      const data = await res.json();
      displayNotes(data.notes || []);
    } else {
      throw new Error('Failed to load');
    }
  } catch (err) {
    const notes = JSON.parse(localStorage.getItem('quickNotes-' + currentUser.email) || '[]');
    displayNotes(notes);
  }
}

function displayNotes(notes) {
  const list = document.getElementById('noteHistoryList');
  if (!list) return;
  
  if (notes.length === 0) {
    list.innerHTML = `
      <div class="notes-empty">
        <i class="fas fa-sticky-note"></i>
        <p data-i18n="no-notes">${translations[currentLang]['no-notes'] || 'لا توجد ملاحظات بعد'}</p>
      </div>
    `;
    return;
  }
  
  list.innerHTML = notes.map(note => `
    <div class="note-card" data-color="${note.color || 'white'}" onclick="editNote('${note.id}')">
      ${note.title ? `<div class="note-card-title">${note.title}</div>` : ''}
      <div class="note-card-content">${note.text}</div>
      <div class="note-card-footer">
        <span>${formatNotificationTime(note.timestamp)}</span>
        ${note.bookName ? `<span><i class="fas fa-book"></i> ${note.bookName}</span>` : ''}
      </div>
      <div class="note-card-actions">
        <button class="note-action-btn delete" onclick="event.stopPropagation(); deleteNote('${note.id}')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function editNote(noteId) {
  // Get note from storage
  const notes = JSON.parse(localStorage.getItem('quickNotes-' + currentUser.email) || '[]');
  const note = notes.find(n => n.id === noteId);
  
  if (note) {
    editingNoteId = noteId;
    document.getElementById('noteTitle').value = note.title || '';
    document.getElementById('quickNoteInput').value = note.text;
    currentNoteColor = note.color || 'white';
    
    // Update color selection
    document.querySelectorAll('.color-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.color === currentNoteColor) btn.classList.add('active');
    });
    
    expandNoteBox();
  }
}

async function deleteNote(noteId) {
  if (!confirm(translations[currentLang]['confirm-delete'] || 'Delete this note?')) return;
  
  try {
    const res = await fetch('/delete-note/' + noteId, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + currentUser.token }
    });
    
    if (res.ok) {
      showNotification(translations[currentLang]['note-deleted'] || 'Note deleted', 'success');
      loadQuickNotes();
    } else {
      throw new Error('Failed to delete');
    }
  } catch (err) {
    // Fallback to localStorage
    const notes = JSON.parse(localStorage.getItem('quickNotes-' + currentUser.email) || '[]');
    const filtered = notes.filter(n => n.id !== noteId);
    localStorage.setItem('quickNotes-' + currentUser.email, JSON.stringify(filtered));
    showNotification(translations[currentLang]['note-deleted'] || 'Note deleted', 'success');
    loadQuickNotes();
  }
}


console.log('✅ Bible.AI Application Loaded (v1.4.8)');
console.log('📚 Total Books:', bibleBooks.length);
console.log('🌍 Languages: Arabic, English, Russian');
//console.log('💬 Community Feature Active');
console.log('🔐 User auth and stateful AI are active.');
