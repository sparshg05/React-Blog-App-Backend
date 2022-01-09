import React from 'react';
import Header from './Header';
import './../styles/technology.css';
import image from './../images/face.png';
import image1 from './../images/react-img.png';
import image2 from './../images/code.png';
import image3 from './../images/hand.png';
import image4 from './../images/landscape.jpg';


const Technology = (props)=>{
    return(
        <>
            <Header/>
            {props.data.map(item => (
                <>
                    <div className="container1 mx-auto d-flex flex-column">

                        <div className="upper-container mx-auto mt-3">
                            <h2>5 Ways to animate a React app</h2>
                            <div className="face-div d-flex mt-3" >
                                <img src={image} style={{height:"70px" , width:"70px" , marginRight:"13px"}} alt=""/>
                                <div className="d-flex flex-column pt-3">
                                    <h5>Dmitry Nozhenko</h5>
                                    <p style={{fontSize:"12px"}}>Dec 7,2021-10 min read</p>
                                </div>
                            </div>
                            <div><img src={image1} style={{height:"30%" , width:"100%" , marginTop:"14px"}} alt=""/></div>
                            <div className="text mt-5">
                                <p style={{color:"black"}}>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations. 
                                    Many developers create animation using css and adding classes to HTML tags. This is a great way and 
                                    you should use it. If you want to create powerful animations, you can pay attention to GreenSock.
                                    GreenSock is the most powerful animation platform. There are also a lot of libraries, components to create animations in React.</p>
                                <p style={{color:"black"}}>Let's talk about them</p>
                            </div>
                            <div><img src={image2} style={{height:"30%" , width:"100%" , marginTop:"14px"}} alt=""/></div>
                            <div className="d-flex mt-4">
                                <div className="tech">React</div>
                                <div className="tech">Javascript</div>
                                <div className="tech">Animation</div>
                            </div>
                            <div className="d-flex mt-2">
                                <div><img src={image3} style={{height:"30px" , width:"30px" , marginRight:"10px"}} alt=""/></div>
                                <div className="pt-1" style={{fontSize:"12px",color:"#A2A2A2"}}>9.3k Claps</div>
                            </div>
                            <div className="face-div2 d-flex mt-3" >
                                <img src={image} style={{height:"70px" , width:"70px" , marginRight:"13px"}} alt=""/>
                                <div className="d-flex flex-column ">
                                    <p style={{fontSize:"12px" , marginBottom: ".1rem"}}>WRITTEN BY</p>
                                    <h5>Dmitry Nozhenko</h5>
                                    <p style={{fontSize:"12px"}}>Dec 7,2021-10 min read</p>
                                </div>
                            </div>

                        </div>

                        <div className="lower-container">
                            
                            <h5>More from the Siren</h5>
                            <div className="lower-container-inner d-flex">
                                <div class="card border-0" style={{width: "30%" , marginRight: "53px"}}>
                                    <p>Also tagged Reactjs</p>
                                    <img src={image4} class="card-img-top" alt="..." />
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.subheading}</h4>
                                        <div className="face-div d-flex mt-3" >
                                            <img src={image} style={{height:"70px" , width:"70px" , marginRight:"13px"}} alt=""/>
                                            <div className="d-flex flex-column pt-3">
                                                <h5>Dmitry Nozhenko</h5>
                                                <p style={{fontSize:"12px"}}>Dec 7,2021-10 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0" style={{width: "30%" , marginRight: "53px"}}>
                                    <p>Related reads</p>
                                    <img src={image4} class="card-img-top" alt="..." />
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.subheading}</h4>
                                        <div className="face-div d-flex mt-3" >
                                            <img src={image} style={{height:"70px" , width:"70px" , marginRight:"13px"}} alt=""/>
                                            <div className="d-flex flex-column pt-3">
                                                <h5>Dmitry Nozhenko</h5>
                                                <p style={{fontSize:"12px"}}>Dec 7,2021-10 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0" style={{width: "30%"}}>
                                    <p>Related reads</p>
                                    <img src={image4} class="card-img-top" alt="..." />
                                    <div class="card-body p-4">
                                        <h4 class="card-title">{item.subheading}</h4>
                                        <div className="face-div d-flex mt-3" >
                                            <img src={image} style={{height:"70px" , width:"70px"}} alt=""/>
                                            <div className="d-flex flex-column pt-3">
                                                <h5>Dmitry Nozhenko</h5>
                                                <p style={{fontSize:"12px"}}>Dec 7,2021-10 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </>
            ))}

            
        </>
    )
}

export default Technology;