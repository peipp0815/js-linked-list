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
      return tailNode.value;
    } else {
      return undefined;
    }
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

  insertAt(index, ...values) {
    if (Number.isInteger(index)) {
      if (index >= 0 && index <= this.size()) {
        if (index === 0) {
          const reversed = values.reverse();
          reversed.forEach((element) => {
            this.prepend(element);
          });
          return;
        }

        if (index === this.size()) {
          values.forEach((element) => {
            this.append(element);
          });
          return;
        }

        let count = 1;
        let currentNode = this.headNode;
        while (currentNode !== null) {
          const prevIndexNode = currentNode.nextNode;
          if (count === index) {
            for (let i = 0; i < values.length; i++) {
              const node = new Node(values[i]);
              currentNode.nextNode = node;
              currentNode = node;
            }
            currentNode.nextNode = prevIndexNode;
          }
          currentNode = currentNode.nextNode;
          count++;
        }
        return;
      } else {
        throw new RangeError("Index not in range.");
      }
    } else {
      throw new TypeError("Index must be an integer.");
    }
  }

  removeAt(index) {
    if (Number.isInteger(index)) {
      if (index >= 0 && index < this.size()) {
        if (index === 0) {
          this.pop();
        }
        let count = 0;
        if (this.headNode !== undefined) {
          let currentNode = this.headNode;
          while (currentNode !== null) {
            count++;
            if (count === index) {
              currentNode.nextNode = currentNode.nextNode.nextNode;
              return;
            }
            currentNode = currentNode.nextNode;
          }
        }
      } else {
        throw new RangeError("Index not in range.");
      }
    } else {
      throw new TypeError("Index must be an integer.");
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
