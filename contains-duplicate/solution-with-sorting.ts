function containsDuplicate(nums: number[]): boolean {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {
        const current = nums[i]
        const next = nums[i + 1]
        if (current === next) {
            return true
        }
    }
    
    return false
};