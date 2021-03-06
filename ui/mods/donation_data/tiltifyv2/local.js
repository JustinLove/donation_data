define(['donation_data/tiltifyv2/parse'], function(parse) {
  var testSequence = [
    "coui://ui/mods/donation_data/tiltifyv2/tiltify2017.json",
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
