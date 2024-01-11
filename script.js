class linkedList {
  constructor(value) {
    this.value = value;
  }
  append(value) {
    value[value.lenght] = "";
  }
  prepend() {}
  size(value) {
    let s = value.length;
    console.log(s);
  }
  head() {}
  tail() {}
  append() {}
  atIndex() {}
  pop(value) {
    value.pop();
    console.log(value);
  }
  containsValue() {}
  find() {}
  toString() {}
}

class Node {
  constructor(value, nextNode) {
    this.value = value || null;
    this.nextNode = nextNode || null;
  }
}
