const weatherData = {
    Tbilisi: {
        city: "Tbilisi",
        date: "2024-09-25",
        temperature: {
            current: 24,
            high: 26,
            low: 18,
            feelsLike: {
                morning: 20,
                afternoon: 25,
                evening: 22,
                night: 19
            }
        },
        humidity: 60,
        wind: {
            speed: 10,
            direction: "NW",
            gusts: {
                morning: 12,
                afternoon: 15,
                evening: 8,
                night: 5
            }
        },
        conditions: "Clear",
        forecast: {
            morning: {
                temperature: 20,
                conditions: "Sunny",
                windSpeed: 12,
                humidity: 65
            },
            afternoon: {
                temperature: 24,
                conditions: "Clear",
                windSpeed: 10,
                humidity: 50
            },
            evening: {
                temperature: 22,
                conditions: "Partly Cloudy",
                windSpeed: 8,
                humidity: 55
            },
            night: {
                temperature: 19,
                conditions: "Clear",
                windSpeed: 5,
                humidity: 70
            }
        },
        airQuality: {
            index: 42,
            status: "Good",
            pollutants: {
                PM2_5: 12,
                PM10: 20,
                O3: 10,
                NO2: 8
            }
        }
    },
    Batumi: {
        city: "Batumi",
        date: "2024-09-25",
        temperature: {
            current: 22,
            high: 25,
            low: 19,
            feelsLike: {
                morning: 21,
                afternoon: 23,
                evening: 20,
                night: 18
            }
        },
        humidity: 70,
        wind: {
            speed: 8,
            direction: "SW",
            gusts: {
                morning: 9,
                afternoon: 11,
                evening: 6,
                night: 4
            }
        },
        conditions: "Partly Cloudy",
        forecast: {
            morning: {
                temperature: 21,
                conditions: "Cloudy",
                windSpeed: 9,
                humidity: 75
            },
            afternoon: {
                temperature: 22,
                conditions: "Partly Cloudy",
                windSpeed: 8,
                humidity: 65
            },
            evening: {
                temperature: 20,
                conditions: "Clear",
                windSpeed: 6,
                humidity: 70
            },
            night: {
                temperature: 18,
                conditions: "Clear",
                windSpeed: 4,
                humidity: 80
            }
        },
        airQuality: {
            index: 55,
            status: "Moderate",
            pollutants: {
                PM2_5: 15,
                PM10: 25,
                O3: 12,
                NO2: 10
            }
        }
    }
};

console.log(weatherData);
//log properties and value
const key = Object.keys(weatherData)
for (let i = 0 ;i < key.length; i++){
    console.log(weatherData[key[i]].airQuality)
    console.log(weatherData[key[i]].forecast)
    console.log(weatherData[key[i]].humidity)
    console.log(weatherData[key[i]].wind)
}
//Change the current temperature for Tbilisi to a new value (e.g., 27) using dot notation.
weatherData.Tbilisi.temperature.current = 28
//Log the updated weatherData object to see the change.
console.log(weatherData);
//Add a new property to each city:my choice
weatherData.Tbilisi.location = "georgia";
weatherData.Batumi.location = "georgia";
//Log the updated weatherData object to see the change.
console.log(weatherData)
// Add a new property called pollutionLevel with any value of your choice using either dot notation or bracket notation.
//For example, set pollutionLevel to "Moderate" for Tbilisi and "High" for Batumi.
weatherData.Tbilisi.pollutionLevel = "Moderate";
weatherData.Batumi.pollutionLevel = "High";
//Display the updated weather information for both cities using the for loop again, ensuring all the
// added and modified properties are correctly displayed.
for (let i = 0 ;i < key.length; i++){
    console.log(weatherData[key[i]].airQuality)
    console.log(weatherData[key[i]].forecast)
    console.log(weatherData[key[i]].humidity)
    console.log(weatherData[key[i]].wind)
}
//Console log two specific nested data values:
console.log("windspeed :" + weatherData.Tbilisi.forecast.morning.windSpeed)
console.log("humidity : " + weatherData.Batumi.forecast.morning.humidity)
// Log the high temperature from the temperature object for Batumi.
console.log("high batumi temperature : " + weatherData.Batumi.temperature.high)
//Log the conditions for the evening forecast from the Tbilisi object.
console.log("Tbilisi forecast condition : " + weatherData.Tbilisi.forecast.evening.conditions)