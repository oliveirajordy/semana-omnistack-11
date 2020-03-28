import React from 'react';

import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

const Incident = (props) => {

    const handleDeleteIncident = async () => {
        try {
            await api.delete(`incidents/${props.id}`, {
                headers: {
                    Authorization: props.ong_id
                }
            })
            props.setIncidents(
                props.incidents.filter(({ id }) => id !== props.id)
            )
        }
        catch{
            alert('erro ao deletar a função')
        }
    }

    return (
        <li key={props.id}>
            <strong>CASO:</strong>
            <p>{props.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{props.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}</p>

            <button type="button" onClick={handleDeleteIncident} >
                <FiTrash2 size={20} color="a8a8b3" />
            </button>
        </li>
    )
}

export default Incident;
