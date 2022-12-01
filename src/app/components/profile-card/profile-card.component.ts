import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnChanges {
  @Input() animationToggle: boolean = false;
  classtoggle:any = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.classtoggle = !this.classtoggle;
    // if(this.animationToggle) {
      // this.classtoggle = changes.currentValue;
      // console.log('is this being triggered', changes);
      // console.log('is this being classToggy', this.classtoggle);

    }

}
