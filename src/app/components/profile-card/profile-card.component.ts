import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Unsub } from '../services/unsub.services';

export interface Images {
  id: number,
  imageSrc:String,
}

@Component({
  selector: 'app-profile-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent extends Unsub implements OnInit, OnChanges {
  @Input() animationToggle: boolean = false;
 
  classtoggle:any = false;

  // techStack$:Observable<Images[]> = of(this.images);
  constructor() {
    super()
   }

  ngOnInit(): void {
    // this.techStack$.pipe(takeUntil(this.unsubscribe$)).subscribe((data)=> {
      // console.log('What is there', data);
      
    // })

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.classtoggle = !this.classtoggle;
    // if(this.animationToggle) {
      // this.classtoggle = changes.currentValue;
      // console.log('is this being triggered', changes);
      // console.log('is this being classToggy', this.classtoggle);

    }

}
