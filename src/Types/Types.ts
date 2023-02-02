export interface IRace {
  name: string;
  value: string;
  description: string;
  namesExample: string;
  bonus: string;
  advice: string;
  abilities: IRaceAbilities[];
}

export interface IRaceAbilities {
  name: string;
  description: string;
}

export interface IParameters {
  nameRU: string;
  nameEN: string;
  description: string;
  initialValue: number;
  value: number;
}

export interface IClass {
  name: string;
  value: string;
  description: string;
}

export interface ISubclass {
  name: string;
  value: number;
  description: string;
  level: number;
}
export interface IAbilities {
  name: string;
  value: number;
  description: string;
}

export interface IRaceArray {
  race: IRace[];
  parameters: IParameters[];
  classes: IClass[];
  subclasses: ISubclass[];
  abilities: IAbilities[];
}
