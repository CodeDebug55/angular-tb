import { Component, ViewChild } from '@angular/core';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'app-showcase',
  imports: [TabBarComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

  @ViewChild(TabBarComponent) tabBarComponent!:TabBarComponent;

  addTab(){
    this.tabBarComponent.addTab();
  }
}
