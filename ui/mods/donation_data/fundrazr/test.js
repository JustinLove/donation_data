define(['donation_data/fundrazr/parse'], function(parse) {
  var testSequence = [
    //"coui://ui/mods/donation_data/fundrazr/test.json",
    //"coui://ui/mods/donation_data/fundrazr/test2.json",
    "coui://ui/mods/donation_data/fundrazr/fr00.json",
    "coui://ui/mods/donation_data/fundrazr/fr01.json",
    "coui://ui/mods/donation_data/fundrazr/fr02.json",
    "coui://ui/mods/donation_data/fundrazr/fr03.json",
  ]

  var withoutImages = function(json) {
    var donations = parse.process(json)
    donations.forEach(function(donation) {
      donation.donor_image = ''
    })
    return donations
  }

  var update = function() {
    if (testSequence.length > 1) {
      url = testSequence.shift()
    } else {
      url = testSequence[0]
    }
    console.log(url)
    //return $.get(url).then(parse.process)
    return $.get(url).then(withoutImages)
  }

  return {
    donations: testSequence[0],
    update: update,
    process: parse.process,
  }
})
