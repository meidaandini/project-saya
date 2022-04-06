import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import { IconButton } from "@material-ui/core";
import DialogKonfirmasi from '../../Components/DialogKonfirmasi';
import Notif from '../../Components/Notification';
import From from './Form';
import ComPopup from '../../Components/ComponentPopup';
import Button from '@mui/material/Button';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import CompPopup from '../../Components/ComponentPopup';
import Form from './Form';


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

const Lantai = () => {
    const [openDelete, dialogDeleteApakahTampil] = React.useState(false)
    const [openNotif, setNotif] = React.useState(false)
    const [openPopup, dialogEditTampil] = React.useState(false)
    const [openFrom, dialogTambahTampil] = React.useState(false)
    const [dataForm, setdataForm] = React.useState({})


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
        console.log('tombol', openDelete)
    };

    const handleEditClick = (param, event) => {
        // some action
        console.log(param, event)
        dialogEditTampil(true)
        setdataForm(param.row)
        console.log('tombol', openPopup)
    }

const columns = [
    { field: 'id',
      headerName: 'ID',
      width: 70,
      flex: 1
    },
    { 
        field: 'NomerLantai', 
        headerName: 'Nomor Lantai',
        type: 'number',
        textAlign: 'right',
        width: 170,
        flex: 1
    },
    { field: 'NamaLantai', headerName: 'Nama Lantai', width: 350, flex: 1 },
    {
        field: 'age',
        headerName: '#',
        type: 'icons',
        width: 90,
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
                        <Create />
                    </IconButton>
                </div>
            );
        }
    },
];

const rows = [
    { id: 1, NomerLantai: '112B', NamaLantai: 'Lower Ground', },
    { id: 2, NomerLantai: '07A', NamaLantai: 'Lantai Atas' },
    { id: 3, NomerLantai: '81B', NamaLantai: 'Upper Ground' },
    { id: 4, NomerLantai: '46C', NamaLantai: 'Hardnest' },
    { id: 5, NomerLantai: '321A', NamaLantai: 'Bougenfill' },
    { id: 6, NomerLantai: '711A', NamaLantai: 'Struggle' },
    { id: 7, NomerLantai: '65D', NamaLantai: 'Aster' },
    { id: 8, NomerLantai: '36A', NamaLantai: 'Basement Tingkat 3' },
    { id: 9, NomerLantai: '212c', NamaLantai: 'Ground Floor' },
];

    return (
        <div>
            <h2 style={{ textAlign: 'center'}}> Tampilan Menu Lantai </h2>
            <h2 style={{ textAlign: 'center' }}>Tampilan Menu Gedung</h2>
            <Button variant="outlined" direction="row" spacing={2} mb={7} aria-label="Tambah" onClick={(event) => {
                handleTambahClick()
            }}
            >
                <AddCircleOutline />
                Tambah
            </Button>
            <DataTable rows={rows} columns={columns}/>
            <DialogKonfirmasi open={openDelete} title="Anda yakin ingin menghapus?" setOpen={dialogDeleteApakahTampil} onConfirm={() => { setNotif(true) }} />
            <Notif open={openNotif} title="Data berhasil dihapus" setOpen={setNotif} />
            <ComPopup open={openPopup} title="Create/Edit Data Lantai Gedung Tahun 2022" setOpen={dialogEditTampil} action="Simpan" action2="Buang" action3="Batal">
                <Form data={dataForm} setData={setdataForm}/>
            </ComPopup>
            <CompPopup open={openFrom} title="Tambah Data Lantai" setOpen={dialogTambahTampil} action="Simpan" action2="Batal">
                <Form data={dataForm} setData={setdataForm}/>
            </CompPopup>
        </div>
    )
}

export default Lantai;
