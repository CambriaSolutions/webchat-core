import React from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import redpin from './redpin.svg'
import blackpin from './personMarker.png'

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

const TableContainer = styled.div`
  height: 150px;
  font-size: 12px;
  margin-top: 10px;
`

const StyledCardContent = styled(CardContent)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const StyledTableBody = styled(TableBody)`
  td {
    padding: 4px 0px 4px 0px;
  }
  tr:last-of-type {
    td {
      border-bottom: none;
    }
  }
`

const StyledAddressTableCell = styled(TableCell)`
  && {
    width: 70%;
    padding: 4px 0px 4px 0px;
  }
`

const StyledDistanceTableCell = styled(TableCell)`
  &&& {
    width: 20%;
    padding-right: 0;
    text-align: right;
  }
`

// Maps documentation: https://tomchentw.github.io/react-google-maps
function MapResponse(props) {
  const { data, googleMapsKey } = props
  const cardHeight = '230px'
  const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&v=3`
  const handleMarkerClick = location => {
    const url = `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${
      location.placeId
    }`
    window.open(url, '_blank')
  }

  const Map = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={data.nearestLocations[0]}
        defaultOptions={{
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }}
      >
        {data.locations.map((row, i) => (
          <Marker
            key={i}
            position={{ lat: row.lat, lng: row.lng }}
            icon={{
              url: redpin,
              scaledSize: { width: 20, height: 20 },
            }}
            onClick={() => handleMarkerClick(row)}
          />
        ))}
        <Marker
          position={{
            lat: data.currentGeocode.lat,
            lng: data.currentGeocode.lng,
          }}
          icon={{
            url: blackpin,
            scaledSize: { width: 20, height: 20 },
          }}
        />
      </GoogleMap>
    ))
  )

  return (
    <CardContainer>
      <CardHeader title='Office Locations' />
      <StyledCardContent>
        <Map
          googleMapURL={googleMapsUrl}
          loadingElement={<div style={{ height: `${cardHeight}` }} />}
          containerElement={<div style={{ height: `${cardHeight}` }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <TableContainer>
          <Table padding='dense'>
            <StyledTableBody>
              {data.nearestLocations.map((row, i) => (
                <TableRow key={i}>
                  <StyledAddressTableCell padding='dense'>
                    {row.street}, {row.city}
                  </StyledAddressTableCell>
                  <StyledDistanceTableCell padding='dense'>
                    {row.distance} mi
                  </StyledDistanceTableCell>
                </TableRow>
              ))}
            </StyledTableBody>
          </Table>
        </TableContainer>
      </StyledCardContent>
    </CardContainer>
  )
}

const mapStateToProps = state => {
  return {
    googleMapsKey: state.config.googleMapsKey,
    centerCoordinates: state.config.centerCoordinates,
  }
}

export default connect(mapStateToProps)(MapResponse)
