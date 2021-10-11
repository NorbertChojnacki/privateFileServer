/** Klasa ulatwiajaca prace na zapytaniach do bazy danych */
class dbRequestClass{
    info = {
        result: [],
        errorNum: 0
    }
    /**
     * 
     * @returns {Boolean} 
     */
    isError(){
        return this.info.errorNum > 0 ? true : false
    }

    /**
     * 
     * @param {Array} res 
     */
    addRes(res){
        this.info.result.push(res)
    }

    addErr(){
        this.info.errorNum++
    }

    showErr(){
        return this.info.result.filter(err => err.status == "error")
    }
}

module.exports = dbRequestClass