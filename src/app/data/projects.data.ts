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
    slug: 'siyam-o-salah',
    title: 'Siyam-o-Salah',
    tagline: 'A prayer & fasting companion built for year-round use, not just Ramadan.',
    summary:
      'A React Native app that works out prayer and fasting times right on the phone — no server involved — and reminds you when to eat and when to stop.',
    problem:
      "Muslims need accurate prayer and fasting times every single day, not just during Ramadan — and most apps either need a live network connection or don't handle less-common locations well. I also wanted to push myself into cross-platform mobile development, after mostly building for Android in Kotlin.",
    approach: [
      "Built the first version in React Native (Expo) as a deliberate first step outside native Android.",
      "Calculated every prayer and fasting time — Fajr through Isha, Sehri, Iftaar — on-device using the Jean Meeus astronomical algorithms, so the app works fully offline with no external API calls.",
      "Hit a wall on iOS notifications: the standard libraries need Apple's Push Notifications entitlement, which requires a paid developer account. Wrote a small native Objective-C module that talks directly to UNUserNotificationCenter instead, scheduling Sehri and Iftaar alarms without needing that entitlement at all.",
      "Rounded it out with a full monthly fasting timetable, ten calculation methods (MWL, ISNA, Umm al-Qura, and others), GPS-based location with manual override, a light/dark theme that can sync with the system, and the Hijri date on every screen."
    ],
    outcome:
      "A fully offline prayer and fasting companion built for year-round use, not just Ramadan. Currently in active development for iOS, with Android support, an App Store release, and Qibla direction on the roadmap.",
    stack: ['React Native (Expo)', 'React Navigation', 'Objective-C', 'AsyncStorage'],
    status: 'In active development · iOS',
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
      "Online reviews only work if people can trust them, and fake or manipulated reviews are hard to catch by eye at any real scale.",
    approach: [
      "Built a natural-language sentiment-analysis pipeline in Python to classify reviews for signs of manipulation.",
      "Wired the model's output into a Bootstrap-based dashboard, designed so someone without a data-science background could scan it and act on it directly."
    ],
    outcome:
      "85% accuracy in sentiment classification, delivered through an interface non-technical stakeholders can actually use — not just a notebook full of numbers.",
    stack: ['Python', 'NLP', 'Bootstrap'],
    status: 'Completed',
    // NOTE: update this to the specific repo URL if ReviewGuard lives in its own repository.
    github: 'https://github.com/ibraheemrashid',
    metric: '85% sentiment classification accuracy',
    screenshots: [
      'projects/reviewguard/1.png',
      'projects/reviewguard/2.png'
    ]
  },
  {
    slug: 'jamiat-ahl-e-hadees',
    title: 'Jamiat Ahl-e-Hadees J&K',
    tagline: "Rebuilding an organization's web presence from the ground up.",
    summary:
      'A single-page site turned into a full multi-page platform, covering everything from fatwa submissions to prayer timings.',
    problem:
      "The organization's existing site was a single page — it couldn't hold the institutional structure they actually needed: an Executive Council, an Ifta Board, fatwa submissions, multiple schools, and daily prayer timings.",
    approach: [
      "Re-architected the site into a scalable multi-page platform in HTML5, CSS3, and JavaScript, with navigation people could actually find their way through.",
      "Worked directly with stakeholders to translate what the organization needed into a production-ready structure, rather than just restyling the old single page."
    ],
    outcome:
      "A complete rebuild — fatwa request form, Ifta Board listings, institution pages, and interactive location details — built and ready, awaiting publish. The organization's current site is still the previous version until the handover goes live.",
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'Completed · awaiting publish',
    // NOTE: update this to the specific repo URL if this project lives in its own repository.
    github: 'https://github.com/ibraheemrashid',
    // NOTE: add the new URL here once the redesign actually goes live, e.g. live: 'https://www.jahjk.org/'
    screenshots: [
      'projects/jamiat-ahl-e-hadees/1.png',
      'projects/jamiat-ahl-e-hadees/2.png'
    ]
  }
];
