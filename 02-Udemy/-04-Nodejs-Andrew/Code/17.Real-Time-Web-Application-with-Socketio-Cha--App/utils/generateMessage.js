const { text } = require("body-parser")


exports.generateMessage= (text) =>{
  return{
    text:text,
    createdAt: new Date().getTime()
  }
}