
import React from 'react';
import ConductImage from "../images/conduct-image2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown } from "react-bootstrap";
import Profile from "../images/profile_1.png";

export default function PostModalModeraoter() {
    const [storymodal, setStoryModal] = React.useState(false);
    const story = {
        className: "",
        centerMode: false,
        infinite: false,
        slidesToShow: 1,
        initialSlide: 0,
        speed: 1000,
    };
    return (
        <Slider {...story}>
            <div className='report-box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 px-0'>
                            <div className='main-report-div'>
                                <div className='d-block d-sm-flex justify-content-end'>
                                    <button type="button" className="btn-comn-class-black-bdr mb-2 mb-sm-0 me-3 border-0">
                                        Obviar reportes
                                    </button>
                                    <button type="button" className="btn-comn-class-black-bdr mb-2 mb-sm-0 me-3 border-0">
                                        Dar de baja publicación
                                    </button>
                                    <button type="submit" className="btn-comn-class d-flex align-items-center justify-content-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.63636C4.93318 1.63636 1.63636 4.93318 1.63636 9C1.63636 13.0668 4.93318 16.3636 9 16.3636C13.0668 16.3636 16.3636 13.0668 16.3636 9C16.3636 4.93318 13.0668 1.63636 9 1.63636ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z" fill="#FAFAFA" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z" fill="#FAFAFA" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z" fill="#FAFAFA" />
                                        </svg>
                                        Restringir usuario
                                    </button>
                                </div>
                                <div className='modal-slide-main d-flex mt-sm-4 mt-3 row mx-0'>
                                    <div className='col-lg-4 col-md-4 p-0 '>
                                        <div className='conduct-image position-relative h-100'>
                                            <img src={ConductImage} alt="prayer" className="w-100 conduct-sl-image" />
                                        </div>
                                    </div>
                                    <div className='col-lg-8 col-md-8 mt-4'>
                                        <div className='conduct-chat-module'>
                                            <div class="conduct-chat-f-dl">
                                                <div className='d-flex'>
                                                    <div className='report-peofile'>
                                                        <img src={Profile} alt="profile" />
                                                    </div>
                                                    <div className='ms-3 w-75'>
                                                        <span className='report-peofile-txt'>Jonny Derry</span>
                                                        <p className='desc-text d-flex'><i className="bi bi-geo-alt me-1" />Lousiana, Estados Unidos</p>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <Dropdown drop="left" className="d-inline-block reports-dropdown">
                                                            <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                                                                <i className="bi bi-three-dots" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">
                                                                    <div>
                                                                        <span className="">Más reciente</span>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href="#">
                                                                    <div>
                                                                        <span className="">Más antigua  </span>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className='mt-3 report-peofile-txt-bdi'>
                                                    <p>Mírame con compasión y no me dejes, Madre Mía. ... Animado por esta confianza, vuelo a ti, oh Virgen de las vírgenes, mi madre; A ti vengo, delante de ti estoy, pecaminoso y doloroso.</p>
                                                    <p>Oh, Madre del Verbo Encarnado, no menosprecies mis peticiones, y en tu misericordia escucha y contesta a lo que te pido. Pido el día de hoy por Luci Alameda, por su pronta sanaciónAmen.</p>
                                                </div>
                                            </div>
                                            <div className="main-top-bottom conduct-chat-f-dl-inner">
                                                <div className="main-btm-inner">
                                                    <div className="report-items-prayer">
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className="ms-3 w-100">
                                                            <div className="prayer-report-top-txt ">
                                                                <span className="report-peofile-txt pb-1">Luis Ruiz</span>
                                                                <div className="prayer-report-date">
                                                                    <span className="usuario-active"><bdi>2 min</bdi></span>
                                                                    <span className="usuario-dot ms-2 active me-0"></span>
                                                                </div>
                                                            </div>
                                                            <p className="report-peofile-txt-bdi mb-0">Reportó la publicación por contenido abusivo</p>
                                                        </div>
                                                    </div>
                                                    <div className="report-items-prayer">
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className="ms-3 w-100">
                                                            <div className="prayer-report-top-txt ">
                                                                <span className="report-peofile-txt pb-1">María Palacios</span>
                                                                <div className="prayer-report-date">
                                                                    <span className="usuario-active"><bdi>2 min</bdi></span>
                                                                    <span className="usuario-dot ms-2 active me-0"></span>
                                                                </div>
                                                            </div>
                                                            <p className="report-peofile-txt-bdi mb-0">Reportó la publicación por contenido abusivo</p>
                                                        </div>
                                                    </div>
                                                    <div className="report-items-prayer">
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className="ms-3 w-100">
                                                            <div className="prayer-report-top-txt ">
                                                                <span className="report-peofile-txt pb-1">Luisa Maicabares</span>
                                                                <div className="prayer-report-date">
                                                                    <span className="usuario-active"><bdi>45 min</bdi></span>
                                                                    <span className="usuario-dot ms-2 active me-0"></span>
                                                                </div>
                                                            </div>
                                                            <p className="report-peofile-txt-bdi mb-0">Reportó la publicación por contenido abusivo</p>
                                                        </div>
                                                    </div>
                                                    <div className="report-items-prayer">
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className="ms-3 w-100">
                                                            <div className="prayer-report-top-txt ">
                                                                <span className="report-peofile-txt pb-1">Larry Mendes</span>
                                                                <div className="prayer-report-date">
                                                                    <span className="usuario-active"><bdi>1 d</bdi></span>
                                                                    <span className="usuario-dot ms-2 active me-0"></span>
                                                                </div>
                                                            </div>
                                                            <p className="report-peofile-txt-bdi mb-0">Reportó la publicación por contenido abusivo</p>
                                                        </div>
                                                    </div>
                                                    <div className="report-items-prayer">
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className="ms-3 w-100">
                                                            <div className="prayer-report-top-txt ">
                                                                <span className="report-peofile-txt pb-1">Luisa Maicabares</span>
                                                                <div className="prayer-report-date">
                                                                    <span className="usuario-active"><bdi>2 d</bdi></span>
                                                                    <span className="usuario-dot ms-2 active me-0"></span>
                                                                </div>
                                                            </div>
                                                            <p className="report-peofile-txt-bdi mb-0">Reportó la publicación por spam</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div>

            </div>
        </Slider>
    );
}
