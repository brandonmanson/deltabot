var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: '54b550eaad0748afb6577403a2b09b6a',
  slientSecret: '416e48a5cabf4eb6b006dd876b64c534',
  redirectUri: ''
});

module.exports = function(robot) {
  robot.respond(/jam to (.*)/i, function(msg) {
    var artist = msg.match[1];
    console.log(artist);
    spotifyApi.searchArtists('Love')
      .then(function(data) {
          console.log('Search artists by "Love"', data.body);
        }, function(err) {
          console.error(err);
        });
    // spotifyApi.searchArtists('Eminem')
    // .then(function(data) {
    //   // var parsedJson = JSON.parse(data.body);
    //   // var url = parsedJson.artists.items[0].external_urls.spotify;
    //   console.log("Search artists by eminem", data.body);
    //   msg.reply(artist);
    // }, function(err) {
    //   console.error(err);
    // });
  });
}
