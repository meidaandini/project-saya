import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DialogContentText } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function Form(props) {
  const { data, setData, children, cmd, setOpen, setRows, rows } = props;

  const [formData, setformData] = React.useState(data);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setformData({ ...formData, [name]: value });
    console.log(data, formData, name);
  };

  const handleSimpan = () => {
    if (cmd == "tambah") {
      alert("tambah?");
      let dataBaru = [
        {
          id: rows.length + 1,
          JenisLampu: formData.JenisLampu,
          JumlahLampu: formData.JumlahLampu,
        },
      ];

      setRows([...rows, ...dataBaru]);
    } else {
      alert("edit?");
      let current_id = data.id;

      let indexdata = rows.findIndex((item) => item.id === current_id);
      console.log(current_id, indexdata);

      let semuadata = [...rows];
      semuadata[indexdata] = formData;

      console.log(semuadata, rows);
      setRows(semuadata);
    }
    setOpen(false);
  };
  return (
    <div>
      <DialogTitle>Form Lampu</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <DialogContentText>Data Lampu Tahun 2022</DialogContentText>
          <title>Jenis Lampu</title>
          <TextField
            autoFocus
            margin="dense"
            id="filled-basic"
            label="Jenis Lampu"
            type="Create"
            fullWidth
            onChange={handleChange}
            name="JenisLampu"
            variant="filled"
            defaultValue={data.JenisLampu}
          />
          <title>Jumlah Lampu</title>
          <TextField
            autoFocus
            margin="dense"
            id="filled-basic"
            label="Jumlah Lampu"
            type="Create"
            fullWidth
            onChange={handleChange}
            name="JumlahLampu"
            variant="filled"
            defaultValue={data.JumlahLampu}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSimpan}>Simpan</Button>
        <Button onClick={handleClose}>Tutup</Button>
      </DialogActions>
    </div>
  );
}
