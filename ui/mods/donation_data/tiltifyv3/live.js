define([
  'donation_data/tiltifyv3/parse',
  'donation_data/config',
], function(parse, config) {

  var root = "https://tiltify.com"
  var donations = "/api/v3/campaigns/9238/donations?count=50" // 2017
  //var donations = "/api/v3/campaigns/19351/donations?count=50" // 2018

  // undocumented parameters:
  // count=10
  // before=donationid
  // aftert=donationid

  var update = function() {
    return $.ajax({
      method: 'GET',
      url: root + donations,
      dataType: 'json',
      headers: {
        'Authorization': 'Bearer ' + config.api_key(),
      },
    }).then(function(json) {
      if (json && json.links && json.links.next) {
        donations = json.links.next
      }
      return parse.process(json)
    })
  }

  return {
    donations: donations,
    update: update,
    process: parse.process,
  }
})
