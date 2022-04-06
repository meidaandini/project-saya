import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DialogContentText } from '@mui/material';

export default function Form(props) {
    const { data, setData, children } = props
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >

                <DialogContentText>
                    Data Lantai Gedung Tahun 2022
                </DialogContentText>
                    <title>Nomor Lantai</title>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="filled-basic"
                        label="Nomor Lantai"
                        type="Create"
                        fullWidth
                        variant="filled"
                        defaultValue={data.NomerLantai}
                    />
                    <title>Nama Lantai</title>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="filled-basic"
                        label="Nama Lantai"
                        type="Create"
                        fullWidth
                        variant="filled"
                        defaultValue={data.NamaLantai}
                    />


            </Box>
        </div>
    );
}

