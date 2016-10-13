var expect = require('chai').expect;

describe('string', function() {

    describe('replace', function() {

        it('only replaces first occurence', function() {
            expect('  ***  '.replace('*', 'A')).to.equal('green me!');
        });
    });
});
