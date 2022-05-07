import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paw-button',
  templateUrl: './paw-button.component.html',
  styleUrls: ['./paw-button.component.scss'],
})
export class PawButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = '';

  constructor() {}

  ngOnInit(): void {}
}
