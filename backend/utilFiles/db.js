import mongoose from 'mongoose'

const database=process.env.URL

const databaseConnect= mongoose.connect(database,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("atlas is connected")
  }
  )
  .catch((error)=>{
    console.log("the mongodb error")
  })

  export default databaseConnect
