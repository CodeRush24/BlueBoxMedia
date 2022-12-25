import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoChannelUrl, demoVideoUrl } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(videoId)
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, borderRadius: 0, boxShadow: 'none' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
                />
            </Link>

            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='white'>
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#2D31FA'>
                        {snippet?.channelTitle}
                        <CheckCircleIcon sx={{ fontSize: 12, ml: '5px', color: '#1363DF' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard