const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try{
        await mongoose.connect(
          `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cusonodejs.0iigpo5.mongodb.net/database?retryWrites=true&w=majority&appName=AtlasApp`)

    return console.log("Conexão ao banco realizada com sucesso.")
}
catch (error){
    return console.log(
        "Ocoreu um erro ao se conectar com o banco de dados: ",
        erro
      );
}  
}
      

module.exports = connectToDatabase