(function() {
  'use strict';

  angular
    .module('uistructure')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
