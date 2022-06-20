export type Horoscope =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces';

export type Gender = 'Female' | 'Male' | 'Other';

export type Lookingfor =
  | 'Friendship'
  | 'Nothing'
  | 'Long relationship'
  | 'Casual';

export interface User {
  _id: string;
  name: string;
  last_name?: string;
  password: string;
  email: string;
  city?: string;
  country?: string;
  phone: string;
  image_profile: string;
  gallery: string[];
  age: number;
  gender: Gender;
  preference: string;
  about: About;
  lookingfor: Lookingfor;
  verified: boolean;
}

export interface PersonPreview {
  _id: string;
  name: string;
  last_name?: string;
  city?: string;
  country?: string;
  phone: string;
  image_profile: string;
  gallery: string[];
  age: number;
  gender: Gender;
  preference: string;
  about: About;
}

export interface About {
  horoscope?: Horoscope;
  personal_questions?: PersonalQuestion[];
  description: string;
}

export interface PersonalQuestion {
  question: string;
  answer: string;
}

export class CreateUserDTO {
  name: string;
  last_name: string;
  password: string;
  email: string;
  city: string;
  country: string;
  phone: string;
  age: number;
  gender: Gender;
  preference: string;
  about: About;
  lookingfor: Lookingfor;
  verified = false;
}

export class LoginDTO {
  email: string;
  password: string;
}

export class AuthDAO{
  jwt: string
}

export const mockGeneralUserList: User[] = [
  {
    _id: '_id2',
    name: 'Probemio',
    last_name: 'testino',
    password:
      '804f50ddbaab7f28c933a95c162d019acbf96afde56dba10e4c7dfcfe453dec4bacf5e78b1ddbdc1695a793bcb5d7d409425db4cc3370e71c4965e4ef992e8c4',
    email: 'prueba2@test.com',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: 'Other',
    preference: 'Lo que no sea humano',
    about: {
      horoscope: 'Libra',
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
    lookingfor: 'Long relationship',
    verified: true,
  },
];

export const mockGeneralUser: User = {
  _id: '_id1',
  name: 'Probemio',
  last_name: 'testino',
  password:
    '804f50ddbaab7f28c933a95c162d019acbf96afde56dba10e4c7dfcfe453dec4bacf5e78b1ddbdc1695a793bcb5d7d409425db4cc3370e71c4965e4ef992e8c4',
  email: 'probemioT89@test.com',
  country: 'México',
  city: 'CDMX',
  phone: '+525512907846',
  image_profile:
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
  gallery: [
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
  ],
  age: 40,
  gender: 'Other',
  preference: 'Lo que no sea humano',
  about: {
    horoscope: 'Libra',
    personal_questions: [
      {
        question: 'What is your favorite food?',
        answer: 'Hot-Dog',
      },
      {
        question: 'What is your favorite movie?',
        answer: 'Joker',
      },
    ],
    description: "I'm looking a new experience",
  },
  lookingfor: 'Long relationship',
  verified: true,
};

export const mockopPersonsPreview: PersonPreview[] = [
  {
    _id: '_id1',
    name: 'Probemio',
    last_name: 'testino',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: 'Other',
    preference: 'Lo que no sea humano',
    about: {
      horoscope: 'Libra',
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
  {
    _id: '_id1',
    name: 'Probemio',
    last_name: 'testino',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: 'Other',
    preference: 'Lo que no sea humano',
    about: {
      horoscope: 'Libra',
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
  {
    _id: '_id1',
    name: 'Probemio',
    last_name: 'testino',
    country: 'México',
    city: 'CDMX',
    phone: '+525512907846',
    image_profile:
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    gallery: [
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
      'https://pickaface.net/gallery/avatar/unr_test_180821_0925_9k0pgs.png',
    ],
    age: 40,
    gender: 'Other',
    preference: 'Lo que no sea humano',
    about: {
      horoscope: 'Libra',
      personal_questions: [
        {
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
];
