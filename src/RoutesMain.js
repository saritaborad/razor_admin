import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/common/Login';
import SolicituedDeRegistro from "./pages/common/SolicituedDeRegistro";
import Dashboard from "./pages/Dashboard";
import Perfiles from "./pages/Perfiles";
import VisualDePerfil from "./pages/VisualDePerfil";
import Reportes from "./pages/Reportes";
import ControlDeUsarios from "./pages/ControlDeUsarios";
import ReportesDeConducta from "./pages/ReportesDeConducta";
import Maratones from "./pages/Maratones";
import CrearMarton from "./pages/CrearMarton";
import EditMaraton from "./pages/EditMaraton";

import Publicaciones from "./pages/Publicaciones";

export default function RoutesMain() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/perfiles" exact element={<Perfiles />} />
                    <Route path="/visualdeperfil" exact element={<VisualDePerfil />} />
                    <Route path="/reportes" exact element={<Reportes />} />
                    <Route path="/controldeusarios" exact element={<ControlDeUsarios />} />
                    <Route path="/reportesdeconducta" exact element={<ReportesDeConducta />} />
                    <Route path="/solicituedderegistro" exact element={<SolicituedDeRegistro />} />
                    <Route path="/publicaciones" exact element={<Publicaciones />} />
                    <Route path="/maratones" exact element={<Maratones />} />
                    <Route path="/crearmarton" exact element={<CrearMarton />} />
                    <Route path="/editmaraton" exact element={<EditMaraton />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
