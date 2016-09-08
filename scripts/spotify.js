module.exports = function(robot) {
  robot.respond(/jam to (.*)/i, function(msg) {
    var artist = msg.match[1];
    var partOne = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=';
    var partTwo = '&type=playlist&key=AIzaSyD6EcOnDFc1JB2lBGtDq2FhRpqKVySroK4';
    robot.http(partOne + artist + partTwo).get()(function(err, res, body) {
      if (err) {
        console.log(err);
      }
      console.log(body);
      data = JSON.parse(body);
      id = data.items[0].id.playlistId;
      url = "https://youtube.com/playlist?list=" + id;
      console.log(url);
      msg.send(url);
    })

  });
}
