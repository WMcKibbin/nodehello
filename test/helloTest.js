import { expect } from "chai";
import Hello from "../src/hello"
describe('Test Hello Functionality', function(){
    
    //run beffore each test
    beforeEach(function() {
        //before each things here
      });

    it('Should return the hello world msg', function(){
        const hello = new Hello('Hello World')
        hello.world().then(function(msg){
            expect(msg).to.equal('Hello World')
        })
    })
})