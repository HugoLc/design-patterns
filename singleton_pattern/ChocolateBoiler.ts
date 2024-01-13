export default class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstance: ChocolateBoiler;
  private constructor() {
    this.empty = true;
    this.boiled = false;
  }
  public static getInstance(): ChocolateBoiler {
    if (this.uniqueInstance == null) {
      this.uniqueInstance = new ChocolateBoiler();
    }
    return this.uniqueInstance;
  }
  public fill(): void {
    if (this.empty) {
      this.empty = false;
      this.boiled = false;
      // fill the boiler with a milk/chocolate mixture
    }
    console.log(this.empty);
    console.log(this.boiled);
  }
  // rest of ChocolateBoiler code...
}
