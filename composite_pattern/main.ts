// The Composite Pattern allows you to
// compose objects into tree structures to
// represent part-whole hierarchies. Composite
// lets clients treat individual objects and
// compositions of objects uniformly.

import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Waitress from "./Waitress";

//pancake items
const pancakeMenu = new Menu("Pancake Menu", "here are some pancakes...");
const pancake1 = new MenuItem("pancake 1", "lorem ipsum", false, 12);
const pancake2 = new MenuItem("pancake 2", "lorem ipsum", true, 20);
const pancake3 = new MenuItem("pancake 3", "lorem ipsum", false, 10);
pancakeMenu.add(pancake1);
pancakeMenu.add(pancake2);
pancakeMenu.add(pancake3);

//lunch items
const lunchMenu = new Menu("Lunch Menu", "here are some lunch options...");
const lunch1 = new MenuItem("lunch 1", "lorem ipsum", false, 30);
const lunch2 = new MenuItem("lunch 2", "lorem ipsum", true, 40);
const lunch3 = new MenuItem("lunch 3", "lorem ipsum", false, 29);
const lunch4 = new MenuItem("lunch 4", "lorem ipsum", false, 30);
lunchMenu.add(lunch1);
lunchMenu.add(lunch2);
lunchMenu.add(lunch3);
lunchMenu.add(lunch4);

//dinner items
const dinnerMenu = new Menu("Dinner Menu", "here are some dinner options...");
const dinner1 = new MenuItem("dinner 1", "lorem ipsum", false, 30);
const dinner2 = new MenuItem("dinner 2", "lorem ipsum", true, 40);
const dinner3 = new MenuItem("dinner 3", "lorem ipsum", false, 29);
const dinner4 = new MenuItem("dinner 4", "lorem ipsum", false, 30);
dinnerMenu.add(dinner1);
dinnerMenu.add(dinner2);
dinnerMenu.add(dinner3);
dinnerMenu.add(dinner4);

//lunch desert items
const desertMenu = new Menu("Desert Menu", "here are some desert options...");
const desert1 = new MenuItem("desert 1", "lorem ipsum", false, 30);
const desert2 = new MenuItem("desert 2", "lorem ipsum", true, 40);
const desert3 = new MenuItem("desert 3", "lorem ipsum", false, 29);
const desert4 = new MenuItem("desert 4", "lorem ipsum", false, 30);
desertMenu.add(desert1);
desertMenu.add(desert2);
desertMenu.add(desert3);
desertMenu.add(desert4);
//
lunchMenu.add(desertMenu);

//combined menu
const allMenus = new Menu("Restaurant menu", "");
allMenus.add(pancakeMenu);
allMenus.add(lunchMenu);
allMenus.add(dinnerMenu);

const waitress = new Waitress(allMenus);
waitress.printMenu();
