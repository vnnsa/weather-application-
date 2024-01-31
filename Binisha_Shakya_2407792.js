//student name : Binisha Shakya
// student id :2407792

const foreCast = document.querySelectorAll(".forecast");

foreCast.forEach(foreCast =>{
  const forecastData = document.createElement("div");
  forecastData.classList.add('forecast-data');
  forecastData.innerHTML = `
  <p>Pressure:</p>
  <p class="week_info" >-</p>
  <p>Humidity:</p>
  <p class="week_info" >-</p>
  <p>Wind Speed:</p>
  <p class="week_info" >-</p>
  `;
  foreCast.append(forecastData);
});


 // fetching data with async function
 async function fetchData(city) {
   const response = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4354d10655c26c4c0ace6b5030ebaaa3`
   );
 //linking openweather api link 

   try {
     const data = await response.json();
     console.log(data);
    document.querySelector(
       //Fetching icon from API
      "#icon"
   ).src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

     // Adding Temperature
     const temp = document.querySelector("#temp");
  temp.textContent = `${data.main.temp} °C`;

// Adding Information
     const info = document.getElementsByClassName("info");
   info.textContent = data.weather[0].info;

   //Adding Name 
     const name = document.querySelector(".name");
   name.textContent = data.name;

//Adding Humidity
     const humidity = document.querySelector("#Humidity");
   humidity.textContent = `Humidity:${data.main.humidity} % `;

//Adding Windspeed
    const windElement = document.querySelector("#WindSpeed");
    windElement.textContent = `Wind Speed:${data.wind.speed}m/s`;

  //Adding Pressure
     const pressure = document.querySelector("#Pressure");
  pressure.textContent = `Pressure:${data.main.pressure}hPa`;

    //Adding Time
     const time = document.querySelector(".time");
     let timestampOffset = data.timezone;
     const timestamp = Math.floor(Date.now() / 1000) + timestampOffset;
   const date = new Date(timestamp * 1000);

    const DateTime = date.toLocaleString("en-US", {
       weekday: "long",
       day: "numeric",
       month: "long",
       year: "numeric",
       hour: "numeric",
     minute: "numeric",
       timeZone: "UTC",
     });
     console.log(DateTime);

     time.textContent = DateTime;
   } catch (error) {
     alert("City not Found");
   fetchData("Port Blair");
    
   }
 }
 //adding event listener "keyup" 
 const searchBox = document.querySelector(".search-bar");
 const searchInput = document.querySelector("input");
searchInput.addEventListener("keyup", function (event) {
   if (event.key === "Enter") {
    fetchData(searchBox.value);
 }
 });

// //Setting button response
 const searchButton = document.querySelector("button");
 searchButton.addEventListener("click", () => {
  fetchData(searchBox.value);
});

 //Calling Default City
 fetchData("Port Blair");

