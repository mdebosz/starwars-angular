import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
