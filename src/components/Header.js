import Logo from "../images/logo.svg";
import Profile from "../images/profile.png";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(params) {

    const addmainclass = () => {
            document.getElementById("root").classList.toggle("dash-main-class-add");
    }
    
    const openUserinfo = () => {
        document.getElementById("user-detail").classList.toggle("active-user-info");
    };

        return (
            <>
                <header className="header-top-section">
                    <nav className="navbar fixed-top">
                         <ul className="d-flex align-items-senter me-auto">
                            <li>
                                <div className="hdr-logo-top  text-xl-center d-flex align-items-center">
                                    <Link  to='/dashboard'>
                                        <img src={Logo} className="img-fluid d-block d-xl-none ms-4" alt="jamske"/>
                                    </Link>
                                    <span className="d-none d-xl-block ">Dashboard</span>
                                </div>
                            </li>
                        </ul> 
                        <ul className="d-flex align-items-center hdr-rgt-part" id="user-detail">
                            <li className="admin-notif" id="notify">
                                <Link to='/#'>
                                    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.6156 16.1736C18.7531 15.2468 17.1393 13.8526 17.1393 9.28569C17.1393 5.81695 14.7071 3.04017 11.4277 2.35892V1.42857C11.4277 0.63973 10.7884 0 10 0C9.21161 0 8.57233 0.63973 8.57233 1.42857V2.35892C5.29287 3.04017 2.86074 5.81695 2.86074 9.28569C2.86074 13.8526 1.2469 15.2468 0.384405 16.1736C0.116548 16.4616 -0.00220127 16.8058 3.08654e-05 17.1428C0.00494156 17.8749 0.579493 18.5714 1.43306 18.5714H18.5669C19.4205 18.5714 19.9955 17.8749 20 17.1428C20.0022 16.8058 19.8835 16.4611 19.6156 16.1736ZM3.01475 16.4285C3.96207 15.1799 4.99778 13.1102 5.00269 9.31158C5.00269 9.30265 5.00002 9.29461 5.00002 9.28569C5.00002 6.52409 7.2384 4.2857 10 4.2857C12.7616 4.2857 15 6.52409 15 9.28569C15 9.29461 14.9973 9.30265 14.9973 9.31158C15.0022 13.1107 16.0379 15.1803 16.9852 16.4285H3.01475ZM10 22.8571C11.5768 22.8571 12.8558 21.5781 12.8558 19.9999H7.14421C7.14421 21.5781 8.42322 22.8571 10 22.8571Z" fill="#9FA1B2"/>
                                    </svg>
                                </Link>        
                            </li>
                            <li className="admin-mail" id="mail">
                                <Link  to='/#'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z" fill="#9FA1B2"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.18073 5.42662C1.49745 4.97417 2.12098 4.86414 2.57343 5.18085L12 11.7794L21.4265 5.18085C21.879 4.86414 22.5025 4.97417 22.8192 5.42662C23.1359 5.87907 23.0259 6.5026 22.5734 6.81932L12.5734 13.8193C12.2291 14.0603 11.7708 14.0603 11.4265 13.8193L1.4265 6.81932C0.974052 6.5026 0.864017 5.87907 1.18073 5.42662Z" fill="#9FA1B2"/>
                                    </svg>
                                </Link>        
                            </li>
                            <li className="profile-hdr-drop-class">
                                <Dropdown className="d-inline" drop="left">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-autoclose-true">
                                        <div className="profile-hdr-drop">
                                            <div className="profile-pic me-none me-sm-2">
                                                <img src={Profile} alt="profile" />
                                            </div>
                                            <div className="profil-detail-section text-start ms-none ms-sm-2 d-flex">
                                                <span className="d-none d-sm-block">Diego Rodríguez</span>
                                                <bdi className="ms-2 ms-sm-4 ">
                                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 1.16994C10.8126 0.983692 10.5592 0.87915 10.295 0.87915C10.0308 0.87915 9.77737 0.983692 9.59001 1.16994L6.00001 4.70994L2.46001 1.16994C2.27265 0.983692 2.0192 0.87915 1.75501 0.87915C1.49082 0.87915 1.23737 0.983692 1.05001 1.16994C0.956281 1.26291 0.881887 1.37351 0.831118 1.49537C0.780349 1.61723 0.754211 1.74793 0.754211 1.87994C0.754211 2.01195 0.780349 2.14266 0.831118 2.26452C0.881887 2.38638 0.956281 2.49698 1.05001 2.58994L5.29001 6.82994C5.38297 6.92367 5.49357 6.99806 5.61543 7.04883C5.73729 7.0996 5.868 7.12574 6.00001 7.12574C6.13202 7.12574 6.26273 7.0996 6.38459 7.04883C6.50645 6.99806 6.61705 6.92367 6.71001 6.82994L11 2.58994C11.0937 2.49698 11.1681 2.38638 11.2189 2.26452C11.2697 2.14266 11.2958 2.01195 11.2958 1.87994C11.2958 1.74793 11.2697 1.61723 11.2189 1.49537C11.1681 1.37351 11.0937 1.26291 11 1.16994Z" fill="#9FA1B2"/>
                                                    </svg>
                                                </bdi>
                                            </div>
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="Perfiles">Perfiles</Dropdown.Item>
                                        <Dropdown.Item href="/login" className="border-0">
                                            cerrar sesión
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                        <div className="d-md-none">
                            <button type="button" className="border-0 bg-transparent p-0" onClick={openUserinfo}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" fill="#252733" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </header>
                <div id="idarrow" className="arrw-left-icon position-fixed d-xl-none" onClick={addmainclass}>
                    <i className="bi bi-chevron-left d-flex align-items-center justify-content-center"></i>
                </div>
            </>
        );
    }