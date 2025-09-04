class Stack {
    array: string[] = []

    constructor() {
        this.array = []
    }

    push(value: string) {
        this.array.push(value)
    }

    pop(): string {
        const toBeDeleted = this.array[this.array.length -1]
        this.array.length = this.array.length - 1
        return toBeDeleted
    }

    peek(): string {
        return this.array[this.array.length - 1]
    }
}
const stack3 = new Stack()
stack3.pop()
const stack1 = new Stack()
const stack2 = new Stack()
console.log("stack", stack1)
stack1.push("0")
stack2.push("8")
stack2.push("69")

const peek2 = stack2.peek();
console.log("peek2", peek2)
console.log("peeeek2", stack2.peek())
"69";


stack2.push("0")
stack2.push("4")
console.log("stack2222222", stack2)
console.log("stack", stack1)
stack1.push("1")
console.log("stack", stack1)
stack1.push("2")
console.log("stack", stack1)
const popped1 = stack1.pop()
console.log("popped1", popped1)
console.log("stack", stack1)
stack1.push("5")
console.log("stack", stack1)
const popped2 = stack1.pop()
console.log("popped", popped2)
console.log("final stack", stack1)
