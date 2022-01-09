import React from 'react';
import Header from './Header';
import './../styles/bollywood.css';
import image from './../images/landscape.jpg';
import {Link} from 'react-router-dom';

const Bollywood = (props)=>{
    return(
        <>
            <Header/>
            {props.data.map(item => (
                <>
                    <div className="container mx-auto mt-5">
                        <div className="inner-container-first">

                            <h2>Bollywood</h2>
                            <hr className="hr"/>

                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <img src={image} className="p-3" alt="..." style={{width:"35%"}}/>
                                <div className="content p-3" style={{width:"50%"}} >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>

                            <div className="view">
                            <Link className="nav-link" to="/technology">
                                <b>LOAD MORE</b>
                            </Link>
                            </div>

                        </div>


                        <div className="inner-container-second">

                            <h2>The Posts</h2>
                            <hr className="hr"/>

                            <div class="box-card">
                                <img src={image} alt="..." />
                                <div class="box-card-inner">
                                    <h3>{item.heading}</h3>
                                    <p>Travel / Decemember 6,2021</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey'}}>
                                <img src={image} className="p-2" alt="..." style={{width:"39%"}}/>
                                <div className="content p-2" style={{width:"50%"}} >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                <img src={image} className="p-2" alt="..." style={{width:"39%"}}/>
                                <div className="content p-2" style={{width:"50%"}} >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <img src={image} className="p-2" alt="..." style={{width:"39%"}}/>
                                <div className="content p-2" style={{width:"50%"}} >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>

                            <div class="inner-container-second-ad">Advertisment</div>

                        </div>


                    </div>
                </>
            ))}

        </>
    )
}

export default Bollywood;