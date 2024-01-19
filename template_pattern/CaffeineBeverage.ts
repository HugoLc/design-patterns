export default abstract class CaffeineBeverage {
    //template method
    //The Template Method defines the steps of an algorithm and allows
    //subclasses to provide the implementation for one or more steps.
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  abstract brew(): void;

  abstract addCondiments(): void;

  boilWater(): void {
    console.log("Boiling water");
  }

  pourInCup(): void {
    console.log("Pouring into cup");
  }
}
