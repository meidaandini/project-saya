import { DataGrid } from "@mui/x-data-grid";
import { useGedungContext } from "./Context";
import DeleteIcon from "@mui/icons-material/Delete";
import Create from "@mui/icons-material/Create";
import { IconButton } from "@material-ui/core";
import React from "react";
import axios from "axios";

function DataTable(props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

function Grid() {
  const {
    rows,
    setRows,
    openDelete,
    dialogDeleteApakahTampil,
    openPopup,
    dialogEditTampil,
    idHapus,
    setidHapus,
    dataForm,
    setdataForm,
  } = useGedungContext();
  const handleDeleteClick = (param, event) => {
    // some action
    console.log(param, event);
    dialogDeleteApakahTampil(true);

    let current_id = param.row.id;
    setidHapus(current_id);
    console.log("tombol", openDelete);
  };

  const handleEditClick = (param, event) => {
    // some action
    console.log(param, event);
    dialogEditTampil(true);
    setdataForm(param.row);
    console.log("tombol", openPopup);
  };
  const Columns = [
    { field: "id", headerName: "ID", minwidth: 70, flex: 1 },
    { field: "NamaGedung", headerName: "Nama Gedung", minwidth: 130, flex: 1 },
    {
      field: "AlamatGedung",
      headerName: "Alamat Gedung",
      minwidth: 350,
      flex: 1,
    },
    {
      field: "age",
      headerName: "#",
      type: "icons",
      minwidth: 90,
      textAlign: "center",
      flex: 1,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <IconButton
              variant="outlined"
              aria-label="delete"
              onClick={(event) => {
                handleDeleteClick(params, event);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              variant="outlined"
              aria-label="create"
              onClick={(event) => {
                handleEditClick(params, event);
              }}
            >
              <Create />
            </IconButton>
          </div>
        );
      },
    },
  ];

  const rowsGrid = [
    {
      id: 1,
      NamaGedung: "Gedung HOD",
      AlamatGedung: "Mraen 108, Sendangadi Sleman",
    },
    {
      id: 2,
      NamaGedung: "Kantor Pusat",
      AlamatGedung: "Mraen 07, Sendangadi Sleman",
    },
    {
      id: 3,
      NamaGedung: "Kantor Lama",
      AlamatGedung: "Mraen 38, Sendangadi Sleman",
    },
    {
      id: 4,
      NamaGedung: "Wisma 46",
      AlamatGedung: "Jl. Jendral Sudirman. Tanah Abang, Jakarta",
    },
    {
      id: 5,
      NamaGedung: "Menara BCA",
      AlamatGedung: "Jl. M.H.Thamrin No. 1, Menteng, Jakarta Pusat",
    },
    {
      id: 6,
      NamaGedung: "Horiston Ultima",
      AlamatGedung: "Jl.KH>Noer Ali Kayuringin Jaya,Kec Bekasi Selatan",
    },
    {
      id: 7,
      NamaGedung: "Eqiuty Tower",
      AlamatGedung: "Kel. Senayan, Kebayoran Baru, Jakarta",
    },
    {
      id: 8,
      NamaGedung: "JogjaCityMall",
      AlamatGedung: "Jl. Magelang-Jogja Km 3",
    },
    {
      id: 9,
      NamaGedung: "Grand Galaxy Convention",
      AlamatGedung: "Jl.Boulevard Raya No. 1, Kec Bekasi Selatan",
    },
  ];

  React.useEffect(() => {
    console.log(rows);
    if (rows === null) {
      axios.get("http://localhost:3004/gedung").then((result) => {
        console.log(result.data);
        setRows(result.data);
      });
    }
  });
  return (
    <>
      <DataTable rows={rows} columns={Columns} />
    </>
  );
}

export default Grid;
