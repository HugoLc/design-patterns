// The Singleton Pattern ensures a class has only one
// instance, and provides a global point of access to it.
import ChocolateBoiler from "./ChocolateBoiler";

const chocoBoiler = ChocolateBoiler.getInstance()

// does'nt work because the constructor is private
// const chocoBoiler2 = new ChocolateBoiler()

//returns the same instance tha was created earlier
const chocoBoiler3 =  ChocolateBoiler.getInstance()

chocoBoiler.fill()
chocoBoiler3.fill()