import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Box, Typography } from '@material-ui/core';

interface IConsumerDetailsProps {
    // property1: any,
    // property2: any
}

const ConsumerDetails = ({ 
    // property1, property2
}: IConsumerDetailsProps) => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(moment().format('MMMM Do YYYY'));
            setCurrentTime(moment().format('h:mm:ss a'));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Box>
                <Typography variant="body2">Customer : Orin Contractors</Typography>
                <Typography variant="body2">Job Name : Finch W LRT - MH134B</Typography>
                <Typography variant="body2">CCP Job # : 23-1099</Typography>
                <Typography variant="body2">Structure ID : MH134B</Typography>
                <Typography variant="body2">Type : Ø3000 </Typography>
                <Typography variant="body2">Co-Ordinator : mward</Typography>
                <Typography variant="body2">Reference : </Typography>
                <Typography variant="body2">Take-off By : mward</Typography>
                <Typography variant="body2">Status : &nbsp;6-APPRV</Typography>
                <Typography variant="body2">Rev # :N/A</Typography>
                <Typography variant="body2">Printed On : {currentDate} {currentTime}</Typography>
            </Box>
        </>
    )
}

export default ConsumerDetails
