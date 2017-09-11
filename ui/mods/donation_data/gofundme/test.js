define(['donation_data/gofundme/parse'], function(parse) {
  var testSequence = [
    "coui://ui/mods/donation_data/gofundme/gfm50.html",
    "coui://ui/mods/donation_data/gofundme/gfm40.html",
    "coui://ui/mods/donation_data/gofundme/gfm30.html",
    "coui://ui/mods/donation_data/gofundme/gfm20.html",
    "coui://ui/mods/donation_data/gofundme/gfm10.html",
    "coui://ui/mods/donation_data/gofundme/gfm00.html",
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
