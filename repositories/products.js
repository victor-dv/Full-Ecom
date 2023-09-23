const fs = require('fs')
const crypto = require('crypto')
const { error } = require('console')

class ProductsRepository {

    constructor(filename){
        if(!filename){
            throw new error('Você precisa inserir o nome do arquivo para criação')
        }
        this.filename = filename

        try{
            fs.accessSync(this.filename)
        }catch{
            fs.writeFileSync(this.filename, "[]")
        }
    }


}