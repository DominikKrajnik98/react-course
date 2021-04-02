import WikipediaApi from '../../services/wikipedia'
import {useMapStore} from './store'
const listeners = {}

export function emit(event, ...args) {
  console.log(event, args)
  listeners[event](...args)
}

function attachListener(eventName, listener) {
  listeners[eventName] = listener
}

function useMapMediator() {

  const [,{addMarkers}] = useMapStore()

  async function mapLoaded({ center }) {
    console.log('useMapMediator Map loaded', center.toJSON())
    const articlesTmp = await WikipediaApi.getArticles({
      coord: center.toJSON(),
      limit: 100,
    })
    const articles = articlesTmp.query.geosearch
    console.log(articles)
    addMarkers(articles)

  }

  async function mapDragged(center) {
    console.log('useMapMediator Map dragged', center.toJSON())
    const articlesTmp = await WikipediaApi.getArticles({
      coord: center.toJSON(),
      limit: 100,
    })
    const articles = articlesTmp.query.geosearch
    console.log(articles)
    addMarkers(articles)

  }

  attachListener('mapLoaded', mapLoaded)
  attachListener('mapDragged', mapDragged)
}

export default function MapMediator() {
  useMapMediator()

  return null
}
