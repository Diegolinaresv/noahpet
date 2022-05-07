import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/services/stepper.service';
import { NoahApiService } from 'src/app/services/noah-api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-finish-information',
  templateUrl: './finish-information.component.html',
  styleUrls: ['./finish-information.component.scss'],
})
export class FinishInformationComponent implements OnInit {
  localClient!: Client;
  localBool: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private stepperService: StepperService,
    private noahApiService: NoahApiService,
    private toastService: ToastService
  ) {
    this.stepperService.setStep(4);
  }

  ngOnInit(): void {
    this.clientService
      .getClient()
      .subscribe((Client) => (this.localClient = Client));
  }

  changeBool(val: boolean) {
    this.localBool = val;
  }

  nextStep() {
    this.noahApiService.finishPet(this.localClient.id!).subscribe({
      next: (data) => {
        if (
          this.clientService.getActualClient().getActualPet().name.length > 0
        ) {
          this.clientService.newPet();
        }
        if (!this.localBool) {
          this.stepperService.nextStep();
          this.stepperService.nextStep();
          this.router.navigate(['/steps/pet-food']);
        } else {
          this.stepperService.setStep(2);
          this.router.navigate(['/steps/condition']);
        }
      },
      error: (err) => {
        console.log(err);
        this.toastService.error(err.message);
        //this.goNextPage();
      },
    });
  }
}
