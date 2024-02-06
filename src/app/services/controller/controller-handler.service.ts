import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ControllerHandlerService {
  constructor() { }

  private roleSubject = new Subject<string>;
  role$ = this.roleSubject.asObservable();

  setRole = (role: string) => {
    this.roleSubject.next(role)
  }
}
