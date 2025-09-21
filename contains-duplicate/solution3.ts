function containsDuplicate(nums: number[]): boolean {
    const visited = new Set()
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        visited.add(current)
    }

    return visited.size !== nums.length
};