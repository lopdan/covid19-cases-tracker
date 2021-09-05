import React from 'react';
import { useEffect, useState} from 'react';
import { fetchAllData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = (country) => {    
	const [monthData, updateData] = useState({
		data: null,
		country: null,
	});

	useEffect(async () => {
		if(country.country){
			const fetchedData = await fetchAllData(country.country);
			updateData({...monthData, data: fetchedData.data.dates, country: country.country})
		}
	},[country])

	const nestedLoop = (obj, dataName, iLoops) => {
		const res = [];
		const recurse = (obj, current) => {
			for (const key in obj) {
				let value = obj[key];
				if(value != undefined && (key != 'regions' && key != 'links')) {
					if (value && typeof value === 'object') {
						recurse(value, key);
					} else {
						  // Do your stuff here to var value
						if(key == dataName){
							res[res.length] = value;
							//console.log(res);
						}
					}
				}
			}
		}
		recurse(obj, dataName)
		return res;
	}

	if(monthData.data !== null && monthData.data !== undefined){
		// Test for mapping
		const res = nestedLoop(monthData.data, 'today_confirmed', 0);
		console.log(res);
	}

    return(
        <div className={styles.container}>
           
        </div>
    )
}

export default Chart;