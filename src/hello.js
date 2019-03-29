class Hello{
    /**
     * Create a New Hello object
     * @param {String} msg 
     */
    constructor(msg){
        this.msg = msg
    }

    world(){
        return new Promise((resolve, reject) => {
            resolve(this.msg)
        });
    }
}

export default Hello