define(['donation_data/donation_config/parse'], function(parse) {
  var testSequence = [
    "coui://ui/mods/donation_data/donation_config/donation_config_2017.json",
  ]

  var update = function() {
    if (testSequence.length > 1) {
      url = testSequence.shift()
    } else {
      url = testSequence[0]
    }
    console.log(url)
    return $.get(url).then(parse.process)
  }

  return {
    donations: testSequence[0],
    update: update,
    process: parse.process,
  }
})
