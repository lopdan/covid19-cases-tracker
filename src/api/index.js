import axios from 'axios';

const url = 'https://api.covid19tracking.narrativa.com/api/';

const countriesUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try
    {
        let date = (new Date()).toISOString().split('T')[0];
        const { data  } = await axios.get(url + date);

        const modifiedData = {
            confirmed: data.total.today_confirmed,
            deaths: data.total.today_deaths,
            newCases: data.total.today_new_confirmed,
            newDeaths: data.total.today_new_deaths,
            lastUpdate: data.updated_at
        }
        return modifiedData;

    }
    catch(err)
    {
        return err;
    }
}

export const fetchAllData = async() => {
    let date = (new Date()).toISOString().split('T')[0];
    const { data  } = await axios.get(url + date);
}

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${countriesUrl}/countries`);
  
      return countries.map((country) => country.name);
    } 
    catch (error) 
    {
      return error;
    }
  };