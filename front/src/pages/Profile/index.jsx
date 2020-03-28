import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

import Incident from './Incident'

const Profile = () => {

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(res => {
            setIncidents(res.data)
        })
    }, [])

    const handleLogout = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="" />
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>{incidents.map(incident => (<Incident
                {...incident}
                incidents={incidents}
                setIncidents={setIncidents}
            />))}</ul>
        </div>
    );
}

export default Profile;
