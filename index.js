import Hello from './src/hello'

const hello = new Hello('Hello World!')

hello.world().then(function(msg){
    console.log(msg)
}).catch(function(error){
    console.log(error)
})
