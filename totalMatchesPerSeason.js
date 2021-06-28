const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('./Data/matches.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    let years =results.map(data =>data.season)
    //console.log(new Set(years));
    years =new Set(years);
    let count = 0;
    let finalresult={};
    years.forEach(value =>{
    count=0;
    for(let j=0;j<results.length  ;j++)
    {
        if(value==results[j]['season']){
            count++;
            
        }
    }
    
    finalresult[value]= count;
  
});
console.log(finalresult);
   

  }); 