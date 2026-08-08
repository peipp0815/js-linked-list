class LinkedList {
  headNode;
  append(value) {
    if (this.headNode !== undefined) {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value, null);
    } else {
      this.headNode = new Node(value, null);
    }
  }
  prepend(value) {
    if (this.headNode !== undefined) {
      this.headNode = new Node(value, this.headNode);
    } else {
      this.headNode = new Node(value, null);
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
    if (this.headNode !== undefined) {
      let tailNode = this.headNode;
      while (tailNode.nextNode !== null) {
        tailNode = tailNode.nextNode;
      }
    } else {
      return undefined;
    }
    return tailNode.value;
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
  /*
  insertAt(index, ...values) {
    if (Number.isInteger(index)) {
      if (index >= 0 && index <= this.size()) {
        let count = 0;
        if (index === 0) {
          values.reverse.forEach((element) => {
            this.prepend(element);
          });
          return;
        }
        while (currentNode !== null) {
          if (count === index) {
            currentNode.nextNode = values[0];
            for (let i = 0; i < values.length; i++) {
              const tempNode = new Node(values[i], null);
            }
          }
          currentNode = currentNode.nextNode;
          count++;
        }
      } else {
        throw new RangeError("Index not in range.");
      }
    } else {
      throw new TypeError("Index must be an integer.");
    }
  }
    */
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
