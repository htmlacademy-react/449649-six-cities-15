import { useRef, useEffect, useCallback } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Offer, Offers } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
  currentOffer?: Offer | null;
};

function createCustomIcon(iconUrl: string): Icon {
  return new Icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });
}

function Map({ className, city, offers, selectedOffer, currentOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const location = useLocation();
  const isOfferPage = location.pathname.includes('offer');

  const getMarkerIcon = useCallback((offer: Offer): Icon => {
    const isCurrentOffer = currentOffer && offer.id === currentOffer.id;

    if (isOfferPage) {
      return isCurrentOffer
        ? createCustomIcon(URL_MARKER_CURRENT)
        : createCustomIcon(URL_MARKER_DEFAULT);
    } else {
      const isNearbyOffer = selectedOffer !== undefined && offer.id === selectedOffer?.id;
      return isNearbyOffer
        ? createCustomIcon(URL_MARKER_CURRENT)
        : createCustomIcon(URL_MARKER_DEFAULT);
    }
  }, [currentOffer, isOfferPage, selectedOffer]);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const markers = offers.map((offer) => {
        const marker = new Marker([offer.location.latitude, offer.location.longitude]);
        marker.setIcon(getMarkerIcon(offer));
        marker.addTo(markerLayer);
        return marker;
      });

      if (currentOffer) {
        const currentOfferMarker = new Marker([currentOffer.location.latitude, currentOffer.location.longitude]);
        currentOfferMarker.setIcon(getMarkerIcon(currentOffer));
        currentOfferMarker.addTo(markerLayer);
        markers.push(currentOfferMarker);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, currentOffer, getMarkerIcon]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return <div style={{ height: '500px' }} className={className} ref={mapRef}></div>;
}

export default Map;
