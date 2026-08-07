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
  prepend(value) {
    if (head !== undefined) {
      head = new Node(value, head);
    } else {
      head = new Node(value, null);
      tail = head;
    }
  }
  size() {
    let count = 0;
    if (head === undefined) {
      return count;
    } else {
      let currentNode = head;
      count = 1;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        count++;
      }
      return count;
    }
  }
  head() {
    return head;
  }
  tail() {
    return tail;
  }
  at(index) {
    let count = 0;
    if (Number.isInteger(index) && index >= 0 && head !== undefined) {
      let currentNode = head;
      while (count !== index && currentNode.nextNode !== null) {
        count++;
        currentNode = currentNode.nextNode;
      }
      if (count !== index) {
        return undefined;
      } else {
        return currentNode.value;
      }
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
