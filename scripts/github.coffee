module.exports = (robot) ->

	robot.respond /github status/i, (msg) ->
    	msg.http("https://status.github.com/api/status.json")
      	.get() (err, res, body) ->
        	msg.send JSON.parse(body).status