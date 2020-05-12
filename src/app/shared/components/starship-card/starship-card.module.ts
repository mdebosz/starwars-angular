import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { StarshipCardComponent } from './starship-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  exports: [StarshipCardComponent],
  declarations: [StarshipCardComponent],
  providers: []
})
export class StarshipCardModule {}
