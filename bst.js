import List from './linked_list';
import Node from './linked_list';

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
        return node;
      } 
      return this.dfs(node.left, target) || this.dfs(node.right, target);
    }
  }

  preOrder(node = this.head) {

    console.log(node.data);
    if (node.left) {
      this.preOrder(node.left);
    } 
    if (node.right) {
      this.preOrder(node.right);
    }

  }

  inOrder(node = this.head) {

    if (node.left) {
      this.inOrder(node.left);
    }
    console.log(node.data);
    if (node.right) {
      this.inOrder(node.right);
    }

  }

  postOrder(node = this.head) {

    if (node.left){
      this.postOrder(node.left)
    }
    if (node.right) {
      this.postOrder(node.right);
    }
    console.log(node.data);

  }

  flattenToLinkedList(root = this.head, listsArray = [], level = 0) {
    if (root === null) {
      return;
    }

    let list = null;
    if (listsArray.length === level) {
      list = new List();
      listsArray[level] = list;
    } else {
      list = listsArray[level];
    }

    list.add(root.data);
    flattenToLinkedList(root.left, lists, level + 1);
    flattenToLinkedList(root.right, lists, level + 1);

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