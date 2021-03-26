import axios from 'axios'

const client = axios.create({
  baseURL: 'https://pl.wikipedia.org/w',
  headers: { 'content-type': 'application/json' },
})

const getArticles = ({ coord, radius = 10000, limit = 10 } = {}) => {
  const baseParams = {
    action: 'query',
    list: 'geosearch',
    format: 'json',
    origin: '*',
  }

  if (!coord) {
    console.error('Wikipedia API: no coord passed to getArticles')
  }

  const request = client.get('api.php', {
    params: {
      ...baseParams,
      gscoord: coord.lat + '|' + coord.lng,
      gsradius: radius,
      gslimit: limit,
    },
  })
  return request.then(response => response.data)
}

export { getArticles }
