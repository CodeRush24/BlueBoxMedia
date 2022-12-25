import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
    const [open, setOpen] = useState(true)
    return (
        <Stack direction='row' alignItems='center' p={2} sx={{
            position: 'sticky', background: '#000',
            top: 0, justifyContent: 'space-evenly'
        }}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: { xs: 'block' }, color: 'white', marginLeft: 0 }}>
                    {open ? <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="logo" height={45} style={{ marginLeft: 55, marginRight: 4 }} />
                    </div> : ""}
                </Box>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar
