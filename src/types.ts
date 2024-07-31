export type Talent = {
  id: string;
  name: string;
  description: string;
  selected: boolean;
};

export type TalentTree = {
  id: string;
  name: string;
  talents: Talent[];
};
