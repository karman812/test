import * as axios from "axios";
import React from 'react';
import XMLParser from "react-xml-parser";


export const getData = () => {
    return  axios.get('https://sweb.ru/export/turbojournal/').then(response =>{
        let data = new XMLParser().parseFromString(response.data).children[0].children.filter(el =>{
            return el.name == 'item'
        })
        return data
    })
}
