export interface Chat {
  _id: string;
  members: string[];
  messages: Message[];
  allow: {
    images: boolean;
    audios: boolean;
  };
}

export interface ChatPreview {
  receiver: string;
  image_profile: string;
  last_message: string;
  date: Date;
}

export interface Message {
  date: Date;
  content: string;
  sender: string;
  receiver: string;
}

export const mockGeneralChat: Chat = {
  _id: '_idChat1',
  members: ['_id1', '_id2'],
  allow: {
    images: true,
    audios: true,
  },
  messages: [
    {
      date: new Date(),
      content: 'Hola usuario 2',
      sender: '_id1',
      receiver: '_id2',
    },
    {
      date: new Date(),
      content:
        'https://pickaface.net/gallery/avatar/unr_test_180612_1021_b05p.png',
      sender: '_id2',
      receiver: '_id1',
    },
    {
      date: new Date(),
      content: 'Jaja tienes razón',
      sender: '_id1',
      receiver: '_id2',
    },
    {
      date: new Date(),
      content:
        'https://www.onlinemictest.com/wp-content/themes/onlinemictest/sound.mp3',
      sender: '_id2',
      receiver: '_id1',
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
