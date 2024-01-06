export default abstract class Beverage {
  abstract readonly description: string;
  getDescription() {
    return this.description;
  }
  abstract cost(): number;
}
