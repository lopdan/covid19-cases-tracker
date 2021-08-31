import axios from 'axios';

const url = 'https://api.covid19tracking.narrativa.com/api/';

const countriesUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    try
    {
        // Todays date
        let date = (new Date()).toISOString().split('T')[0];
        let countryUrl;

        // Date from 1 month ago
        let olddate = new Date();
        olddate.setMonth(olddate.getMonth() - 1);
        olddate = olddate.toISOString().split('T')[0];

        let data;
        if(country)
        {
            countryUrl = `${url}country/${country}?date_from=${olddate}&date_to=${date}`;
            data = await axios.get(countryUrl);
        }
        else
        {
            data = await axios.get(url + date);
        }
        const modifiedData = 
        {
            confirmed: data.data.dates[date].countries[country].today_confirmed,
            deaths: data.data.dates[date].countries[country].today_deaths,
            newCases: data.data.dates[date].countries[country].today_new_confirmed,
            newDeaths: data.data.dates[date].countries[country].today_new_deaths,
            lastUpdate: data.data.updated_at
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