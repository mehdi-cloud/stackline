import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userReviews } from '../../userReviews';
import { useEffect, useState } from 'react';
import { formatDollarAmount, sale } from './util';

export default function MetricsTable() {
  const [sales, setSales] = useState<sale[]>();

  useEffect(() => {
    setSales(userReviews.sales);
  }, [userReviews])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">WEEK ENDING</TableCell>
            <TableCell align="right">RETAIL SALES</TableCell>
            <TableCell align="right">WHOLE SALES</TableCell>
            <TableCell align="right">UNITS SOLD</TableCell>
            <TableCell align="right">RETAILER MARGIN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales?.map((sale: any) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{sale.weekEnding}</TableCell>
              <TableCell align="right">{formatDollarAmount(sale.retailSales)}</TableCell>
              <TableCell align="right">{formatDollarAmount(sale.wholesaleSales)}</TableCell>
              <TableCell align="right">{sale.unitsSold}</TableCell>
              <TableCell align="right">{formatDollarAmount(sale.retailerMargin)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}