import './headerSearch.css';
import React, { useState, UseEffect, useEffect } from 'react';

const HeaderSearch = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://meddata-backend.onrender.com/states')
            .then(response => response.json())
            .then(data => setStates(data))
            .catch(error => console.error('Error fetching states:', error));
    }, []);

    useEffect(() => {
        if (selectedState) {
            fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
                .then(response => response.json())
                .then(data => setCities(data))
                .catch(error => console.error('Error fetching cities:', error));
        }
    }, [selectedState]);

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    }

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    }

    const handleSearch = () => {
        fetch(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`)
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error('Error fetching doctors:', error));
    }



    return (
        <div className='header-search-container'>
            <div className="header-search-box">
            <select className="header-search-input1" onChange={handleStateChange} value={selectedState}>
                    <option value="">State</option>
                    {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <select className="header-search-input2" onChange={handleCityChange} value={selectedCity}>
                    <option value="">City</option>
                    {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
                <button className="header-search-button" onClick={handleSearch}>Search</button>
            </div>
            <div className='looking'>
                <h4>You may be looking for</h4>
            </div>
            <div className='header-search-details'>
                <div className='header-search-doctors'>
                    {doctors.map((doctor, index) => (
                        <div key={index} className='header-search-doctors'>
                            <img src={doctor.image} alt='doctor img' className='doctor-icon'></img>
                            <h4>{doctor.name}</h4>
                        </div>
                    ))}
                </div>
                <div className='header-search-labs'>
                    <img src='/Drugstore.png' alt='lab img' className='lab-icon'></img>
                    <h4>Labs</h4>
                </div>
                <div className='header-search-hospitals'>
                    <img src='/Hospital.png' alt='hospital img' className='hospital-icon'></img>
                    <h4>Hospitals</h4>
                </div>
                <div className='header-search-medicalstore'>
                    <img src='/Capsule.png' alt='medicalstore img' className='medicalstore-icon'></img>
                    <h4>Medical Store</h4>
                </div>
                <div className='header-search-ambulance'>
                    <img src='/Ambulance.png' alt='ambulance img' className='ambulance-icon'></img>
                    <h4>Ambulance</h4>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch;
