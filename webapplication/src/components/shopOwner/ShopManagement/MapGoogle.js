import React, { Component } from 'react';
import {Map, InfoWindow , Marker, GoogleApiWrapper} from 'google-maps-react'


export class Maps extends Component {
  render (){
    return (
      <Map
        style = {{width:'100%',height:'50vh',position:'relative'}} 
        google = {this.props.google} 
        class = {'map'}
        initialCenter={{
          lat: 37.778519,
          lng: -122.405640
        }}
        zoom = {16}
        > 
        <Marker 
          title= {'The Blue'}
          position = {{lat: 37.778519, lng: -122.405640}}  
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey:'AIzaSyCJDSVdM6GPuz2t5vfTc7M4faWrfh_fPUU'})(Maps);

