import React from 'react'
import { Stack } from '@mui/material'
import Sidenav from './Sidenav'

const selectedCategory = 'New'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction='row'
            sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}
        >
            <Sidenav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Stack>
    )
}

export default Sidebar