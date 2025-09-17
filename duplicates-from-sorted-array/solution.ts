
function removeDuplicates(nums: number[]): number {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        const val1 = nums[i]
        const val2 = nums[i + 1]
        if (val1 !== val2) {
            result.push(val1)
        }

    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i]
    }
    console.log("result", result)
    return result.length
};
const arr = [1,2,3,4,4,6]
console.log("removeDuplicets", removeDuplicates(arr))
console.log("arr", arr)