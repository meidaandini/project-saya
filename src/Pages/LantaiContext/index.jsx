import React from "react";
import { LantaiProvider, useLantaiContext } from "./Context";
import Count from "./Count";
import DialogKonfirmasi from "../../Components/DialogKonfirmasi";
import Notif from "../../Components/Notification";
import CompPopup from "../../Components/ComponentPopup";
import Grid from "./DataGrid";
import Button from "@mui/material/Button";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Form } from "./Form";
import axios from "axios";

function Container() {
  const {
    openDelete,
    dialogDeleteApakahTampil,
    setNotif,
    openNotif,
    idHapus,
    openPopup,
    dialogEditTampil,
    dataForm,
    setdataForm,
    openForm,
    dialogTambahTampil,
  } = useLantaiContext();
  const data = dataForm;
  const [formData, setformData] = React.useState(data);
  const { rows, setRows, setnotifText, notifText } = useLantaiContext();

  const handleTambahClick = () => {
    dialogTambahTampil(true);
    setdataForm({});
  };

  const hapusData = () => {
    setNotif(true);
    setnotifText("Data berhasil dihapus");

    let indexdata = rows.findIndex((item) => item.id === idHapus);
    console.log(idHapus, 1);
    let semuadata = [...rows];
    semuadata.splice(indexdata, 1);

    const options = {
      method: "DELETE",
      url: `http://localhost:3004/lantai/${idHapus}`,
      headers: {
        "user-agent": "vscode-restclient",
        "content-type": "application/json",
      },
      data: {
        NamaGedung: formData.NamaGedung,
        AlamatGedung: formData.AlamatGedung,
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
  };
  return (
    <>
      <Button
        variant="outlined"
        direction="row"
        spacing={2}
        mb={7}
        aria-label="Tambah"
        onClick={(event) => {
          handleTambahClick();
        }}
      >
        <AddCircleOutline />
        Tambah
      </Button>
      <CompPopup
        open={openPopup}
        title="Create/Edit Data Gedung"
        setOpen={dialogEditTampil}
        action="Simpan"
        action2="Batal"
        action3="Draft"
      >
        <Form
          data={dataForm}
          setOpen={dialogEditTampil}
          setData={setdataForm}
          rows={rows}
          setRows={setRows}
          cmd="edit"
        />
      </CompPopup>

      <CompPopup
        open={openForm}
        title="Tambah Data Gedung"
        setOpen={dialogTambahTampil}
        action="Simpan"
        action2="Batal"
      >
        <Form
          setData={setdataForm}
          setOpen={dialogTambahTampil}
          rows={rows}
          setRows={setRows}
          cmd="tambah"
        />
      </CompPopup>

      <Grid />
      <DialogKonfirmasi
        open={openDelete}
        title="Anda Yakin Ingin Menghapus?"
        setOpen={dialogDeleteApakahTampil}
        onConfirm={hapusData}
      />
      <Notif open={openNotif} title={notifText} setOpen={setNotif} />
      <CompPopup />
    </>
  );
}

const Context = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Tampilan Menu Lantai Context</h2>
      <LantaiProvider>
        <Container />
      </LantaiProvider>
    </>
  );
};

export default Context;
