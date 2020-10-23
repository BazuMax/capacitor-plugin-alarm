import { WebPlugin } from '@capacitor/core';
import { AlarmPlugin } from './definitions';

export class AlarmWeb extends WebPlugin implements AlarmPlugin {
  constructor() {
    super({
      name: 'Alarm',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Alarm = new AlarmWeb();

export { Alarm };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Alarm);
