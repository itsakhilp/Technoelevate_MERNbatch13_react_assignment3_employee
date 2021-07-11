import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div id="card ml-4" Style={"margin-left:300px"}>
        <div className="card mb-3 mt-5 " Style={"max-width: 810px;"}>
        <div className="row no-gutters">
            <div className="col-md-4 crdimg1">
                <img src="https://cdn.pixabay.com/photo/2019/07/13/10/55/desk-4334575__340.jpg" Style={"height: 200px"} alt="NOT FOUND"/>
            </div>
            <div className="col-md-8 pl-3">
            <div className="card-body"  Style={"text-align:left"}   >
                <h5 className="card-title">Lorem Ipsum is simply dummy</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text ptxt1"><Link>Read More</Link></p>
            </div>
            </div>
        </div>
        </div>
        <div className="card mb-3 mt-5 " Style={"max-width: 810px;" }>
        <div className="row no-gutters">
            <div className="col-md-8">
            <div className="card-body" Style={"text-align:right"}>
                <h4 className="card-title">Lorem Ipsum is simply dummy</h4>
                <p className="card-text">Lorem Ipsum is simply dummy below as a natural<br/> lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text ptxt2"><Link>Read More</Link></p>
            </div>
            </div>
            <div className="col-md-4 crdimg2 img">
                <img src="https://cdn.pixabay.com/photo/2019/07/13/10/55/desk-4334575__340.jpg" Style={"height: 200px"} alt="NOT FOUND"/>
            </div>
        </div>
        </div>
        </div>
    )
}