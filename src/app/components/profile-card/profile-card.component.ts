import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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
export class ProfileCardComponent implements OnInit, OnChanges {
  @Input() animationToggle: boolean = false;
 
  classtoggle:any = false;

  // techStack$:Observable<Images[]> = of(this.images);
  constructor() {
   }

  ngOnInit(): void {
    // this.techStack$.pipe(takeUntil(this.unsubscribe$)).subscribe((data)=> {
      // console.log('What is there', data);
      
    // })

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.classtoggle = !this.classtoggle;

    }

}
