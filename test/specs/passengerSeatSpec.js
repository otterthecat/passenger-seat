// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();

// stubs
// /////////////////////////////////////////////////////////
var fauxPassenger = {
    configure: function(){}
};


// modules to test
// /////////////////////////////////////////////////////////
var seat = require('../../index');

describe('Passenger-Seat', function(){

    it('should return "passenger" if PhusionPassenger object exists', function(){

        global.PhusionPassenger = fauxPassenger;
        seat().should.equal('passenger');
        PhusionPassenger = undefined;
    });

    it('should return evironment port if both no argument is passed and Passenger object doesn\'t exist', function(){

        seat().should.equal(1337);
    });

    it('should return user defined port if Passenger & environment ports don\'t exist', function(){

        seat(4000).should.equal(4000);
    });
});