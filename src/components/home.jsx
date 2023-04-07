import {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, useMap, Popup} from 'react-leaflet';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

import Nav from './nav';

export default function Home(){
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const [center, setCenter] = useState([-1.292066, 36.821945]);

    const [info, setInfo] = useState(null);
    const [prices, setPrices] = useState([]);

    const [chartData, setChartData] = useState({
        labels: ['Clothing', 'Markets', 'Healthcare'],
        datasets: [
          {
            label: 'Price',
            data: [15, 20, 25],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });

    useEffect(() => {
        async function fetchCountries(){
            const data = await fetch("https://country-facts.p.rapidapi.com/all", {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '272b755635mshc05a9ee8660a8dfp190c7cjsnc9e758afb6cb',
                    'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
                }
            });

            const res = await data.json()
            setCountries(res)
        };

        async function fetchCities(){
            const data =  await fetch("https://cost-of-living-and-prices.p.rapidapi.com/cities", {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f32f77d2a8msh99bedad440aa033p1780b7jsnc795046697e2',
                    'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
                }
            });

            const res = await data.json()
            setCities(res)
        };

        async function fetchPrices() {
            const data = await fetch("https://cost-of-living-and-prices.p.rapidapi.com/prices", {
                method: 'GET',
                params: {city_name: 'Bratislava', country_name: 'Slovakia'},
                headers: {
                    'X-RapidAPI-Key': '272b755635mshc05a9ee8660a8dfp190c7cjsnc9e758afb6cb',
                    'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
                }
            });
              
            const res = await data.json()
            console.log(res)
            setPrices(res)
        }; 

        fetchPrices()
        fetchCities()
        fetchCountries()
    }, []);

    function ChangeView({ center }) {
        const map = useMap();
        map.setView(center)
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const filteredCountryInfo = countries.filter((item) => {
            const countryName = item.name.common.toLowerCase();
            const capital = item.capital[0].toLowerCase();

            return countryName.includes(country.toLowerCase()) || capital.includes(country.toLowerCase());
        });

        const filteredCountry = cities.cities.filter((item) => {
            const countryName = item.country_name.toLowerCase();
            const capital = item.city_name.toLowerCase();

            return countryName.includes(country.toLowerCase()) || capital.includes(country.toLowerCase());
        });

        // async function fetchPrices(city, country) {
        //     try {
        //       const data = await fetch("https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living", {
        //         method: 'GET',
        //         params: { country: 'uganda', city: 'kampala' },
        //         headers: {
        //             'X-RapidAPI-Key': '272b755635mshc05a9ee8660a8dfp190c7cjsnc9e758afb6cb',
        //             'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
        //         }
        //       });
              
        //       const res = await data.json()
        //       console.log(res)
        //       setPrices(res)
        //     } catch (err) {
        //       console.error('Error fetching prices:', err)
        //     }
        // };  

        if (filteredCountry.length > 0) {
            setInfo(filteredCountryInfo[0]);
            setCenter([filteredCountry[0].lat, filteredCountry[0].lng])
            // fetchPrices(filteredCountry[0].city_name, filteredCountry[0].country_name)
        } else {
            setInfo(null);
        }
    };

    // console.log(prices)

    const options = {
       
    }
      
    return(
        <div className="home">
            <header>
                <Nav />
                <form onSubmit={handleSubmit}>
                    <input type="text" required
                        placeholder='Search country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </form>
            </header>

            <section>       
                <div className="map">
                    <MapContainer 
                        center={center} 
                        zoom={7} 
                        scrollWheelZoom={true} 
                        style={{height: '82vh', width: info ? '160vh' : '220vh'}}
                    >
                    <ChangeView center={center} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={center}>
                            {/* {info && */}
                                <Popup>
                                    <div className="popup">
                                        <div className="dot"></div>
                                        <div className="city-info">
                                            <div className="content">
                                                <ul>
                                                    <li style={{display: 'flex'}}>
                                                        <h2 style={{marginRight: '50px'}}>{info ? info.name.common : 'Kenya'}</h2>
                                                        {info && <img src={info.flag} alt="flag" width="20"/>}
                                                    </li>
                                                    <li>{info ? info.capital[0] : 'Nairobi'}</li>
                                                    {info && <li>{info.population}</li>}
                                                </ul>
                                            </div>
                                            <div className="bar-graph" style={{width: '260px', height: '160px'}}>
                                                <Bar data={chartData} options={options} /> 
                                            </div>           
                                        </div>
                                    </div>
                                </Popup>
                            {/* } */}
                        </Marker>
                    </MapContainer>
                </div>
            </section>

            <footer>
                <h3 style={{textAlign: 'center'}}>Copyright © 2023. All Rights Reserved.</h3>
            </footer>
        </div>
    )
}