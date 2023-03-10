export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  // token:
  //   'BQDSj4MLxwZv5atn11vSMwukEDIHpqhGZWlBxyBQtWNh53I2xndIh2gABblWWbgnjdqlajMZZDGyX2CG3Z-6yMSdbgp3JpPfodTjDAI-YRU_a7XeWcMOlGRls-xkjTbQMT9IWsiirkVLZPpihtXO5iWL90G3L3xafCiDIx_9TI_8sGy5nsRY-3_geQrA5MKcBwEyh-HaDpljFgTKXN-UKEK-Yw',
}

const reducer = (state, action) => {
  //console.log(action)
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_TOKEN':
      return { ...state, token: action.token }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playLists: action.userPlaylists,
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }

    default:
      return state
  }
}

export default reducer
