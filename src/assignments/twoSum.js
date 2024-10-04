const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log("Indices of numbers that add up to target:", twoSum(nums, target));
