import React from 'react';

import { Chart, Cards, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { useState, useEffect } from 'react';


const App = () => {
	const [data, updateData] = useState();


	useEffect(async () => {
		const data = await fetchData();	
		updateData(data);
		console.log(data);
	},[]);

	return(
		<div className={styles.container}>
			<Cards data={data}/>
			<CountryPicker/>
			<Chart/>
		</div>
	);
}

export default App;
