'use client';

import React, { MouseEventHandler, useMemo, useState } from 'react';
import Map, {
  MapRef,
  Marker,
  Source,
  Layer,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
  Popup,
} from 'react-map-gl';
import { useRef, useCallback } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import TreeIcon from '@/public/icons/forest.png';
import data from '@/data/tree_orders2.json';
import InfoTab from './InfoTab';
import { Planting } from '@/interfaces/types';
import Image from 'next/image';
import useAppDataContext from '@/hooks/useAppDataContext';

const Mapbox = () => {
  const mapRef = useRef<MapRef>(null);

  const { setShowInfoTab, setInfoTabAsset, showInfoTab } = useAppDataContext();

  const pins = useMemo(
    () =>
      data?.map((info, index) => (
        <Marker
          key={`city-${index}`}
          latitude={info.latitude}
          longitude={info.longitude}
        >
          <div
            style={{
              backgroundImage: `url(${TreeIcon.src})`,
              width: '35px',
              height: '50px',
              backgroundSize: '100%',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              setShowInfoTab(true);
              setInfoTabAsset(info);
              if (mapRef.current) {
                mapRef.current.flyTo({
                  center: [info.longitude, info.latitude],
				  zoom: 16,
                  essential: true, // this animation is considered essential with respect to prefers-reduced-motion
                });
              }
            }}
          />
        </Marker>
      )),
    [setShowInfoTab, setInfoTabAsset]
  );

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 39.507901,
          latitude: -4.4165,
          zoom: 5,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle='mapbox://styles/mapbox/satellite-v9'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ height: '100vh' }}
      >
        <GeolocateControl position='bottom-right' />
        <FullscreenControl position='bottom-right' />
        <NavigationControl position='bottom-right' />

        {pins}
      </Map>
      {showInfoTab && <InfoTab />}
    </>
  );
};

export default Mapbox;
