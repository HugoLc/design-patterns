// The Proxy Pattern provides a surrogate or
// placeholder for another object to control access to it.

// Use the Proxy
// Pattern to create a
// representative object
// that controls access
// to another object,
// which may be remote,
// expensive to create, or
// in need of securing.

import ProxyImage from "./ProxyImage";

const img = new ProxyImage("my-img.jpg");

//first load
img.display();
//already loaded
img.display();
