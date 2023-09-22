//Trabalhar com filesystem
const fs = require('fs')
const crypto = require('crypto')

class UserRepository {
    // Vamos criar os metodos
    constructor(fileName) {
        if (!fileName) {
            throw new Error("TU precisar informar um nome de arquivo")
        }
        //propriedade da class
        this.fileName = fileName

        try {
            fs.accessSync(this.fileName) // acessa o arquivo
        } catch (error) {
            fs.writeFileSync(this.fileName, "[]")
        }
    }
    //Criando os metodos...
    async getAll() {    //async faz mostra qye é uma função assincrona

        /*  //abrir o arquivo (this.fileName) 
         const contents = await fs.promises.readFile(this.fileName) //await fala para ele esperar quando o metodo for chamado, para procurar o que precisa ser devolvido
         //ler o conteudo
         console.log(contents)
 
         //Fazer um parse para json
         const data = JSON.parse(contents)
         //devolver a lista dos usuarios
         console.log(data)
         return data */

        return JSON.parse(await fs.promises.readFile(this.fileName))
    }

    async create(atributos) {
        //adicionar o id ao atributo recebido
        atributos.id = this.randomId()
        // ler meu arquivo
        const records = await this.getAll()
        // gravar no array (records)
        records.push(atributos)
        //devolver para o arquivo
      await this.writeAll(records)


    }

    async writeAll(records){
        await fs.promises.writeFile(this.fileName, JSON.stringify(records))

    }

    randomId() {
        return crypto.randomBytes(4).toString('hex')
    }
}


//Teste
/* 
new UserRepository("users.json") */
const test = async () => {
    const repo = new UserRepository("users.json")
    await repo.create({ nome: "joao", email: "joao@gmail.com" })
    const users = await repo.getAll()

    console.log(users)
}

test()