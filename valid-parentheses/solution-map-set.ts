class Stack {
    private array: string[] = []

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

    size(): number {
        return this.array.length
    }

    isEmpty(): boolean {
        return this.array.length === 0
    }

}


function validParentheses(value: string): boolean {
    const stack = new Stack()

    const openingBrackets = new Set(["(", "[", "{"])
    const matchingBrackets = new Map([[")", "("], ["}", "{"], ["]", "["]])
    const closingBrackets = new Set([")", "]", "}"])
    console.log("matchinblblbla", matchingBrackets)
    console.log("closing", closingBrackets)
    
    for (let i = 0; i < value.length; i++) {
        const current = value[i]
         if (openingBrackets.has(current)) {
            stack.push(current)
        } else {
             if (stack.isEmpty()) {
                return false
            }
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
            if (closingBrackets.has(current) && ) {}
        }
        
    }
    return stack.isEmpty()  
}
const mapka = new Map([["kryt", "1"], ["ruba", "2"], ["gryk", "7"]])
console.log("mapka", mapka)
mapka.set("PIESEK", "Leszek")
console.log("mapka", mapka)
const result = mapka.has('PIESEK')
console.log("result", result)


const obiekcik = {
    kryt: 1,
    ruba: 2,
    gryk: 7,
}
console.log("obiecik", obiekcik)
obiekcik["PIESEK"] = "Leszek"
console.log("obiekcik", obiekcik)
const result2 = Boolean(obiekcik["PIESEK"])
console.log("rseult2", result2)
console.log('Boolean("Leszek")', Boolean("Leszek"))
console.log('Boolean("")', Boolean(""))
console.log("Boolean(undefined)", Boolean(undefined))

const result3 = Boolean(obiekcik["Leszek"])
console.log("rseult3", result3)

const result4 = obiekcik["PIESEK"]
console.log("rseult4", result4)

const result5 = mapka.get("PIESEK")
console.log("rseult5", result5)
const isValid = validParentheses("({[]{}}())")
console.log("isValid", isValid)