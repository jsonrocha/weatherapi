const searchAPI = () => {
  const userInput = document.querySelector('.input').value

  console.log(userInput)

  const _url = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=42070757cd4a14932906866293d69d73'

  fetch(_url)
    .then(resp => {
      console.log("response = ", resp)
      if (resp.status === 200) {
        return resp.json()
      } else {
        console.log("err", resp)
      }
    }).then(searchResults => {
      console.log("search results = ", searchResults)
      const parent = document.querySelector('.searchResults')
      searchResults.main.temp
        const span = document.createElement('span')
        span.textContent = 'Current: ' + (Math.round((searchResults.main.temp - 273)*1.8) + 32) + ' °F / ' + 'Low: ' + (Math.round((searchResults.main.temp_min - 273)*1.8) + 32) + ' °F / ' + 'High: ' + (Math.round((searchResults.main.temp_max - 273)*1.8) + 32) + ' °F'
        parent.appendChild(span)
      });

    }

document.querySelector('.input').addEventListener('blur', searchAPI)
