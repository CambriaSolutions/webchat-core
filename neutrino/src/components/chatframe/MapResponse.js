import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import redpin from './redpin.svg'

const CardContainer = styled(Card)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 16px auto;
    white-space: pre-line;
  }
`
const MapWrapper = styled.div`
  height: ${p => p.cardHeight};
`

// Maps documentation: https://tomchentw.github.io/react-google-maps
class MapResponse extends PureComponent {
  render() {
    const { data, points, centerCoordinates } = this.props
    const cardHeight = '300px'
    const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${
      this.props.googleMapsKey
    }&v=3`
    // commenting out this block to look into the new library's bounds function
    // const bounds = new this.props.google.maps.LatLngBounds()
    // for (let i = 0; i < points.length; i += 1) {
    //   bounds.extend(points[i])
    // }
    const handleMarkerClick = location => {
      const url = `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${
        location.placeId
      }`
      window.open(url, '_blank')
    }

    const Map = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={6}
          defaultCenter={centerCoordinates}
          defaultOptions={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          }}
        >
          {data.map((row, i) => (
            <Marker
              key={i}
              position={{ lat: row.lat, lng: row.long }}
              icon={{
                url: redpin,
                scaledSize: { width: 20, height: 20 },
              }}
              onClick={() => handleMarkerClick(row)}
            />
          ))}
        </GoogleMap>
      ))
    )

    return (
      <CardContainer>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            Office Locations
          </Typography>
          <MapWrapper cardHeight={cardHeight}>
            <Map
              googleMapURL={googleMapsUrl}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `${cardHeight}` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </MapWrapper>
        </CardContent>
      </CardContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    googleMapsKey: state.config.googleMapsKey,
    centerCoordinates: state.config.centerCoordinates,
  }
}

export default connect(mapStateToProps)(MapResponse)
