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


function validParentheses(value: string): boolean {
    const stack = new Stack()

    for ( let i = 0; i < value.length; i++) {
        console.log("value", value[i])
        const current = value[i]
        if ( current ==="(" || current ==="[" || current ==="{") {
            stack.push(current)
        } else {
            const lastOpened = stack.pop()
            if (current === ")" && lastOpened !== "(") {
                return false
            }
            if (current === "}" && lastOpened !== "{") {
                return false
            }
            if (current === "]" && lastOpened !== "[") {
                return false
            }
        }
        
    }
    console.log("stack", stack)
        return stack.array.length === 0    
        //sprawdzenie
}
const result = validParentheses("(((())")
console.log("result", result )

const result2 = validParentheses("((()))")
console.log("result2", result2 )
