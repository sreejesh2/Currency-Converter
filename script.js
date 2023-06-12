// data=fetch('https://v6.exchangerate-api.com/v6/0b6588eb593f1562a3c205c8/latest/USD').then(res=>res.json()).then(
//     data=>{
//         const rates = data.conversion_rates
//         var selectBox1=document.getElementById('from_currency')
//         var selectBox2=document.getElementById('to_currency')

//         for (currency in rates){
//             var optiontag1=document.createElement("option")
//             optiontag1.value=rates[currency]
//             optiontag1.text=currency
//             selectBox1.appendChild(optiontag1)
            
//             var optiontag2=document.createElement('option')

//             optiontag2.value=rates[currency]
//             optiontag2.text=currency
//             selectBox2.appendChild(optiontag2)
//         }
//     }
//     )
 
data=fetch('https://v6.exchangerate-api.com/v6/0b6588eb593f1562a3c205c8/latest/USD').then(res=>res.json()).then(data=>processData(data))

var selectBox1=document.getElementById('from_currency')
var selectBox2=document.getElementById('to_currency')

function processData(data){
    let currencyCode=data.conversion_rates
    


    for (code in currencyCode){
        let opt1 = document.createElement("option")
        opt1.text=code 
        opt1.value=currencyCode[code]
        selectBox1.appendChild(opt1)

        let opt2 = document.createElement("option")
        opt2.text=code 
        opt2.value=currencyCode[code]
        selectBox2.appendChild(opt2)
        

    }
}


function display(event){
    let currency = event.options[event.selectedIndex].text

    
fetch('https://restcountries.com/v2/all/').then(res=>res.json()).then(data=>{
    for( country of data){
     if (country.currencies  ) {
         const currencyCode = country.currencies[0].code;
         if (currency == currencyCode){
            let cname=country.name;
            console.log(cname);
           console.log(event.name); 
            if (event.name == 'fcode' ){
                document.getElementById('from_name').innerHTML=cname  
            }
            else if(event.name == 'tcode'){
                document.getElementById('to_name').innerHTML=cname  
            } 

         }
       }
    }
    
 })

 


}

function exchange(){
    let fromRate=selectBox1.value
    let toRate = selectBox2.value
    let amount = id_amount.value

    let res=((amount/fromRate)*toRate).toFixed(2)
   
    document.getElementById('result').innerText=`convertion Rate : ${res}`
}












