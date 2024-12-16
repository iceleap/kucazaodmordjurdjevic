// SwiperJS
const swiper = new Swiper('.swiper', {
  preloadImages: true,
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 7000,
    pauseOnMouseEnter: true,
  },
});

// Weather API

// Icon list
const weatherIcons = {
  0: {
    day: {
      description: 'Sunny',
      image: 'http://openweathermap.org/img/wn/01d@2x.png',
    },
    night: {
      description: 'Clear',
      image: 'http://openweathermap.org/img/wn/01n@2x.png',
    },
  },
  1: {
    day: {
      description: 'Mainly Sunny',
      image: 'http://openweathermap.org/img/wn/01d@2x.png',
    },
    night: {
      description: 'Mainly Clear',
      image: 'http://openweathermap.org/img/wn/01n@2x.png',
    },
  },
  2: {
    day: {
      description: 'Partly Cloudy',
      image: 'http://openweathermap.org/img/wn/02d@2x.png',
    },
    night: {
      description: 'Partly Cloudy',
      image: 'http://openweathermap.org/img/wn/02n@2x.png',
    },
  },
  3: {
    day: {
      description: 'Cloudy',
      image: 'http://openweathermap.org/img/wn/03d@2x.png',
    },
    night: {
      description: 'Cloudy',
      image: 'http://openweathermap.org/img/wn/03n@2x.png',
    },
  },
  45: {
    day: {
      description: 'Foggy',
      image: 'http://openweathermap.org/img/wn/50d@2x.png',
    },
    night: {
      description: 'Foggy',
      image: 'http://openweathermap.org/img/wn/50n@2x.png',
    },
  },
  48: {
    day: {
      description: 'Rime Fog',
      image: 'http://openweathermap.org/img/wn/50d@2x.png',
    },
    night: {
      description: 'Rime Fog',
      image: 'http://openweathermap.org/img/wn/50n@2x.png',
    },
  },
  51: {
    day: {
      description: 'Light Drizzle',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Light Drizzle',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  53: {
    day: {
      description: 'Drizzle',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Drizzle',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  55: {
    day: {
      description: 'Heavy Drizzle',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Heavy Drizzle',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  56: {
    day: {
      description: 'Light Freezing Drizzle',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Light Freezing Drizzle',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  57: {
    day: {
      description: 'Freezing Drizzle',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Freezing Drizzle',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  61: {
    day: {
      description: 'Light Rain',
      image: 'http://openweathermap.org/img/wn/10d@2x.png',
    },
    night: {
      description: 'Light Rain',
      image: 'http://openweathermap.org/img/wn/10n@2x.png',
    },
  },
  63: {
    day: {
      description: 'Rain',
      image: 'http://openweathermap.org/img/wn/10d@2x.png',
    },
    night: {
      description: 'Rain',
      image: 'http://openweathermap.org/img/wn/10n@2x.png',
    },
  },
  65: {
    day: {
      description: 'Heavy Rain',
      image: 'http://openweathermap.org/img/wn/10d@2x.png',
    },
    night: {
      description: 'Heavy Rain',
      image: 'http://openweathermap.org/img/wn/10n@2x.png',
    },
  },
  66: {
    day: {
      description: 'Light Freezing Rain',
      image: 'http://openweathermap.org/img/wn/10d@2x.png',
    },
    night: {
      description: 'Light Freezing Rain',
      image: 'http://openweathermap.org/img/wn/10n@2x.png',
    },
  },
  67: {
    day: {
      description: 'Freezing Rain',
      image: 'http://openweathermap.org/img/wn/10d@2x.png',
    },
    night: {
      description: 'Freezing Rain',
      image: 'http://openweathermap.org/img/wn/10n@2x.png',
    },
  },
  71: {
    day: {
      description: 'Light Snow',
      image: 'http://openweathermap.org/img/wn/13d@2x.png',
    },
    night: {
      description: 'Light Snow',
      image: 'http://openweathermap.org/img/wn/13n@2x.png',
    },
  },
  73: {
    day: {
      description: 'Snow',
      image: 'http://openweathermap.org/img/wn/13d@2x.png',
    },
    night: {
      description: 'Snow',
      image: 'http://openweathermap.org/img/wn/13n@2x.png',
    },
  },
  75: {
    day: {
      description: 'Heavy Snow',
      image: 'http://openweathermap.org/img/wn/13d@2x.png',
    },
    night: {
      description: 'Heavy Snow',
      image: 'http://openweathermap.org/img/wn/13n@2x.png',
    },
  },
  77: {
    day: {
      description: 'Snow Grains',
      image: 'http://openweathermap.org/img/wn/13d@2x.png',
    },
    night: {
      description: 'Snow Grains',
      image: 'http://openweathermap.org/img/wn/13n@2x.png',
    },
  },
  80: {
    day: {
      description: 'Light Showers',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Light Showers',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  81: {
    day: {
      description: 'Showers',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Showers',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  82: {
    day: {
      description: 'Heavy Showers',
      image: 'http://openweathermap.org/img/wn/09d@2x.png',
    },
    night: {
      description: 'Heavy Showers',
      image: 'http://openweathermap.org/img/wn/09n@2x.png',
    },
  },
  85: {
    day: {
      description: 'Light Snow Showers',
      image: 'http://openweathermap.org/img/wn/13d@2x.png',
    },
    night: {
      description: 'Light Snow Showers',
      image: 'http://openweathermap.org/img/wn/13n@2x.png',
    },
  },
  86: {
    day: {
      description: 'Snow Showers',
      image: 'http://openweathermap.org/img/wn/13d@2x.png',
    },
    night: {
      description: 'Snow Showers',
      image: 'http://openweathermap.org/img/wn/13n@2x.png',
    },
  },
  95: {
    day: {
      description: 'Thunderstorm',
      image: 'http://openweathermap.org/img/wn/11d@2x.png',
    },
    night: {
      description: 'Thunderstorm',
      image: 'http://openweathermap.org/img/wn/11n@2x.png',
    },
  },
  96: {
    day: {
      description: 'Light Thunderstorms With Hail',
      image: 'http://openweathermap.org/img/wn/11d@2x.png',
    },
    night: {
      description: 'Light Thunderstorms With Hail',
      image: 'http://openweathermap.org/img/wn/11n@2x.png',
    },
  },
  99: {
    day: {
      description: 'Thunderstorm With Hail',
      image: 'http://openweathermap.org/img/wn/11d@2x.png',
    },
    night: {
      description: 'Thunderstorm With Hail',
      image: 'http://openweathermap.org/img/wn/11n@2x.png',
    },
  },
};

// Get weather icon from API
const getWeatherIcon = (code, isDaytime) => {
  const timeOfDay = isDaytime ? 'day' : 'night';
  if (weatherIcons[code] && weatherIcons[code][timeOfDay]) {
    return weatherIcons[code][timeOfDay].image;
  } else {
    console.error('Weather code not found in the data');
    return null;
  }
};

// Get weather data from API
async function fetchWeatherData() {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=44.106&longitude=19.9925&current=temperature_2m,is_day,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
  );
  const data = await response.json();

  return data;
}

fetchWeatherData().then((data) => {
  try {
    // console.log(data);

    // Today's weather
    const currWeatherCode = data.current.weather_code;
    const currWeather = Math.round(data.current.temperature_2m);
    // const currWeatherMin = Math.floor(data.daily.temperature_2m_min[0]);
    // const currWeatherMax = Math.floor(data.daily.temperature_2m_max[0]);
    const currWeatherIcon = getWeatherIcon(currWeatherCode);
    // const currWeatherCondition = getWeatherCondition(currWeatherCode);
    // console.log(
    //   `Current weather: ${currWeatherCondition}, current temperature: ${currWeather}, todays temperature: ${currWeatherMax} / ${currWeatherMin}`
    // );

    // Tomorrow's weather
    const tomorrowWeatherCode = data.daily.weather_code[1];
    const tomorrowWeatherMin = Math.floor(data.daily.temperature_2m_min[1]);
    const tomorrowWeatherMax = Math.floor(data.daily.temperature_2m_max[1]);
    const tomorrowWeatherIcon = getWeatherIcon(tomorrowWeatherCode);
    // const tomorrowWeatherCondition = getWeatherCondition(tomorrowWeatherCode);
    // console.log(
    //   `Tomorrow weather: ${tomorrowWeatherCondition}, temperature: ${tomorrowWeatherMax} / ${tomorrowWeatherMin}`
    // );

    // Weather in 2 days time
    const overmorrowWeatherCode = data.daily.weather_code[2];
    const overmorrowWeatherMin = Math.floor(data.daily.temperature_2m_min[2]);
    const overmorrowWeatherMax = Math.floor(data.daily.temperature_2m_max[2]);
    const overmorrowWeatherIcon = getWeatherIcon(overmorrowWeatherCode);
    // const overmorrowWeatherCondition = getWeatherCondition(
    // overmorrowWeatherCode
    // );
    // console.log(
    //   `Overmorrow weather: ${overmorrowWeatherCondition}, temperature: ${overmorrowWeatherMax} / ${overmorrowWeatherMin}`
    // );

    // Weather in 3 days time
    const thirdDayWeatherCode = data.daily.weather_code[3];
    const thirdDayWeatherMin = Math.floor(data.daily.temperature_2m_min[3]);
    const thirdDayWeatherMax = Math.floor(data.daily.temperature_2m_max[3]);
    const thirdDayWeatherIcon = getWeatherIcon(thirdDayWeatherCode);

    // Weather in 4 days time
    const fourthDayWeatherCode = data.daily.weather_code[4];
    const fourthDayWeatherMin = Math.floor(data.daily.temperature_2m_min[4]);
    const fourthDayWeatherMax = Math.floor(data.daily.temperature_2m_max[4]);
    const fourthDayWeatherIcon = getWeatherIcon(fourthDayWeatherCode);

    // Change weather icon dynamically
    const weatherIcon1 = document.querySelector(`.weather-icon-1`);
    weatherIcon1.src = currWeatherIcon;
    const weatherIcon2 = document.querySelector(`.weather-icon-2`);
    weatherIcon2.src = tomorrowWeatherIcon;
    const weatherIcon3 = document.querySelector(`.weather-icon-3`);
    weatherIcon3.src = overmorrowWeatherIcon;
    const weatherIcon4 = document.querySelector(`.weather-icon-4`);
    weatherIcon4.src = thirdDayWeatherIcon;
    const weatherIcon5 = document.querySelector(`.weather-icon-5`);
    weatherIcon5.src = fourthDayWeatherIcon;

    // Change temperature dynamically
    const currTempDiv = document.querySelector(`.today .weather-temp`);
    currTempDiv.textContent = `${currWeather}°C`;
    const tomorrowTempDiv = document.querySelector(`.day-1 .weather-temp`);
    tomorrowTempDiv.textContent = `${tomorrowWeatherMax}°C / ${tomorrowWeatherMin}°C`;
    const overmorrowTempDiv = document.querySelector(`.day-2 .weather-temp`);
    overmorrowTempDiv.textContent = `${overmorrowWeatherMax}°C / ${overmorrowWeatherMin}°C`;
    const thirdDayTempDiv = document.querySelector(`.day-3 .weather-temp`);
    thirdDayTempDiv.textContent = `${thirdDayWeatherMax}°C / ${thirdDayWeatherMin}°C`;
    const fourthDayTempDiv = document.querySelector(`.day-4 .weather-temp`);
    fourthDayTempDiv.textContent = `${fourthDayWeatherMax}°C / ${fourthDayWeatherMin}°C`;

    // Get day of the week
    function getDayOfWeek(isoDateString) {
      const date = new Date(isoDateString);
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const dayOfWeek = date.getDay();
      return daysOfWeek[dayOfWeek];
    }

    // Get day of the week from API
    const tomorrowDay = getDayOfWeek(data.daily.time[1]);
    const overmorrowDay = getDayOfWeek(data.daily.time[2]);
    const thirdDay = getDayOfWeek(data.daily.time[3]);
    const fourthDay = getDayOfWeek(data.daily.time[4]);
    // console.log(tomorrowDay, overmorrowDay, thirdDay, fourthDay);

    // Change day of the week dynamically
    const tomorrowDayDiv = document.querySelector(`.day-1 .weather-day`);
    tomorrowDayDiv.textContent = tomorrowDay;
    const overmorrowDayDiv = document.querySelector(`.day-2 .weather-day`);
    overmorrowDayDiv.textContent = overmorrowDay;

    const thirdDayDiv = document.querySelector(`.day-3 .weather-day`);

    thirdDayDiv.textContent = thirdDay;
    const fourthDayDiv = document.querySelector(`.day-4 .weather-day`);
    fourthDayDiv.textContent = fourthDay;
  } catch (error) {
    console.error('Error:', error);
  }
});

// Website JS

// Animation on entry
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(`show`, entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.8,
  }
);

const component = document.querySelectorAll(`.module, .caption, .passus`);
component.forEach((el) => {
  el.classList.add(`hidden`);
  observer.observe(el);
});

// Mobile nav
const mobileNavBtns = document.querySelectorAll(`.mobile-button`);
const nav = document.querySelectorAll(`.nav`);
console.log(mobileNavBtns);
mobileNavBtns.forEach((button) =>
  button.addEventListener(`click`, function () {
    // e.preventDefault();
    mobileNavBtns.forEach((child) => child.classList.toggle(`hidden`));
    nav.forEach((nav) => nav.classList.toggle(`show`));
  })
);
