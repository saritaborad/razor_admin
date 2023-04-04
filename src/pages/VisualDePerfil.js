import UserLayout from "../components/UserLayout";
import Profile from "../images/prefilmen.png";
import Prayer_1 from "../images/prayer-1.png";
import Prayer_2 from "../images/prayer-2.png";
import Prayer_3 from "../images/prayer-3.png";
import Prayer_4 from "../images/prayer-4.png";
import Prayer_5 from "../images/prayer-5.png";
import React from "react";
import { Link } from "react-router-dom";
// import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

export default function VisualDePerfil() {
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
                                    <div className="main-top-hdr">
                                        <a href="/perfiles" className="d-inline-block">
                                            <div className="main-top-hdr-inner d-flex align-items-center">
                                                <div className="me-3">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.6661 6.66663H4.54191L8.94374 2.28357C9.19491 2.03271 9.33602 1.69246 9.33602 1.33769C9.33602 0.98291 9.19491 0.642664 8.94374 0.391799C8.69256 0.140934 8.35189 0 7.99668 0C7.64146 0 7.30079 0.140934 7.04961 0.391799L0.380176 7.05298C0.258738 7.17968 0.163545 7.32908 0.10006 7.49261C-0.0333532 7.81696 -0.0333532 8.18077 0.10006 8.50511C0.163545 8.66865 0.258738 8.81805 0.380176 8.94475L7.04961 15.6059C7.17362 15.7308 7.32115 15.8299 7.48369 15.8975C7.64624 15.9652 7.82059 16 7.99668 16C8.17276 16 8.34711 15.9652 8.50966 15.8975C8.6722 15.8299 8.81973 15.7308 8.94374 15.6059C9.06876 15.4821 9.16799 15.3347 9.23571 15.1724C9.30343 15.01 9.3383 14.8359 9.3383 14.66C9.3383 14.4842 9.30343 14.31 9.23571 14.1477C9.16799 13.9853 9.06876 13.838 8.94374 13.7142L4.54191 9.3311H14.6661C15.0199 9.3311 15.3592 9.19074 15.6093 8.9409C15.8595 8.69105 16 8.35219 16 7.99886C16 7.64553 15.8595 7.30667 15.6093 7.05683C15.3592 6.80699 15.0199 6.66663 14.6661 6.66663Z" fill="#8B8DA0" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span>Vista de perfil </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="main-top-bottom">
                                        <div className="main-btm-inner d-md-flex mb-sm-5 mb-3">
                                            <div className="profile-div-left d-lg-flex">
                                                <div className="d-sm-flex pro-main-sec">
                                                    <div className="profile-div">
                                                        <div>
                                                            <img src={Profile} alt="profile" className="img-fluid" />
                                                        </div>
                                                        <div>
                                                            <button type="button" className="btn-comn-class-pink-bdr mt-3">
                                                                <bdi>Eliminar avatar</bdi>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="icon-tooltip-div">
                                                        <div>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={<Tooltip >
                                                                    Administrador
                                                                </Tooltip>}
                                                            >
                                                                <Button>
                                                                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64888 0.0636709C8.87526 -0.0212236 9.12474 -0.0212236 9.35112 0.0636709L17.3511 3.06367C17.7414 3.21003 18 3.58316 18 4V11C18 14.4464 15.7183 17.2003 13.6585 19.0026C12.6076 19.9221 11.5615 20.6408 10.78 21.1292C10.3882 21.3741 10.0603 21.5627 9.82807 21.6913C9.71187 21.7556 9.61943 21.805 9.55468 21.839C9.5223 21.856 9.49683 21.8692 9.47876 21.8784L9.45726 21.8894L9.45078 21.8926L9.44863 21.8937C9.44831 21.8939 9.44721 21.8944 9 21C8.55279 21.8944 8.55249 21.8943 8.55217 21.8941L8.54922 21.8926L8.54274 21.8894L8.52124 21.8784C8.50317 21.8692 8.4777 21.856 8.44532 21.839C8.38057 21.805 8.28813 21.7556 8.17193 21.6913C7.93968 21.5627 7.61177 21.3741 7.22 21.1292C6.43854 20.6408 5.39238 19.9221 4.3415 19.0026C2.28175 17.2003 0 14.4464 0 11V4C0 3.58316 0.258573 3.21003 0.648877 3.06367L8.64888 0.0636709ZM9 21L8.55217 21.8941C8.8337 22.0349 9.16569 22.0352 9.44721 21.8944L9 21ZM9 19.8628C9.19164 19.7541 9.4367 19.6103 9.72 19.4333C10.4385 18.9842 11.3924 18.3279 12.3415 17.4974C14.2817 15.7997 16 13.5536 16 11V4.693L9 2.068L2 4.693V11C2 13.5536 3.71825 15.7997 5.6585 17.4974C6.60762 18.3279 7.56146 18.9842 8.28 19.4333C8.5633 19.6103 8.80836 19.7541 9 19.8628Z" fill="#767990" />
                                                                    </svg>
                                                                </Button>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={<Tooltip >
                                                                    Verificar
                                                                </Tooltip>}
                                                            >
                                                                <Button>
                                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="11" cy="11" r="11" fill="#2196F3" />
                                                                        <path d="M16.6383 6.97512C16.5602 6.89636 16.4672 6.83385 16.3648 6.79119C16.2624 6.74853 16.1526 6.72656 16.0417 6.72656C15.9307 6.72656 15.8209 6.74853 15.7185 6.79119C15.6161 6.83385 15.5232 6.89636 15.4451 6.97512L9.18501 13.2436L6.55494 10.6051C6.47383 10.5268 6.37809 10.4652 6.27318 10.4238C6.16826 10.3825 6.05623 10.3622 5.94348 10.3642C5.83074 10.3661 5.71947 10.3902 5.61605 10.4352C5.51263 10.4801 5.41908 10.545 5.34073 10.6261C5.26239 10.7072 5.20078 10.803 5.15944 10.9079C5.11809 11.0128 5.09782 11.1248 5.09977 11.2376C5.10172 11.3503 5.12586 11.4616 5.17081 11.565C5.21576 11.6684 5.28064 11.762 5.36174 11.8403L8.58841 15.067C8.66652 15.1458 8.75946 15.2083 8.86185 15.2509C8.96425 15.2936 9.07408 15.3155 9.18501 15.3155C9.29593 15.3155 9.40576 15.2936 9.50816 15.2509C9.61055 15.2083 9.70349 15.1458 9.7816 15.067L16.6383 8.21032C16.7236 8.13164 16.7916 8.03614 16.8382 7.92984C16.8847 7.82355 16.9088 7.70876 16.9088 7.59272C16.9088 7.47668 16.8847 7.36189 16.8382 7.25559C16.7916 7.1493 16.7236 7.0538 16.6383 6.97512Z" fill="white" />
                                                                    </svg>
                                                                </Button>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={<Tooltip >
                                                                    Editar avatar
                                                                </Tooltip>}
                                                            >
                                                                <Button>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="24" height="24" fill="white" />
                                                                        <path d="M17 2.99981C17.2626 2.73717 17.5744 2.52883 17.9176 2.38669C18.2608 2.24455 18.6286 2.17139 19 2.17139C19.3714 2.17139 19.7392 2.24455 20.0824 2.38669C20.4256 2.52883 20.7374 2.73717 21 2.99981C21.2626 3.26246 21.471 3.57426 21.6131 3.91742C21.7553 4.26058 21.8284 4.62838 21.8284 4.99981C21.8284 5.37125 21.7553 5.73905 21.6131 6.08221C21.471 6.42537 21.2626 6.73717 21 6.99981L7.5 20.4998L2 21.9998L3.5 16.4998L17 2.99981Z" fill="#FFE297" stroke="#FFBC11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </Button>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                delay={{ show: 250, hide: 400 }}
                                                                overlay={<Tooltip >
                                                                    Eliminar usuario
                                                                </Tooltip>}
                                                            >
                                                                <Button>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6465 5.35349C19.1178 5.82481 19.1178 6.58898 18.6465 7.0603L7.0603 18.6465C6.58898 19.1178 5.82481 19.1178 5.35349 18.6465C4.88217 18.1752 4.88217 17.411 5.35349 16.9397L16.9397 5.35349C17.411 4.88217 18.1752 4.88217 18.6465 5.35349Z" fill="#F80042" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.35349 5.35349C5.82481 4.88217 6.58898 4.88217 7.0603 5.35349L18.6465 16.9397C19.1178 17.411 19.1178 18.1752 18.6465 18.6465C18.1752 19.1178 17.411 19.1178 16.9397 18.6465L5.35349 7.0603C4.88217 6.58898 4.88217 5.82481 5.35349 5.35349Z" fill="#F80042" />
                                                                    </svg>
                                                                </Button>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="counter-main-div mt-4 mt-lg-0">
                                                    <div className="user-name d-flex align-items-center">
                                                        <span>Ronald Borjas</span>
                                                        <div className="ms-4 d-flex align-items-center">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                                                <path d="M17.05 8.02493C16.933 6.80736 16.5027 5.64083 15.801 4.63895C15.0993 3.63706 14.1501 2.83396 13.0458 2.30784C11.9416 1.78173 10.7199 1.55053 9.49976 1.63677C8.27962 1.723 7.10261 2.12373 6.08333 2.79993C5.20766 3.38547 4.47254 4.15768 3.93079 5.06109C3.38903 5.9645 3.05408 6.97669 2.95 8.02493C2.8479 9.06631 2.97889 10.1174 3.33348 11.1018C3.68806 12.0863 4.25733 12.9795 5 13.7166L9.41667 18.1416C9.49414 18.2197 9.5863 18.2817 9.68785 18.324C9.7894 18.3663 9.89832 18.3881 10.0083 18.3881C10.1183 18.3881 10.2273 18.3663 10.3288 18.324C10.4304 18.2817 10.5225 18.2197 10.6 18.1416L15 13.7166C15.7427 12.9795 16.3119 12.0863 16.6665 11.1018C17.0211 10.1174 17.1521 9.06631 17.05 8.02493V8.02493ZM13.8333 12.5416L10 16.3749L6.16667 12.5416C5.60174 11.9766 5.169 11.2935 4.89956 10.5414C4.63011 9.78926 4.53065 8.98676 4.60833 8.1916C4.68652 7.38418 4.94314 6.60423 5.35964 5.90813C5.77615 5.21204 6.34213 4.61719 7.01667 4.1666C7.90079 3.5793 8.93859 3.26601 10 3.26601C11.0614 3.26601 12.0992 3.5793 12.9833 4.1666C13.6558 4.61545 14.2206 5.20767 14.637 5.90071C15.0534 6.59376 15.3111 7.37043 15.3917 8.17493C15.4719 8.97279 15.3737 9.7785 15.1042 10.5337C14.8346 11.2889 14.4006 11.9748 13.8333 12.5416V12.5416ZM10 4.99993C9.25832 4.99993 8.5333 5.21987 7.91661 5.63192C7.29993 6.04398 6.81928 6.62965 6.53545 7.31487C6.25162 8.00009 6.17736 8.75409 6.32206 9.48152C6.46675 10.2089 6.8239 10.8771 7.34835 11.4016C7.8728 11.926 8.54098 12.2832 9.26841 12.4279C9.99584 12.5726 10.7498 12.4983 11.4351 12.2145C12.1203 11.9307 12.706 11.45 13.118 10.8333C13.5301 10.2166 13.75 9.49161 13.75 8.74993C13.7478 7.75605 13.352 6.8035 12.6492 6.10071C11.9464 5.39793 10.9939 5.00213 10 4.99993V4.99993ZM10 10.8333C9.58796 10.8333 9.18516 10.7111 8.84256 10.4822C8.49996 10.2532 8.23293 9.92787 8.07525 9.54719C7.91757 9.16651 7.87631 8.74762 7.9567 8.34349C8.03708 7.93937 8.2355 7.56815 8.52686 7.27679C8.81822 6.98543 9.18943 6.78701 9.59356 6.70663C9.99769 6.62624 10.4166 6.6675 10.7973 6.82518C11.1779 6.98287 11.5033 7.24989 11.7322 7.59249C11.9611 7.9351 12.0833 8.33789 12.0833 8.74993C12.0833 9.30247 11.8638 9.83237 11.4731 10.2231C11.0824 10.6138 10.5525 10.8333 10 10.8333V10.8333Z" fill="#30313B" />
                                                            </svg>
                                                            <bdi>Cúcuta, Colombia</bdi>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="description-div mt-3">
                                                            <div className="description-title">
                                                                <div className="mb-3">
                                                                    <span >Sin descripción</span>
                                                                </div>
                                                                <div className="description-counters">
                                                                    <div className=" d-sm-flex">
                                                                        <div className="d-flex  flex-column text-center description-counter-item-self mt-3">
                                                                            <span className="pb-1">6</span>
                                                                            <bdi>Publicaciones</bdi>
                                                                        </div>
                                                                        <div className="d-flex  flex-column text-center description-counter-item-self mt-3">
                                                                            <span className="pb-1">365</span>
                                                                            <bdi>Comentarios</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-sm-flex">
                                                                        <div className="d-flex  flex-column text-center description-counter-item-self mt-3">
                                                                            <span className="pb-1">59</span>
                                                                            <bdi>Siguiendo</bdi>
                                                                        </div>
                                                                        <div className="d-flex  flex-column text-center description-counter-item-self mt-3">
                                                                            <span className="pb-1">59</span>
                                                                            <bdi>Sigue</bdi>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="date-account-div">
                                                            <div className="d-flex date-account-div-item">
                                                                <div>
                                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-3">
                                                                        <path d="M9.99995 0C8.05674 0.00368884 6.15654 0.571902 4.5308 1.63543C2.90505 2.69896 1.62394 4.21189 0.843504 5.98996C0.0630666 7.76803 -0.183011 9.73448 0.135243 11.6498C0.453498 13.5651 1.32235 15.3466 2.63597 16.7773C3.57417 17.7934 4.71285 18.6044 5.98026 19.159C7.24766 19.7137 8.61631 20 9.99995 20C11.3836 20 12.7522 19.7137 14.0197 19.159C15.2871 18.6044 16.4257 17.7934 17.3639 16.7773C18.6776 15.3466 19.5464 13.5651 19.8647 11.6498C20.1829 9.73448 19.9368 7.76803 19.1564 5.98996C18.376 4.21189 17.0949 2.69896 15.4691 1.63543C13.8434 0.571902 11.9432 0.00368884 9.99995 0ZM9.99995 18.0186C7.92448 18.0155 5.93114 17.2081 4.43939 15.7663C4.8923 14.6647 5.66275 13.7225 6.65285 13.0594C7.64295 12.3963 8.808 12.0422 9.99995 12.0422C11.1919 12.0422 12.357 12.3963 13.3471 13.0594C14.3372 13.7225 15.1076 14.6647 15.5605 15.7663C14.0688 17.2081 12.0754 18.0155 9.99995 18.0186ZM7.99615 8.00828C7.99615 7.61231 8.11367 7.22523 8.33385 6.89599C8.55403 6.56675 8.86698 6.31014 9.23313 6.15861C9.59928 6.00707 10.0022 5.96743 10.3909 6.04468C10.7796 6.12193 11.1366 6.31261 11.4169 6.5926C11.6971 6.87259 11.8879 7.22933 11.9653 7.61769C12.0426 8.00606 12.0029 8.4086 11.8512 8.77444C11.6996 9.14027 11.4427 9.45295 11.1132 9.67294C10.7837 9.89293 10.3963 10.0103 9.99995 10.0103C9.46851 10.0103 8.95884 9.79941 8.58305 9.42395C8.20726 9.04849 7.99615 8.53926 7.99615 8.00828ZM16.9231 14.0145C16.0279 12.4847 14.6502 11.2947 13.0057 10.631C13.5158 10.053 13.8482 9.34031 13.963 8.5783C14.0777 7.8163 13.97 7.03739 13.6526 6.33504C13.3353 5.6327 12.8219 5.03676 12.174 4.61874C11.5261 4.20071 10.7712 3.97836 9.99995 3.97836C9.2287 3.97836 8.47383 4.20071 7.82592 4.61874C7.17801 5.03676 6.66459 5.6327 6.34727 6.33504C6.02994 7.03739 5.9222 7.8163 6.03696 8.5783C6.15172 9.34031 6.48411 10.053 6.99425 10.631C5.34972 11.2947 3.97197 12.4847 3.0768 14.0145C2.36339 12.8003 1.98645 11.4183 1.98473 10.0103C1.98473 7.88642 2.82919 5.84948 4.33234 4.34764C5.83548 2.8458 7.87418 2.00207 9.99995 2.00207C12.1257 2.00207 14.1644 2.8458 15.6676 4.34764C17.1707 5.84948 18.0152 7.88642 18.0152 10.0103C18.0135 11.4183 17.6365 12.8003 16.9231 14.0145Z" fill="#8B8DA0" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <div className="description-title">
                                                                        <span>Fecha de creación de cuenta</span>
                                                                    </div>
                                                                    <div className="counter-date-item mt-2">
                                                                        <span>30 de Diciembre, 2021</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex date-account-div-item border-0">
                                                                <div>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-3">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8182 3C16.8182 2.44772 16.3705 2 15.8182 2C15.2659 2 14.8182 2.44772 14.8182 3V3.81818H9.54549V3C9.54549 2.44772 9.09777 2 8.54549 2C7.9932 2 7.54549 2.44772 7.54549 3V3.81818H5.81821C4.26177 3.81818 3.00003 5.07992 3.00003 6.63636V10.2727V19.3636C3.00003 20.9201 4.26177 22.1818 5.81821 22.1818H18.5455C20.1019 22.1818 21.3637 20.9201 21.3637 19.3636V10.2727V6.63636C21.3637 5.07992 20.1019 3.81818 18.5455 3.81818H16.8182V3ZM19.3637 9.27273V6.63636C19.3637 6.18449 18.9974 5.81818 18.5455 5.81818H16.8182V6.63636C16.8182 7.18865 16.3705 7.63636 15.8182 7.63636C15.2659 7.63636 14.8182 7.18865 14.8182 6.63636V5.81818H9.54549V6.63636C9.54549 7.18865 9.09777 7.63636 8.54549 7.63636C7.9932 7.63636 7.54549 7.18865 7.54549 6.63636V5.81818H5.81821C5.36634 5.81818 5.00003 6.18449 5.00003 6.63636V9.27273H19.3637ZM5.00003 11.2727H19.3637V19.3636C19.3637 19.8155 18.9974 20.1818 18.5455 20.1818H5.81821C5.36634 20.1818 5.00003 19.8155 5.00003 19.3636V11.2727Z" fill="#8B8DA0" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <div className="description-title">
                                                                        <span>Fecha de nacimiento</span>
                                                                    </div>
                                                                    <div className="counter-date-item mt-2">
                                                                        <span>19 de Octubre, 1996</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile-div-right mt-5 mt-md-0">
                                                <div className="position-relative">
                                                <Link to="/ReportesDeConducta">
                                                    <button type="button" className="btn-comn-class-pink-bdr-2 w-100 d-flex align-items-center justify-content-center">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.45455C4.38505 1.45455 1.45455 4.38505 1.45455 8C1.45455 11.615 4.38505 14.5455 8 14.5455C11.615 14.5455 14.5455 11.615 14.5455 8C14.5455 4.38505 11.615 1.45455 8 1.45455ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#FF385C" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 4.36377C8.40167 4.36377 8.72728 4.68938 8.72728 5.09104V8.00013C8.72728 8.40179 8.40167 8.72741 8.00001 8.72741C7.59835 8.72741 7.27274 8.40179 7.27274 8.00013V5.09104C7.27274 4.68938 7.59835 4.36377 8.00001 4.36377Z" fill="#FF385C" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.27274 10.9089C7.27274 10.5073 7.59835 10.1816 8.00001 10.1816H8.00728C8.40894 10.1816 8.73455 10.5073 8.73455 10.9089C8.73455 11.3106 8.40894 11.6362 8.00728 11.6362H8.00001C7.59835 11.6362 7.27274 11.3106 7.27274 10.9089Z" fill="#FF385C" />
                                                        </svg>
                                                        <bdi>
                                                            Reportes
                                                        </bdi>
                                                    </button>
                                                </Link>    
                                                    <div className="report-count">
                                                        <span>+35</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <button type="submit" className="btn-comn-class w-100  d-flex align-items-center justify-content-center">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.63636C4.93318 1.63636 1.63636 4.93318 1.63636 9C1.63636 13.0668 4.93318 16.3636 9 16.3636C13.0668 16.3636 16.3636 13.0668 16.3636 9C16.3636 4.93318 13.0668 1.63636 9 1.63636ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z" fill="#FAFAFA" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z" fill="#FAFAFA" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z" fill="#FAFAFA" />
                                                        </svg>

                                                        <bdi>
                                                            Restringir usuario
                                                        </bdi>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prayer-images-div">
                                            <div className="row me-0">
                                                <div className="col-xxl col-md-3 col-4 mt-3 pe-0">
                                                    <img height="391" src={Prayer_1} alt="prayer" className="w-100" />
                                                </div>
                                                <div className="col-xxl col-md-3 col-4 mt-3 pe-0">
                                                    <img height="391" src={Prayer_2} alt="prayer" className=" w-100" />
                                                </div>
                                                <div className="col-xxl col-md-3 col-4 mt-3 pe-0">
                                                    <img height="391" src={Prayer_3} alt="prayer" className=" w-100" />
                                                </div>
                                                <div className="col-xxl col-md-3 col-4 mt-3 pe-0">
                                                    <img height="391" src={Prayer_4} alt="prayer" className=" w-100" />
                                                </div>
                                                <div className="col-xxl col-md-3 col-4 mt-3 pe-0">
                                                    <img height="391" src={Prayer_5} alt="prayer" className=" w-100" />
                                                </div>
                                            </div>
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
