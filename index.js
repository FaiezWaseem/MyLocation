function get(url , li){
    fetch(url)
    .then(function(data) {
     return data.text()
    })
    .then(function(data) {
        document.querySelector(li).innerHTML = data;
        })
    .catch(function(error) {
    alert('Error: '+error)
    console.log(error)
    });
}
async function getFlag(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    document.querySelector('#flag').src = `https://www.countryflags.io/${myText}/flat/64.png`;
}
try{
    get('https://ipapi.co/ip/','#ip')
    get('https://ipapi.co/country_name','#country_name')
    get('https://ipapi.co/region','#region')
    get('https://ipapi.co/city','#city')
    get('https://ipapi.co/currency_name','#currency')
    get('https://ipapi.co/country_capital','#capital')
    get('https://ipapi.co/country_calling_code','#code')
    get('https://ipapi.co/latitude','#lat')
    get('https://ipapi.co/longitude','#lon')
    get('https://ipapi.co/postal','#postal_code')
    get('https://ipapi.co/languages','#lang')
    getFlag("https://ipapi.co/country");
}catch(err){
alert(err)
}
