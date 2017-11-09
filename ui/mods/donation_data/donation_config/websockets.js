define([
  'donation_data/donation_config/parse',
  'donation_data/donation_config/live',
  'donation_data/config',
], function(parse, poll, config) {
  var local = "ws://localhost:5000/donations"
  var donations = local

  var query = ""
  if (config.current_match()) {
    query = "?untagged=true&game=" + config.current_match()
  }

  var subscribe = function(callback) {
    var ws = new WebSocket(donations + query)

    /* ws.onerror = function() {
      console.log('websocket error', arguments)
    }*/

    ws.onopen = function() {
      console.log('websocket opened')
      poll.update().then(callback)
    }

    ws.onclose = function() {
      console.log('websocket closed')
      setTimeout(subscribe, 10000, callback)
    }

    ws.onmessage = function(event) {
      //console.log('message', event)
      var message = JSON.parse(event.data)
      callback(parse.process(message))
    }
  }

  return {
    donations: donations,
    update: poll.update,
    subscribe: subscribe,
    process: parse.process,
  }
})
