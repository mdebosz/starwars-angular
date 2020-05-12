import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NavbarContainerComponent } from './navbar.container';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [NavbarContainerComponent],
  declarations: [NavbarContainerComponent],
  providers: []
})
export class NavbarModule {}
