import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { emit } from '../pages/map/mediator'

export default function GoogleMapa() {
  const gdanskPosition = {
    center: {
      lat: 54.34,
      lng: 18.65,
    },
  }
  const defaultZoom = 14

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries: ['places'],
        }}
        defaultCenter={gdanskPosition.center}
        defaultZoom={defaultZoom}
        onGoogleApiLoaded={({ map }) => emit('mapLoaded', map)}
        onDragEnd={map => emit('mapDragged', map.center)}
        yesIWantToUseGoogleMapApiInternals
        options={{
          minZoom: 10,
        }}
      />
    </div>
  )
}
