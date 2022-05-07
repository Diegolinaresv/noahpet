import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Client_front';

  loadingStatus!: boolean;

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initProgress();
  }

  initProgress(): void {
    this.loadingService.listenLoading().subscribe((status) => {
      this.loadingStatus = status;
      this.cdRef.detectChanges();
    });
  }
}
