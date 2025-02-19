function twoSum(nums, target) {
    let result = [];   // Mảng chứa các cặp chỉ số thỏa mãn điều kiện
    let map = new Map();   // Map lưu trữ các phần tử đã duyệt qua

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  // Tính giá trị cần tìm
        if (map.has(complement)) {  // Kiểm tra xem phần tử cần tìm đã xuất hiện trước đó chưa
            result.push([map.get(complement), i]);  // Thêm cặp chỉ số vào kết quả
        }
        map.set(nums[i], i);  // Lưu phần tử hiện tại vào Map
    }

    return result;  // Trả về mảng kết quả
}

// Ví dụ
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1));  // Output: [[0, 1]]

let nums2 = [3, 2, 4, 3];
let target2 = 6;
console.log(twoSum(nums2, target2));  // Output: [[1, 2], [0, 3]]