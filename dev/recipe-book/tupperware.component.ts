import {Component} from "angular2/core";

@Component ({
    selector: 'app-visit-rangle',
    template: `
<div class="master list">
Recipe Master
</div>
<div class="detail">
Recipe Detail
</div>
    <button
      type="button"
      (click)="visitRangle()">
      Visit Rangle
    </button>
  `
})
export  class TupperwareComponent {
    visitRangle() {
        location.href = 'https://rangle.io';
    }
}