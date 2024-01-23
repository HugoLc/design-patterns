import MenuComponent from "./MenuComponent";

export default class Waitress {
    constructor(readonly allMenus: MenuComponent){
    }

    printMenu(){
        this.allMenus.print()
    }
}