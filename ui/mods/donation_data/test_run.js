(function() {
  var paths = require.s.contexts._.config.paths
  paths.donation_data = 'coui://ui/mods/donation_data'
  paths.sandbox_unit_menu = 'coui://ui/mods/sandbox_unit_menu'
})()

require(['donation_data/feed', 'donation_data/config'], function(feed, config) {
  setTimeout(function() {
    feed[config.feed()].update().then(function(donors) {
      donors.forEach(function(item) {
        console.log(item)
      })
    })
  }, 1000)
})
