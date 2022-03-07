const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const engineer = new Engineer(626, 'Stitch')

            expect(engineer.id).toEqual(626);
            expect(engineer.name).toEqual('Stitch');
        });
    });
});