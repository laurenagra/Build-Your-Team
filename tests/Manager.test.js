const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager(13, 'Nani')

            expect(manager.id).toEqual(13);
            expect(manager.name).toEqual('Nani');
        });
    });
});