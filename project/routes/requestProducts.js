var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var opHelper = new OperationHelper({
    awsId:     '9695-8991-2863',
    awsSecret: 'n+PoKzFoC2rEX3JRWsTq6WcSGM4dJ8NWxdIg1HBN',
    assocId:   'landongncom-20'
});


module.exports = {
  method: 'GET',
  path: '/',
  handler: function (request) {
    /* do things with request; */
    opHelper.execute('ItemSearch', {
      'SearchIndex': 'Books',
      'Keywords': 'harry potter',
      'ResponseGroup': 'ItemAttributes,Offers'
    }, function(results) { // you can add a second parameter here to examine the raw xml response
        console.log(results);
    });
  }
};
