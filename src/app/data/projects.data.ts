export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  stack: string[];
  status: string;
  github: string;
  live?: string;
  metric?: string;
  screenshots: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'jamiat-ahl-e-hadees',
    title: 'Jamiat Ahl-e-Hadees J&K',
    tagline: "Rebuilding an organization's web presence from the ground up.",
    summary:
      'A single-page site turned into a full multi-page platform, covering everything from fatwa submissions to prayer timings.',
    problem:
      "Designed and developed a modern, responsive website for Jamiat Ahle Hadees Jammu & Kashmir, transforming a traditional informational website into a fast, accessible, and engaging digital platform. The project focused on improving user experience, visual identity, performance, and maintainability while supporting the organisation's educational, religious, and community initiatives.",
    approach: [
      "Designed a complete UI/UX system inspired by modern product design principles.",
      "Built a responsive frontend using Angular with reusable standalone components.",
      "Created a structured navigation system for more than 30 content pages.",
      "Implemented smooth scroll-based animations and interactive UI elements.",
      "Developed reusable components and shared styling to improve scalability.",
      "Optimised layouts for desktop, tablet, and mobile devices.",
      "Introduced light/dark theme support and consistent design tokens.",
      "Organised content into modular sections to simplify future maintenance.",
      "Prepared the application for backend integration and future administrative features."
    ],
    outcome:
      "Delivered a modern, maintainable, and scalable web platform that significantly improved the organisation's digital presence. The new architecture simplifies future feature development, supports backend integration, and provides a polished user experience across devices.",
    stack: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'JavaScript', ],
    status: 'Completed · awaiting publish',
    // NOTE: update this to the specific repo URL if this project lives in its own repository.
    github: 'https://github.com/ibraheemrashid',
    // NOTE: add the new URL here once the redesign actually goes live, e.g. live: 'https://www.jahjk.org/'
    screenshots: [
      'projects/jamiat-ahl-e-hadees/1.png',
      'projects/jamiat-ahl-e-hadees/2.png'
    ]
  },
  {
    slug: 'siyam-o-salah',
    title: 'Siyam-o-Salah',
    tagline: 'A prayer & fasting companion built for year-round use, not just Ramadan.',
    summary:
      'A React Native app that works out prayer and fasting times right on the phone — no server involved — and reminds you when to eat and when to stop.',
    problem:
      "Users often rely on multiple applications for prayer times, Qibla direction, Islamic calendar, and religious utilities. The objective was to consolidate these services into one intuitive application while ensuring accurate location-based calculations and a smooth mobile experience.",
    approach: [
      "Built the first version in React Native (Expo) as a deliberate first step outside native Android.",
      "Calculated every prayer and fasting time — Fajr through Isha, Sehri, Iftaar — on-device using the Jean Meeus astronomical algorithms, so the app works fully offline with no external API calls.",
      "Hit a wall on iOS notifications: the standard libraries need Apple's Push Notifications entitlement, which requires a paid developer account. Wrote a small native Objective-C module that talks directly to UNUserNotificationCenter instead, scheduling Sehri and Iftaar alarms without needing that entitlement at all.",
      "Rounded it out with a full monthly fasting timetable, ten calculation methods (MWL, ISNA, Umm al-Qura, and others), GPS-based location with manual override, a light/dark theme that can sync with the system."
    ],
    outcome:
      "A fully offline prayer and fasting companion built for year-round use, not just Ramadan. Currently in active development for iOS, with Android support, an App Store release, and Qibla direction on the roadmap.",
    stack: ['React Native (Expo)', 'JavaScript', 'Kotlin', 'Swift', 'React Navigation', 'Objective-C++', 'AsyncStorage',],
    status: 'In active development · iOS & Android',
    github: 'https://github.com/ibraheemrashid/SiyamoSalah',
    screenshots: [
      'projects/siyam-o-salah/1.png',
      'projects/siyam-o-salah/2.png',
      'projects/siyam-o-salah/3.png'
    ]
  },
  {
    slug: 'reviewguard',
    title: 'ReviewGuard',
    tagline: 'Eliminating fake reviews with a model that reads between the lines.',
    summary:
      'A sentiment-analysis pipeline that flags suspicious reviews and surfaces the results in a dashboard people can actually read at a glance.',
    problem:
      "Businesses often receive large volumes of customer reviews across multiple platforms, making it difficult to manually identify trends, recurring issues, and overall customer sentiment. The goal was to automate this process using machine learning while providing an intuitive dashboard for visualising the results.",  
    approach: [
      "Designed a clean, responsive dashboard for review analysis.",
      "Built the frontend with a focus on usability and data visualisation.",
      "Developed NLP pipelines for sentiment classification.",
      "Processed and analysed customer review datasets.",
      "Integrated machine learning models to classify review sentiment.",
      "Presented analytical insights through interactive charts and summaries.",
      "Structured the application to support future AI model improvements and additional data sources."
    ],
    outcome:
    "Successfully built an intelligent review analysis platform capable of converting large volumes of customer feedback into structured insights, demonstrating the practical application of AI and machine learning within a real-world business workflow.",
    stack: ['Python', 'NLP', 'Bootstrap', 'JavaScript'],
    status: 'Completed',
    // NOTE: update this to the specific repo URL if ReviewGuard lives in its own repository.
    github: 'https://github.com/ibraheemrashid',
    metric: '85% sentiment classification accuracy',
    screenshots: [
      'projects/reviewguard/1.png',
      'projects/reviewguard/2.png'
    ]
  }
];
