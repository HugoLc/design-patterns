import ITurkey from "./ITurkey";

export default class WildTurkey implements ITurkey {
  fly(): void {
    console.log("turkey shor fly");
  }
  gobble(): void {
    console.log("turkey gloo gloo gloo");
  }
}
