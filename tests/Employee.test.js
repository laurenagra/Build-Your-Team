const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const employee = new Employee(123, 'Lilo')

            expect(employee.id).toEqual(123);
            expect(employee.name).toEqual('Lilo');
        });
    });
});