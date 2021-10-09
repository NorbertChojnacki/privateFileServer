/** Klasa ulatwiajaca prace na zapytaniach do bazy danych */
class dbRequestClass{
    status = {
        error:[],
        result: []
    }
    /**
     * 
     * @returns {Boolean} 
     */
    isError(){
        return this.status.error.length == 0 ? false : true
    }

    /**
     * 
     * @param {Array} err 
     */
    addErr(err){
        this.status.error.push(err)
    }
    /**
     * 
     * @param {Array} res 
     */
    addRes(res){
        this.status.result.push(res)
    }
}