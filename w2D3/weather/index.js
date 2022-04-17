

   function getData(){
       let city = document.getElementById("city").value;

       const url = 
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58d7881f97812a05ff7ed644b76b02e4`
       
        fetch(url)
        .then(function(res){
            
            return res.json();
    
        })
        .then(function(res){
            
            console.log(res)
            append(res)
    
        })
        .catch(function(err){
            console.log(err)
        })
   }

   function append(data){
    
       let container = document.getElementById("container");

       let climate = document.getElementById("days")

       let map = document.getElementById("gmap_canvas")
        container.innerHTML = null;

       let city = document.createElement("p");
       city.innerText = `City: ${data.name}`;

       let min = document.createElement("p");
       min.innerText = `Min temp: ${data.main.temp_min}K`;

       let max = document.createElement("p");
       max.innerText = `Max temp: ${data.main.temp_max}K`;

       let current = document.createElement("p");
       current.innerText = `Current temp: ${data.main.temp}K`;

       let wind = document.createElement("p");
       wind.innerText = `Wind: ${data.wind.speed}`;

       let cloud = document.createElement("p");
       let unixTime = `${data.sys.sunrise}`;
       var date = new Date(unixTime*1000);
       cloud.innerText = `Sunrise: ${date.getHours()} AM`;

       let cloud2 = document.createElement("p");
       let UnixTime = `${data.sys.sunset}`;
       var date = new Date(UnixTime*1000);
       cloud2.innerText = `Sunset: ${date.getHours()} PM`;

       container.append(city,min,max,current,wind,wind,cloud,cloud2)

       climate.src = `https://www.weatherwx.com/weather-js/in/mumbai.js`
       map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
       map.setAttribute("class","right")

   }


