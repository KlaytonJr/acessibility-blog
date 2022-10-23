import React from 'react'

const HeaderStyle = {
	position: "relative",
	bottom: 0,
	
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

const RefStyle = {
	color: "rgba(113,113,113,1.00)",
	fontFamily: "sans-serif",
	fontSize: "16px",
	fontWeight: "400",
	lineHeight: "18px",
}

export default function Footer () {
	return (
        <div style={HeaderStyle}>
            <span style={LogoStyle}>MyBlog</span>
            <span style={RefStyle}>© 2022 MyBlog</span>
        </div>
    )
}