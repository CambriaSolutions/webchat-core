import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
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

const mapContainerSettings = {
  width: '100%',
  height: 300,
  position: 'relative'
}

class MapResponse extends PureComponent {
  render() {
    const { message } = this.props

    const handleMarkerClick = location => {
      const url =
        'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' +
        location.placeId
      window.open(url, '_blank')
    }
    return (
      <CardContainer>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            Office Locations
          </Typography>
          <Map
            google={this.props.google}
            zoom={6}
            streetViewControl={false}
            mapTypeControl={false}
            fullscreenControl={false}
            containerStyle={mapContainerSettings}
            initialCenter={{
              lat: 33.0587839,
              lng: -89.5913959
            }}
          >
            {message.map((row, i) => (
              <Marker
                key={i}
                name={row.name}
                position={{ lat: row.lat, lng: row.long }}
                icon={{
                  url: redpin,
                  scaledSize: new google.maps.Size(20, 20)
                }}
                onClick={() => handleMarkerClick(row)}
              />
            ))}
          </Map>
        </CardContent>
      </CardContainer>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY
})(MapResponse)