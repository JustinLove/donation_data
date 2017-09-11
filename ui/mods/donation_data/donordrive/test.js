define(['donation_data/donordrive/parse'], function(parse) {
  var testSequence = [
    //"coui://ui/mods/donation_data/donordrive/sample.htm",
    //"coui://ui/mods/donation_data/donordrive/sample201609.html",
    "coui://ui/mods/donation_data/donordrive/donordrive00.html",
    "coui://ui/mods/donation_data/donordrive/donordrive01.html",
    "coui://ui/mods/donation_data/donordrive/donordrive02.html",
    //"coui://ui/mods/donation_data/donordrive/test.htm",
  ]

  var update = function() {
    if (testSequence.length > 1) {
      url = testSequence.shift()
    } else {
      url = testSequence[0]
    }
    return $.get(url).then(parse.process)
  }

  return {
    donations: testSequence[0],
    update: update,
    process: parse.process,
  }
})
