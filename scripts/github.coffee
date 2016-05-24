module.exports = (robot) ->

	robot.respond /github status/i, (msg) ->
    	msg.http("https://status.github.com/api/last-message.json")
      	.get() (err, res, body) ->
        	msg.send "Status: " + JSON.parse(body).status + ". " + JSON.parse(body).body + "."