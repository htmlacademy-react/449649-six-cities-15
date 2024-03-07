import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Offer, Offers } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
};

function createCustomIcon(iconUrl: string): Icon {
  return new Icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });
}

function Map({ className, city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker([offer.location.lat, offer.location.lng], {
          icon: selectedOffer !== undefined && offer.id === selectedOffer.id
            ? createCustomIcon(URL_MARKER_CURRENT)
            : createCustomIcon(URL_MARKER_DEFAULT)
        });

        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, city.lat, city.lng, city.zoom]);

  return <div style={{ height: '500px' }} className={className} ref={mapRef}></div>;
}

export default Map;
