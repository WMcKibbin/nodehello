/**
 * Class that manages a given msg
 */
class Hello{
    /**
     * Create a New Hello object
     * @param {String} msg 
     */
    constructor(msg){
        this.msg = msg
    }

    /**
     * @async
     * Give the message to the world!
     */
    world(){
        return new Promise((resolve, reject) => {
            resolve(this.msg)
        });
    }
}

export default Hello