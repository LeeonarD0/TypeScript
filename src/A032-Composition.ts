export class Car {
  private readonly engine = new Engine();

  TurnOn(): void {
    this.engine.TurnOn();
  }

  TurnOff(): void {
    this.engine.TurnOff();
  }

  acelerate(): void {
    this.engine.acelerate();
  }

  stop(): void {
    this.engine.stop();
  }
}
////////////////////////////////////
export class Engine {
  TurnOn(): void {
    console.log('Engine ON.');
  }

  TurnOff(): void {
    console.log('Engine Off.');
  }

  acelerate(): void {
    console.log('Aceleration..');
  }

  stop(): void {
    console.log('Stopping...');
  }
}

const car = new Car();

car.acelerate();
