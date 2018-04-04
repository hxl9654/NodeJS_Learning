var dns = require('dns');
dns.lookup('github.com', function onLookup(err, address, family) {
    console.log('ip: ', address);
    dns.reverse(address, function(err, hostname) {
        if(err) {
            console.log(err.stack);
        }
        console.log('reverse ' + address + ': ' + JSON.stringify(hostname));
    });
});