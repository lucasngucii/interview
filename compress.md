# Tối ưu và Nén Dữ liệu JSON

## Mô tả

Tập tin này chứa mã nguồn Node.js giúp tối ưu hóa và nén dữ liệu JSON nhằm giảm kích thước tệp.

Quá trình tối ưu bao gồm:

1. **Rút gọn khóa dữ liệu**: Thay thế các khóa dài bằng các tên ngắn hơn.
2. **Loại bỏ các trường không cần thiết**: Xóa các giá trị null hoặc không quan trọng.
3. **Lưu trữ JSON theo cách tối ưu nhất**: Xuất dữ liệu ở dạng JSON nén.

## Yêu cầu

- Node.js đã được cài đặt.
- Tệp `data.json` chứa dữ liệu đầu vào.
- Không sử dụng bất cứ thư viện nào.

## Hướng dẫn sử dụng

### Bước 1: Cài đặt môi trường

Đảm bảo bạn có Node.js và đặt tệp `data.json` trong cùng thư mục với mã nguồn.

### Bước 2: Chạy chương trình

Mở terminal và chạy lệnh sau:

```sh
node script.js
```

Sau khi chạy, dữ liệu đầu vào sẽ được tối ưu và lưu vào `compressed_data.json`.

---

## Giải thích mã nguồn

### 1. Đọc và phân tích dữ liệu JSON

```js
const fs = require("fs");
const rawData = fs.readFileSync("./data.json", "utf8");
const jsonData = JSON.parse(rawData);
```

- Đọc nội dung từ tệp `data.json`.
- Chuyển đổi nội dung thành đối tượng JSON để xử lý.

### 2. Rút gọn khóa dữ liệu

```js
function shortenKeys(event) {
  const keyMapping = {
    id: "i", season_id: "s", stage_id: "st", start_time: "stt",
    start_timestamp: "ts", sport_event_status: "ses", status_id: "sid",
    updated_at: "upd", record_updated_at: "rupd", home_team_id: "htid",
    away_team_id: "atid", competition_id: "cid", lineup: "lup",
    venue_id: "vid", referee_id: "rid", related_id: "rid", agg_score: "agg"
  };

  let shortenedEvent = {};
  for (let key in event) {
    if (keyMapping[key]) {
      shortenedEvent[keyMapping[key]] = event[key];
    }
  }
  return shortenedEvent;
}
```

- Tạo bảng ánh xạ giữa các khóa dài và khóa ngắn hơn.
- Lặp qua từng phần tử và thay thế khóa theo bảng ánh xạ.

### 3. Loại bỏ các trường không cần thiết

```js
function removeUnnecessaryFields(event) {
  return Object.fromEntries(
    Object.entries(event).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );
}
```

- Duyệt qua từng cặp khóa-giá trị và loại bỏ các giá trị `null` hoặc `undefined`.

### 4. Tối ưu hóa và ghi dữ liệu ra tệp

```js
const optimizedData = jsonData["select * from sport_events se where se.start_timestamp >= 1729875600 and se.start_timestamp <= 1729962000"].map((event) => {
  let shortenedEvent = shortenKeys(event);
  return removeUnnecessaryFields(shortenedEvent);
});

let compressedData = JSON.stringify(
  {
    "select*fromsport_eventssewheresestart_timestamp>=1729875600andse.start_timestamp<=1729962000": optimizedData,
  },
  null,
  0
);

fs.writeFile("compressed_data.json", compressedData, (err) => {
  if (err) throw err;
  console.log("Dữ liệu đã được tối ưu và nén!");
});
```

- Lọc và rút gọn dữ liệu.
- Chuyển đổi dữ liệu thành chuỗi JSON nhỏ gọn.
- Ghi vào tệp `compressed_data.json`.

## Kết quả

- Dữ liệu JSON đầu vào có kích thước lớn với nhiều khóa dài và giá trị dư thừa.
- Sau khi xử lý, kích thước tệp nhỏ hơn đáng kể (1.6mb -> 1mb).
