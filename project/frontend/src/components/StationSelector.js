import React, { useState, useEffect } from 'react';

const StationSelector = ({ onSelectStation }) => {
  // State for the list of stations
  const [stations, setStations] = useState([]);
  // State for the selected station code
  const [selectedStationCode, setSelectedStationCode] = useState('');

  // Function to fetch the list of stations
  const fetchStations = async () => {
    try {
      // Could implement an API to jStations to get list of stations for drop down
      // for now, I will just mock some
      const stations = [
        {id: 1, code: "A02", name: "Farragut North"},
        {id: 2, code: "B01", name: "Gallery Pl-Chinatown"},
        {id: 3, code: "C01", name: "Metro Center"},
       ]
      setStations(stations);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // useEffect hook to fetch the list of stations when component mounts
  useEffect(() => {
    fetchStations();
  }, []);

  // Event handler for when the user selects a station
  const handleSelectStation = (event) => {
    const selectedStation = event.target.value;
    setSelectedStationCode(selectedStation);
    onSelectStation(selectedStation);
  };

  return (
    <div>
      <label htmlFor="station">Select a Station:</label>
      <select id="station" value={selectedStationCode} onChange={handleSelectStation}>
        <option value="">Select a station...</option>
        {stations.map(station => (
          <option key={station.code} value={station.code}>{station.name}</option>
        ))}
      </select>
    </div>
  );
};

export default StationSelector;
