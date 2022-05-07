export enum PetType {
  Dog = 'dog',
  Cat = 'cat',
  Other = 'other',
}

export enum PetGender {
  Male = 'm',
  Female = 'f',
}

export enum PetSterilized {
  IsSterilizedFemale = 'ya esta esterilizada',
  IsSterilizedMale = 'ya esta esterilizado',
  IsNotSterilizedFemale = 'no esta esterilizada',
  IsNotSterilizedMale = 'no esta esterilizado',
}

export class Pet {
  constructor(
    public id: number | null,
    public clientId: number | null,
    public name: string,
    public gender: PetGender,
    public type: PetType,
    public age: number,
    public sterilized: PetSterilized,
    public birthday: string | null,
    public weight: number,
    public breedId: number | null,
    public textureId: number,
    public idealWeight: number,
    public activityLevelId: number,
    public eatStyle: string | null,
    public foodType: string | null,
    public foodBranch: string | null,
    public nFeedTimes: number,
    public snackingId: number | null,
    public hasMedicalCondition: boolean,
    public principalMedicalConditionId: number | null,
    public principalMedicalSympton: string | null,
    public hasSecondaryMedicalCondition: boolean,
    public secondaryMedicalConditionId: number | null,
    public secondaryMedicalSympton: string | null,
    public selectedFood: number | null,
    public selectedFoodSupplement: number | null,
    public dietId: number | null
  ) {}
}
