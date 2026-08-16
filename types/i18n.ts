export type Language = 'en' | 'vi';

export interface TranslationSchema {
  common: {
    startNow: string;
    learnMore: string;
    explore: string;
    back: string;
    next: string;
    finish: string;
    retry: string;
    close: string;
    submit: string;
    sending: string;
    success: string;
    minutes: string;
    completed: string;
    notCompleted: string;
    tryNow: string;
    viewDetails: string;
  };
  navbar: {
    home: string;
    curriculum: string;
    aboutUs: string;
    contact: string;
    consultNow: string;
  };
  hero: {
    titlePart1: string;
    titleHighlight1: string;
    titlePart2: string;
    titleHighlight2: string;
    titlePart3: string;
    description: string;
    badgeSexEd: string;
    badgeSexEdSub: string;
    badgeJoin: string;
    badgeLearners: string;
    imgAlt: string;
  };
  features: {
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    tagSafe: string;
    tagRespect: string;
    tagGrowth: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  mission: {
    statementPart1: string;
    statementHighlight: string;
    statementPart2: string;
    teamMemberRole: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    close: string;
    writtenBy: string;
  };
  footer: {
    aboutText: string;
    aboutUs: string;
    aboutIntro: string;
    aboutFeatures: string;
    aboutNews: string;
    aboutCareers: string;
    support: string;
    faq: string;
    helpCenter: string;
    contactLink: string;
    contactHeader: string;
    address: string;
    rights: string;
  };
  topicSelection: {
    tag: string;
    title: string;
    subtitle: string;
    exploreButton: string;
    age6_8: {
      title: string;
      subtitle: string;
      desc: string;
    };
    age9_11: {
      title: string;
      subtitle: string;
      desc: string;
    };
    age12_14: {
      title: string;
      subtitle: string;
      desc: string;
    };
    age15_17: {
      title: string;
      subtitle: string;
      desc: string;
    };
  };
  lessonList: {
    backToTopics: string;
    curriculumTitle: string;
    totalLessons: string;
    startLesson: string;
    reviewLesson: string;
    tourBtn: string;
    tourSteps: {
      step1Title: string;
      step1Content: string;
      step2Title: string;
      step2Content: string;
    };
  };
  lessonPlayer: {
    backToList: string;
    stepIntro: string;
    stepPoints: string;
    stepQuiz: string;
    listenAudio: string;
    stopAudio: string;
    previous: string;
    next: string;
    finishLesson: string;
    awesome: string;
    keepTrying: string;
    nextQuestion: string;
    congratsTitle: string;
    congratsDesc: string;
    backToHome: string;
    nextLesson: string;
    tourSteps: {
      headerTitle: string;
      headerContent: string;
      contentTitle: string;
      contentContent: string;
      controlsTitle: string;
      controlsContent: string;
    };
  };
  parentZone: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    val1Tag: string;
    val1Title: string;
    val1Desc: string;
    val2Tag: string;
    val2Title: string;
    val2Desc: string;
    val3Tag: string;
    val3Title: string;
    val3Desc: string;
    rulesBadge: string;
    rulesTitle: string;
    rulesSubtitle: string;
    rule1Title: string;
    rule1Desc: string;
    rule2Title: string;
    rule2Desc: string;
    rule3Title: string;
    rule3Desc: string;
    rule4Title: string;
    rule4Desc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    support247: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    sendingButton: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
  };
  aiChat: {
    title: string;
    statusOnline: string;
    initialGreeting: string;
    missingKeyNotice: string;
    errorMessage: string;
    inputPlaceholder: string;
    disclaimer: string;
  };
  quizModal: {
    title: string;
    loading: string;
    error: string;
    retry: string;
    awesome: string;
    keepTrying: string;
    nextQuestion: string;
  };
  tourGuide: {
    next: string;
    back: string;
    finish: string;
    skip: string;
    stepOf: string;
  };
}
