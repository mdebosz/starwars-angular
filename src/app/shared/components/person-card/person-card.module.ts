import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { PersonCardComponent } from './person-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  exports: [PersonCardComponent],
  declarations: [PersonCardComponent],
  providers: []
})
export class PersonCardModule {}
