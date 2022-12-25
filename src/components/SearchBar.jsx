import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchTerm) {
            navigate(`/search/${searchTerm}`)

            setSearchTerm('')
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{ display: 'flex', borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, mr: { xs: 0, sm: 5 } }}
        >
            <input
                className='search-bar'
                placeholder='Explore...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: '#332FD0' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar