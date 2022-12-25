import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    // const [playlist, setPlaylist] = useState([])
    const { id } = useParams()

    // console.log(channelDetail)

    // console.log(playlist) FOR MY PERSONAL USE / TESTING

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
        // fetchFromAPI(`playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet`).then((data) => setPlaylist(data?.items)) JUST FOR TESTING AND IMPROVING MY KNOWLEDGE ON API AND HOW TO FETCH
    }, [id])
    return (
        <Box minHeight='95vh'>
            <Box>
                <div
                    style={{
                        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)',
                        zIndex: 10, height: '300px'
                    }}
                >
                </div>
                <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
            </Box>
            <Box display='flex' p={2}>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail







// ********************************** FOR MY PERSONAL KNOWLEDGE ABOUT API FETCHING **********************************

// fetchFromAPI(`playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet`).then((data) => setPlaylist(data?.items))
// FOR FETCHING THE DATA OF PLAYLIST, THE URL IS: https://youtube-v31.p.rapidapi.com/playlistItems . SO FIRSTLY "playlistItems",
// THEN PASS THE PARAMS GIVEN IN THE RAPID API.