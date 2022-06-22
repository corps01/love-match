import { Types } from 'mongoose';
import { Horoscope } from '../about';
import { Gender, Lookingfor, User, UserPreview } from './types';

export const mockGeneralUserList: User[] = [
  {
    _id: new Types.ObjectId(),
    name: 'Probemio',
    last_name: 'testino',
    password:
      '0f13c89c435cbe566867e9df9f42b25120b322cc39a203b028017a0db938fed19b08243cc17b0f1d9d4b549d1bbe592915f7500013e8f41ff1ba3f1d7724500e',
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
    gender: Gender.OTHER,
    preference: 'Lo que no sea humano',
    about: {
      _id: new Types.ObjectId(),
      horoscope: Horoscope.LIBRA,
      personal_questions: [
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
    lookingfor: Lookingfor.LONG_RELATIONSHIP,
    verified: true,
  },
  {
    _id: new Types.ObjectId(),
    name: 'Probemio',
    last_name: 'testino',
    password:
      '0f13c89c435cbe566867e9df9f42b25120b322cc39a203b028017a0db938fed19b08243cc17b0f1d9d4b549d1bbe592915f7500013e8f41ff1ba3f1d7724500e',
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
    gender: Gender.OTHER,
    preference: 'Lo que no sea humano',
    about: {
      _id: new Types.ObjectId(),
      horoscope: Horoscope.LIBRA,
      personal_questions: [
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
    lookingfor: Lookingfor.LONG_RELATIONSHIP,
    verified: true,
  },
];

export const mockGeneralUser: User = {
  _id: new Types.ObjectId(),
  name: 'Probemio',
  last_name: 'testino',
  password: 'Password123$',
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
  gender: Gender.OTHER,
  preference: 'Lo que no sea humano',
  about: {
    _id: new Types.ObjectId(),
    horoscope: Horoscope.LIBRA,
    personal_questions: [
      {
        _id: new Types.ObjectId(),
        question: 'What is your favorite food?',
        answer: 'Hot-Dog',
      },
      {
        _id: new Types.ObjectId(),
        question: 'What is your favorite movie?',
        answer: 'Joker',
      },
    ],
    description: "I'm looking a new experience",
  },
  lookingfor: Lookingfor.LONG_RELATIONSHIP,
  verified: true,
};

export const mockopPersonsPreview: UserPreview[] = [
  {
    _id: new Types.ObjectId(),
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
    gender: Gender.OTHER,
    preference: 'Lo que no sea humano',
    about: {
      _id: new Types.ObjectId(),
      horoscope: Horoscope.LIBRA,
      personal_questions: [
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
  {
    _id: new Types.ObjectId(),
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
    gender: Gender.OTHER,
    preference: 'Lo que no sea humano',
    about: {
      _id: new Types.ObjectId(),
      horoscope: Horoscope.LIBRA,
      personal_questions: [
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
  {
    _id: new Types.ObjectId(),
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
    gender: Gender.OTHER,
    preference: 'Lo que no sea humano',
    about: {
      _id: new Types.ObjectId(),
      horoscope: Horoscope.LIBRA,
      personal_questions: [
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite food?',
          answer: 'Hot-Dog',
        },
        {
          _id: new Types.ObjectId(),
          question: 'What is your favorite movie?',
          answer: 'Joker',
        },
      ],
      description: "I'm looking a new experience",
    },
  },
];
