import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/services/stepper.service';

import data from 'src/assets/json/departments.json';

import { ShowInputService } from 'src/app/services/show-input.service';
import { hideShow } from 'src/app/animation/animation';
import { NoahApiService } from 'src/app/services/noah-api.service';
import { ToastService } from 'src/app/services/toast.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-me-form',
  templateUrl: './me-form.component.html',
  styleUrls: ['./me-form.component.scss'],
  animations: [hideShow],
})
export class MeFormComponent implements OnInit {
  clientForm!: FormGroup;
  departments: { id: number; departamento: string; ciudades: Array<string> }[] =
    data;

  cities: Array<string> = [];

  constructor(
    public showInput: ShowInputService,
    private clientService: ClientService,
    private router: Router,
    private stepperService: StepperService,
    private noahApiService: NoahApiService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.clientService.resetClient();

    this.departments.forEach((department) =>
      department.ciudades.forEach((city) => this.cities.push(city))
    );
    this.cities.sort();

    this.clientForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      cellphone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  changeName(e: any) {
    this.showInput.showNext(1);
  }

  changeCity(e: any) {
    this.showInput.showNext(2);
  }

  changeEmail(e: any) {
    this.showInput.showNext(3);
  }

  changeCellphone(e: any) {
    this.showInput.showNext(4);
  }

  nextStep() {
    if (this.clientForm.valid) {
      this.noahApiService.saveClient(this.clientForm.value).subscribe({
        next: (data) => {
          this.clientService.setClient(
            new Client(
              data.id,
              data.name,
              data.city,
              data.email,
              data.cellphone,
              null,
              []
            )
          );

          this.toastService.success('Ok');
          this.goNextPage();
        },
        error: (err) => {
          console.log(err);
          this.toastService.error(err.message);
          //this.goNextPage();
        },
      });
    }
  }

  goNextPage() {
    this.stepperService.nextStep();
    this.router.navigate(['/steps/condition']);
  }
}
