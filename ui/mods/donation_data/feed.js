define([
  'donation_data/tiltify/local',
  'donation_data/tiltify/api_test',
  'donation_data/tiltify/live',
  'donation_data/fundrazr/test',
  'donation_data/fundrazr/live',
  'donation_data/gofundme/test',
  'donation_data/gofundme/live',
  'donation_data/donordrive/test',
  'donation_data/donordrive/live',
  'donation_data/donation_config/live',
], function(
  tiltify_local,
  tiltify_api_test,
  tiltify_live,
  fundrazr_test,
  fundrazr_live,
  gofundme_test,
  gofundme_live,
  donordrive_test,
  donordrive_live,
  donation_config_live
) {
  return {
    tiltify_local: tiltify_local,
    tiltify_api_test: tiltify_api_test,
    tiltify_live: tiltify_live,
    fundrazr_test: fundrazr_test,
    fundrazr_live: fundrazr_live,
    gofundme_test: gofundme_test,
    gofundme_live: gofundme_live,
    donordrive_test: donordrive_test,
    donordrive_live: donordrive_live,
    donation_config_live: donation_config_live,
  }
})
