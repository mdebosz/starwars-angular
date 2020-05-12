import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PersonDto } from 'app/api/models/person-dto';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonCardComponent {
  @Input() person: PersonDto;
}
