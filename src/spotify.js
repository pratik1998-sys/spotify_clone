export const authEndpoint = 'https://accounts.spotify.com/authorize/'

const redirectUri = 'http://localhost:3000/'
const clientId = '03ec98cd761a462a86b37e1ccd6b41dd'

const scopes = [
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-top-read',
  'user-modify-playback-state',
]

export const getAccessToken = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`
