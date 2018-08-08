class WeatherAPI {
  constructor(searchTerm) {
    this.searchTerm = searchTerm
    this.searchUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&appid=42070757cd4a14932906866293d69d73'
  }
  getSearchResults() {
    fetch(this.searchUrl)
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
        parent.textContent = ''
        searchResults.main.temp
        const span = document.createElement('span')
        span.textContent = 'Current: ' + (Math.round((searchResults.main.temp - 273) * 1.8) + 32) + ' °F / ' + 'Low: ' + (Math.round((searchResults.main.temp_min - 273) * 1.8) + 32) + ' °F / ' + 'High: ' + (Math.round((searchResults.main.temp_max - 273) * 1.8) + 32) + ' °F'
        parent.appendChild(span)
      });
  }
}


const searchAPIEvent = () => {
  const userInput = document.querySelector('.input').value
  const apiSearch = new WeatherAPI(userInput)
  apiSearch.getSearchResults()

}

//Zip code

class ZipAPI {
  constructor(searchTerm) {
    this.searchTerm = searchTerm
    this.searchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + searchTerm + '&appid=42070757cd4a14932906866293d69d73'
  }
  getSearchResults2() {
    fetch(this.searchUrl)
      .then(resp => {
        console.log("response = ", resp)
        if (resp.status === 200) {
          return resp.json()
        } else {
          console.log("err", resp)
        }
      }).then(searchResults2 => {
        console.log("search results = ", searchResults2)
        const parent = document.querySelector('.searchResults')
        parent.textContent = ''
        searchResults2.main.temp
        const span2 = document.createElement('span')
        span2.textContent = 'Current: ' + (Math.round((searchResults2.main.temp - 273) * 1.8) + 32) + ' °F / ' + 'Low: ' + (Math.round((searchResults2.main.temp_min - 273) * 1.8) + 32) + ' °F / ' + 'High: ' + (Math.round((searchResults2.main.temp_max - 273) * 1.8) + 32) + ' °F'
        parent.appendChild(span2)
      });
  }
}


const searchAPIEvent2 = () => {
  const userInput = document.querySelector('.input-zip').value
  const apiSearch = new ZipAPI(userInput)
  apiSearch.getSearchResults2()

}

document.querySelector('.input').addEventListener('blur', searchAPIEvent)
document.querySelector('.input-zip').addEventListener('blur', searchAPIEvent2)
