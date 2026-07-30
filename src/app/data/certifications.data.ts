export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  image: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'The Complete Android  14 & Kotlin Development Masterclass.',
    issuer: 'Udemy',
    date: '',
    image: 'certifications/android-bootcamp.png'
  },
  {
    title: '100 Days of Code — The Complete Python Pro Bootcamp.',
    issuer: 'Udemy',
    date: '',
    image: 'certifications/100-days-python.png'
  }
];