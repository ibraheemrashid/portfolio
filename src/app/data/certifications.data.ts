export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  note?: string;
}

// NOTE: titles below are based on the course descriptions you gave me
// ("Android bootcamp" and "100 Days of Code — Python"). Update `title`
// and `date` to match the exact wording and completion date on your
// actual Udemy certificates.
export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Android Development Bootcamp',
    issuer: 'Udemy',
    date: '', // add completion date, e.g. '2024'
  },
  {
    title: '100 Days of Code — The Complete Python Pro Bootcamp',
    issuer: 'Udemy',
    date: '', // add completion date, e.g. '2024'
  }
];
