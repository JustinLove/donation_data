(function() {
  var donation_data_settings = {
    donation_data_feed: {
      title: 'Donation Feed',
      type: 'select',
      options: [
        'donation_config_local',
        'donation_config_live',
        'donation_config_websockets',
        'tiltify_v3_local',
        'tiltify_v3_live',
        'tiltify_v2_local',
        'donordrive_test',
        'donordrive_live',
        'fundrazr_test',
        'fundrazr_live',
        'gofundme_test',
        'gofundme_live',
      ],
      default: 'donation_config_local'
    },
    donation_data_api_key: {
      title: 'Feed Api Key',
      type: 'text',
      default: ''
    },
    donation_data_match_tags: {
      title: 'Match Tags',
      type: 'text',
      default: ''
    },
    donation_data_current_match: {
      title: 'Current Match',
      type: 'text',
      default: ''
    }
  }

  _.extend(api.settings.definitions.ui.settings, donation_data_settings)

  // force model.settingsLists to update
  model.settingDefinitions(api.settings.definitions)

  var $group = $('<div class="sub-group"></div>').appendTo('.option-list.ui .form-group')
  $group.append('<div class="sub-group-title">Donation Data</div>')

  var $template = $('script#setting-template')
  $group.append($template[0].outerHTML.replace('setting-template', 'donation-data-setting-template').replace('hide', 'show'))

  Object.keys(donation_data_settings).forEach(function(setting) {
    if (donation_data_settings[setting].type == 'text') {
      var textHtml = 
        '<div class="option" data-bind="with: $root.settingsItemMap()[\'ui.' + setting + '\']">' +
          '<label data-bind="text: title" >' +
            'title' +
          '</label>' +
          '<input type="text" class="form-control" value="" data-bind="value: value" />' +
        '</div>'
      $group.append(textHtml)
    } else {
      $group.append('<div class="option" data-bind="template: { name: \'donation-data-setting-template\', data: $root.settingsItemMap()[\'ui.' + setting + '\'] }"></div>')
    }
  })
})()
