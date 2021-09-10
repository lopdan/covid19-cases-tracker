import React from 'react';

import { Chart, Cards, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData, fetchCountries } from './api';
import { useState, useEffect } from 'react';


const App = () => {
	const [data, updateData] = useState({
		data: null,
		country: null,
	});


	useEffect(async () => {
		// Render component
	},[data]);
	const handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		updateData({...data, data: fetchedData, country: country });
	}

	return(
		<div className={styles.container}>
			<img className={styles.image} src="./headerImage.png" alt="COVID"/>
			<Cards data={data.data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart country={data.country} /> 
		</div>
	);
}

export default App;
