import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown, Modal, Button } from 'react-bootstrap';
import OrderProductImage from '../../src/images/profile.png';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from 'react-select';
import React from "react";

export default function Notificaciones(params) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    const submitFormData = (formData, resetForm) => {
        console.log("form :: ", formData);
    };

    const errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };

    const formAttr = (form, field) => ({
        onBlur: form.handleBlur,
        onChange: form.handleChange,
        value: form.values[field],
    });

    const options2 = [
        { value: 'Usuario', label: 'Usuario' },
        { value: 'Moderador', label: 'Moderador' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show2, setreadyShow] = useState(false);
    const handleReadyClose = () => setreadyShow(false);
    const handleReadyShow = () => {
        setreadyShow(true)
        setShow(false)
    }

    const InnerDrowpdownShow = () => {
        document.getElementById("inner-dropdown-wrap").classList.toggle("active-user-info");
    };

    const InnerDrowpdownHide = () => {
        document.getElementById("inner-dropdown-wrap").classList.remove("active-user-info");
    };


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
    const Notificaciones = [
        {
            Usuario: "Bosco Ybarra",
            Fecha_de_creación: "Esta oración es para pers...",
            Rango: "16 de abril 2022, 5:00 a.m",
        },
        {
            Usuario: "Rosa Ali",
            Fecha_de_creación: "Donenme por favor https:/...",
            Rango: "16 de abril 2022, 5:00 a.m",

        },
        {
            Usuario: "Betty Mendez",
            Fecha_de_creación: "Donenme por favor https:/...",
            Rango: "16 de abril 2022, 5:00 a.m",

        },
        {
            Usuario: "Raúl Acosta",
            Fecha_de_creación: "Donenme por favor https:/...",
            Rango: "16 de abril 2022, 5:00 a.m",

        },
        {
            Usuario: "Ronald Borjas",
            Fecha_de_creación: "Donenme por favor https:/...",
            Rango: "16 de abril 2022, 5:00 a.m",

        },
        {
            Usuario: "Valeria Morales",
            Fecha_de_creación: "Sigueme en instagram @v...",
            Rango: "16 de abril 2022, 5:00 a.m",
        },
    ];
    const columns = [
        {
            name: "Usuario",
            label: "Usuario",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div>
                            <img src={OrderProductImage} className="img-fluid" alt="" />
                            <span className="d-inline-block ms-3">Bosco Ybarra</span>
                        </div>
                    );
                },
            },
        },
        {
            name: "Fecha_de_creación",
            label: "Fecha decreación",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="">
                            <span className="">May 26, 2019</span>
                            <p className="desc-text">6:30 PM</p>
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
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="table-ed-drop">
                            <Dropdown drop="left">
                                <Dropdown.Toggle className="range-dropdown-btn">
                                    Propietario
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={InnerDrowpdownShow}>
                                        <div>
                                            <span className="ms-2">Usuario</span>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={InnerDrowpdownShow}>
                                        <div>
                                            <span className="ms-2">Moderador</span>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="inner-dropdown-wrap" id="inner-dropdown-wrap">
                                <span className="desc-text">¿Seguro de realizar este cambio?</span>
                                <div className="d-flex mt-3">
                                    <button className="btn-comn-class"><bdi>Aceptar</bdi></button>
                                    <button className="btn-comn-class-pink-bdr ms-3" onClick={InnerDrowpdownHide}><bdi>Descartar</bdi></button>
                                </div>
                            </div>
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
                                    <Dropdown.Item href="/">
                                        <div>
                                            <span className="ms-2">Editar</span>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/">
                                        <div>
                                            <span className="ms-2">Eliminar</span>
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
                            <div className="col-12 mb-3">
                                <bdi className="d-block position-relative">
                                    <input type="search" className="form-control login-comn-input-white  searchbar ps-5" placeholder="Buscar usuarios por nombre, fecha o país" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#6C6A81" className="bi bi-search fix-in-icon" viewBox="0 0 14 14">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#9FA1B2" />
                                    </svg>
                                </bdi>
                            </div>
                            <div className="col-md-12">
                                <div className="main-bdr-box">
                                    <div className="main-top-hdr">
                                        <div className="row">
                                            <div className="col-md-4 mb-3 mb-sm-0">
                                                <div className="main-top-hdr-inner">
                                                    <span>Gestión de usuarios</span>
                                                </div>
                                            </div>
                                            <div className="col-md-8 text-end ">
                                                <div className="table-ed-drop">
                                                    <Button className="btn-comn-class new-user-btn" onClick={handleShow}>Nuevo usuario</Button>
                                                    <Dropdown drop="right" className="d-inline-block ms-3 reports-dropdown">
                                                        <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                                                <path d="M0.128568 2.26839L2.31563 0.125478C2.48647 -0.0418526 2.7636 -0.0417991 2.93434 0.125478L5.12132 2.26839C5.39667 2.53812 5.20059 3.00001 4.81195 3.00001H3.5V11.5714C3.5 11.8081 3.30414 12 3.0625 12H2.1875C1.94586 12 1.75 11.8081 1.75 11.5714V3.00001H0.437935C0.0485329 3.00001 -0.146209 2.53758 0.128568 2.26839ZM6.5625 1.7143H13.5625C13.8041 1.7143 14 1.52243 14 1.28573V0.428584C14 0.191879 13.8041 1.34454e-05 13.5625 1.34454e-05H6.5625C6.32086 1.34454e-05 6.125 0.191879 6.125 0.428584V1.28573C6.125 1.52243 6.32086 1.7143 6.5625 1.7143ZM6.125 4.71429V3.85715C6.125 3.62045 6.32086 3.42858 6.5625 3.42858H11.8125C12.0541 3.42858 12.25 3.62045 12.25 3.85715V4.71429C12.25 4.951 12.0541 5.14287 11.8125 5.14287H6.5625C6.32086 5.14287 6.125 4.951 6.125 4.71429ZM6.125 11.5714V10.7143C6.125 10.4776 6.32086 10.2857 6.5625 10.2857H8.3125C8.55414 10.2857 8.75 10.4776 8.75 10.7143V11.5714C8.75 11.8081 8.55414 12 8.3125 12H6.5625C6.32086 12 6.125 11.8081 6.125 11.5714ZM6.125 8.14286V7.28572C6.125 7.04901 6.32086 6.85715 6.5625 6.85715H10.0625C10.3041 6.85715 10.5 7.04901 10.5 7.28572V8.14286C10.5 8.37957 10.3041 8.57143 10.0625 8.57143H6.5625C6.32086 8.57143 6.125 8.37957 6.125 8.14286Z" fill="#C5C7CD" />
                                                            </svg>
                                                            <span className="ms-2">Ordenar</span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Más reciente</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Más antigua</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <Dropdown drop="right" className="d-inline-block ms-3 reports-dropdown">
                                                        <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                                                <path d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549V10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437V5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z" fill="#C5C7CD" />
                                                            </svg>
                                                            <span className="ms-2">Filtrar</span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Contenido abusivo</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Spam</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Pendientes por validar</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <div>
                                                                    <span className="ms-2">Publicaciones aceptadas</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bx-white-main comn-table-box notification-table">
                                        <MUIDataTable data={Notificaciones} columns={columns} options={options} />
                                    </div>

                                    <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn" show={show} onHide={handleClose} animation={false}>
                                        <Modal.Header closeButton className="border-0 text-center">
                                            <Modal.Title>
                                                <span>Asignar usuario</span>
                                                <p className="desc-text">Creación de usuario administrador</p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Formik initialValues={{
                                                name: name,
                                                surname: surname,
                                                email: email,
                                            }}

                                                validationSchema={Yup.object({
                                                    email: Yup.string().email("Ingresar Correo electrónico.").required("Correo electrónico es requerido."),

                                                    name: Yup.string().required("Nombre es requerido."),
                                                    surname: Yup.string().required("Apellido es requerido."),

                                                })}

                                                onSubmit={(formData, { resetForm }) => {
                                                    submitFormData(formData, resetForm);
                                                }}
                                            >
                                                {(runform) => (
                                                    <form className="row" onSubmit={runform.handleSubmit}>
                                                        <div className="col-12 mb-3">
                                                            <label className="d-block login-label-text mb-2">Nombre</label>
                                                            <input type="text" className="form-control login-comn-input" name="name"  {...formAttr(runform, "name")} placeholder="Nombre" />
                                                            {errorContainer(runform, "name")}
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <label className="d-block login-label-text mb-2">Apellido</label>
                                                            <input type="text" className="form-control login-comn-input" name="surname"  {...formAttr(runform, "surname")} placeholder="Apellido" />
                                                            {errorContainer(runform, "surname")}
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <label className="d-block login-label-text mb-2">Correo electrónico</label>
                                                            <input type="email" className="form-control login-comn-input" name="email"  {...formAttr(runform, "email")} placeholder="Antonio@mail.com" />
                                                            {errorContainer(runform, "email")}
                                                        </div>
                                                        <div className="col-12 mb-4">
                                                            <label className="d-block login-label-text mb-2">Asignación de rango</label>
                                                            <Select className="form-control-select"
                                                                defaultValue={selectedOption}
                                                                onChange={setSelectedOption}
                                                                options={options2}
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-4  text-center">
                                                            <Button type="submit" onClick={handleReadyShow} className="btn-comn-class w-100" >
                                                                Enviar asignación
                                                            </Button>
                                                        </div>
                                                    </form>)}
                                            </Formik>
                                        </Modal.Body>
                                    </Modal>

                                    <Modal dialogClassName="modal-dialog modal-dialog-centered modal-cust-main-cmn" show={show2} onHide={handleReadyClose} animation={false}>

                                        <Modal.Body className="text-center ready-modal-cont mt-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 44 44" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M31.1396 15.5621C31.9753 16.2585 32.0882 17.5005 31.3918 18.3362L21.5433 30.1544C21.189 30.5795 20.6722 30.836 20.1194 30.8611C19.5666 30.8861 19.0287 30.6775 18.6374 30.2862L12.7283 24.3771C11.9591 23.6079 11.9591 22.3607 12.7283 21.5915C13.4975 20.8223 14.7446 20.8223 15.5139 21.5915L19.8978 25.9755L28.3655 15.8142C29.0619 14.9785 30.3039 14.8656 31.1396 15.5621Z" fill="#00CABA" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.9999 4.2724C12.2094 4.2724 4.27265 12.2092 4.27265 21.9997C4.27265 31.7902 12.2094 39.727 21.9999 39.727C31.7904 39.727 39.7272 31.7902 39.7272 21.9997C39.7272 12.2092 31.7904 4.2724 21.9999 4.2724ZM0.333252 21.9997C0.333252 10.0335 10.0337 0.333008 21.9999 0.333008C33.9661 0.333008 43.6666 10.0335 43.6666 21.9997C43.6666 33.9658 33.9661 43.6663 21.9999 43.6663C10.0337 43.6663 0.333252 33.9658 0.333252 21.9997Z" fill="#00CABA" />
                                            </svg>
                                            <span>Correo de asignación enviado</span>
                                            <p className="desc-text mt-3 mb-0">Este correo ha sido enviado, se está a la espera de apertura y asignación de contraseña</p>

                                        </Modal.Body>
                                        <Modal.Footer className="border-0 pb-5">
                                            <Link to='/detalles_personales' className="w-100 btn-comn-class">
                                                Listo
                                            </Link>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
