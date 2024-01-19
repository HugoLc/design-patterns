import CaffeineBeverage from "./CaffeineBeverage";

export default class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log("Brewing coffee");
  }

  addCondiments(): void {
    console.log("Adding sugar and milk");
  }
}
