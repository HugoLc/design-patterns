import IDuck from "./IDuck";

export default class MallardDuck implements IDuck {
  fly(): void {
    console.log("duck fly");
  }
  quack(): void {
    console.log("duck quack");
  }
}
