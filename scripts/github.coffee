module.exports = (robot) ->

	robot.respond /github status/i, (msg) ->
    	msg.http("https://status.github.com/api/last-message.json")
      	.get() (err, res, body) ->
        	msg.send JSON.parse(body).status
        	msg.senf JSON.parse(body).body