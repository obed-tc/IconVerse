import { Component, Input } from '@angular/core';
import { IconSidebarComponent } from '../icon-sidebar/icon-sidebar.component';

@Component({
  selector: 'app-icon-item',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.css'],
  standalone: true,
  imports: [IconSidebarComponent],
})
export class IconItemComponent {
  @Input() iconSrc = '';
  @Input() iconName = '';

  @Input() typeSearch = '';
  modal: boolean = false;
  toggleModal() {
    this.modal = !this.modal;
  }
}
