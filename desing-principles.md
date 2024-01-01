# Design Principles

- Identify the aspects of your application that vary and separate them from what stays the same.

  Take the parts that vary and encapsulate them, so that later you can alter or extend the parts that vary without affecting those that don’t.

- Program to an interface, not an implementation.

  “Program to an interface” really means “Program to a supertype.”

  **Programming to an implementation** would be:

  ```javascript
    Dog d = new Dog()
    d.bark()
  ```

  _Declaring the variable “d” as type Dog (a concrete implementation of Animal) forces us to code to a concrete implementation._

  But **programming to an interface/supertype** would be:

  ```javascript
    Animal a = new Dog()
    a.makeSound()
  ```

  _We know it’s a Dog, but we can now use the animal reference polymorphically._

- Favor composition over inheritance.

  HAS-A can be better than IS-A