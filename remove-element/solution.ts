function removeElement(nums: number[], val: number): number {
    const helperArray = []
    for (let i = 0; i < nums.length; i++) {
        if (val != nums[i]) {
            helperArray.push(nums[i])
        }
    }
    for (let i = 0; i < helperArray.length; i++) {
        nums[i] = helperArray[i]
        
    }
    return helperArray.length
};