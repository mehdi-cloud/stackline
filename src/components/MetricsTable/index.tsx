import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useEffect, useState } from 'react';
import { formatDate, formatDollarAmount, sale } from './util';
import './MetricsTable.css'
import { UserContext } from '../../App';

export default function MetricsTable() {
  const userReviews = useContext(UserContext);
  const [sales, setSales] = useState<sale[]>();

  useEffect(() => {
    setSales(userReviews.sales);
  }, [userReviews])

  return (
    <div className='table'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">WEEK ENDING</TableCell>
              <TableCell align="center">RETAIL SALES</TableCell>
              <TableCell align="center">WHOLE SALES</TableCell>
              <TableCell align="center">UNITS SOLD</TableCell>
              <TableCell align="center">RETAILER MARGIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales?.map((sale: sale) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{formatDate(sale.weekEnding)}</TableCell>
                <TableCell align="center">{formatDollarAmount(sale.retailSales)}</TableCell>
                <TableCell align="center">{formatDollarAmount(sale.wholesaleSales)}</TableCell>
                <TableCell align="center">{sale.unitsSold}</TableCell>
                <TableCell align="center">{formatDollarAmount(sale.retailerMargin)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}