
import React from 'react';
import UserLayout from "../components/UserLayout";
import Profile from "../images/profile_1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal } from "react-bootstrap";
import ConductReportsSlider from '../components/ConductReportsSlider';


export default function ReportesDeConducta() {

    const [storymodal, setStoryModal] = React.useState(false);



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
                            <div className="col-12">
                                <div className="main-bdr-box ">
                                    <div className="main-top-hdr d-sm-flex">
                                        <div className="main-top-hdr-inner d-flex align-items-center">
                                            <div className="me-3">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.6661 6.66663H4.54191L8.94374 2.28357C9.19491 2.03271 9.33602 1.69246 9.33602 1.33769C9.33602 0.98291 9.19491 0.642664 8.94374 0.391799C8.69256 0.140934 8.35189 0 7.99668 0C7.64146 0 7.30079 0.140934 7.04961 0.391799L0.380176 7.05298C0.258738 7.17968 0.163545 7.32908 0.10006 7.49261C-0.0333532 7.81696 -0.0333532 8.18077 0.10006 8.50511C0.163545 8.66865 0.258738 8.81805 0.380176 8.94475L7.04961 15.6059C7.17362 15.7308 7.32115 15.8299 7.48369 15.8975C7.64624 15.9652 7.82059 16 7.99668 16C8.17276 16 8.34711 15.9652 8.50966 15.8975C8.6722 15.8299 8.81973 15.7308 8.94374 15.6059C9.06876 15.4821 9.16799 15.3347 9.23571 15.1724C9.30343 15.01 9.3383 14.8359 9.3383 14.66C9.3383 14.4842 9.30343 14.31 9.23571 14.1477C9.16799 13.9853 9.06876 13.838 8.94374 13.7142L4.54191 9.3311H14.6661C15.0199 9.3311 15.3592 9.19074 15.6093 8.9409C15.8595 8.69105 16 8.35219 16 7.99886C16 7.64553 15.8595 7.30667 15.6093 7.05683C15.3592 6.80699 15.0199 6.66663 14.6661 6.66663Z"
                                                        fill="#8B8DA0"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <span>Reportes de conducta </span>
                                            </div>
                                        </div>
                                        <div className="ms-auto mt-3 mt-sm-0">
                                            <button type="submit" className="btn-comn-class w-100 d-flex align-items-center justify-content-center">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M9 1.63636C4.93318 1.63636 1.63636 4.93318 1.63636 9C1.63636 13.0668 4.93318 16.3636 9 16.3636C13.0668 16.3636 16.3636 13.0668 16.3636 9C16.3636 4.93318 13.0668 1.63636 9 1.63636ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z"
                                                        fill="#FAFAFA"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z"
                                                        fill="#FAFAFA"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                                                        fill="#FAFAFA"
                                                    />
                                                </svg>
                                                <bdi>Restringir usuario</bdi>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="main-top-bottom">
                                        <div className="main-btm-inner">
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>

                                                    <p className="report-peofile-txt-bdi mb-0" onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>

                                                    <p className="report-peofile-txt-bdi mb-0" onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>

                                                    <p className="report-peofile-txt-bdi mb-0" onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>

                                                    <p className="report-peofile-txt-bdi mb-0"  onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>

                                                    <p className="report-peofile-txt-bdi mb-0"  onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>

                                                    <p className="report-peofile-txt-bdi mb-0"  onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>

                                                    <p className="report-peofile-txt-bdi mb-0"  onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                            <div className="report-items-prayer">
                                                <div className="report-peofile">
                                                    <img src={Profile} alt="profile" />
                                                </div>
                                                <div className="ms-3 w-100">
                                                    <div className="prayer-report-top-txt ">
                                                        <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                        <div className="prayer-report-date">
                                                            <span className="usuario-active"><bdi>16 de abril 2022, 5:00 a.m</bdi></span>
                                                            <span className="usuario-dot ms-2 active me-0"></span>
                                                        </div>
                                                    </div>
                                                    <p className="report-peofile-txt-bdi mb-0"  onClick={() => setStoryModal(true)}>Reportó por contenido abusivo<span className="report-peofile-txt ms-1">“Que estúpida publicación, mejor borrala antes de que alguien más la lea”</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="custom-paginations d-block d-sm-flex justify-content-sm-end justify-content-center mt-3">
                                            <div className="d-flex align-items-center justify-content-center mb-2">
                                                <span className="pagination-title">Rows per page</span>
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
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
                                        <ConductReportsSlider />
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
