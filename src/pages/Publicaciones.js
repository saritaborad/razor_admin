import React from 'react';
import UserLayout from "../components/UserLayout";
import { Dropdown, Modal } from 'react-bootstrap';
import Prayer_1 from "../images/right_side_image.png";
import Prayer_2 from "../images/prayer-2.png";
import Prayer_3 from "../images/prayer-3.png";
import Prayer_4 from "../images/prayer-4.png";
import Prayer_5 from "../images/prayer-5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostModalModerator from '../components/PostModalModerator';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Publicaciones() {

    const openUserinfo = () => {
        document.getElementById("date_range_cont").classList.toggle("active");
    };

    const onChange = ranges => {
        // ranges ...
        console.log(ranges);
    };

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const [storymodal, setStoryModal] = React.useState(false);

    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5 mb-4">
                                <bdi className="d-block position-relative">
                                    <input type="search" className="form-control login-comn-input-white  searchbar search-bar-small ps-5" placeholder="Buscar por hashtags" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#6C6A81" className="bi bi-search fix-in-icon" viewBox="0 0 14 14">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#9FA1B2" />
                                    </svg>
                                </bdi>
                            </div>
                            <div className='col-lg-7 mb-4'>
                                <div className="custom-date-picker">
                                    <div className="cust-d-selector">
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio1" name="selector" className="selector-item_radio" defaultChecked />
                                            <label htmlFor="radio1" className="selector-item_label">24h</label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio2" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio2" className="selector-item_label">7d</label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio3" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio3" className="selector-item_label">14d</label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio4" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio4" className="selector-item_label">30d</label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio5" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio5" className="selector-item_label">90d</label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio6" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio6" className="selector-item_label">180d</label>
                                        </div>
                                        <div className="selecotr-item">
                                            <input type="radio" id="radio7" name="selector" className="selector-item_radio" />
                                            <label htmlFor="radio7" className="selector-item_label">1año</label>
                                        </div>
                                        <span className="px-3 custom-date-text" onClick={openUserinfo}>
                                            Personalizado
                                        </span>
                                    </div>
                                </div>
                                <div className="date-range-cont" id="date_range_cont">
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setState([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={state}
                                    />
                                    <div className="d-flex justify-content-center mb-4">
                                        <button className="btn-comn-class-pink-bdr"><bdi>Cancelar</bdi></button>
                                        <button className="btn-comn-class ms-3"><bdi>Filtrar</bdi></button>
                                    </div>
                                </div>
                                {/* <div className="App">
                                    <DateRangeFilter onChange={onChange} />
                                </div> */}
                                {/* <DatePicker
                                    selected={date}
                                    onSelect={handleDateSelect} // when day is clicked
                                    onChange={handleDateChange} // only when value has changed
                                />*/}
                            </div>
                            <div className="col-12 mb-3">
                                <div className="prayer-images-div main-bdr-box p-3">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 mb-3 mb-sm-0">
                                            <div className="main-top-hdr-inner">
                                                <span>Últimas publicaciones</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-12 text-end ">
                                            <div className="table-ed-drop">
                                                <button className="btn-comn-class-pink-bdr new-user-btn"><bdi>Mostrar publicaciones con reportes</bdi></button>
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
                                                                <span className="ms-2">Más antigua  </span>
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
                                                                <span className="ms-2">Mayor engagement</span>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#">
                                                            <div>
                                                                <span className="ms-2">Menor receptividad</span>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#">
                                                            <div>
                                                                <span className="ms-2">Con enlaces</span>
                                                            </div>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-0 my-sm-4 mb-4 ms-0">
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_1} alt="prayer" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_2} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_3} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_4} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_5} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_1} alt="prayer" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_2} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_3} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_1} alt="prayer" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_2} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_3} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_4} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_5} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_1} alt="prayer" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_2} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_3} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_1} alt="prayer" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_2} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_3} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_4} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_5} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_1} alt="prayer" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_2} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 latest-posts-col mt-3 ps-0">
                                            <div className="latest-posts-cl h-100" onClick={() => setStoryModal(true)}>
                                                <img height="241" src={Prayer_3} alt="prayer" className=" w-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-paginations d-block d-sm-flex justify-content-sm-end justify-content-center">
                                        <div className="d-flex align-items-center justify-content-center mb-2">
                                            <span className="pagination-title">Filas por página</span>
                                            <select className="form-control login-comn-input-white appearance-auto ms-3">
                                                <option>1</option>
                                                <option>2</option>
                                                <option selected>3</option>
                                            </select>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center ms-3 mb-2">
                                            <span className="pagination-title me-3">1-3 de 125</span>
                                            <div>
                                                <button className="bg-transparent border-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                                        <path fillrule="evenodd" cliprule="evenodd" d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" fill="black" />
                                                    </svg>
                                                </button>
                                                <button className="bg-transparent border-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                                        <path fillrule="evenodd" cliprule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <Modal fullscreen={true} aria-labelledby="contained-modal-title-vcenter" className="report-prayer-open-part" show={storymodal} onHide={() => setStoryModal(false)} centered>
                                        <Modal.Header closeButton className="border-0 text-center">
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="prayer-report-slider">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <PostModalModerator />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
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
