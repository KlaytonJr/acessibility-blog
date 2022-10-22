import React from 'react'

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
}

const LoginStyle = {
	padding: "8px 50px",
	boxSizing: "border-box",
	background: "rgba(0,234,100,1.00)",
	borderRadius: "8px",
    fontSize: "16px",
}

export default function Header () {   
	return (
        <div style={HeaderStyle}>
            <span style={LogoStyle}>Klayton Júnior</span>
            <div style={LinksStyle}>
                <span style={LinkStyle}>Home</span>
                <span style={LinkStyle}>Mais Populares</span>
                <span style={LinkStyle}>Newsletter</span>
            </div>
            <div>
                <span style={LoginStyle}>Login</span>
            </div>
        </div>
	)
}