const search = document.querySelector('.search');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const temperatureDes = document.querySelector('.temperature-des');
const shortDes = document.querySelector('.short-des');
const visibility = document.querySelector('.visibility span');
const wind = document.querySelector('.wind span');
const sun = document.querySelector('.sun span');
const time = document.querySelector('.time');
const dateCurrent = document.querySelector('.date-current')
const content = document.querySelector('.content');
const body = document.querySelector('body')


async function changeWeather() {
    let capitalValue = search.value.trim()
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue},10999&appid=eb12779fab96dc8185c014be78814ab2`

    let data = await fetch(API).then( (resp) => resp.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        time.innerText = new Date().toLocaleTimeString('vietnam')
        dateCurrent.innerText = new Date().toLocaleDateString('vietnam')
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'

        
        temperatureDes.innerText = (data.main.temp -273.15 ).toFixed() + '°C'
        var temp = (data.main.temp -273.15 ).toFixed()
        if( temp <= 26) {
            body.setAttribute('class','muadong')
            temperatureDes.innerText = (data.main.temp -273.15 ).toFixed() + '°C'
        }
        if(temp >= 28){
            body.setAttribute('class','muahe')
            temperatureDes.innerText = (data.main.temp -273.15 ).toFixed() + '°C'
        }
        
   
       
        shortDes.innerText = data.weather[0].main
        
    }else {
        content.classList.add('hide')
    }

}


search.addEventListener('keypress',function(e) {
    if( e.code === 'Enter'){
        changeWeather()
    }
})


