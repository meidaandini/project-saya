import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DialogContentText } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useGedungContext } from "./Context";
import Context from "@mui/base/TabsUnstyled/TabsContext";
import axios from "axios";

export const Form = (props) => {
  const { setRows, rows, dataForm } = useGedungContext();
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
      alert("tambah xxx?");
      let dataBaru = [
        {
          id: rows.length + 1,
          NamaGedung: formData.NamaGedung,
          AlamatGedung: formData.AlamatGedung,
        },
      ];

      const options = {
        method: "POST",
        url: "http://localhost:3004/gedung",
        headers: {
          "user-agent": "vscode-restclient",
          "content-type": "application/json",
        },
        data: {
          id: rows.length + 1,
          NamaGedung: formData.NamaGedung,
          AlamatGedung: formData.AlamatGedung,
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
      alert("edit?");
      let current_id = data.id;

      let indexdata = rows.findIndex((item) => item.id === current_id);
      console.log(current_id, indexdata);

      let semuadata = [...rows];
      semuadata[indexdata] = formData;

      const options = {
        method: "PUT",
        url: `http://localhost:3004/gedung/$ {current_id}`,
        headers: {
          "user-agent": "vscode-restclient",
          "content-type": "application/json",
        },
        data: {
          NamaGedung: "",
          AlamatGedung: "",
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
      <DialogTitle>Form Gedung</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <DialogContentText>Data Gedung Tahun 2022</DialogContentText>
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
        <Button onClick={handleSimpan}>Simpan</Button>
        <Button onClick={handleClose}>Tutup</Button>
      </DialogActions>
    </div>
  );
};
