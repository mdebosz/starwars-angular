import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PeopleFacade } from 'app/modules/core/db/facades';

@Component({
  selector: 'app-core-page',
  templateUrl: './core.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorePageComponent implements OnInit {
  constructor(private peopleFacade: PeopleFacade) {}

  ngOnInit() {
    this.peopleFacade.getCount();
  }
}
