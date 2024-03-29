import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreTableComponent {
  @Input() leftWins = 0;
  @Input() rightWins = 0;
}
