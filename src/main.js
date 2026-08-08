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
list.insertAt(1, 10, 11);
console.log(list.toString());
console.log("Hello");
list.insertAt(0, 7, 6);
console.log(list.toString());
list.insertAt(10, 7, 6);
console.log(list.toString());
