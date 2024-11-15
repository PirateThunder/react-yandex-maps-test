import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useEffect, useMemo, useState } from 'react';

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
    () => ({ center: [55.75, 37.57], zoom }),
    [zoom]
  );

  const click = () => {
    console.log('click')
    // setZoom(3) прелыдущий зум динамически не обновляется в mapState. как получать актуальные данные от карты в реальном врвемени?
    setZoom((zoom) => (zoom === 9 ? 12 : 9))
  }

  useEffect(() => {
    console.log('zoom', mapState)
  }, [zoom])

  useEffect(() => {
    console.log('mapState', mapState)
  }, [mapState])

  return (
    <YMaps>
      <div>
        {/* {zoom} */}
        <button onClick={click}>Zoom = 1</button>
        <Map height={'75vh'} width={'75wh'}
          state={mapState}
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