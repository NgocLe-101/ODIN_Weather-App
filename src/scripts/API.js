const API_KEY = "X5DHPCTXU76GKK9CPB2FWSTHU";

async function getData(locate = "hanoi") {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locate}?key=${API_KEY}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

async function manipulateAPI(data) {
  try {
    return {
      currentConditions: {
        icon: data.currentConditions.icon,
        location: {
          value: data.resolvedAddress.split(",")[0],
          unit: "",
          description: data.resolvedAddress.split(",")[1],
        },
        temparature: {
          value: data.currentConditions.temp,
          unit: "&#176",
          description: "Temparature",
        },
        humidity: {
          value: data.currentConditions.humidity,
          unit: "%",
          description: "Humidity",
        },
        windSpeed: {
          value: data.currentConditions.windspeed,
          unit: "km/h",
          description: "Wind speed",
        },
      },
      inday: data.days.map((day) => {
        return {
          datetime: day.datetime,
          icon: day.icon,
          temp: day.temp,
        };
      }),
    };
  } catch (error) {
    console.log(error);
  }
}

export { getData, manipulateAPI };
