import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '29954a07a0msh8f558402d56d01fp1cfd85jsne5f22d9eca4f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};