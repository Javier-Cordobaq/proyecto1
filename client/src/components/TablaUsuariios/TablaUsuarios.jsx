import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getAllUsers } from "../../redux/actions";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "email", width: 250 },
  { field: "date", headerName: "date", width: 200 },
];

export default function TablaUsuarios() {
  const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
  
    const rows = users.map((e, key) => ({
    id: e._id,
    name: e.name,
    email: e.email,
    date: e.date,
  }));


  /* const [cargando, setCargando] = useState(false);
  async function eliminar() {
    setCargando(true);
    if (ubi === "ubicaciones") {
      dispatch(eliminarUbicacion(state));
      setCargando(false);
      dispatch(getUbicaciones());

      setState({ array: [] });
    }
    if (ubi === "productos") {
      dispatch(eliminarProductos(state));
      dispatch(getProductos());
      setTimeout(() => {
        dispatch(getProductos());
        setCargando(false);
        setState({ array: [] });
      }, 1000);
    }
  } */

  return (
    <div style={{ height: "100%", width: "50%", display:'block', margin:'100 auto' }}>
{/*         <div>
          {" "}
          <h1>Cargaando...</h1>{" "}
        </div>
      ) : ( */}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[10]}
          localeText={{
            toolbarDensity: "Size",
            toolbarDensityLabel: "Size",
            toolbarDensityCompact: "Small",
            toolbarDensityStandard: "Medium",
            toolbarDensityComfortable: "Large",
          }}
          checkboxSelection
          //eliminar seleccionado

        /*   onSelectionModelChange={(e) => {
            setState({
              ...state,
              array: e,
            });
            console.log(state);
          }}
          components={{
            Toolbar: GridToolbar,
          }} */
        />
      )
      <div>
       {/*  {state !== [] ? (
          <button
            onClick={() => {
              eliminar();
            }}
          >
            Eliminar
          </button>
        ) : null} */}
      </div>
    </div>
  );
}
