import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-tab-bar',
  imports: [CommonModule],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent {
  tabstitle: string[] = [];
  tabsArray: TabComponent[];
  tabs: Array<TabComponent> = [];

  @ViewChild('tabContentContainer', { read: ViewContainerRef })
  tabContentContainer!: ViewContainerRef;

  constructor() {
    this.tabsArray = [];
  }

  addTab(title?: string, content?: string) {
    if (this.tabs.length === 0) {
      let tabCompRef: ComponentRef<TabComponent> = this.tabContentContainer.createComponent(TabComponent);
      let componentInstance: TabComponent = tabCompRef.instance;
      this.tabs.push(componentInstance);
    }
    else{
      
    }
  }
}
