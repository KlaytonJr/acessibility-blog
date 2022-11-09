import React from 'react'
import "./style.css";
import { useNavigate } from "react-router-dom";

const HeaderStyle = {
    padding: "20px 40px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000",
    fontSize: "22px",

    display: "flex",
    justifyContent: "space-between",
}

const LogoStyle = {
    width: "130px",
	height: "31px",
	display: "flex",
	justifyContent: "center",
	textAlign: "center",
	color: "rgba(0,234,100,1.00)",
	fontFamily: "Allan",
	fontSize: "27px",
	fontWeight: "400",
	lineHeight: "31.640625px",
    cursor: "pointer"
}

const LinksStyle = {
    display: "flex",
    width: "300px",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
}

const LinkStyle = {
	textAlign: "center",
	color: "rgba(246,246,246,1.00)",
	fontFamily: "sans-serif",
	fontSize: "16px",
	fontWeight: "400",
	lineHeight: "18.75px",
    cursor: "pointer",
}

const LoginStyle = {
	padding: "8px 50px",
	boxSizing: "border-box",
	background: "rgba(0,234,100,1.00)",
	borderRadius: "8px",
    fontSize: "16px",
}

export default function Header () {  
    let navigate = useNavigate();

	return (
        <div style={HeaderStyle}>
            <span style={LogoStyle} onClick={() => navigate(`/`)} >MyBlog</span>
            <div style={LinksStyle}>
                <span style={LinkStyle} onClick={() => navigate(`/`)}>Home</span>
                <span style={LinkStyle} onClick={() => navigate(`/publication?id=1`)}>Mais Populares</span>
                {/* <span style={LinkStyle}>Newsletter</span> */}
            </div>
            {/* <div>
                <span className='LoginStyle'>Login</span>
            </div> */}
        </div>
	)
}