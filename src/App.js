import React from 'react';

import { Chart, Cards, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData, fetchCountries } from './api';
import { useState, useEffect } from 'react';


const App = () => {
	const [data, updateData] = useState();


	useEffect(async () => {
		const data = await fetchData();	
		updateData(data);
		console.log(data);
	},[]);

	const handleCountryChange = async (country) => {
		const data = await fetchCountries(country);
	
		updateData({ data, country: country });
	}

	return(
		<div className={styles.container}>
			<Cards data={data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
		</div>
	);
}

export default App;
