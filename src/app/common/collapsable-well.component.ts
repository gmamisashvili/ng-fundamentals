import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  template: `
    <div class="well pointable" (click)="toggleContent()">
      <h4 class="well-title">{{ title }}</h4>
      <ng-content *ngIf="this.visible"></ng-content>
    </div>
  `,
})
export class CollapsableWellComponent {
  @Input() title: string;
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
