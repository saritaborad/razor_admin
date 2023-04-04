import SideImg from "../../images/right_side_image.png";
import Logo from "../../images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function Login(params) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const passwordshow = (e) => {
        document.getElementById("show_pwd").classList.toggle("active");
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0 d-lg-block d-none ">
                        <div className="login-side-img">
                            <img src={SideImg} alt="razer" className="w-100 side-img " />
                            <div className="side-img-txt">
                                <div className="mx-auto">
                                    <p>Salmo 91:1</p>
                                    <p>El que habita al abrigo del Altísimo Morará bajo la sombra del Omnipotente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="login-main-area">
                            <div className="login-main-part-scroll">
                                <div className="login-main-side">
                                    <div className=" login-main-box">
                                        <div className="login-txt-box">
                                            <div className="w-100 text-center mb-5">
                                                <img src={Logo} alt="JAMSKE" className="img-fluid" />
                                            </div>
                                            <div className="mb-5">
                                                <h1>Ingresa al administrador</h1>
                                                <p>Ingresa tu correo y tu contraseña a continuación</p>
                                            </div>
                                            <Formik
                                                // innerRef={this.runforms}
                                                // enableReinitialize
                                                initialValues={{
                                                    email: email,
                                                    password: password,
                                                }}

                                                validationSchema={Yup.object({
                                                    email: Yup.string().email("Ingresar Correo electrónico.").required("Correo electrónico es requerido."),
                                                    password: Yup.string().required("Contraseña es requerido."),

                                                })}

                                                onSubmit={(formData, { resetForm }) => {
                                                    submitFormData(formData, resetForm);
                                                }}
                                            >
                                                {(runform) => (
                                                    <form className="row" onSubmit={runform.handleSubmit}>
                                                        <div className="col-12 mb-3">
                                                            <label className="d-block login-label-text mb-2">Correo electrónico</label>
                                                            <input type="email" className="form-control login-comn-input" name="email"  {...formAttr(runform, "email")} placeholder="Antonio@mail.com" />
                                                            {errorContainer(runform, "email")}
                                                        </div>
                                                        <div className="col-12 mb-4">
                                                            <label className="d-flex login-label-text mb-2">
                                                                Contraseña
                                                                <Link to="/forgotpassword" className="ms-auto"><span>¿Olvidaste tu contraseña?</span></Link>
                                                            </label>
                                                            <bdi className="d-block position-relative">
                                                                <input type="password" className="form-control login-comn-input pe-5" {...formAttr(runform, "password")} name="password" id="password" placeholder=".........." />
                                                                <span className="showpwd-class bg-transparent" id="show_pwd" onClick={(e) => passwordshow(e)}>
                                                                    <i className="bi bi-eye-slash"></i>
                                                                </span>
                                                            </bdi>
                                                            {errorContainer(runform, "password")}
                                                        </div>
                                                        <div className="col-12 mb-4 ">
                                                            <div className="custom-checkbox ">
                                                                <label className="custom-lbl-part" >
                                                                    <input type="checkbox" id="rememberme" />
                                                                    <span className="custom-checkbox-class"></span>
                                                                    Recuerda mi usuario
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mb-4  text-center">
                                                            <button type="submit" className="btn-comn-class w-100">
                                                                <span>Ingresar</span>
                                                            </button>
                                                        </div>
                                                        <div className="col-12 login-btm-link text-center">
                                                            <p>
                                                                ¿Todavía no tienes una cuenta admin? <Link to="/SolicituedDeRegistro">Regístrate</Link>
                                                            </p>
                                                        </div>

                                                    </form>)}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
