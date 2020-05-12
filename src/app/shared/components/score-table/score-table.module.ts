import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScoreTableComponent } from './score-table.component';

@NgModule({
  imports: [CommonModule],
  exports: [ScoreTableComponent],
  declarations: [ScoreTableComponent],
  providers: []
})
export class ScoreTableModule {}
