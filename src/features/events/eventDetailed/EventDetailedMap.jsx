import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

function Marker() {
  return <Icon name="marker" size="big" color="red"></Icon>;
}

export default function EventDetailedMap({ latlng }) {
  const zoom = 14;
  return (
    <Segment attached="bottom" styled={{ padding: 0 }}>
      <div style={{ height: 300, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAYIxi91fYl4E-gD0BWeAqy0vSTOgwHey8' }}
          center={latlng}
          zoom={zoom}
        >
          <Marker lat={latlng.lat} lng={latlng.lng}></Marker>
        </GoogleMapReact>
      </div>
    </Segment>
  );
}
