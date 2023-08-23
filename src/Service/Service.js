import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

const Service = () => {
    const { setValueApi } = useContext(Context);

    const getApi = async() => {
        try {
            const response = await axios.get("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
            setValueApi(response.data.products) 
        } catch (error) {
            console.log(error)
        }       
    }

    useEffect(() => {
        getApi()
    }, []) // eslint-disable-line

    return (
        <></>
    );
}

export default Service;