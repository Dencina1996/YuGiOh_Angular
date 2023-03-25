import { Component, Input } from '@angular/core';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @Input() item = []; // decorate the property with @Input()

}
