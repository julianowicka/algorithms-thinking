function twoSum(nums, target) {
    const orginalNums = [...nums]
    nums.sort((a,b) => a - b)
    let leftIndex = 0
    let rightIndex = nums.length - 1
    while (leftIndex < rightIndex) {
        const sum = nums[leftIndex] + nums[rightIndex]
        if (sum === target) {
            const leftValue = nums[leftIndex]
            const rightValue = nums[rightIndex]
            const leftResult = orginalNums.findIndex((value) => value === leftValue)
            const rightResult = findFromEnd(orginalNums, rightValue)

            return [leftResult, rightResult]
        } else if (sum > target) { 
            rightIndex--
        } else {
            leftIndex++
        }
    }
};

const result = twoSum([2, 7, 11, 15], 9); // [2, 7]
console.log('result', result)

function findFromEnd(tab, value) {
    for (let i = tab.length - 1; i >= 0; i--) {
        if (tab[i] === value) {
            return i
        }
    }
    return -1
}

//first solution n^2
function twoSum2(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                let sum = nums[i] + nums[j]
                if (sum === target) {
                    return [i, j]
                } 
            }
        }
    }
    return [0, 1]
};