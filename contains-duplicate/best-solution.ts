function containsDuplicate(nums: number[]): boolean {
    const visited = new Set(nums)

    return visited.size !== nums.length
};