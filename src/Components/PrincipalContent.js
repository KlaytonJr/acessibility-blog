import React from 'react'

const PrincipalStyle = {
    display: "flex",
    margin: "15px 0",
}

const ImageStyle = {
    width: "370.38px",
    height: "250px",
}

export default function PrincipalContent (props) {   
	return (
    <div style={PrincipalStyle}>
        <div>
            <img style={ImageStyle} src={props.src} alt={props.alt} />
        </div>
        <div style={{ marginLeft: "40px"}}>
            <h2 style={{ marginBottom: "5px"}}>{ props.title }</h2>
            <span style={{ color: "#717171", fontSize: "14px" }}>publicado em 14/10/2022 às 14:32</span>
            <p style={{ color: "#717171" }}>{ props.content }</p>
            <div style={{ width: "100%"}}>
                <span style={{ display: "flex", justifyContent: "end", color: "#717171", textDecoration: "underline" }}>Ler mais</span>
            </div>
        </div>
    </div>
    )
}