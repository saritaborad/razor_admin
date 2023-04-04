import SideImg from "../../../src/images/personal-detail.png";
import Logo from "../../../src/images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import CheckImg from "../../../src/images/check.svg";
import CloseImg from "../../../src/images/close.svg";
import CircleImg from "../../../src/images/circle.svg";
import React from "react";

export default function SolicituedDeRegistro(params) {
    const [occupation, setEmail] = useState("");
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
                                    <p>Salmo 34:1</p>
                                    <p>Bendeciré al Señor a todas horas; mis labios siempre lo alabarán.</p>
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
                                                <h1>Detalles personales</h1>
                                                <p>Información necesaria ser parte del equipo de rezar</p>
                                            </div>
                                            <Formik
                                                // innerRef={this.runforms}
                                                // enableReinitialize
                                                initialValues={{
                                                    occupation: occupation,
                                                    password: password,
                                                }}

                                                validationSchema={Yup.object({
                                                    occupation: Yup.string().email("Ingresar Correo electrónico.").required("Ocupación es requerido."),
                                                    password: Yup.string().required("Contraseña es requerido."),

                                                })}

                                                onSubmit={(formData, { resetForm }) => {
                                                    submitFormData(formData, resetForm);
                                                }}
                                            >
                                                {(runform) => (
                                                    <form className="row" onSubmit={runform.handleSubmit}>
                                                        <div className="col-12">
                                                            <label className="d-block login-label-text mb-2">Fecha de nacimiento</label>
                                                            <div className="row date-of-birth-select me-0">
                                                                <div className="col-md-3 mb-3 pe-0">
                                                                    <select name="date" className="form-control login-comn-input">
                                                                        <option value="" selected>01</option>
                                                                        <option value="">02</option>
                                                                        <option value="">03</option>
                                                                        <option value="">04</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-6 mb-3 pe-0">
                                                                    <select name="month" className="form-control login-comn-input">
                                                                        <option value="" selected>Enero</option>
                                                                        <option value="">febrero</option>
                                                                        <option value="">marzo </option>
                                                                        <option value="">abril </option>
                                                                        <option value="">mayo </option>
                                                                        <option value="">junio</option>
                                                                        <option value="">julio</option>
                                                                        <option value="">agosto</option>
                                                                        <option value="">septiembre</option>
                                                                        <option value="">octubre </option>
                                                                        <option value="">noviembre </option>
                                                                        <option value="">diciembre </option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-3 mb-3 pe-0">
                                                                    <select name="date" className="form-control login-comn-input">
                                                                        <option value="" selected>1990</option>
                                                                        <option value="">1991</option>
                                                                        <option value="">1992</option>
                                                                        <option value="">1993</option>
                                                                        <option value="">1994</option>
                                                                        <option value="">1995</option>
                                                                        <option value="">1996</option>
                                                                        <option value="">1997</option>
                                                                        <option value="">1998</option>
                                                                        <option value="">1999</option>
                                                                        <option value="">2000</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mb-3">
                                                            <label className="d-block login-label-text mb-2">Ocupación</label>
                                                            <input type="text" className="form-control login-comn-input" name="occupation"  {...formAttr(runform, "occupation")} placeholder="Estudiante, Sacerdote, Monaguillo..." />
                                                            {errorContainer(runform, "occupation")}
                                                        </div>
                                                        <div className="col-12 mb-4">
                                                            <label className="d-block login-label-text mb-2">Contraseña</label>
                                                            <bdi className="d-block position-relative">
                                                                <input type="password" className="form-control login-comn-input pe-5" {...formAttr(runform, "password")} name="password" id="password" placeholder=".........." />
                                                                <span className="showpwd-class bg-transparent" id="show_pwd" onClick={(e) => passwordshow(e)}>
                                                                    <i className="bi bi-eye-slash"></i>
                                                                </span>
                                                            </bdi>
                                                            {errorContainer(runform, "password")}
                                                        </div>

                                                        <ul class="password-suggest mb-4">
                                                            <li><img src={CheckImg} alt="CheckImg" className="img-fluid me-2" /><span className="ck-green">Al menos una letra mayúscula</span></li>
                                                            <li><img src={CloseImg} alt="CloseImg" className="img-fluid me-2" /><span className="ck-red">Min. 8 carácteres</span></li>
                                                            <li><img src={CircleImg} alt="CircleImg" className="img-fluid me-2" /><span className="">Al menos un número o símbolo</span></li>
                                                        </ul>
                                                        <div className="col-12 mb-4  text-center">
                                                        <Link to="/Dashboard">
                                                            <button type="submit" className="btn-comn-class w-100">
                                                                Crear cuenta
                                                            </button>
                                                        </Link>
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
