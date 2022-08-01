
import { Stack, TextField } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers';
import { useState } from 'react'

const MuiDateTimePicker = () => {
    const [selectedTime, setSelectedTime] = useState(null)

    return (
        <Stack spacing={4} sx={{ width: '250px' }}>

            <TimePicker
                label='Time Picker'
                value={selectedTime}
                onChange={newValue => {
                    setSelectedTime(newValue)
                }}
                renderInput={params => <TextField {...params} />}
            />
        </Stack>
    )
}

export default MuiDateTimePicker;