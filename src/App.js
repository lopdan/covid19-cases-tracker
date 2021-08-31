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
	},[data.country]);
	const handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		
		updateData({...data, data: fetchedData, country: country });
	}

	return(
		<div className={styles.container}>
			<Cards data={data.data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
		</div>
	);
}

export default App;
