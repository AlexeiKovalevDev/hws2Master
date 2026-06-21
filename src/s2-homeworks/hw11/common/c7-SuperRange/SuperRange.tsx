import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 200,
                color: '#3f51b5',
            }}
            {...props}
        />
    )
}

export default SuperRange
