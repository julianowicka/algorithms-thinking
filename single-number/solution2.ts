function singleNumber(nums: number[]): number {
    let helper = nums[0];
    for (let i = 1; i < nums.length; i++) {
        helper = helper ^ nums[i]
    }
    return helper
};