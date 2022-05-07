import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/services/stepper.service';
import { NoahApiService } from 'src/app/services/noah-api.service';
import { Diet } from 'src/app/models/diet.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-medical-condition-form',
  templateUrl: './medical-condition-form.component.html',
  styleUrls: ['./medical-condition-form.component.scss'],
})
export class MedicalConditionFormComponent implements OnInit {
  localClient!: Client;
  petForm!: FormGroup;
  hasMedical: boolean = false;

  medicalConditionList: Array<Diet> = [];

  medicalSymptomList: Array<String> = [
    'Diarrea',
    'Vómito',
    'Gases',
    'Mal aliento',
    'Caída de pelo',
    'Picazón',
    'Pelo opaco',
    'Convulsiones',
    'Dolor articular',
    'Desánimo',
    'Ayuno prolongado',
    'Otro',
  ];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private stepperService: StepperService,
    private noahApiService: NoahApiService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.clientService
      .getClient()
      .subscribe((client) => (this.localClient = client));

    var formClient = this.clientService.getActualClient();

    this.petForm = new FormGroup({
      hasMedicalCondition: new FormControl(
        formClient.getActualPet().hasMedicalCondition,
        [Validators.required]
      ),
      principalMedicalConditionId: new FormControl(
        formClient.getActualPet().principalMedicalConditionId,
        []
      ),
      principalMedicalSympton: new FormControl(
        formClient.getActualPet().principalMedicalSympton,
        []
      ),
      hasSecondaryMedicalCondition: new FormControl(
        formClient.getActualPet().hasSecondaryMedicalCondition,
        [Validators.required]
      ),
      secondaryMedicalConditionId: new FormControl(
        formClient.getActualPet().secondaryMedicalConditionId,
        []
      ),
      secondaryMedicalSympton: new FormControl(
        formClient.getActualPet().secondaryMedicalSympton,
        []
      ),
    });

    this.noahApiService.getMedicalCondition().subscribe((data) => {
      data.forEach((allergy) => this.medicalConditionList.push(allergy));
    });

    this.petForm.valueChanges.subscribe((val) => {
      val['hasMedicalCondition'] = val['hasMedicalCondition'] == 'true';
      val['hasSecondaryMedicalCondition'] =
        val['hasSecondaryMedicalCondition'] == 'true';
      Object.assign(this.clientService.getActualClient().getActualPet(), val);
      this.clientService.setClient(this.clientService.getActualClient());
    });
  }

  nextStep() {
    var tempPet = this.clientService.getActualClient().getActualPet();
    if (
      tempPet.hasMedicalCondition &&
      tempPet.principalMedicalConditionId == null
    ) {
      return;
    }

    this.noahApiService.updatePet(this.petForm.value, tempPet.id!).subscribe({
      next: (data) => {
        this.toastService.success('Ok');

        this.stepperService.nextStep();
        this.router.navigate(['/steps/finish-information']);
      },
      error: (err) => {
        console.log(err);
        this.toastService.error(err.message);
      },
    });
  }
}
