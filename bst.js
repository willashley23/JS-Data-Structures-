class binarySearchTree {

  createNode(input) {
    return {
      left: null,
      right: null,
      data: input,
    };
  }

  bst() {
    this.head = null;
  }

  add(input) {
    if (!this.head) {
      this.head = this.createNode(input);
    } else {
      this.insert(this.head, input);
    }
    return this;
  }


  insert(node, input) {
    if (node.data > input) {
      if (node.left === null) {
        node.left = this.createNode(input);
      } else {
        this.insert(node.left, input);
      }
    } else {
      if (node.right === null) {
        node.right = this.createNode(input);
      } else {
        this.insert(node.right, input);
      }
    }
    return this;
  }

}