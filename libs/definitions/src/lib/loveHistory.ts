export type PossibleInteraction = 'No' | 'Yes' | 'Super yes';

export interface LoveHistory {
  date: Date;
  target_user: string;
  result: PossibleInteraction;
}

export const mockLoveHistory: LoveHistory[] = [
  {
    date: new Date(),
    target_user: '_id2',
    result: 'Super yes',
  },
  {
    date: new Date(),
    target_user: '_id3',
    result: 'Yes',
  },
];
