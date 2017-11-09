define([
  'donation_data/donation_config/parse',
  'donation_data/config',
], function(parse, config) {
  var local = "http://localhost:5000/donations"
  var donations = local

  var query = ""
  if (config.current_match()) {
    query = "?untagged=true&game=" + config.current_match()
  }

  var update = function(url) {
    return $.ajax({
      method: 'GET',
      url: (url || donations) + query,
      dataType: 'json',
    }).then(parse.process)
  }

  return {
    donations: donations,
    update: update,
    process: parse.process,
  }
})
