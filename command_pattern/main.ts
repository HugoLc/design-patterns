// The Command Pattern encapsulates a request as an
// object, thereby letting you parameterize other objects
// with different requests, queue or log requests, and
// support undoable operations.

import Light from "./receivers/Light";
import LightOnCommand from "./commands/light/LightOnCommand";
// import SimpleRemoteControl from "./invokers/SimpleRemoteControl";
import GarageDoor from "./receivers/GarageDoor";
import GarageDoorOpenCommand from "./commands/garageDoor/GarageDoorOpenCommand";
import Stereo from "./receivers/Stereo";
import StereoOnCommand from "./commands/stereo/StereoOnCommand";
import StereoOffCommand from "./commands/stereo/StereoOffCommand";
import GarageDoorCloseCommand from "./commands/garageDoor/GarageDoorCloseCommand";
import LightOffCommand from "./commands/light/LightOffCommand";
import RemoteControl from "./invokers/RemoteControl";
import MacroCommand from "./commands/MacroCommand";

// const simpleRemoteControl = new SimpleRemoteControl();
const remoteControl = new RemoteControl();

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const garageDoor = new GarageDoor();
const garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
const garageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);

const stereo = new Stereo();
const stereoOnCommand = new StereoOnCommand(stereo);
const stereoOffCommand = new StereoOffCommand(stereo);

// simpleRemoteControl.setCommand(lightOnCommand);
// simpleRemoteControl.buttonWasPressed();
// simpleRemoteControl.setCommand(garageDoorOpenCommand);
// simpleRemoteControl.buttonWasPressed();

remoteControl.setCommand(0, lightOnCommand, lightOffCommand);
remoteControl.setCommand(1, garageDoorOpenCommand, garageDoorCloseCommand);
remoteControl.setCommand(2, stereoOnCommand, stereoOffCommand);
//Macro command
remoteControl.setCommand(
  3,
  new MacroCommand([stereoOnCommand, garageDoorOpenCommand]),
  new MacroCommand([stereoOffCommand, garageDoorCloseCommand])
);

remoteControl.display();

// light on
remoteControl.onButtonWasPressed(0);
// stereo on
remoteControl.onButtonWasPressed(1);
// undo command
remoteControl.undoCommand.undo();
// light off
remoteControl.offButtonWasPressed(0);
// macro
remoteControl.onButtonWasPressed(3);
remoteControl.undoCommand.undo();
