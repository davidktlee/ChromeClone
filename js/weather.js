const API_KEY = 'fd8c41971b0a86e981271f12825b6508'

function onSuccess(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child')
      const weather = document.querySelector('#weather span:last-child')
      city.innerText = data.name
      weather.innerText = data.weather[0].main
    })
}

function onError() {
  alert('위치를 찾을 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onSuccess, onError)
