const csv = require('csvtojson')
const fs = require('fs')

const convertFile = (csvFilePath='./customer-data.csv') => {
    let json = []
    csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
      json.push(jsonObj)
  
   }).on('done', (error) => {
       if(error){
           console.log('something went wrong')
       }else {
            fs.writeFileSync('customer-data.json',  JSON.stringify(json, null , 4))
            console.log('end')
       }
  })
}

convertFile(process.argv[2])


 




 
 




