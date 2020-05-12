import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-match-layout',
  templateUrl: './match-layout.container.html',
  styleUrls: ['./match-layout.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchLayoutContainerComponent implements OnInit {
  @Input() left: TemplateRef<any>;
  @Input() right: TemplateRef<any>;
  @Input() disabled = true;
  @Output() drawCards: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
