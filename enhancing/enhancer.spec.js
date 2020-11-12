const { success, fail, repair} = require('./enhancer.js');
// test away!

describe("test functionality for the game's enhancing system", () => {
 
    describe('repair function that returns 100 output regardless of the argument', () => {
    it('repair function accepts an object and returns with 100 of durability', () => {
        expect(repair({name: "item", durability: 300000, enhancement: 20}))
        .toMatchObject({name: "item", durability: 100, enhancement: 20})
    })
})
    describe('success function accepts an object and returns a modified object with following:', () => {
        it('success function enhancement increases by 1', () => {
            expect(success({name: "item", durability: 100, enhancement: 4}))
            .toMatchObject({name: "item", durability: 100, enhancement: 5})
       }) 
    })
    describe('fail function accepts an object and returns a modified object with following:', () => {
        it("if the item's enhancement is less than 15, the durability decreases by 5", () => {
            expect(fail({name: "item", durability: 100, enhancement: 14}))
            .toMatchObject({name: "item", durability: 95, enhancement: 14})
           
       }) 

        it("if the item's enhancement is more than or equals 15, the durability decreases by 10", () => {
        expect(fail({name: "item", durability: 100, enhancement: 15}))
        .toMatchObject({name: "item", durability: 90, enhancement: 15})

        expect(fail({name: "item", durability: 100, enhancement: 16}))
        .toMatchObject({name: "item", durability: 90, enhancement: 16})
       
        })

        it("if the item's enhancement is more than 16, the durability decreases by 10 and enhancement decreases by 1", () => {
            expect(fail({name: "item", durability: 100, enhancement: 19}))
            .toMatchObject({name: "item", durability: 90, enhancement: 18})
           
            })
       
    })
   
})
