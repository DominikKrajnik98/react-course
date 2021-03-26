import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import {getArticles} from '../services/wikipedia'

export default function GoogleMapa() {
  const map = {
    center: {
      lat: 54.34,
      lng: 18.65,
    },
    zoom: 11,
  }

  useEffect(() => {
    getArticles({coord:map.center})
  }, [])

  return (
    <div style={{height:'100vh',width:'100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries: ['places'],
        }}
        defaultCenter={map.center}
        defaultZoom={map.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={{
          //styles: styles.blueblack,
          minZoom: 10,
        }}
      />
    </div>
  )
}
