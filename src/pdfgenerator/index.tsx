import * as React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import ConsumerDetails from './consumerDetails';
import VendorDetails from './vendorDetails';
import Pdf from "react-to-pdf";

export default function PdfGenerator() {
    const ref = React.createRef();
    return (
        <>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }: { toPdf: () => void }) =>
                    <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <Box ref={ref}>
                <Grid container p={3}>
                    <Grid xs={4}>
                        <ConsumerDetails />
                    </Grid>
                    <Grid xs={4}>
                        <VendorDetails />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}