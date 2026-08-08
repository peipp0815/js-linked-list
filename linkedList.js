class LinkedList {
  headNode;
  tailNode;
  append(value) {
    if (this.tailNode !== undefined) {
      const helptailNode = this.tailNode;
      this.tailNode = new Node(value, null);
      helptailNode.nextNode = this.tailNode;
    } else {
      this.tailNode = new Node(value, null);
      this.headNode = this.tailNode;
    }
  }
  prepend(value) {
    if (this.headNode !== undefined) {
      this.headNode = new Node(value, this.headNode);
    } else {
      this.headNode = new Node(value, null);
      this.tailNode = this.headNode;
    }
  }
  size() {
    let count = 0;
    if (this.headNode === undefined) {
      return count;
    } else {
      let currentNode = this.headNode;
      count = 1;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        count++;
      }
      return count;
    }
  }
  head() {
    return this.headNode.value;
  }
  tail() {
    return this.tailNode.value;
  }
  at(index) {
    let count = 0;
    if (Number.isInteger(index) && index >= 0 && this.headNode !== undefined) {
      let currentNode = this.headNode;
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
    const result = this.headNode.value;
    if (this.headNode !== undefined) {
      if (this.headNode.nextNode !== null) {
        this.headNode = this.headNode.nextNode;
      } else {
        this.headNode = undefined;
      }
    }
    return result;
  }
  contains(value) {
    if (this.headNode !== undefined) {
      let currentNode = this.headNode;
      while (currentNode !== null) {
        if (currentNode.value === value) return true;
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }
  findIndex(value) {
    if (this.headNode !== undefined) {
      let index = 0;
      let currentNode = this.headNode;
      while (currentNode !== null) {
        if (currentNode.value === value) return index;
        currentNode = currentNode.nextNode;
        index++;
      }
    }
    return -1;
  }
  toString() {
    let string = "";
    if (this.headNode === undefined) {
      return string;
    } else {
      let currentNode = this.headNode;
      while (currentNode !== null) {
        string += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      return string + "null";
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
