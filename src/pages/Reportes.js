import React from 'react';
import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { OverlayTrigger, Tooltip, Dropdown, Modal } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Taggedcontent from '../components/Taggedcontent';

export default function Reportes(params) {

    const [storymodal, setStoryModal] = React.useState(false);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Publicación correcta
        </Tooltip>
    );
    const renderTooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Bloquear publicación
        </Tooltip>
    );
    const renderTooltip3 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Bloquear usuario
        </Tooltip>
    );

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
    const Reportes = [
        {
            Usuario: "Raúl Velazquez",
            Post: "Esta oración es para pers...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Abuso email",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
            Action: "Acciones",
        },
        {
            Usuario: "Roberto Pasado",
            Post: "Donenme por favor https:/...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Abuso emaiSpam email",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
        },
        {
            Usuario: "Roberto Pasado",
            Post: "Donenme por favor https:/...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Abuso emaiSpam email",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
        },
        {
            Usuario: "Roberto Pasado",
            Post: "Donenme por favor https:/...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Spam email",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
        },
        {
            Usuario: "Roberto Pasado",
            Post: "Donenme por favor https:/...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Spam email",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
        },
        {
            Usuario: "Valeria Morales",
            Post: "Sigueme en instagram @v...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Spam",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
        },
        {
            Usuario: "Valeria Morales",
            Post: "Sigueme en instagram @v...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Spam",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
        },
        {
            Usuario: "Valeria Morales",
            Post: "Sigueme en instagram @v...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Spam",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
        },
        {
            Usuario: "Roberto Pasado",
            Post: "Donenme por favor https:/...",
            Tiempo_de_reporte: "16 de abril 2022, 5:00 a.m",
            Razón: "Spam email",
            Ip: "83.56.12.31",
            Visualización: "Visualizar",
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
                        <div className="">
                            <span className="usuario-dot active"></span>
                            <span className="usuario-active"  onClick={() => setStoryModal(true)}>Raúl Velazquez</span>
                        </div>
                    );
                },
            },
        },
        {
            name: "Post",
            label: "Post",
            options: {
                filter: false,
                sort: true,

            },
        },
        {
            name: "Tiempo_de_reporte",
            label: "Tiempo de reporte",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Razón",
            label: "Razón",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Ip",
            label: "Seguidores",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Visualización",
            label: "Visualización",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-gray-blue" }),
            },
        },
        {
            label: "Acciones",
            name: "Acciones",
            options: {
                filter: false,
                sort: false,
                setCellHeaderProps: () => ({ className: "text-center" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="d-flex">
                            <span className="">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <span className="cursor-pointer" variant="success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                            <path d="M14.7099 1.20986C14.617 1.11613 14.5064 1.04174 14.3845 0.990969C14.2627 0.940201 14.132 0.914062 13.9999 0.914062C13.8679 0.914062 13.7372 0.940201 13.6154 0.990969C13.4935 1.04174 13.3829 1.11613 13.29 1.20986L5.83995 8.66986L2.70995 5.52986C2.61343 5.43662 2.49949 5.36331 2.37463 5.3141C2.24978 5.2649 2.11645 5.24077 1.98227 5.24309C1.84809 5.24541 1.71568 5.27414 1.5926 5.32763C1.46953 5.38113 1.35819 5.45834 1.26495 5.55486C1.17171 5.65138 1.0984 5.76532 1.04919 5.89018C0.999989 6.01503 0.975859 6.14836 0.97818 6.28254C0.980502 6.41672 1.00923 6.54913 1.06272 6.67221C1.11622 6.79529 1.19343 6.90662 1.28995 6.99986L5.12995 10.8399C5.22291 10.9336 5.33351 11.008 5.45537 11.0588C5.57723 11.1095 5.70794 11.1357 5.83995 11.1357C5.97196 11.1357 6.10267 11.1095 6.22453 11.0588C6.34639 11.008 6.45699 10.9336 6.54995 10.8399L14.7099 2.67986C14.8115 2.58622 14.8925 2.47257 14.9479 2.34607C15.0033 2.21957 15.0319 2.08296 15.0319 1.94486C15.0319 1.80676 15.0033 1.67015 14.9479 1.54365C14.8925 1.41715 14.8115 1.3035 14.7099 1.20986Z" fill="#00CA51" />
                                        </svg>
                                    </span>
                                </OverlayTrigger>
                            </span>
                            <span className="ms-3">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip2}
                                >
                                    <span className="cursor-pointer" variant="success" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.59177 13.5031 1.99639 11.7769 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.4082 6.49686 18.0036 8.22311 18 10C18 14.42 14.42 18 10 18Z" fill="#E5003B" />
                                        </svg>
                                    </span>
                                </OverlayTrigger>
                            </span>
                            <span className="ms-3">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip3}
                                >
                                    <span className="cursor-pointer" variant="success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect width={24} height={24} fill="white" />
                                            <circle cx={20} cy={10} r="3.25" stroke="#444552" strokeWidth="1.5" />
                                            <path d="M17.5 12.5L22.5 7.5" stroke="#444552" strokeWidth="1.5" />
                                            <path d="M12.6564 12.1029C13.4939 11.4477 14.1051 10.5491 14.4051 9.53226C14.7052 8.51541 14.6791 7.43084 14.3304 6.42944C13.9818 5.42804 13.328 4.55961 12.46 3.94495C11.592 3.3303 10.5529 3 9.48733 3C8.42176 3 7.38269 3.3303 6.51466 3.94495C5.64664 4.55961 4.99284 5.42804 4.64421 6.42944C4.29559 7.43084 4.26948 8.51541 4.56951 9.53226C4.86955 10.5491 5.48081 11.4477 6.31826 12.1029C4.88327 12.6747 3.6312 13.623 2.69552 14.8468C1.75983 16.0705 1.17562 17.5239 1.00515 19.0519C0.992813 19.1635 1.00269 19.2764 1.03422 19.3841C1.06574 19.4919 1.11831 19.5924 1.1889 19.68C1.33147 19.8568 1.53884 19.9701 1.76539 19.9949C1.99194 20.0197 2.2191 19.9539 2.39692 19.8121C2.57473 19.6703 2.68863 19.4641 2.71355 19.2388C2.90112 17.5782 3.69731 16.0445 4.95002 14.9308C6.20273 13.817 7.82412 13.2014 9.50442 13.2014C11.1847 13.2014 12.8061 13.817 14.0588 14.9308C15.3115 16.0445 16.1077 17.5782 16.2953 19.2388C16.3185 19.4475 16.4187 19.6403 16.5764 19.78C16.7341 19.9196 16.9383 19.9961 17.1495 19.9949H17.2434C17.4674 19.9692 17.672 19.8567 17.8128 19.6816C17.9536 19.5066 18.0191 19.2833 17.9951 19.0604C17.8239 17.5281 17.2365 16.071 16.296 14.8453C15.3555 13.6197 14.0974 12.6717 12.6564 12.1029ZM9.48733 11.4998C8.81155 11.4998 8.15095 11.3005 7.58906 10.9271C7.02718 10.5537 6.58924 10.023 6.33063 9.4021C6.07202 8.78119 6.00436 8.09796 6.13619 7.43881C6.26803 6.77965 6.59345 6.17418 7.0713 5.69895C7.54914 5.22373 8.15796 4.9001 8.82075 4.76898C9.48354 4.63787 10.1705 4.70516 10.7949 4.96235C11.4192 5.21954 11.9528 5.65507 12.3283 6.21388C12.7037 6.77268 12.9041 7.42966 12.9041 8.10173C12.9041 9.00295 12.5441 9.86725 11.9034 10.5045C11.2626 11.1418 10.3935 11.4998 9.48733 11.4998Z" fill="#444552" stroke="#444552" strokeWidth="0.5" />
                                        </svg>
                                    </span>
                                </OverlayTrigger>
                            </span>
                            
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
                            <div className="col-12">
                                <div className="main-bdr-box position-relative">
                                    <div className="main-top-hdr">
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mb-sm-0">
                                                <div className="main-top-hdr-inner">
                                                    <span>Contenido marcado (1,306)</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-end ">
                                                <div className="table-ed-drop">
                                                    <Dropdown drop="right" className="d-inline-block reports-dropdown">
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
                                    <div className="bx-white-main comn-table-box">
                                        <MUIDataTable data={Reportes} columns={columns} options={options} />
                                    </div>
                                    <div className='d-flex user-status-bottom'>
                                        <div >
                                            <span className="usuario-dot " />
                                            <span className="usuario-active">Reporte abierto</span>
                                        </div>
                                        <div className='ms-3'>
                                            <span className="usuario-dot active" />
                                            <span className="usuario-active active">Pendiente por revisión</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal fullscreen={true} aria-labelledby="contained-modal-title-vcenter" className="report-prayer-open-part" show={storymodal} onHide={() => setStoryModal(false)} centered>
                    <Modal.Header closeButton className="border-0 text-center"></Modal.Header>
                        <Modal.Body>
                            <div className="prayer-report-slider">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <Taggedcontent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                </Modal>
            </UserLayout>
        </>
    );
}
