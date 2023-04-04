import React from 'react';
import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Maratones() {

  const options = {
    page: 1,
    show: true,
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
const Martones = [
    {
      Nombre_de_la_maratón: "pray for peace"
    },
    {
      Nombre_de_la_maratón: "Pray for Pope Francis and the Church"
    },
    {
      Nombre_de_la_maratón: "Pray for Houston IT Developers"
    },
];
const columns = [
    {
        name: "Nombre_de_la_maratón",
        label: "Nombre de la maratón",
        options: {
            filter: false,
            sort: true,

        },
    },
    {
        name: "Fecha_de_creación",
        label: "Fecha de creación",
        options: {
          filter: false,
          sort: true,
          customBodyRenderLite: (dataIndex) => {
              return (
                  <div className="">
                      <span className="">May 26, 2019</span>
                      <p className="desc-text mb-0">6:30 PM</p>
                  </div>
              );
          },
      },
    },
    {
        name: "Rango",
        label: "Rango",
        options: {
          filter: false,
          sort: false,
          setCellProps: () => ({ className: "text-center" }),
          setCellHeaderProps: () => ({ className: "text-center" }),
          customBodyRenderLite: (dataIndex) => {
              return (
                  <div className='d-flex justify-content-center'>
                   <span className="comn-status-class live-class">Live</span>
                  </div>
              );
          },
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
                              <Dropdown.Item href="EditMaraton">
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
    <UserLayout>
      <div className="content-main-section">
          <div className="container-fluid">
              <div className="row">
                    <div className="col-12 mb-3 d-md-flex">
                        <bdi className="d-block position-relative">
                            <input type="search" className="form-control login-comn-input-white searchbar ps-5" placeholder="Buscar usuarios por nombre, fecha o país" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#6C6A81" className="bi bi-search fix-in-icon" viewBox="0 0 14 14">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#9FA1B2" />
                            </svg>
                        </bdi>
                        <Link to="/CrearMarton" className='ms-auto'>
                            <button type="submit" className="btn-comn-class  mt-3 mt-md-0">
                                Create Marathon
                            </button>
                        </Link>
                    </div>
                    <div className='col-12'>
                      <div className='main-bdr-box'>
                        <div className='main-top-hdr'>
                          <div className="main-top-hdr-inner">
                              <span>Martones</span>
                          </div>
                        </div>

                        <div className="bx-white-main comn-table-box">
                            <MUIDataTable data={Martones} columns={columns} options={options} />
                        </div>
                      </div>
                    </div>
                </div>
          </div>
      </div>
  </UserLayout>
  )
}
