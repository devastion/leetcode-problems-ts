interface Val {
  val: number;
  min: number;
}

export class MinStack {
  stack: Val[];
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    const len = this.stack.length;
    if (len > 0) {
      this.stack.push({
        val: val,
        min:
          this.stack[len - 1]["min"] > val ? val : this.stack[len - 1]["min"],
      });
    } else {
      this.stack.push({
        val: val,
        min: val,
      });
    }
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    const len = this.stack.length;

    return this.stack[len - 1]["val"];
  }

  getMin(): number {
    const len = this.stack.length;

    return this.stack[len - 1]["min"];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(v
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
// -3
console.log(minStack.getMin());
minStack.pop();
// -2
console.log(minStack.getMin());
// 0
console.log(minStack.top());
