import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StarshipDto } from 'app/api/models/starship-dto';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipCardComponent {
  @Input() starship: StarshipDto;
}
