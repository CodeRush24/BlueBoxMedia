import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Typography, Stack } from '@mui/material'
import CheckCircle from '@mui/icons-material/CheckCircle'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
    }, [id])

    if (!videoDetail?.snippet) return 'Loading...'
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Box minHeight='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
                        <Typography color='white' variant='h5' fontWeight='bolder' pt={1} px={1}>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{ color: '#3DB2FF' }} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#332FD0' fontWeight='bold' fontSize='18px'>
                                    {channelTitle}
                                    <CheckCircle sx={{ color: '#332FD0', ml: '5px', fontSize: '12px' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' fontWeight='bolder'>
                                <Typography variant='body1' display='flex'>
                                    <span style={{ color: 'white', marginRight: '4px', fontWeight: 'bold' }}>{parseInt(viewCount).toLocaleString()}</span> <div style={{ fontWeight: 'bolder', color: '#185ADB' }}>views</div>
                                </Typography>
                                <Typography variant='body1' display='flex'>
                                    <span style={{ color: 'white', marginRight: '4px', fontWeight: 'bold' }}>{parseInt(likeCount).toLocaleString()}</span> <div style={{ fontWeight: 'bolder', color: '#185ADB' }}>Likes</div>
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ xs: 5, md: 1 }} justifyContent='center' alignItems='center'>
                    <Videos videos={videos} direction='column' />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail
