import { Component, Input } from '@angular/core';
import { User } from '../intrefaces/user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() item = 0;
  @Input() item2 = 'default string';
  @Input() varname: User[] = [{ name: '', phone: null }];
}
