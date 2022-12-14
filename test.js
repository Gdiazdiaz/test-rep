const string = require('./stringLength');
const calculator = require('./calculator');
const capitalize = require('./capitalLetter');
const assert = require('assert');

describe('string_length', function(){
    it('prints_length', function(){
        assert(string.stringLength('camisole')===8)
    })
    it('reverse_string', function(){
        assert(string.reverseString('camisole')==='elosimac')
    })
})

describe('calculator', function(){
    it('add 5 and 8', function(){
        assert(calculator.sum(5,8)===13)
    })
    it('add 12 and 4', function(){
        assert(calculator.sum(12,4)===16)
    })
    it('add 0 and 4', function(){
        assert(calculator.sum(0,4)===4)
    })
})

describe('calculator', function(){
    it('sub 8 from 5', function(){
        assert(calculator.sub(5,8)===-3)
    })
    it('sub 4 from 12', function(){
        assert(calculator.sub(12,4)===8)
    })
    it('sub 4 from 0', function(){
        assert(calculator.sub(0,4)===-4)
    })
})

describe('calculator', function(){
    it('multiply 5 and 8', function(){
        assert(calculator.mult(5,8)===40)
    })
    it('multiply 12 and 4', function(){
        assert(calculator.mult(12,4)===48)
    })
    it('multiply 0 and 4', function(){
        assert(calculator.mult(0,4)===0)
    })
})

describe('calculator', function(){
    it('div 8 by 4', function(){
        assert(calculator.div(8,4)===2)
    })
    it('div 12 by 4', function(){
        assert(calculator.div(12,4)===3)
    })
    it('div 0 by 4', function(){
        assert(calculator.div(0,4)===0)
    })
})

describe('capitalize', function(){
    it('capitalizes f to F', function(){
        assert(capitalize('cat')==='Cat')
    })
})