import { Injectable } from '@angular/core';
import { IConfigOptions } from '../models/config-options.models';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  setOptions(options: Partial<IConfigOptions>): void {
  }

  getOptions(optionsKeys: (keyof IConfigOptions)[]): Partial<IConfigOptions> {
    const options: Partial<IConfigOptions> = {};
    return options;
  }
}
