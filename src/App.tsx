import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useMemo, useState } from 'react';

const clusterPoints = [
  [55.684758, 37.738521],
  [55.674758, 37.728521],
  [55.664758, 37.718521],
  [55.654758, 37.708521],
  [55.644758, 37.698521],
  [55.654758, 37.728521],
  [55.644758, 37.738521],
  [55.674758, 37.708521],
  [55.684758, 37.698521],
]

const App = () => {
  const [zoom, setZoom] = useState(9);
  const mapState = useMemo(
    () => ({ center: [55.75, 37.57], zoom, controls: ["zoomControl", "fullscreenControl"] }),
    [zoom]
  );

  return (
    <YMaps>
      <div>
        {/* {zoom} */}
        <button onClick={() => setZoom(1)}>Zoom = 1</button>
        <Map height={'75vh'} width={'75wh'}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          state={mapState}
          // defaultState={{
          //   center: [55.75, 37.57],
          //   zoom: 9,
          //   controls: ["zoomControl", "fullscreenControl"],
          // }}
        >
          {/* <Placemark geometry={[55.684758, 37.738521]} /> */}
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {clusterPoints.map((coordinates, index) => (
              <Placemark key={index} geometry={coordinates} />
            ))}
          </Clusterer>
        </Map>
      </div>
    </YMaps>
  )
};

export default App