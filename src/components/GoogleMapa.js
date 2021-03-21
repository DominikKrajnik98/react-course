import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function GoogleMapa() {

    const map = {
        center: {
            lat: 54.34,
            lng: 18.65
          },
          zoom: 11
    }
  return (
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
  )
}
