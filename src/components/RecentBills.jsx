import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Typography,
} from "@mui/material";

function RecentBills({ bills = [] }) {

  return (

    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        boxShadow: "none",
        borderRadius: 3,
      }}
    >

      <Table>

        <TableHead>

          <TableRow>

            <TableCell><b>Household</b></TableCell>

            <TableCell><b>Period</b></TableCell>

            <TableCell align="right"><b>Units</b></TableCell>

            <TableCell align="right"><b>Amount</b></TableCell>

            <TableCell align="center"><b>Status</b></TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {bills.length === 0 ? (

            <TableRow>

              <TableCell
                colSpan={5}
                align="center"
              >

                <Typography color="text.secondary">

                  No billing records available.

                </Typography>

              </TableCell>

            </TableRow>

          ) : (

            bills.slice(0, 8).map((bill) => (

              <TableRow
                key={bill.id}
                hover
              >

                <TableCell>

                  {bill.household?.householdNumber || "-"}

                </TableCell>

                <TableCell>

                  {bill.cycleStartDate} - {bill.cycleEndDate}

                </TableCell>

                <TableCell align="right">

                  {bill.unitsConsumed}

                </TableCell>

                <TableCell align="right">

                  ₹{bill.totalAmount}

                </TableCell>

                <TableCell align="center">

                  <Chip
                    label={bill.status}
                    color={
                      bill.status === "FINALIZED"
                        ? "success"
                        : "warning"
                    }
                    size="small"
                  />

                </TableCell>

              </TableRow>

            ))

          )}

        </TableBody>

      </Table>

    </TableContainer>

  );

}

export default RecentBills;