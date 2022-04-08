import * as React from 'react';
import {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import { IconButton } from "@material-ui/core";
import DialogKonfirmasi from '../../Components/DialogKonfirmasi';
import Notif from '../../Components/Notification';
import CompPopup from '../../Components/ComponentPopup';
import From from './Form';
import Button from '@mui/material/Button';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';



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
  const [openNotif, setNotif] = React.useState(false)
  const [openPopup, dialogEditTampil] = React.useState(false)
  const [openForm, dialogTambahTampil] = React.useState(false)
  const [dataForm, setdataForm] = React.useState({})
  const [rows, setRows] = useState([])
  const [idHapus, setidHapus] = useState(-1)

  const handleTambahClick = () => {
    // some action
    dialogTambahTampil(true)
    setdataForm({})
    console.log('tombol', openPopup)
  }
  
  const handleDeleteClick = (param, event) => {
    // some action
    console.log(param, event)
    dialogDeleteApakahTampil(true)

    let current_id = param.row.id
    setidHapus(current_id)
    console.log('tombol', openDelete)
  };

  const handleEditClick = (param, event) => {
    // some action
    console.log(param, event)
    dialogEditTampil(true)
    setdataForm(param.row)
    console.log('tombol', openPopup)
  }

  const hapusData = () => {
    setNotif(true)

    let indexdata = rows.findIndex(item => item.id === idHapus)
    console.log(idHapus, 1)
    let semuadata = [...rows]
    semuadata.splice(indexdata, 1)
    setRows(semuadata)
  }


  const Columns = [
    { field: 'id', headerName: 'ID', minwidth: 70, flex: 1 },
    { field: 'NamaGedung', headerName: 'Nama Gedung', minwidth: 130, flex: 1 },
    { field: 'AlamatGedung', headerName: 'Alamat Gedung', minwidth: 350, flex: 1 },
    {
      field: 'age',
      headerName: '#',
      type: 'icons',
      minwidth: 90,
      textAlign: 'center',
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
            <IconButton variant="outlined" aria-label="create" onClick={(event) => {
              handleEditClick(params, event)
            }}>
              <Create/>
            </IconButton>
          </div>
        );
      }
    },
  ];
  
  const rowsGrid = [
    { id: 1, NamaGedung: 'Gedung HOD', AlamatGedung: 'Mraen 108, Sendangadi Sleman', age: "" },
    { id: 2, NamaGedung: 'Kantor Pusat', AlamatGedung: 'Mraen 07, Sendangadi Sleman' },
    { id: 3, NamaGedung: 'Kantor Lama', AlamatGedung: 'Mraen 38, Sendangadi Sleman' },
    { id: 4, NamaGedung: 'Wisma 46', AlamatGedung: 'Jl. Jendral Sudirman. Tanah Abang, Jakarta' },
    { id: 5, NamaGedung: 'Menara BCA', AlamatGedung: 'Jl. M.H.Thamrin No. 1, Menteng, Jakarta Pusat' },
    { id: 6, NamaGedung: 'Horiston Ultima', AlamatGedung: 'Jl.KH>Noer Ali Kayuringin Jaya,Kec Bekasi Selatan' },
    { id: 7, NamaGedung: 'Eqiuty Tower', AlamatGedung: 'Kel. Senayan, Kebayoran Baru, Jakarta' },
    { id: 8, NamaGedung: 'JogjaCityMall', AlamatGedung: 'Jl. Magelang-Jogja Km 3' },
    { id: 9, NamaGedung: 'Grand Galaxy Convention', AlamatGedung: 'Jl.Boulevard Raya No. 1, Kec Bekasi Selatan' },
  ];

  React.useEffect(function (){

    setRows(rowsGrid) 
  },[])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Tampilan Menu Gedung</h2>
      <Button variant="outlined" direction="row" spacing={2} mb={7} aria-label="Tambah" onClick={(event) => {
        handleTambahClick()
      }}
      >
        <AddCircleOutline />
        Tambah
      </Button>
      <DataTable rows={rows} columns={Columns} />
      <DialogKonfirmasi open={openDelete} title="Yakin?" setOpen={dialogDeleteApakahTampil} onConfirm={hapusData} />
      <Notif open={openNotif} title="Data berhasil dihapus" setOpen={setNotif} />
      <CompPopup open={openPopup} title="Create/Edit Data Gedung" setOpen={dialogEditTampil} action="Simpan" action2="Batal" action3="Draft">
        <From data={dataForm} setOpen={dialogEditTampil} setData={setdataForm} rows={rows} setRows={setRows} cmd="edit" />
      </CompPopup>
      <CompPopup open={openForm} title="Tambah Data Gedung" setOpen={dialogTambahTampil} action="Simpan" action2="Batal">
        <From data={dataForm} setData={setdataForm} setOpen={dialogTambahTampil} rows={rows} setRows={setRows} cmd="tambah" />
      </CompPopup>
    </div>
  )
}

export default Gedung;



  
