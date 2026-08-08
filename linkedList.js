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
    return head.value;
  }
  tail() {
    return tail.value;
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
  pop() {
    const result = head.value;
    if (head !== undefined) {
      if (head.nextNode !== null) {
        head = head.nextNode;
      } else {
        head = undefined;
      }
    }
    return result;
  }
  contains(value) {
    if (head !== undefined) {
      let currentNode = head;
      while (currentNode !== null) {
        if (currentNode.value === value) return true;
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
