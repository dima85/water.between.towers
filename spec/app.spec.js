var app = require('./../app.js');
describe('When run app', () => {
    
    describe('With empty array', () => {
        it('Should return 0', () => {
            expect(app.calculate([])).toEqual(0);
        });            
    });

    describe('With array consists from less then 3 elements', () => {
        it('Should return 0', () => {
            expect(app.calculate([1,2])).toEqual(0);
        });            
    });

    describe('Should find max element in array', () => {
        it('Should return 100', () => {
            expect(app.findMaxElementIndex([5, 4, 2, 100, 12, -1], 0, false)).toEqual(3);
        });            
    });

    describe('With array consists from  [5, 2, 4]', () => {
        it('Should return 2', () => {
            expect(app.calculate([5, 2, 4])).toEqual(2);
        });            
    });

    describe('With array consists from [5, 2, 1, 4]', () => {
        it('Should return 5', () => {
            expect(app.calculate([5, 2, 1, 4])).toEqual(5);
        });            
    });

    describe('With array consists from [5, 2, 5, 4]', () => {
        it('Should return 3', () => {
            expect(app.calculate([5, 2, 5, 4])).toEqual(3);
        });            
    });
    describe('With array consists from [1, 2, 5, 4]', () => {
        it('Should return 0', () => {
            expect(app.calculate([1, 2, 5, 4])).toEqual(0);
        });            
    });  

    describe('With array consists from [5, 2, 5, 4, 6]', () => {
        it('Should return 4', () => {
            expect(app.calculate([5, 2, 5, 4, 6])).toEqual(4);
        });            
    }); 

    describe('With array consists from [5, 1, 1, 1, 5]', () => {
        it('Should return 12', () => {
            expect(app.calculate([5, 1, 1, 1, 5])).toEqual(12);
        });            
    });  
    describe('With array consists from [1, 4, 5, 3, 1]', () => {
        it('Should return 0', () => {
            expect(app.calculate([1, 4, 5, 3, 1])).toEqual(0);
        });            
    }); 
    describe('With array consists from [1, 5, 5, 5, 1]', () => {
        it('Should return 0', () => {
            expect(app.calculate([1, 5, 5, 5, 1])).toEqual(0);
        });            
    }); 
});
    