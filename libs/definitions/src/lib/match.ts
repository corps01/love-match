export interface Match {
  _id: string;
  date: Date;
  members: string[];
}

export const mockMatchList: Match[] = [
  {
    _id: '_matchid1',
    date: new Date(),
    members: ['_id1', '_id2'],
  },
  {
    _id: '_matchid2',
    date: new Date(),
    members: ['_id1', '_id3'],
  },
];
