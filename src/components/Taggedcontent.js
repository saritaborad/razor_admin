
import React from 'react';
// import UserLayout from "./UserLayout";
import ConductImage from "../images/conduct-image1.png";
import Eye from "../images/eye.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown } from "react-bootstrap";
import Profile from "../images/profile_1.png";
import RoundCheckIcon from "../images/round-check-icon.png";
import Hands from "../images/hands-icon.svg";
import Responder from "../images/responder-icon.svg";

export default function Taggedcontent() {
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
                                <div className='d-sm-flex d-block justify-content-end'>
                                    <button type="button" className="btn-comn-class-black-bdr me-3 mb-2 mb-sm-0">
                                        Eliminar comentario
                                    </button>
                                    <button type="button" className="btn-comn-class-black-bdr me-3 mb-2 mb-sm-0 ">
                                        Ocultar post
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
                                        <div className='conduct-image position-relative h-100' >
                                            <span class="post-viewer-couter d-flex"><img src={Eye} alt="Eye" className="me-2" />105</span>
                                            <img src={ConductImage} alt="prayer" className="w-100 conduct-sl-image" />
                                            <div className='conduct-desc'>
                                                <p>Oremos por mi hna mayor, por favor, se encuentra distanciada del Señor desde hace muchos años y eso le está pasando la factura. Roguemos por su alma y conversión.
                                                    Santa María de Nazareth rogamos por tu intercesión. Amen  .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-8 col-md-8 mt-4'>
                                        <div className='conduct-chat-module '>
                                            <div class="conduct-chat-f-dl mb-4">
                                                <div className='d-flex'>
                                                    <span className='cond-chat-pf'>JD</span>
                                                    <div className='ms-3 w-75'>
                                                        <span className='report-peofile-txt'>Jonny Derry</span>
                                                        <p className='desc-text'><i className="bi bi-geo-alt" />Lousiana, Estados Unidos</p>
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
                                            <ul class="conduct-chat-f-dl-inner">
                                                <li className=''>
                                                    <div className='d-flex align-items-center'>
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className='ms-3'>
                                                            <span className='report-peofile-txt'>Valeria Morales</span>
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
                                                    <div className='mt-2 report-peofile-txt-bdi'>
                                                        <p>Sigueme en instagram @valeriamoralesr1, si me sigue te sigo</p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <span className='desc-text d-flex'>1d</span>
                                                        <span className='desc-text d-flex ms-3'><img className='me-2' src={Hands} alt="profile" /> Rezar</span>
                                                        <span className='desc-text d-flex ms-3'><img className='me-2' src={Responder} alt="profile" /> Responder</span>
                                                    </div>
                                                </li>
                                                <li className=''>
                                                    <div className='d-flex align-items-center'>
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className='ms-3'>
                                                            <span className='report-peofile-txt'>Valeria Morales</span>
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
                                                    <div className='mt-2 report-peofile-txt-bdi'>
                                                        <p>Sigueme en instagram @valeriamoralesr1, si me sigue te sigo</p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <span className='desc-text d-flex'>1d</span>
                                                        <span className='desc-text d-flex ms-3'><img className='me-2' src={Hands} alt="profile" /> Rezar</span>
                                                        <span className='desc-text d-flex ms-3'><img className='me-2' src={Responder} alt="profile" /> Responder</span>
                                                    </div>
                                                </li>
                                                <li className=''>
                                                    <div className='d-flex align-items-center'>
                                                        <div className="report-peofile">
                                                            <img src={Profile} alt="profile" />
                                                        </div>
                                                        <div className='ms-3'>
                                                            <span className='report-peofile-txt'>Roberto Rodríguez</span>
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
                                                                            <span className="">Más antigua</span>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <div className='mt-2 report-peofile-txt-bdi'>
                                                        <p>El corazón de Jesus es tan puro y noble como la de su amado padre nuestro Dios.</p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <span className='desc-text d-flex'>1d</span>
                                                        <span className='desc-text d-flex ms-3'><img className='me-2' src={Hands} alt="profile" /> Rezar</span>
                                                        <span className='desc-text d-flex ms-3 fw-6'> 2 rezos</span>
                                                        <span className='desc-text d-flex ms-3'><img className='me-2' src={Responder} alt="profile" /> Responder</span>
                                                    </div>
                                                    <div className='ps-4 mt-3'>
                                                        <div className='d-flex align-items-center '>
                                                            <div className="report-peofile">
                                                                <img src={Profile} alt="profile" />
                                                            </div>
                                                            <div className='ms-3'>
                                                                <span className='report-peofile-txt'>Roberto Rodríguez</span>
                                                            </div>
                                                            <img className='ms-3' src={RoundCheckIcon} alt="RoundCheckIcon" />

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
                                                                                <span className="">Más antigua</span>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                        <div className='mt-2 report-peofile-txt-bdi'>
                                                            <p>El corazón de Jesus es tan puro y noble como la de su amado padre nuestro Dios.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='chat-send-input mt-3 pt-3'>
                                            <div className=' position-relative'>
                                                <input type="search" className="form-control login-comn-input-white" placeholder="Agrega un comentario" />
                                                <button className='comment-send-btn'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={12} viewBox="0 0 11 12" fill="none">
                                                        <path d="M5.80748 6.10167L1.92 6.74993C1.87531 6.75739 1.83336 6.77648 1.79839 6.8053C1.76342 6.83411 1.73665 6.87162 1.72077 6.91406L0.380387 10.5048C0.252387 10.8351 0.597677 11.1499 0.914581 10.9915L10.2049 6.34632C10.2692 6.31419 10.3234 6.26476 10.3612 6.20359C10.399 6.14242 10.4191 6.07192 10.4191 6C10.4191 5.92807 10.399 5.85757 10.3612 5.7964C10.3234 5.73523 10.2692 5.6858 10.2049 5.65367L0.914581 1.00851C0.597677 0.850061 0.252387 1.16542 0.380387 1.49522L1.72129 5.08593C1.73709 5.12847 1.76383 5.16609 1.79881 5.19499C1.83378 5.2239 1.87576 5.24307 1.92052 5.25058L5.808 5.89832C5.83192 5.90251 5.8536 5.915 5.86923 5.9336C5.88485 5.9522 5.89341 5.97571 5.89341 6C5.89341 6.02428 5.88485 6.04779 5.86923 6.06639C5.8536 6.08499 5.83192 6.09748 5.808 6.10167H5.80748Z" fill="white" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </Slider>
    );
}
