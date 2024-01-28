import IImage from "./IImage";

export default class RealImage implements IImage {
    private filename: string;
  
    constructor(filename: string) {
      this.filename = filename;
      this.loadImageFromDisk();
    }
  
    private loadImageFromDisk(): void {
      console.log(`Loading image: ${this.filename}`);
    }
  
    display(): void {
      console.log(`Displaying image: ${this.filename}`);
    }
  }
