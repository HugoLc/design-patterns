import Cheese from "../ingredients/cheese/Cheese";
import Clam from "../ingredients/clam/Clam";
import Dough from "../ingredients/dough/Dough";
import Sauce from "../ingredients/sauce/Sauce";
import Veggie from "../ingredients/veggie/Veggie";

export default abstract class Pizza {
  protected name: string = "";

  protected dough: Dough | undefined;
  protected sauce: Sauce | undefined;
  protected veggie: Veggie[] | undefined;
  protected clam: Clam | undefined;
  protected cheese: Cheese | undefined;

  abstract prepare(): void;

  bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }

  box(): void {
    console.log("Place pizza in official PizzaStore box");
  }

  getName(): string {
    return this.name;
  }
}
