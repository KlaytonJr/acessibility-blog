import React from 'react'
import { ZoomIn, ZoomOut } from 'react-feather';

const LupeStyle = {
	position: "fixed",
	bottom: 20,
    left: 20,
	
    padding: "10px 10px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(0,234,100,1.00)",
    fontSize: "22px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "8px",
    cursor: "pointer"
}

export default function LupeAccessibility ({ toggleSize, sizes }) {
	return (
        <div style={LupeStyle} onClick={toggleSize}>
            {sizes.title === 'normal' ? <ZoomIn color='#ffffff' size="24" /> : <ZoomOut color='#ffffff' size="24" />}
        </div>
    )
}