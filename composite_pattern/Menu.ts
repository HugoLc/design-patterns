import MenuComponent from "./MenuComponent"; // Assuming MenuComponent is defined in a separate file

export default class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    const index = this.menuComponents.indexOf(menuComponent);
    if (index !== -1) {
      this.menuComponents.splice(index, 1);
    }
  }

  getChild(i: number): MenuComponent | null {
    if (i >= 0 && i < this.menuComponents.length) {
      return this.menuComponents[i];
    }
    return null;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  print(): void {
    console.log(`${this.name}, ${this.getDescription()}`);
    console.log("---------------------");
    this.menuComponents.forEach((item) => item.print());
  }
}
