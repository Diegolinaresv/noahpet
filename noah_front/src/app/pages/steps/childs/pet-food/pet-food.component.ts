import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/services/stepper.service';
import {
  NoahApiService,
  ClientFoodResponse,
} from 'src/app/services/noah-api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-pet-food',
  templateUrl: './pet-food.component.html',
  styleUrls: ['./pet-food.component.scss'],
})
export class PetFoodComponent implements OnInit {
  localClient!: Client;

  petFood: Array<ClientFoodResponse> = [];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private stepperService: StepperService,
    private noahApiService: NoahApiService,
    private toastService: ToastService
  ) {
    this.stepperService.setStep(6);
  }

  ngOnInit(): void {
    this.clientService
      .getClient()
      .subscribe((Client) => (this.localClient = Client));

    this.noahApiService
      .getFood(this.clientService.getActualClient().id!)
      .subscribe((data) => {
        console.log(data);
        data.forEach((response) => this.petFood.push(response));
      });
  }

  setPetFood(id: number, food: number) {
    var pet = this.clientService
      .getActualClient()
      .donePets.find((pet) => pet.id == id)!;
    pet.dietId = food;

    this.noahApiService
      .updatePet(pet, this.clientService.getActualClient().id!)
      .subscribe((data) => {
        this.clientService.setClient(this.clientService.getActualClient());
      });
  }

  setPetFoodSupplement(id: number, food: number) {
    this.clientService
      .getActualClient()
      .donePets.find((pet) => pet.id == id)!.selectedFoodSupplement = food;

    this.clientService.setClient(this.clientService.getActualClient());
  }

  petHasFood(id: number, food: number) {
    return (
      this.clientService.getActualClient().donePets.find((pet) => pet.id == id)!
        .selectedFood == food
    );
  }

  petHasFoodSupplement(id: number, food: number) {
    return (
      this.clientService.getActualClient().donePets.find((pet) => pet.id == id)!
        .selectedFoodSupplement == food
    );
  }

  nextStep() {
    if (this.localClient.donePets.every((val) => val.selectedFood != null)) {
      this.stepperService.nextStep();
      this.router.navigate(['/steps/food-plan']);
    } else {
      this.toastService.error('Debes seleccionar una comida para cada mascota');
    }
  }
}
