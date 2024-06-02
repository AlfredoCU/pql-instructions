import { ChangeEvent, useEffect, useState } from "react";

import {
  Paper,
  Table,
  Select,
  Button,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  InputLabel,
  FormControl,
  TableContainer,
  TablePagination
} from "@mui/material";

import { i18n } from "@/utils/helpers";
import { IPlayers, TColumns } from "@/utils/types";
import { specialAbilityOption } from "@/utils/constants";

import "./Table.css";

type TDefaultTable = {
  readonly columns: TColumns[];
  readonly rows: IPlayers[] | any;
  readonly specialAbility?: boolean;
  readonly handlePlayers?: (players: IPlayers[] | []) => void;
};

export default function DefaultTable({
  columns,
  rows = [],
  handlePlayers,
  specialAbility
}: TDefaultTable) {
  const [page, setPage] = useState(0);
  const [newRows, setNewRows] = useState(rows);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<readonly number[]>([]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectClick = (_: React.MouseEvent<unknown>, id: number) => {
    setSelected(prevSelected => {
      const selectedIndex = prevSelected.indexOf(id);

      if (selectedIndex === -1) {
        return [...prevSelected, id];
      }

      return prevSelected.filter((_, index) => index !== selectedIndex);
    });
  };

  const handleDeleteClick = () => {
    const newData = newRows.filter(
      (items: IPlayers) => !selected.includes(items.id)
    );

    setNewRows(newData);
    setSelected([]);
  };

  const handleChange = (event: any, row: IPlayers) => {
    const newData = newRows.map((item: IPlayers) =>
      item.id === row.id
        ? { ...item, special_ability: event.target.value }
        : { ...item }
    );

    setNewRows(newData);
  };

  useEffect(() => {
    if (handlePlayers) {
      handlePlayers(newRows);
    }
  }, [newRows]);

  return (
    <>
      {selected.length > 0 && (
        <div className="table-remove-btn-container">
          <Button
            type="button"
            color="warning"
            variant="contained"
            onClick={handleDeleteClick}
            className="table-remove-btn"
          >
            <p className="table-remove-btn-text">
              {i18n("CREATE_TEAM.REMOVE_FROM_CREATION")}
            </p>
          </Button>
        </div>
      )}

      <div className="panel-container">
        <Paper className="table-container">
          <TableContainer>
            <Table stickyHeader aria-label="Players Available">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      className="table-head"
                      style={{ minWidth: column.minWidth, width: column.width }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {newRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        role="checkbox"
                        key={`${row.id}-${row.name}`}
                      >
                        {columns.map(column => {
                          if (
                            specialAbility &&
                            column.id === "special_ability"
                          ) {
                            return (
                              <FormControl
                                fullWidth
                                key={column.id}
                                variant="standard"
                              >
                                <InputLabel
                                  color="warning"
                                  id={`id-ability-${row.id}-select-label`}
                                >
                                  {i18n("CREATE_TEAM.COLUMNS.SPECIAL_ABILITY")}
                                </InputLabel>

                                <Select
                                  id="id-team"
                                  color="warning"
                                  label={`id-ability-${row.id}`}
                                  labelId={`id-ability-${row.id}-select-label`}
                                  onChange={event => handleChange(event, row)}
                                >
                                  {specialAbilityOption(row.position).map(
                                    item => (
                                      <MenuItem key={item} value={item}>
                                        {item}
                                      </MenuItem>
                                    )
                                  )}
                                </Select>
                              </FormControl>
                            );
                          }

                          if (column.id === "actions") {
                            return (
                              <div className="table-check" key={row.id}>
                                <Checkbox
                                  color="warning"
                                  onClick={event =>
                                    handleSelectClick(event, row.id)
                                  }
                                />
                              </div>
                            );
                          }

                          return (
                            <TableCell key={column.id} align={column.align}>
                              {row[column.id] || i18n("COMMON.N/A")}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            page={page}
            component="div"
            count={newRows.length}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[10, 25, 100]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}
