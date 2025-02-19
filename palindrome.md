# Palindrome Checker in JavaScript

## Mô Tả

Chương trình này chứa hai hàm `isPalindrome` và `isPalindrome2`, mỗi hàm dùng để kiểm tra xem một chuỗi có phải là chuỗi đối xứng (palindrome) hay không. Chuỗi đối xứng là chuỗi đọc từ trái sang phải và từ phải sang trái đều giống nhau.

**Ví dụ về Palindrome**:

- "level" là một chuỗi đối xứng vì nếu đọc từ trái sang phải hay phải sang trái đều là "level".
- "hello" không phải chuỗi đối xứng vì "hello" khác với "olleh".

## Cách Hoạt Động

### 1. `isPalindrome` (Phương pháp duyệt từ hai đầu)

Hàm `isPalindrome` sử dụng cách tiếp cận duyệt chuỗi từ hai đầu (từ trái qua phải và từ phải qua trái) để kiểm tra tính đối xứng của chuỗi. Đây là phương pháp hiệu quả và tiết kiệm bộ nhớ vì không cần phải tạo thêm bản sao của chuỗi.

#### Các bước thực hiện

1. **Làm sạch chuỗi**:
   - Loại bỏ tất cả các ký tự không cần thiết (kể cả chữ hoa, chữ thường, và ký tự đặc biệt).
   - Chuyển tất cả ký tự về chữ thường để tránh phân biệt chữ hoa và chữ thường.
   - Dùng biểu thức chính quy `[^a-zA-Z0-9]` để chỉ giữ lại các ký tự chữ cái và số.

2. **Khởi tạo chỉ số**:
   - `left = 0`: Chỉ số bắt đầu từ đầu chuỗi.
   - `right = s.length - 1`: Chỉ số bắt đầu từ cuối chuỗi.

3. **Duyệt chuỗi**:
   - Duyệt qua chuỗi từ hai đầu (với chỉ số `left` tăng dần và chỉ số `right` giảm dần).
   - Nếu ký tự tại `left` khác với ký tự tại `right`, trả về `false` vì chuỗi không phải palindrome.
   - Nếu tất cả các cặp ký tự tương ứng đều giống nhau, trả về `true`.

#### Code

```javascript
function isPalindrome(s) {
  // Xóa bỏ các ký tự không cần thiết (chữ hoa, chữ thường, ký tự đặc biệt)
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Chỉ giữ lại chữ cái và số, chuyển thành chữ thường

  let left = 0; // Chỉ số của ký tự đầu tiên
  let right = s.length - 1; // Chỉ số của ký tự cuối cùng

  // Duyệt qua chuỗi từ hai đầu
  while (left < right) {
    // Nếu hai ký tự không bằng nhau, không phải chuỗi đối xứng
    if (s[left] !== s[right]) {
      return false;
    }
    left++; // Di chuyển chỉ số từ trái sang phải
    right--; // Di chuyển chỉ số từ phải sang trái
  }

  return true; // Nếu không có lỗi, chuỗi là đối xứng
}

```

### Ví Dụ

```javascript
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

```

### 1. `isPalindrome2` (Phương pháp duyệt từ hai đầu)

Hàm `isPalindrome2` kiểm tra chuỗi đối xứng bằng cách đảo ngược chuỗi và so sánh với chuỗi ban đầu. Đây là phương pháp dễ hiểu và dễ triển khai, nhưng nó yêu cầu tạo ra một bản sao của chuỗi đảo ngược, do đó tiêu tốn thêm bộ nhớ.

#### Các bước thực hiệnn

1. **Đảo ngược chuỗi:**:
   - Sử dụng `split("")` để tách chuỗi thành mảng các ký tự.
   - Dùng `reverse()` để đảo ngược mảng.
   - Dùng `join("")` để nối lại các ký tự thành chuỗi sau khi đảo ngược.

2. **So sánh:**:
   - Nếu chuỗi ban đầu giống với chuỗi đảo ngược, thì chuỗi đó là palindrome và trả về `true`.
   - Nếu không, trả về `false`.

#### Codee

```javascript
function isPalindrome2(s) {
  return s === s.split("").reverse().join("");
}
```

### Ví Dụu

```javascript
console.log(isPalindrome2("level")); // Output: true
console.log(isPalindrome2("hello")); // Output: false
console.log(isPalindrome2("A man, a plan, a canal, Panama")); // Output: true

```

## Tối Ưu

### Phương pháp `isPalindrome`

- Độ phức tạp thời gian: `O(n)`, vì chúng ta duyệt qua chuỗi một lần từ hai đầu.
- Độ phức tạp không gian: `O(1)`, vì không cần tạo ra bản sao của chuỗi.

### Phương pháp `isPalindrome2`

- Độ phức tạp thời gian: `O(n)`, vì việc đảo ngược chuỗi yêu cầu duyệt qua tất cả các phần tử của chuỗi.
- Độ phức tạp không gian: `O(n)`, vì phải tạo ra một bản sao đảo ngược của chuỗi.
