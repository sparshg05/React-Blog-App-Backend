import React from 'react';
import Header from './Header';
import './../styles/food.css';
import image from './../images/landscape.jpg';

const Food = (props)=>{
    console.log(props);
    return(
        <>
            <Header/>
            {props.data.map(item =>(
                <>
                    <div className="container3">

                        <div className="inner-container0">
                            <div className="first-child">
                                <h3>Title of vertial gallery</h3>
                                <p>Travel / Decemember 6,2021</p>
                            </div>
                            <div className="second-child">
                                <div className="second-child-upper">
                                    <h5>The Sound cloud</h5>
                                    <h5>You loved is doomed</h5>
                                    <p>Travel / Decemember 6,2021</p>
                                </div>
                                <div className="second-child-lower">
                                    <h5>The Sound cloud</h5>
                                    <h5>You loved is doomed</h5>
                                    <p>Travel / Decemember 6,2021</p>
                                </div>
                            </div>
                        </div>


                        <div className="inner-container1">

                            <h2>The Latest</h2>
                            <hr className="hr"/>
                            <div className="inner-lower-container">
                                <div class="box-card2">
                                    <img src={image} alt="..." />
                                    <div class="card-body p-4">
                                        <h4>{item.subheading}</h4>
                                        <p>{item.brief}</p>
                                        <p><b>Travel</b>/ Sunday 13, 2021</p>
                                    </div>
                                </div>
                                <div class="box-card2">
                                    <img src={image} alt="..." />
                                    <div class="card-body p-4">
                                        <h4>{item.subheading}</h4>
                                        <p>{item.brief}</p>
                                        <p><b>Travel</b>/ Sunday 13, 2021</p>
                                    </div>
                                </div>
                                <div class="box-card2">
                                    <img src={image} alt="..." />
                                    <div class="card-body p-4">
                                        <h4>{item.subheading}</h4>
                                        <p>{item.brief}</p>
                                        <p><b>Travel</b>/ Sunday 13, 2021</p>
                                    </div>
                                </div>
                                
                            </div>

                        </div>


                        <div className="inner-container2">

                            <h2>Latest Articles</h2>
                            <hr className="hr"/>
                            <div className="latest-articles mt-6">

                                <div class="latest_article_first_child">
                                    <div class="latest_article_first_child-inner" >
                                        <div className="latest_article-box d-flex" style={{borderBottom: '1px solid lightgrey' , borderTop: '1px solid lightgrey'}}>
                                            <img src={image} alt="..." />
                                            <div className="content p-3" >
                                                <h4>{item.heading}</h4>
                                                <p>{item.description}</p>
                                                <p><b>TECH </b>/TODAY AT 10:00</p>
                                            </div>
                                        </div>
                                        <div className="latest_article-box d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                            <img src={image} alt="..." />
                                            <div className="content p-3" >
                                                <h4>{item.heading}</h4>
                                                <p>{item.description}</p>
                                                <p><b>TECH </b>/TODAY AT 10:00</p>
                                            </div>
                                        </div>
                                        <div className="latest_article-box d-flex" style={{borderBottom: '1px solid lightgrey'}}>
                                            <img src={image} alt="..." />
                                            <div className="content p-3" >
                                                <h4>{item.heading}</h4>
                                                <p>{item.description}</p>
                                                <p><b>TECH </b>/TODAY AT 10:00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="img-div">
                                        <h2>Title of vertial gallery</h2>
                                        <p>Travel / Decemember 6,2021</p>
                                    </div>

                                </div>
                                <div className="latest_article_second_child">
                                    <div className="ad">Advertisment</div>
                                    
                                    <h2>The Posts</h2>
                                    <hr className="hr"/>

                                    <div class="box-card">
                                        <img src={image} alt="..." />
                                        <div class="box-card-inner">
                                            <h3>{item.heading}</h3>
                                            <p>Travel / Decemember 6,2021</p>
                                        </div>
                                    </div>
                                    <div className="box-card-lower" style={{borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey'}}>
                                        <img src={image} alt="..."/>
                                        <div className="content p-3" style={{width:"50%"}} >
                                            <h6>{item.heading}</h6>
                                            <p style={{fontSize:"12px"}}><b>TECH </b>/TODAY AT 10:00</p>
                                        </div>
                                    </div>
                                    <div className="box-card-lower" style={{borderBottom: '1px solid lightgrey'}}>
                                        <img src={image} alt="..."/>
                                        <div className="content p-3" style={{width:"50%"}} >
                                            <h6>{item.heading}</h6>
                                            <p style={{fontSize:"12px"}}><b>TECH </b>/TODAY AT 10:00</p>
                                        </div>
                                    </div>
                                    <div className="box-card-lower">
                                        <img src={image} alt="..."/>
                                        <div className="content p-3" style={{width:"50%"}} >
                                            <h6>{item.heading}</h6>
                                            <p style={{fontSize:"12px"}}><b>TECH </b>/TODAY AT 10:00</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className="inner-container3">

                            <h2>Latest Stories</h2>
                            <hr className="hr"/>
                            <div className="inner-lower-container">

                                <div class="box-card2" >
                                    {/* <img src={image} class="card-img-top" alt="..." /> */}
                                    <div class="card-body p-4">
                                        <h4>{item.heading}</h4>
                                        <p>{item.bdescription}</p>
                                        <p className="pt-4"><b>TECH </b>/TODAY AT 10:00</p>
                                    </div>
                                </div>
                                <div class="box-card2">
                                    {/* <img src={image} class="card-img-top" alt="..." /> */}
                                    <div class="card-body p-4">
                                        <h4>{item.heading}</h4>
                                        <p>{item.bdescription}</p>
                                        <p className="pt-4"><b>STYLE </b>/AUGUST 17 10:00</p>
                                    </div>
                                </div>
                                <div class="box-card2">
                                    <div class="card-body p-4">
                                        <h4>{item.heading}</h4>
                                        <p>{item.bdescription}</p>
                                        <p className="pt-4"><b>TECH </b>/AUGUST 17 10:00</p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* <span style={{marginTop: '100px', border: '1px solid red'}}>View More</span>
                             */}
                        </div>

                    </div>
                </>
            ))}
            


                {/* {props.data.map(item => (
                    <>
                        <h2>{item.heading}</h2>
                        <h3>{item.subheading}</h3>
                        <p>{item.bdescription}</p>
                    </>
                ))} */}

        </>
    )
}

export default Food;