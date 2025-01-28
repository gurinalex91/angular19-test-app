import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, TabComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  activeTabIndex = 0;

  ngAfterContentInit() {
    console.log('Tabs:', this.tabs.toArray());
    if (this.tabs && this.tabs.length > 0) {
      this.activeTabIndex = 0; // Установить первую вкладку активной
    }

    this.tabs.changes.subscribe(() => {
      console.log('Tabs changed:', this.tabs.toArray());
      if (this.tabs && this.activeTabIndex >= this.tabs.length) {
        this.activeTabIndex = 0; // Переключить на первую вкладку
      }
    });
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
  }

  get activeTab() {
    return this.tabs.toArray()[this.activeTabIndex];
  }
}
