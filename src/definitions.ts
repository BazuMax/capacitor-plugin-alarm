declare module '@capacitor/core' {
  interface PluginRegistry {
    Alarm: AlarmPlugin;
  }
}

export interface AlarmPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
