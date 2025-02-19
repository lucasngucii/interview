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

// Ví dụ
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

function isPalindrome2(s) {
  return s === s.split("").reverse().join("");
}

// Ví dụ
console.log(isPalindrome2("level")); // Output: true
console.log(isPalindrome2("hello")); // Output: false
console.log(isPalindrome2("A man, a plan, a canal, Panama")); // Output: true
