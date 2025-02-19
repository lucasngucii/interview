const fs = require("fs");

const rawData = fs.readFileSync("./data.json", "utf8");
const jsonData = JSON.parse(rawData);
function shortenKeys(event) {
  const keyMapping = {
    id: "i",
    season_id: "s",
    stage_id: "st",
    start_time: "stt",
    start_timestamp: "ts",
    sport_event_status: "ses",
    status_id: "sid",
    updated_at: "upd",
    record_updated_at: "rupd",
    home_team_id: "htid",
    away_team_id: "atid",
    competition_id: "cid",
    lineup: "lup",
    venue_id: "vid",
    referee_id: "rid",
    related_id: "rid",
    agg_score: "agg",
  };

  let shortenedEvent = {};

  // Rút gọn các khóa theo bảng ánh xạ
  for (let key in event) {
    if (keyMapping[key]) {
      shortenedEvent[keyMapping[key]] = event[key];
    }
  }

  return shortenedEvent;
}

// Hàm loại bỏ các trường không cần thiết
function removeUnnecessaryFields(event) {
  // Loại bỏ các trường null hoặc không cần thiết
  return Object.fromEntries(
    Object.entries(event).filter(
      ([key, value]) => value !== null && value !== undefined
    )
  );
}

// Áp dụng tối ưu hóa và nén dữ liệu
const optimizedData = jsonData[
  "select * from sport_events se where se.start_timestamp >= 1729875600 and se.start_timestamp <= 1729962000"
].map((event) => {
  let shortenedEvent = shortenKeys(event); // Rút gọn khóa
  return removeUnnecessaryFields(shortenedEvent); // Loại bỏ trường không cần thiết
});

console.log(optimizedData);

let compressedData = JSON.stringify(
  {
    "select*fromsport_eventssewheresestart_timestamp>=1729875600andse.start_timestamp<=1729962000":
      optimizedData,
  },
  null,
  0
);

fs.writeFile("compressed_data.json", compressedData, (err) => {
  if (err) throw err;
  console.log("Dữ liệu đã được tối ưu và nén!");
});
