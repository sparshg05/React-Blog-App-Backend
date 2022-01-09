import React from 'react';
import Header from './Header';
import './../styles/hollywood.css';
import image from './../images/landscape.jpg';

const Hollywood = (props)=>{
    return(
        <>
            <Header/>
            {props.data.map(item => (
                <>
                    <div className="container">
                        <div className="inner-container-first">

                            <h2>Hollywood</h2>
                            <hr className="hr"/>

                            <div className="boxes">
                                <img src={image} alt="..."/>
                                <div className="content" >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <img src={image} alt="..."/>
                                <div className="content" >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <img src={image} alt="..."/>
                                <div className="content" >
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
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
                            <div className="boxes">
                                <img src={image} alt="..." />
                                <div className="content p-2" >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <img src={image} alt="..." />
                                <div className="content p-2" >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                            <div className="boxes">
                                <img src={image} alt="..." />
                                <div className="content p-2" >
                                    <h5>{item.heading}</h5>
                                    <p><b>TECH </b>/TODAY AT 10:00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            ))}

        </>
    )
}

export default Hollywood;