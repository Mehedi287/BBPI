    import { Typography } from '@mui/material';
import { Box } from '@mui/system';
    import bannerIcon from "../../../images/banner-icon2-removebg-preview.png"
    import React from 'react';
    import bannerBG from "../../../images/banner1.png" 
    const PreviewRoutine = ({ mainData }) => {
        console.log(mainData);
        const {department ,
        institute ,
        section ,
        semester ,
        shift }=mainData
        return (
            <Box className=' bg-cover rounded-xl bg-fuchsia-50 shadow-sm p-5'> 
            
            <h2 className='text-xl   mb-3'>{institute}</h2>            
            <h3 className='mb-2'>Department: <span className='bg-purple-200 p-1 px-2 rounded-md  '>{department}</span></h3>
            <h3 className='mb-2'>Semester: <span className='bg-purple-200 p-1 px-2 rounded-xl  '>{semester}</span></h3>
            <h3 className='mb-2'>Section: <span className='bg-purple-200 p-1 px-2 rounded-xl  '>{section}</span></h3>
                <h3 className='mb-2'>Shift: <span className='bg-purple-200 p-1 px-2 rounded-xl  '>{shift}</span></h3>
                 
            </Box>
        );
    };

    export default PreviewRoutine;