import React from 'react'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import CheckCircle from '@mui/icons-material/CheckCircle'
import { Link } from 'react-router-dom'

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box sx={{
            borderRadius: '20px', display: 'flex', justifyContent: { md: 'center', xs: 'end' }, alignItems: 'center', height: '290px', width: { sx: '356px', md: '320px' }, margin: 'auto',
            marginTop
        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
                    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2 }}
                    />
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 18, ml: '5px', color: '#1363DF' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard