export interface ExperienceItem {
  dateRange: string;
  role: string;
  org: string;
  location: string;
  points: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    dateRange: '01/2025 — 01/2026',
    role: 'Certified Mentor · Mentor Lead',
    org: 'Codeyoung',
    location: 'Bangalore',
    points: [
      'Taught K-12 students web development, English, and public speaking using audio-visual sessions.',
      'Led and trained a mentor team on how to communicate clearly with both students and parents.'
    ]
  },
  {
    dateRange: '03/2022 — 12/2023',
    role: 'Head of Sales & Digital Presence',
    org: 'City Home Properties',
    location: 'Srinagar',
    points: [
      'Led a 25-person team as the youngest sales lead in the firm, driving performance targets.',
      "Managed the company's website and social presence, applying UI/UX principles to grow engagement.",
      'Handled end-to-end client relations, turning complex customer needs into business outcomes.'
    ]
  },
    {
    dateRange: '01/2023 — 03/2023',
    role: 'Intern / Trainee',
    org: 'CETPA Infotech Pvt. Ltd.',
    location: 'Noida, UP',
    points: [
      'Built a responsive e-commerce Android app in Kotlin, focused on a smooth shopping experience.',
      'Designed intuitive interfaces with an emphasis on clean app architecture in a professional team setting.'
    ]
  }
];
