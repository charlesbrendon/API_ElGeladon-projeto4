import mongoose from "mongoose";

const { connect } = mongoose;

export const conectarAoDatabase = () => {  
  connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() =>{
    console.log(`MongoDB Conectado`);
  }).catch((err) => {
    console.log(`Erro na conexão com MongoDB: ${err}`)
  })
}

