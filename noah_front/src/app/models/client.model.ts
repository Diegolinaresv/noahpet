import { Pet, PetGender, PetSterilized, PetType } from './pet.model';

export class Client {
  constructor(
    public id: number | null,
    public name: string | null,
    public city: string | null,
    public email: string | null,
    public cellphone: string | null,
    public actualPet: Pet | null,
    public donePets: Pet[]
  ) {}

  getActualPet(): Pet {
    return (
      this.actualPet ??
      new Pet(
        null,
        this.id,
        '',
        PetGender.Male,
        PetType.Dog,
        0,
        PetSterilized.IsSterilizedMale,
        null,
        0,
        null,
        0,
        0,
        0,
        null,
        null,
        null,
        0,
        null,
        false,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null
      )
    );
  }
}
