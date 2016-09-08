function getRandomIndex() {
  return Math.floor(Math.random() * (30 - 0 + 1)) + 0;
}

module.exports = function(robot) {
  robot.respond(/jam to (.*)/i, function(msg) {
    var artist = msg.match[1];
    var partOne = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=';
    var apiKey = process.env.apiKey;
    var partTwo = '&type=video&key=' + apiKey;
    robot.http(partOne + artist + partTwo).get()(function(err, res, body) {
      if (err) {
        console.log(err);
      }
      console.log(body);
      data = JSON.parse(body);
      randomIndex = getRandomIndex();
      console.log("Random Index: " + randomIndex);
      id = data.items[randomIndex].id.videoId;
      url = "https://youtube.com/watch?v=" + id;
      console.log(url);
      msg.send(url);
    })

  });
}
