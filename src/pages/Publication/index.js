import React, { useEffect } from 'react'
import Content from '../../Components/Content';
import "./style.css";
import publications from "../../backend/mocked";
import { useLocation } from "react-router-dom";

export default function HomePage () {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    const publication = publications.filter((element) => {
        return element.id.toString() === id;
    })[0];

    console.log(publication);

	return (
        <div className="PublicationStyle">                
            <img className="ImageStylePublication" src={publication.url} alt={publication.alt} />
            <div className="contentPublication">
                <h1>{ publication.title }</h1>
                <span>publicado em 14/10/2022 às 14:32</span>
                <p>{ publication.content }</p>
            </div>
        </div>
	)
}