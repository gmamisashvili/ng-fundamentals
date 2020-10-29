import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  template: `
    <div class="well pointable" (click)="toggleContent()">
      <h4 well-title>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf="this.visible" select="[well-body]"></ng-content>
    </div>
  `,
})
export class CollapsableWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
