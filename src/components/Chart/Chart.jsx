import React from 'react';
import { useEffect, useState, useMemo} from 'react';
import { fetchAllData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({country}) => {    
	const [monthData, updateData] = useState({
		data: null,
	});
	const [charData, updateChart] = useState({
		dates: null,
		dailyCases: null,
		dailyDeaths: null
	});
	useEffect(() => {
		const fetchMyData = async () => {
			if(country){
				const fetchedData = await fetchAllData(country);
				updateData({data: fetchedData.data.dates});
			}
		};
		fetchMyData();
	},[country])
	useEffect(() => {
		const dates = nestedLoop(monthData.data, 'date');
		removeMatching(dates);
		updateChart({
			dates: dates,
			dailyCases: nestedLoop(monthData.data, 'today_confirmed'),
			dailyDeaths: nestedLoop(monthData.data, 'today_deaths')
		})
	},[monthData])

	const nestedLoop = (obj, dataName) => {
		const res = [];
		const recurse = (obj, current) => {
			for (const key in obj) {
				let value = obj[key];
				if(value != undefined && (key != 'regions' && key != 'links')) {
					if (value && typeof value === 'object') {
						recurse(value, key);
					} else {
						if(key == dataName){
							res[res.length] = value;

						}
					}
				}
			}
		}
		recurse(obj, dataName)
		return res;
	}
	function removeMatching(arrayData) {
		var j = 0;
		while (j < arrayData.length) {
			if (/\s/.test(arrayData[j]))
			arrayData.splice(j, 1);
			else
				j++;
		}
		return arrayData;
	}
	const lineChart = (
		charData ? (
		  <Line
			data={{
			  labels: Object.values(charData.dates).map((dates) => dates),
			  datasets: [{
				data: Object.values(charData.dailyCases).map((dailyCases) => dailyCases),
				label: 'Cases',
				borderColor: '#3333ff',
				fill: true,
			  }, {
				data: Object.values(charData.dailyDeaths).map((dailyDeaths) => dailyDeaths),
				label: 'Deaths',
				borderColor: 'red',
				backgroundColor: 'rgba(255, 0, 0, 0.5)',
				fill: true,
			  }
			  ],
			}}
		  />
		) : null
	);


    return(
        <div className={styles.container}>
           {country ? lineChart : null}
        </div>
    )
}

export default Chart;