/**
 * Use the OW2.org gitorious instance for samples.
 *
 * Copyright(c) 2012 Christophe Hamerling <christophe.hamerling@gmail.com>
 * MIT Licensed
 */

var Gitorious = require('../index').Gitorious
  , _ = require('underscore');

var client = new Gitorious({url:'http://gitorious.ow2.org'});

console.log('# Getting OW2 Shelbie information : ')
client.getProject('ow2-shelbie', function(err, result) {
  if (err) {
    console.log('Error:', err);
    return;
  }
  
  //  console.log(JSON.stringify(result, null, 4));  
  
  console.log('## Title:', result.project.title);
  console.log('### Repositories');
  _.each(result.project.repositories.mainlines.repository, function(item) {
    console.log(' - ', item.clone_url);
  })
});