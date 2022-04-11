import React, { useState, createContext, useContext } from "react";

const GedungContext = createContext();

export const useGedungContext = () => {
  const context = useContext(GedungContext);
  const [openDelete, dialogDeleteApakahTampil] = context.deletex;
  const [openNotif, setNotif] = context.notif;
  const [openPopup, dialogEditTampil] = context.edit;
  const [openForm, dialogTambahTampil] = context.tambah;
  const [dataForm, setdataForm] = context.form;
  const [rows, setRows] = context.rows;
  const [idHapus, setidHapus] = context.hapus;

  return {
    openDelete,
    dialogDeleteApakahTampil,
    openNotif,
    setNotif,
    openPopup,
    dialogEditTampil,
    openForm,
    dialogTambahTampil,
    dataForm,
    setdataForm,
    rows,
    setRows,
    idHapus,
    setidHapus,
  };
};

export const GedungProvider = ({ children }) => {
  const [openDelete, dialogDeleteApakahTampil] = React.useState(false);
  const [openNotif, setNotif] = React.useState(false);
  const [openPopup, dialogEditTampil] = React.useState(false);
  const [openForm, dialogTambahTampil] = React.useState(false);
  const [dataForm, setdataForm] = React.useState({});
  const [rows, setRows] = useState(null);
  const [idHapus, setidHapus] = useState(-1);
  return (
    <GedungContext.Provider
      value={{
        deletex: [openDelete, dialogDeleteApakahTampil],
        notif: [openNotif, setNotif],
        edit: [openPopup, dialogEditTampil],
        tambah: [openForm, dialogTambahTampil],
        form: [dataForm, setdataForm],
        rows: [rows, setRows],
        hapus: [idHapus, setidHapus],
      }}
    >
      {children}
    </GedungContext.Provider>
  );
};
