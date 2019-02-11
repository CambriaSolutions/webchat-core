import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import redpin from './redpin.svg'
import Loading from './Loading'

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
  height: '300px',
  position: 'relative',
}
// Set height of loading message to be equal to map height with padding
// in order for react-virtualized to calculate row height before API call
const LoadingWrapper = styled.div`
  height: 432px;
`
const LoadingContainer = props => (
  <LoadingWrapper>
    <div>
      <Loading />
    </div>
  </LoadingWrapper>
)
// Maps documentation: https://github.com/fullstackreact/google-maps-react
class MapResponse extends PureComponent {
  render() {
    const { data, points } = this.props

    console.log(points)
    const bounds = new this.props.google.maps.LatLngBounds()
    console.log(`bounds before ${bounds}`)
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i])
    }
    console.log(`bounds after ${bounds}`)

    const handleMarkerClick = location => {
      const url =
        'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' +
        location.placeId
      window.open(url, '_blank')
    }
    console.log(bounds)
    return (
      <CardContainer>
        <CardContent>
          <Typography gutterBottom variant="h6">
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
              lat: 32.777025,
              lng: -89.543724,
            }}
            bounds={bounds}
          >
            {data.map((row, i) => (
              <Marker
                key={i}
                name={row.name}
                position={{ lat: row.lat, lng: row.long }}
                icon={{
                  url: redpin,
                  scaledSize: new google.maps.Size(20, 20),
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

const mapStateToProps = state => {
  return {
    googleMapsKey: state.config.googleMapsKey,
  }
}

export default connect(mapStateToProps)(
  GoogleApiWrapper(props => ({
    apiKey: props.googleMapsKey,
    LoadingContainer: LoadingContainer,
  }))(MapResponse)
)
