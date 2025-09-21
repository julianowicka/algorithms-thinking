function containsDuplicate(nums: number[]): boolean {
    const visited = new Set()
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]

        if (visited.has(current)) {
            return true
        }
        visited.add(current)
    }
    
    return false
};