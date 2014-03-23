var defaultPort = 1337;
var passengerPort = 'passenger';

module.exports = function(userPort){

    if(typeof PhusionPassenger !== 'undefined'){

        // for a full explanation of why we're configuring PhusionPassenger,
        // please checkout this post:
        // https://groups.google.com/d/msg/phusion-passenger/sZ4SjU8ypwc/MUdZMcnWq_8J
        PhusionPassenger.configure({ autoInstall: false });
        return passengerPort;
    } else {

        return userPort || defaultPort;
    }
};