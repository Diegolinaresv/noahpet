import { Component, OnInit } from '@angular/core';
import { PetGender, PetSterilized, PetType } from 'src/app/models/pet.model';
import { ClientService } from 'src/app/services/client.service';
import {
  FormGroup,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/services/stepper.service';
import { NoahApiService } from 'src/app/services/noah-api.service';
import { Breed } from 'src/app/models/breed.model';
import { Texture } from 'src/app/models/texture.model';
import { ActivityLevel } from 'src/app/models/activity-level.model';
import { Diet } from 'src/app/models/diet.model';
import { ShowInputService } from 'src/app/services/show-input.service';
import { hideShow } from 'src/app/animation/animation';
import { Snacking } from 'src/app/models/snacking.model';
import { Client } from 'src/app/models/client.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-condition-form',
  templateUrl: './condition-form.component.html',
  styleUrls: ['./condition-form.component.scss'],
  animations: [hideShow],
})
export class ConditionFormComponent implements OnInit {
  localClient!: Client;
  petForm!: FormGroup;
  clientBreeds: Array<Breed> = [];
  clientTexture: Array<Texture> = [];
  clientActivityLevel: Array<ActivityLevel> = [];
  clientAllergy: Array<Diet> = [];
  clientSnacking: Array<Snacking> = [];
  formErrors: Array<String> = [];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private stepperService: StepperService,
    private noahApiService: NoahApiService,
    private toastService: ToastService,

    public showInput: ShowInputService
  ) {
    this.stepperService.setStep(2);
    this.showInput.reset();
  }

  ngOnInit(): void {
    this.clientService.getClient().subscribe((client) => {
      this.localClient = client;
    });

    var formClient = this.clientService.getActualClient();

    this.petForm = new FormGroup({
      clientId: new FormControl(this.localClient.getActualPet().clientId, [
        Validators.required,
      ]),
      name: new FormControl(this.localClient.getActualPet().name, [
        Validators.required,
      ]),
      gender: new FormControl(this.localClient.getActualPet().gender, [
        Validators.required,
      ]),
      type: new FormControl(this.localClient.getActualPet().type, [
        Validators.required,
      ]),
      age: new FormControl(this.localClient.getActualPet().age, [
        Validators.required,
      ]),
      sterilized: new FormControl(this.localClient.getActualPet().sterilized, [
        Validators.required,
      ]),
      birthday: new FormControl(this.localClient.getActualPet().birthday, [
        Validators.required,
      ]),
      weight: new FormControl(this.localClient.getActualPet().weight, [
        Validators.required,
      ]),
      breedId: new FormControl(this.localClient.getActualPet().breedId, [
        Validators.required,
      ]),
      textureId: new FormControl(this.localClient.getActualPet().textureId, [
        Validators.required,
      ]),
      idealWeight: new FormControl(
        this.localClient.getActualPet().idealWeight,
        [Validators.required]
      ),
      activityLevelId: new FormControl(
        this.localClient.getActualPet().activityLevelId,
        [Validators.required]
      ),
      eatStyle: new FormControl(this.localClient.getActualPet().eatStyle, [
        Validators.required,
      ]),
      foodType: new FormControl(this.localClient.getActualPet().foodType, [
        Validators.required,
      ]),
      foodBranch: new FormControl(this.localClient.getActualPet().foodBranch, [
        Validators.required,
      ]),
      nFeedTimes: new FormControl(this.localClient.getActualPet().nFeedTimes, [
        Validators.required,
      ]),
      snackingId: new FormControl(this.localClient.getActualPet().snackingId, [
        Validators.required,
      ]),
    });

    this.noahApiService.getBreeds().subscribe((data) => {
      data.forEach((breed) => this.clientBreeds.push(breed));
    });

    this.noahApiService.getTexture().subscribe((data) => {
      data.forEach((texture) => this.clientTexture.push(texture));
    });

    this.noahApiService.getActivityLevel().subscribe((data) => {
      data.forEach((activityLevel) =>
        this.clientActivityLevel.push(activityLevel)
      );
    });

    this.noahApiService.getSnacking().subscribe((data) => {
      data.forEach((snacking) => this.clientSnacking.push(snacking));
    });

    this.noahApiService.getAllergy().subscribe((data) => {
      data.forEach((allergy) => this.clientAllergy.push(allergy));
    });

    var tempClient = this.clientService.getActualClient();
    if (tempClient.actualPet == null) {
      tempClient.actualPet = this.clientService
        .getActualClient()
        .getActualPet();
      this.clientService.setClient(tempClient);
    }

    this.petForm.valueChanges.subscribe((val) => {
      Object.assign(this.clientService.getActualClient().getActualPet(), val);
      this.clientService.setClient(this.clientService.getActualClient());
      this.getFormValidationErrors();
    });
  }

  public get PetType() {
    return PetType;
  }

  public get PetGender() {
    return PetGender;
  }

  public get PetSterilized() {
    return PetSterilized;
  }

  petTypeText(type: PetType): string {
    switch (type) {
      case PetType.Dog:
        return 'Perro';
      case PetType.Cat:
        return 'Gato';
      case PetType.Other:
        return 'Otro';
      default:
        return '';
    }
  }

  genderText(gender: PetGender): string {
    switch (gender) {
      case PetGender.Male:
        return 'El';
      case PetGender.Female:
        return 'Ella';
      default:
        return '';
    }
  }

  getFormValidationErrors() {
    this.formErrors = [];
    Object.keys(this.petForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors | null =
        this.petForm.get(key)!.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          this.formErrors.push(key + ' ' + keyError);
        });
      }
    });
  }

  nextStep() {
    if (this.petForm.valid) {
      this.noahApiService.savePet(this.petForm.value).subscribe({
        next: (data) => {
          Object.assign(this.clientService.getActualClient().getActualPet(), {
            id: data.id,
          });
          this.clientService.setClient(this.clientService.getActualClient());

          this.toastService.success('Ok');

          this.stepperService.nextStep();
          this.router.navigate(['/steps/medical-condition']);
        },
        error: (err) => {
          console.log(err);
          this.toastService.error(err.message);
        },
      });
    }
  }
}
