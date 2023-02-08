import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

interface IDescriptionTableProps {
    description: string,
    qty: number,
    kg: number,
    pc: string,
}

/** @todo - style, add props, and add business logic to this Component  */
export const DescriptionTable = ({ }: IDescriptionTableProps) => {
    function createData(
        description: string,
        qty: number,
        kg: number,
        pc: string,
    ) {
        return {description,qty,kg,pc };
    }
    const rows = [
        createData('PLASTIC GOSS TRAP (RECTANGULAR)', 159, 6.0, 'A'),
        createData('FRAME & COVER - 600 X 600 (BY OTHER)', 237, 9.0, 'B'),
        createData('600 X 600 X 1829 X 115 MOD SCB', 262, 16.0, 'C'),
        createData('Cupcake', 305, 3.7, 'A'),
        createData('Gingerbread', 356, 16.0,'C'),
    ];
    
    return (
        <>
            <TableContainer component={Paper} style={{width:'500px'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Kg</TableCell>
                            <TableCell align="right">Pc.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.description}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.description}
                                </TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.kg}</TableCell>
                                <TableCell align="right">{row.pc}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    )
}

