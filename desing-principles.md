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

- Strive for loosely coupled designs between objects that interact.

  Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

- Classes should be open for extension, but closed for modification.

  Our goal is to allow classes to be _easily extended to incorporate new behavior without modifying existing code_. What do we get if we accomplish this? Designs that are resilient to change and flexible enough to take on new functionality to meet changing requirements.

- Depend upon abstractions. Do not depend upon concrete classes. **(Dependency Inversion)**

  - **No variable should hold a reference to a concrete class.**
    If you use new, you’ll be holding a reference to a concrete class. Use
    a factory to get around that
  - **No class should derive from a concrete class.**
    If you derive from a concrete class, you’re
    depending on a concrete class. Derive from an
    abstraction, like an interface or an abstract class
  - **No method should override an implemented method of any of its base classes.**
    If you override an implemented method,
    then your base class wasn’t really an
    abstraction to start with. Those methods
    implemented in the base class are meant to
    be shared by all your subclasses

- Principle of Least Knowledge: talk only to your immediate friends.

  It means when you
  are designing a system, for any object, be careful of the
  number of classes it interacts with and also how it comes to
  interact with those classes.

- The Hollywood Principle: Don’t call us, we’ll call you

  With the Hollywood Principle, we allow low-level components
  to hook themselves into a system, but the high-level
  components determine when they are needed, and how. In
  other words, **the high-level components give the low-level components the “don’t call us, we’ll call you” treatment**.
