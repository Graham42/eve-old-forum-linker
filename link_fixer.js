(function(){
  'use strict';

  [].forEach.call(
    document.querySelectorAll('a[href*=externalLink]'),
    function (elem) {
      var newLink = elem.href.replace(/.*externalLink\.aspx\?l=/,"");
      elem.href = decodeURIComponent(newLink);
    }
  );

})();
