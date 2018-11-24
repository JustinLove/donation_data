define([
  'donation_data/donation_config/parse',
  'donation_data/config',
], function(parse, config) {
  var local = "http://localhost:5000/donations"
  var live = "https://ablegamers2018.herokuapp.com/donations"
  var donations = live

  var query = ""
  if (config.current_match()) {
    query = "?untagged=true&game=" + config.current_match()
  }

  var update = function() {
    return $.ajax({
      method: 'GET',
      url: donations + query,
      dataType: 'json',
    }).then(parse.process)
  }

  return {
    donations: donations,
    update: update,
    process: parse.process,
  }
})
