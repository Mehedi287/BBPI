
import { Stack, TextField } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers';
import { useState } from 'react'

const MuiDateTimePicker = ({ setValue, name, label, watch }) => {

    return (
        <Stack spacing={4} sx={{ width: '100%' }}>

            <TimePicker
                label={label}
                value={watch(name) ? watch(name) : null}
                variant='standard'
                onChange={newValue => {
                    setValue(name)
                }}
                renderInput={params => <TextField {...params} />}
            />
        </Stack>
    )
}

export default MuiDateTimePicker;