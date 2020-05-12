import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatchLayoutContainerComponent } from './match-layout.container';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [MatchLayoutContainerComponent],
  declarations: [MatchLayoutContainerComponent],
  providers: []
})
export class MatchLayoutModule {}
