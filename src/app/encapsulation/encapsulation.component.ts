import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css'],
  // encapsulation: ViewEncapsulation.None

  // None: style effects child component as well
  // Emulated: style doesn't effect on child component
  // Shadow: we put css file in global scope but it will not effect on which component has a shadow encapsulation.
})
export class EncapsulationComponent {

}
