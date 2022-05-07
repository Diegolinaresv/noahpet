import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/services/stepper.service';
import {
  NoahApiService,
  ClientDietResponse,
} from 'src/app/services/noah-api.service';

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss'],
})
export class FoodPlanComponent implements OnInit {
  localClient!: Client;
  dietResult: Array<ClientDietResponse> = [];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private stepperService: StepperService,
    private noahApiService: NoahApiService
  ) {
    this.stepperService.setStep(7);
  }

  ngOnInit(): void {
    this.clientService
      .getClient()
      .subscribe((Client) => (this.localClient = Client));
    this.noahApiService
      .getDietResult(this.clientService.getActualClient())
      .subscribe((data) => {
        data.forEach((response) => this.dietResult.push(response));
      });
  }

  nextStep() {
    /* if() */
    this.stepperService.nextStep();
    this.router.navigate(['/steps/user-info']);
  }
}
