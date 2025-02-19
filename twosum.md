# Two Sum Algorithm 

## Mô Tả

Bài toán "Two Sum" yêu cầu chúng ta tìm tất cả các cặp chỉ số trong một mảng số nguyên sao cho tổng của hai phần tử tương ứng bằng một giá trị target cho trước. Giải pháp yêu cầu không được sử dụng cùng một phần tử hai lần và phải trả về tất cả các cặp chỉ số khác nhau.

## Thuật Toán

Thuật toán này sử dụng một cấu trúc dữ liệu Map để lưu trữ các phần tử đã duyệt qua, giúp việc tìm kiếm các phần tử bổ sung nhanh chóng và hiệu quả.

### Bước 1: Khởi tạo các biến

- `result`: Mảng lưu trữ các cặp chỉ số thỏa mãn điều kiện `nums[i] + nums[j] == target`.
- `map`: Một đối tượng Map dùng để lưu trữ các giá trị đã duyệt qua, với key là phần tử trong mảng và value là chỉ số của phần tử đó.

### Bước 2: Duyệt qua mảng `nums`

- Chúng ta duyệt qua tất cả các phần tử trong mảng và với mỗi phần tử `nums[i]`, thực hiện các bước sau:

#### a) Tính toán phần tử bổ sung

- Để tìm một cặp chỉ số sao cho tổng của hai phần tử bằng `target`, chúng ta cần tính toán phần tử bổ sung (complement) cần tìm, có công thức:

```javascript
let complement = target - nums[i];
```

 Ví dụ, nếu phần tử hiện tại là nums[i] = 3 và target = 6, phần tử bổ sung cần tìm sẽ là complement = 6 - 3 = 3.

b) Kiểm tra phần tử bổ sung trong Map
Chúng ta kiểm tra xem phần tử bổ sung đã xuất hiện trước đó trong mảng chưa. Nếu có, điều này có nghĩa là chúng ta đã tìm được một cặp chỉ số thỏa mãn điều kiện nums[i] + nums[j] == target.

Nếu phần tử bổ sung đã có trong map, chúng ta sẽ lấy chỉ số của phần tử bổ sung từ map và thêm cặp chỉ số [map.get(complement), i] vào mảng kết quả.
c) Lưu phần tử hiện tại vào Map
Nếu phần tử bổ sung chưa có trong map, chúng ta sẽ lưu phần tử hiện tại vào map để sử dụng trong các vòng lặp tiếp theo.

Lưu trữ với khóa là giá trị nums[i] và giá trị là chỉ số i.
Bước 3: Trả về kết quả
Sau khi duyệt qua toàn bộ mảng, chúng ta trả về mảng result chứa tất cả các cặp chỉ số thỏa mãn điều kiện.

## Code

```javascript
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
```

### Giải Thích Code

- result = []: Khởi tạo một mảng rỗng để lưu trữ các cặp chỉ số thỏa mãn điều kiện.
- map = new Map(): Tạo một Map để lưu trữ các phần tử đã gặp. Key là giá trị phần tử, value là chỉ số của phần tử đó.
- Vòng lặp for:
  - Chúng ta duyệt qua tất cả các phần tử trong mảng nums bằng cách sử dụng chỉ số i.
  - complement = target - nums[i]: Tính toán phần tử bổ sung cần tìm.
  - if (map.has(complement)): Nếu phần tử bổ sung có trong Map, tức là chúng ta đã tìm thấy một cặp chỉ số thỏa mãn điều kiện.
  - result.push([map.get(complement), i]): Thêm cặp chỉ số vào mảng kết quả. map.get(complement) lấy chỉ số của phần tử bổ sung từ Map.
  - map.set(nums[i], i): Lưu phần tử hiện tại vào Map để sử dụng trong các vòng lặp tiếp theo.
- return result: Sau khi duyệt qua mảng, trả về mảng result chứa tất cả các cặp chỉ số thỏa mãn điều kiện.

## Tối Ưu

- Độ phức tạp thời gian: O(n), vì chúng ta chỉ duyệt qua mảng một lần và mỗi thao tác tìm kiếm, thêm phần tử trong Map có độ phức tạp là O(1).
- Độ phức tạp không gian: O(n), vì chúng ta cần lưu trữ các phần tử đã duyệt trong Map.

## Ví Dụ

### Ví Dụ 1

#### Input

```javascript
let nums = [2, 7, 11, 15];
let target = 9;
```

#### Output

```javascript
[[0, 1]]
```

### Giải Thích

- `nums[0] + nums[1] = 2 + 7 = 9`, ta tìm thấy cặp chỉ số `[0, 1]`.

### Ví Dụ 2

#### In put

```javascript
let nums = [3, 2, 4, 3];
let target = 6;
```

#### Out put

```javascript
[[1, 2], [0, 3]]
```

### GiảiThích

- `nums[1] + nums[2] = 2 + 4 = 6` → cặp chỉ số `[1, 2]`
- `nums[0] + nums[3] = 3 + 3 = 6` → cặp chỉ số `[0, 3]`
