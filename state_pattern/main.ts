import GumballMachine from "./GumballMachine";

const gumballMachine = new GumballMachine(5);

gumballMachine.getState();

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

gumballMachine.getState();

gumballMachine.insertQuarter();
gumballMachine.ejectQuarter();
gumballMachine.turnCrank();

gumballMachine.getState();

gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.ejectQuarter();

gumballMachine.getState();

gumballMachine.insertQuarter();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

gumballMachine.getState();