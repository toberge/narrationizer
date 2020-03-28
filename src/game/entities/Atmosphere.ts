export class Atmosphere {
  readonly color: string;
  private static instances: Map<string, Atmosphere> = new Map<string, Atmosphere>([
    ['dark', new Atmosphere({ color: '#232323' })],
    ['wooden', new Atmosphere({color: 'brown'})]
  ]);

  protected constructor({color}: {color: string}) {
    this.color = color;
  }

  public get(mood: string): Atmosphere | undefined {
    return Atmosphere.instances.get(mood);
  }
}

