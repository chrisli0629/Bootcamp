test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('the best flavor is grapefruit', () => {
    function bestLaCroixFlavor(){
        return 'grapefruit';
    }
    expect(bestLaCroixFlavor()).toBe('grapefruit');
});


describe('Jack and Diane array tests', () => {
    it('passes array1 containing expected values', () => {
        const values = ['Jack', 'Diane'];
        expect(['Jack','Diane','George']).toEqual(expect.arrayContaining(values));
    })
    
    it('array2 containing expected values', () => {
        const values = ['Jack', 'Diane'];
        expect(['Jack']).not.toEqual(expect.arrayContaining(values));
    })
    
    it('array3 containing expected values', () => {
        const values = ['Jack', 'Diane'];
        expect(['Bill']).not.toEqual(expect.arrayContaining(values));
    })
});

 
 
 
 