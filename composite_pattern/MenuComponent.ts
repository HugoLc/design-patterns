export default abstract class MenuComponent {
  getName() {
    throw new Error("Unsuported Method");
  }
  getDescription() {
    throw new Error("Unsuported Method");
  }
  getPrice() {
    throw new Error("Unsuported Method");
  }
  isVegetarian() {
    throw new Error("Unsuported Method");
  }
  //
  print() {
    throw new Error("Unsuported Method");
  }
  add(menuComponent: MenuComponent) {
    throw new Error("Unsuported Method");
  }
  remove(menuComponent: MenuComponent) {
    throw new Error("Unsuported Method");
  }
  getChild(index: number) {
    throw new Error("Unsuported Method");
  }
}
