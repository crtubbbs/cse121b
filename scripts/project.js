// JavaScript
const flightDataElement = document.getElementById("flightData");

let airportData = [];

const displayFlightData = () => {
  flightDataElement.innerHTML = "";
  const selectedAirport = document.getElementById("airport").value;
  const selectedMonth = document.getElementById("month").value;
  
  const filteredData = airportData.filter(data => {
    return (selectedAirport === "all" || data.airport_code === selectedAirport) &&
           (selectedMonth === "all" || data.month === selectedMonth);
  });
  
  filteredData.forEach(data => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${data.airport_name}</h3>
      <p>Month: ${data.month}, Year: ${data.year}</p>
      <p>Number of Flights: ${data.num_of_flights_total}</p>
      <!-- Add more flight data -->
    `;
    flightDataElement.appendChild(div);
  });
};

const fetchAirportData = async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/byuidatascience/data4missing/master/data-raw/flights_missing/flights_missing.json");
    airportData = await response.json();
    displayFlightData();
  } catch (error) {
    console.error('Error fetching airport data:', error);
  }
};

fetchAirportData();

document.getElementById("airport").addEventListener("change", () => { displayFlightData() });
document.getElementById("month").addEventListener("change", () => { displayFlightData() });

