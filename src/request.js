const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
    
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}

const getCountry = async (countryCode) => {
  const response = await fetch('//restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    return data.find(country => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch the country')
  }
}

const getLocation = async () => {
  response = await fetch('//ipinfo.io/json?token=5c958c268abceb')
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to get the current location')
  }
}

export { getPuzzle as default }

// const getPuzzleOld1 = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       resolve(data.puzzle)
//     } else if (e.target.readyState === 4) {
//       reject('An error has taken place')
//     }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// })


// const getPuzzleOld2 = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else { 
//       throw new Error('Unable to fetch puzzle')
//     }
//   }).then((data) => data.puzzle)
// }

// const getCountryOld1 = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find(country => country.alpha2Code === countryCode)
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject('Unable to fetch data')
//     }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// })

// const getCountryOld2 = (countryCode) => {
//   return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Una ble to fetch puzzle')
//     }
//   }).then((data) => {
//     return data.find(country => country.alpha2Code === countryCode)
//   })
// }

// const getLocationOld2 = () => {
//   return fetch('https://ipinfo.io/json?token=5c958c268abceb').then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch location')
//     }
//   })
// }