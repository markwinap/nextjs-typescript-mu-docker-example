import { Box, Typography } from '@mui/material'
import React from 'react'
import MuiLink from '@mui/material/Link';
import Image from 'next/image'
import logo from '../../public/concastlogo.png'
import { Stack } from '@mui/system';

interface IVendorDetailsProps {
    // property1: any,
    // property2: any
}

const VendorDetails = ({ 
    // property1, property2 
}: IVendorDetailsProps) => {
    return (
        <>
            <Stack direction='row'>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} px={3}>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        width={45}
                        height={45}
                    />
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Con Cast Pipe</Typography>
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight='fontWeightMedium'>Con Cast Pipe</Typography>
                    <Typography variant="subtitle1" fontWeight='fontWeightMedium'>299 Brock Road South</Typography>
                    <Typography variant="body2" fontWeight='fontWeightMedium'>Puslinch, ON N0B 2J0</Typography>
                    <Typography variant="body2" fontWeight='fontWeightMedium'>1-800-668-PIPE (7473)</Typography>
                    <Typography variant="body2" fontWeight='fontWeightMedium'>
                        <MuiLink color="inherit" href="https://mui.com/">www.concastpipe.com</MuiLink>
                    </Typography>
                </Box>
            </Stack>

            <Stack direction='row' display='flex' mt={1}>
                <Box style={{ border: '1px solid black',width:'200px'}} px={1}>
                    <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center'}}>Design Height</Typography>
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Top Elevation</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Lowest Elevation</Typography>
                        <Typography variant='body2'>139.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Design Height</Typography>
                        <Typography variant='body2'>8.69m</Typography>
                    </Stack>
                </Box>

                <Box style={{ border: '1px solid black',width:'200px' }} px={1}>
                    <Typography variant='body2' sx={{ fontWeight: 'bold',textAlign: 'center' }}>Stack Build Height</Typography>
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Frame</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Adjustment</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Top</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Riser</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Base</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Sump</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>


                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Grade to Inv</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Sump</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Base Thickness</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2'>Outside Height</Typography>
                        <Typography variant='body2'>146.29m</Typography>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default VendorDetails