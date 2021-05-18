import jQuery from 'jquery';

export default {
  name: 'ember-cli-rails-addon-csrf',

  initialize() {
    if(jQuery && jQuery.ajaxPrefilter) {
      jQuery.ajaxPrefilter((options, originalOptions, xhr) => {
        const token = jQuery('meta[name="csrf-token"]').attr('content');
        xhr.setRequestHeader('X-CSRF-Token', token);
      });
    }
  },
};
