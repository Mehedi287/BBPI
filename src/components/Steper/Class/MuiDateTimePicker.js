
import { Stack, TextField } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers';
import { useState } from 'react'

const MuiDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)

    console.log({
        selectedDate,
        selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
        selectedDateTime
    })
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