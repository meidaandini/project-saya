import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DialogContentText } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useLantaiContext } from "./Context";
// import Context from "@mui/base/TabsUnstyled/TabsContext";
import axios from "axios";
import Notif from "../../Components/Notification";

export const Form = (props) => {
  const { setRows, rows, dataForm, setNotif, notifText, setnotifText } =
    useLantaiContext();
  const { setData, children, setOpen, cmd } = props;
  const data = dataForm;
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
      setNotif(true);
      setnotifText("Data berhasil ditambahkan");

      let dataBaru = [
        {
          id: rows.length + 1,
          NomorLantai: formData.NomorLantai,
          NamaLantai: formData.NamaLantai,
        },
      ];

      const options = {
        method: "POST",
        url: "http://localhost:3004/lantai",
        headers: {
          "user-agent": "vscode-restclient",
          "content-type": "application/json",
        },
        data: {
          id: rows.length + 1,
          NomorLantai: formData.NomorLantai,
          NamaLantai: formData.NamaLantai,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setRows([...rows, ...dataBaru]);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setNotif(true);
      setnotifText("Data berhasil diedit");

      let current_id = data.id;

      let indexdata = rows.findIndex((item) => item.id === current_id);
      console.log(current_id, indexdata);

      let semuadata = [...rows];
      semuadata[indexdata] = formData;

      const options = {
        method: "PUT",
        url: `http://localhost:3004/lantai/${current_id} `,
        headers: {
          "user-agent": "vscode-restclient",
          "content-type": "application/json",
        },
        data: {
          NomorLantai: formData.NomorLantai,
          NamaLantai: formData.NamaLantai,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });

      setRows(semuadata);
    }
    setOpen(false);
  };
  return (
    <div>
      <DialogTitle>Form Lantai</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <DialogContentText>Data Lantai Gedung Tahun 2022</DialogContentText>
          <title>Nomor Lantai</title>
          <TextField
            autoFocus
            margin="dense"
            id="filled-basic"
            label="Nomor Lantai"
            type="Create"
            fullWidth
            onChange={handleChange}
            name="NomorLantai"
            variant="filled"
            defaultValue={data.NomorLantai}
          />
          <title>Nama Lantai</title>
          <TextField
            autoFocus
            margin="dense"
            id="filled-basic"
            label="Nama Lantai"
            type="Create"
            fullWidth
            onChange={handleChange}
            name="NamaLantai"
            variant="filled"
            defaultValue={data.NamaLantai}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSimpan}>Simpan</Button>
        <Button onClick={handleClose}>Tutup</Button>
      </DialogActions>
    </div>
  );
};
