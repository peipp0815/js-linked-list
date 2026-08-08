import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
console.log(list.size());
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size());
list.prepend("dragon");
console.log(list.toString());

console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(3));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains("dragon"));
console.log(list.contains("turtle"));
console.log(list.findIndex("cat"));
console.log(list.findIndex("mango"));
console.log(list.findIndex("dog"));
