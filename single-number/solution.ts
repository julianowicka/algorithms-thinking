function singleNumber(nums: number[]): number {
    let helper = 0;
    for (let i = 0; i < nums.length; i++) {
        helper = helper ^ nums[i]
    }
    return helper
};