import { Types } from 'mongoose';
import { Chat, ChatPreview } from './types';

export const mockGeneralChat: Chat = {
  _id: new Types.ObjectId(),
  members: [new Types.ObjectId(), new Types.ObjectId()],
  allow: {
    images: true,
    audios: true,
  },
  messages: [
    {
      date: new Date(),
      content: 'Hola usuario 2',
      sender: new Types.ObjectId(),
      receiver: new Types.ObjectId(),
    },
    {
      date: new Date(),
      content:
        'https://pickaface.net/gallery/avatar/unr_test_180612_1021_b05p.png',
      sender: new Types.ObjectId(),
      receiver: new Types.ObjectId(),
    },
    {
      date: new Date(),
      content: 'Jaja tienes razón',
      sender: new Types.ObjectId(),
      receiver: new Types.ObjectId(),
    },
    {
      date: new Date(),
      content:
        'https://www.onlinemictest.com/wp-content/themes/onlinemictest/sound.mp3',
      sender: new Types.ObjectId(),
      receiver: new Types.ObjectId(),
    },
  ],
};

export const mockopChats: ChatPreview[] = [
  {
    image_profile:
      'https://thumbs.dreamstime.com/b/charming-happy-asian-female-white-t-shrit-smiling-satisfied-clapping-hands-congratulate-person-win-praising-good-work-well-193061246.jpg',
    receiver: 'Ana',
    date: new Date(),
    last_message: 'Wow que interesante!!',
  },
  {
    image_profile: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
    receiver: 'Sofia',
    date: new Date(),
    last_message: 'Yo estudio medicina en Monterrey',
  },
  {
    image_profile:
      'https://www.admenergy.com.mx/wp-content/uploads/person1.jpg',
    receiver: 'Juan',
    date: new Date(),
    last_message: '¿Cuales son tus hobbies?',
  },
  {
    image_profile:
      'https://thumbs.dreamstime.com/b/charming-happy-asian-female-white-t-shrit-smiling-satisfied-clapping-hands-congratulate-person-win-praising-good-work-well-193061246.jpg',
    receiver: 'Ana',
    date: new Date(),
    last_message: 'Wow que interesante!!',
  },
  {
    image_profile: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
    receiver: 'Sofia',
    date: new Date(),
    last_message: 'Yo estudio medicina en Monterrey',
  },
  {
    image_profile:
      'https://www.admenergy.com.mx/wp-content/uploads/person1.jpg',
    receiver: 'Juan',
    date: new Date(),
    last_message: '¿Cuales son tus hobbies?',
  },
  {
    image_profile:
      'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
    receiver: 'Pedro',
    date: new Date(),
    last_message: 'Me encanta ese tipo de musica',
  },
  {
    image_profile:
      'https://thumbs.dreamstime.com/b/charming-happy-asian-female-white-t-shrit-smiling-satisfied-clapping-hands-congratulate-person-win-praising-good-work-well-193061246.jpg',
    receiver: 'Ana',
    date: new Date(),
    last_message: 'Wow que interesante!!',
  },
  {
    image_profile: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
    receiver: 'Sofia',
    date: new Date(),
    last_message: 'Yo estudio medicina en Monterrey',
  },
  {
    image_profile:
      'https://www.admenergy.com.mx/wp-content/uploads/person1.jpg',
    receiver: 'Juan',
    date: new Date(),
    last_message: '¿Cuales son tus hobbies?',
  },
  {
    image_profile:
      'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
    receiver: 'Pedro',
    date: new Date(),
    last_message: 'Me encanta ese tipo de musica',
  },
];
