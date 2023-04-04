import React, { useState } from "react";
import UserLayout from "../components/UserLayout";
import { Modal } from "react-bootstrap";
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function CrearMarton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: "selection"
        }
      ]);

  return (
    <UserLayout>
      <div className="content-main-section">
          <div className="container-fluid">
              <div className="row">
                    <div className="col-12 mb-3 d-flex">
                        <div className='ms-auto'>
                            <button type="submit" className="btn-comn-class-gray  mt-3 mt-md-0 me-4">
                                Save Draft
                            </button>
                            <button type="submit" className="btn-comn-class  mt-3 mt-md-0">
                                Start Marathon
                            </button>
                        </div>
                    </div>
                    <div className='col-12'>
                      <div className='main-bdr-box main-top-hdr'>
                        <div className='mb-4'>
                            <label className="d-block login-label-text mb-2">Name of the marathon</label>
                            <input type="text" className="form-control login-comn-input" placeholder="Rezamos por Houston IT Development  " name="marathon_name" />
                        </div>
                        <div className='mb-4'>
                            <label className="d-block login-label-text mb-2">Long description</label>
                            <textarea type="text" rows={10} className="form-control login-comn-input h-auto" placeholder="Web design, web development, mobile app development, software development, cloud deployment, and digital marketing are some of the services we offer to clients across the world. Understanding our clients’ needs and providing them with solutions that meet their expectations is our goal. Web design, web development, mobile app development, software development, cloud deployment, and digital marketing are some of the services we offer to clients across the world. Understanding our clients’ needs and providing them with solutions that meet their expectations is our goal.

                            Web design, web development, mobile app development, software development, cloud deployment, and digital marketing are some of the services we offer to clients across the world. Understanding our clients’ needs and providing them with solutions that meet their expectations is our goal. Web design, web development, mobile app development, software development, cloud deployment, and digital marketing are some of the services we offer to clients across the world. Understanding our clients’ needs and providing them with solutions that meet their expectations is our goal." />
                        </div>
                        <div className='mb-4'>
                            <label className="d-block login-label-text mb-2">Upload image</label>
                            <input type="text" className="form-control login-comn-input" placeholder="image file name.jpg" name="marathon_name" readOnly/>
                            <label className="offer-bg-select mt-3" htmlFor="offer-bg-upload">                                  
                                <div className="upload-image">
                                    select image
                                </div>
                            </label>
                            <input id="offer-bg-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                        </div>
                        <div className='mb-4'>
                            <label className="d-block login-label-text mb-2">Duration of the marathon</label>
                            <input type="text" className="form-control login-comn-input" placeholder="End time of the marathon" name="marathon_name" readOnly/>
                            <div className="upload-date" onClick={handleShow}>
                                select Date
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <Modal centered  show={show} onHide={handleClose}  className="edit-marton-date-range-modal">
                    <div>                
                        <Modal.Body>
                                <DateRange
                                    onChange={item => setState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state}
                                />
                                <div className="d-flex justify-content-end mb-4">
                                    <button className="btn-comn-class-pink-bdr"><bdi>Cancelar</bdi></button>
                                    <button className="btn-comn-class ms-3"><bdi>Select</bdi></button>
                                </div>
                        
                        </Modal.Body>
                    </div>
                </Modal> 
          </div>
      </div>
  </UserLayout>
  )
}
