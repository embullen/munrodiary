import { Component} from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  moduleId: module.id,
  selector: 'home',
  template: `
  <div class="landing_banner">
    <div id="welcome">
        <h1>Munro Diary</h1>
    </div>
  </div>
`,
})
export class HomeComponent  {
 
}
