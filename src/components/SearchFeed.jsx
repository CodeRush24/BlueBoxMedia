import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

    const [videos, setVideos] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [first, setfirst] = useState(false)
    const { searchTerm } = useParams()

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
    }, [searchTerm])
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
    }, [selectedCategory])


    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>

            <Box p={2} position='relative' sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} color='white' marginLeft={{ xs: 6, sm: 7, md: 0 }}>
                    {first ? selectedCategory : searchTerm} <span style={{ color: '#332FD0' }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default SearchFeed