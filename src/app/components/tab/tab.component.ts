import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent implements OnInit,OnDestroy {

  @Input() content!:string;
  @Input() title!:string;

  constructor(private cd:ChangeDetectorRef){ 
    // console.log("TabComponent constructor");
    if(!this.title){
      this.title=`Tab#${this.getRandomInt(100)}`;
    }
  }

  ngOnInit(){
    console.log(`${this.title} on init`);
    if(!this.content){
      this.content="Content of "+this.title;
    }
  }

  getRandomInt(max:number):number {
    return Math.floor(Math.random() * max);
  }

  ngOnDestroy(): void {
    console.log(`${this.title} on destroy`);
  }


}
