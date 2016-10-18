class binarySearchTree {
  constructor() {
    this.head = null;
  }

  createNode(input) {
    return {
      left: null,
      right: null,
      data: input,
    };
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

  dfs(node, target = 0) {
    if (node) {
      if (node.data === target) {
        console.log(node)
        return node;
      } 
      console.log(node.data);
      this.dfs(node.left, target);
      this.dfs(node.right, target);
    }
  }

  invert(root) {
    if (root) {
      let left = root.left ? root.left : null,
          right = root.right ? root.right : null;
      root.left = this.invert(right);
      root.right = this.invert(left);
    }
    return root;
  }

}