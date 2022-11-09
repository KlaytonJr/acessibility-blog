import React from 'react'
import "./style.css";
import { useNavigate } from "react-router-dom";

const PrincipalStyle = {
    display: "flex",
    margin: "15px 0",
}

const ImageStyle = {
    width: "370.38px",
    height: "250px",
}

export default function PrincipalContent (props) {   
    let navigate = useNavigate();

	return (
    <div className="PrincipalStyle" onClick={() => navigate(`/publication?id=${props.id}`)}>
        <div className="ImageStyleDiv">
            <img className="ImageStyle" src={props.src} alt={props.alt} />
        </div>
        <div className="content">
            <h2>{ props.title }</h2>
            <span>publicado em 14/10/2022 às 14:32</span>
            <p>{ props.content }</p>
            <div>
                <span onClick={() => navigate(`/publication?id=${props.id}`)}>Ler mais</span>
            </div>
        </div>
    </div>
    )
}