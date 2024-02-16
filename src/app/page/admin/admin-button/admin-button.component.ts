import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.sass']
})
export class AdminButtonComponent {
  @Input() mode = ""

  @Output() rejectRequestEvent = new EventEmitter()
  rejectRequest = () => {
    this.rejectRequestEvent.emit()
  }

  @Output() acceptRequestEvent = new EventEmitter()
  acceptRequest = () => {
    this.acceptRequestEvent.emit()
  }

  @Output() pendingRequestEvent = new EventEmitter()
  pendingRequest = () => {
    this.pendingRequestEvent.emit()
  }
}