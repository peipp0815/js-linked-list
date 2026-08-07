class LinkedList {
  head;
  tail;
  append(value) {
    if (tail !== undefined) {
      const helpTail = tail;
      tail = new Node(value, null);
      helpTail.nextNode = tail;
    } else {
      tail = new Node(value, null);
      head = tail;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
