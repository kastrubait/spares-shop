import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITotalCart } from 'src/app/cart/models/total-card.model';

interface IChangesStorage {
  type: string;
  key: string;
  value?: ITotalCart[]
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;
  changes$ = new Subject<IChangesStorage>();

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): any {
    if (this.isLocalStorageSupported) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(this.localStorage.getItem(key) || '{}');
    }
    return null;
  }

  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      this.changes$.next({
        type: 'set',
        key,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value
      });
      return true;
    }
    return false;
  }

  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      this.changes$.next({
        type: 'remove',
        key
      });
      return true;
    }
    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}
