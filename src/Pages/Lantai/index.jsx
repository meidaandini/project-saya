import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
        flex: 1
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
    { id: 8, NomerGedung: '3A', NamaLantai: 'Basement Tingkat 3' },
    { id: 9, NomerLantai: '212c', NamaLantai: 'Ground Floor' },
];

function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

const Lantai = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center'}}> Tampilan Menu Lantai </h2>
            <DataTable/>
        </div>
    )
}

export default Lantai;
