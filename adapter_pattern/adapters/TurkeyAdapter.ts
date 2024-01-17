import IDuck from "../duck/IDuck";
import ITurkey from "../turkey/ITurkey";

export default class TurkeyAdapter implements IDuck{
    constructor(readonly turkey:ITurkey){}
    fly(): void {
        this.turkey.fly()
    }
    quack(): void {
        this.turkey.gobble()
    }
}