import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DialogContentText } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function Form(props) {
    const { data, setData, children, setOpen, rows, setRows, cmd} = props
    const [formData, setformData] = React.useState({})

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        let {name, value} = event.target
        setformData({...data, [name] : value});
        console.log(data, formData, name)
    };

    const handleSimpan = () => {
        if (cmd == 'tambah') {
            alert('tambah')
            let dataBaru = [{ id: 10, NamaGedung: 'XX Galaxy Convention', AlamatGedung: 'XX Jl.Boulevard Raya No. 1, Kec Bekasi Selatan' }]
            setRows([...rows, ...dataBaru])
        } else {
            // alert('edit')
            let current_id = data.id

            let indexdata = rows.findIndex(item => item.id === current_id)
            console.log(current_id, indexdata)

            let semuadata = [...rows]
            semuadata[indexdata] = formData
          
            setRows(semuadata)
            /* let dataBaru = [...this.state.dataBaru];
            dataBaru[NamaGedung] = { ...dataBaru[{Gedung HOD}], key: Wisma };
            this.setRows({dataBaru}); */
            // temp_element.{Mraen 108, Sendangadi Sleman } = temp_element.{Mraen 108, Sendangadi Sleman }+{Mraen,Sleman};
        }
        setOpen(false);
    };

    return (
        <div>
            <DialogTitle>
                Form Gedung
            </DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <DialogContentText>
                        Data Gedung Tahun 2022
                    </DialogContentText>
                    <title>Nama Gedung</title>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="filled-basic"
                        label="Nama Gedung"
                        type="Create"
                        fullWidth
                        onKeyUp={handleChange}
                        name="NamaGedung"
                        variant="filled"
                        defaultValue={data.NamaGedung}
                    />
                    <title>Alamat Gedung</title>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="filled-basic"
                        label="Alamat Gedung"
                        type="Create"
                        fullWidth
                        onChange={handleChange}
                        name="AlamatGedung"
                        variant="filled"
                        defaultValue={data.AlamatGedung}
                    />


                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSimpan}>
                    Simpan
                </Button>
                <Button onClick={handleClose}>
                    Tutup
                </Button>
            </DialogActions>
            
        </div>
    );
}















