import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import React from "react";

export default function Perfiles() {
    const options = {
        page: 1,
        show: false,
        sizePerPage: 5,
        totalSize: 10,
        responsive: "standard",
        onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
        onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
        onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
        selectableRows: false,
        download: false,
        print: false,
        viewColumns: false,
        sort: true,
        pagination: true,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Perfiles = [
        {
            Usuarios: "Daniel Pérez",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "0",
            Reportes: "Ninguna",
        },
        {
            Usuarios: "Daniel Pérez",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "0",
            Reportes: "Ninguna",
        },
        {
            Usuarios: "Ronald Borjas",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "0",
            Reportes: "Ninguna",
        },
        {
            Usuarios: "Daniel Pérez",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "642.216",
            Reportes: "Ninguna",
        },
        {
            Usuarios: "Ronald Borjas",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "0",
            Reportes: "Ninguna",
        },
        {
            Usuarios: "Daniel Pérez",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "642.216",
            Reportes: "Ninguna",
        },
        {
            Usuarios: "Daniel Pérez",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "0",
            Reportes: "Ninguna",
        },
        {
            Usuarios: "Ronald Borjas",
            Fecha_de_registro: "May 26, 2019",
            País_o_región: "Colombia",
            Seguidores: "642.216",
            Reportes: "Ninguna",
        },

    ];
    const columns = [
        {
            name: "Usuarios",
            label: "Usuarios",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Título",
            label: "Título",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="table-title-sec">
                            <span className="mb-1">Monaguillo</span>
                            <bdi>verificado el 26.07.2019</bdi>
                        </div>
                    );
                },
            },
        },
        {
            name: "Fecha_de_registro",
            label: "Fecha de registro",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "País_o_región",
            label: "País o región",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Seguidores",
            label: "Seguidores",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Reportes",
            label: "Reportes",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-gray-font" }),
            },
        },
        {
            label: "",
            name: "",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "text-center" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="table-ed-drop">
                            <Dropdown drop="left">
                                <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">                             
                                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#C5C7CD" />
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="VisualDePerfil">
                                        <div>
                                            <span className="ms-2">Vista</span>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    );
                },
            },
        },
    ];
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mb-3 d-xl-none">
                                <div className="hdr-logo-top">
                                    <span>Perfiles</span>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <bdi className="d-block position-relative">
                                    <input type="search" className="form-control login-comn-input-white searchbar ps-5" placeholder="Buscar usuarios por nombre, fecha o país" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#6C6A81" className="bi bi-search fix-in-icon" viewBox="0 0 14 14">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#9FA1B2" />
                                    </svg>
                                </bdi>
                            </div>
                            <div className="col-12">
                                <div className="main-bdr-box">
                                    <div className="main-top-hdr">
                                        <div className="main-top-hdr-inner d-md-flex align-items-center">
                                            <div>
                                                <span>Perfiles de usuarios</span>
                                            </div>
                                            <div className="ms-auto d-sm-flex mt-3 mt-md-0 align-items-center">
                                                <div className="me-0 me-md-4">
                                                    <button type="button" className="btn-comn-class-pink-bdr w-100">
                                                        <bdi>Mostrar usuarios con advertencias</bdi>
                                                    </button>
                                                </div>
                                                <div className="filter-ed-drop mt-3 mt-sm-0">
                                                    <Dropdown drop="left">
                                                        <Dropdown.Toggle className="filter-dropdown-btn" id="dropdown-basic">
                                                            <div className="d-flex align-items-center filter-txt">
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549V10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437V5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z" fill="#C5C7CD" />
                                                                </svg>
                                                                <span className="ms-2">Filtrar</span>
                                                            </div>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Más seguidores</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Menos seguidores</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Más reciente</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Más antiguo</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Título religioso</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-top-bottom px-0 pb-0">
                                        <div className="bx-white-main comn-table-box">
                                            <MUIDataTable data={Perfiles} columns={columns} options={options} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
