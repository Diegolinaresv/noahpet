import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  localClient!: Client;

  petFood: Array<String> = ['BALANCE RES', 'CUIDADO RIG', 'CUIDADO RENAL'];

  petSuplement: Array<String> = ['CARNE', 'POLLO', 'PAVO'];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private stepperService: StepperService
  ) {
    this.stepperService.setStep(8);
  }

  ngOnInit(): void {
    this.clientService
      .getClient()
      .subscribe((Client) => (this.localClient = Client));
  }

  nextStep() {
    /* if() */
    this.router.navigate(['/steps/user-info']);
  }
}
