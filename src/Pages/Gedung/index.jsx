import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Create} from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemIcon } from '@mui/material';
import { textAlign } from '@mui/system';
import EditIcon from "@material-ui/icons/Edit";
import { FormControlLabel, IconButton } from "@material-ui/core";
import { CompressOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogKonfirmasi from '../../Components/DialogKonfirmasi';
import { isCompositeComponent } from 'react-dom/test-utils';


function DataTable(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
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

const Gedung = () => {
  const [openDelete, dialogDeleteApakahTampil] = React.useState(false)
  const [openNotif, stNotif] = React.useState(false)
  
  const handleDeleteClick = (param, event) => {
    // some action
    console.log(param, event)
    dialogDeleteApakahTampil(true)
    console.log('tombol', openDelete)
  };
  
  const Columns = [
    { field: 'id', headerName: 'ID', minwidth: 70, flex: 1 },
    { field: 'NamaGedung', headerName: 'Nama Gedung', minwidth: 130, flex: 1 },
    { field: 'AlamatGedung', headerName: 'Alamat Gedung', minwidth: 350, flex: 1 },
    {
      field: 'age',
      headerName: '#',
      type: 'icons',
      minwidth: 90,
      flex: 1,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <IconButton variant="outlined" aria-label="delete" onClick={(event) => {
              handleDeleteClick(params, event)
            }}>
              <DeleteIcon />
            </IconButton>
          </div>
        );
      }
    },
  ];
  
  const rows = [
    { id: 1, NamaGedung: 'Gedung HOD', AlamatGedung: 'Mraen 108, Sendangadi Sleman', age: "" },
    { id: 2, NamaGedung: 'Kantor Pusat', AlamatGedung: 'Mraen 07, Sendangadi Sleman' },
    { id: 3, NamaGedung: 'Kantor Lama', AlamatGedung: 'Mraen 38, Sendangadi Sleman' },
    { id: 4, NamaGedung: 'Wisma 46', AlamatGedung: 'Jl. Jendral Sudirman. Tanah Abang, Jakarta' },
    { id: 5, NamaGedung: 'Menara BCA', AlamatGedung: 'Jl. M.H.Thamrin No. 1, Menteng, Jakarta Pusat' },
    { id: 6, NamaGedung: 'Horiston Ultima', AlamatGedung: 'Jl.KH>Noer Ali Kayuringin Jaya,Kec Bekasi Selatan' },
    { id: 7, NamaGedung: 'Eqiuty Tower', AlamatGedung: 'Kel. Senayan, Kebayoran Baru, Jakarta' },
    { id: 8, NamaGedung: 'JogjaCityMall', AlamatGedunge: 'Jl. Magelang-Jogja Km 3' },
    { id: 9, NamaGedung: 'Grand Galaxy Convention', AlamatGedung: 'Jl.Boulevard Raya No. 1, Kec Bekasi Selatan' },
  ];

  const [] = React.useState(false)

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Tampilan Menu Gedung</h2>
      <DataTable rows={rows} columns={Columns} />
      <DialogKonfirmasi open={openDelete} title="Yakin?" setOpen={dialogDeleteApakahTampil} onConfirm={stNotif} />
      {/* <Notification  /> */}
    </div>
  )
}

export default Gedung;



  
