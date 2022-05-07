import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { NoahApiService } from 'src/app/services/noah-api.service';
import { StepperService } from 'src/app/services/stepper.service';
import { ToastService, ToastType } from 'src/app/services/toast.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  localStep!: number;

  constructor(
    private stepperService: StepperService,
    private toastr: ToastrService,
    private toastService: ToastService,
    private clientService: ClientService,
    private noahApi: NoahApiService
  ) {}

  ngOnInit(): void {
    this.stepperService.getStep().subscribe((step) => (this.localStep = step));
    this.toastService.getToast().subscribe((toast) => {
      this.toastr.clear();
      if (toast.status == ToastType.Success) {
        this.toastr.success(toast.msg);
      } else if (toast.status == ToastType.Error) {
        this.toastr.error(toast.msg);
      } else if (toast.status == ToastType.Warning) {
        this.toastr.warning(toast.msg);
      }
    });
    this.loadClient();
  }

  loadClient(): void {
    if (this.clientService.getActualClient().id != null) {
      this.noahApi
        .getClient(this.clientService.getActualClient().id!)
        .subscribe({
          next: (data) => {
            console.log(this.noahApi.keysToCamel(data));
            var client = this.noahApi.keysToCamel(data) as Client;

            this.clientService.setClient(
              new Client(
                client.id,
                client.name,
                client.city,
                client.email,
                client.cellphone,
                client.actualPet,
                client.donePets
              )
            );
          },
          error: (err) => {
            console.log(err);
            //this.goNextPage();
          },
        });
    }
  }
}
