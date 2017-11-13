import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div style="text-align:center; border: solid; border-color: darkcyan; border-width: thin; padding: 8px; border-top: 0px;">
      <div style="text-align:left; color: darkcyan">БЛОК КОНТЕНТ</div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppContentComponent {}
