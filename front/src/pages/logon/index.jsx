import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

const Logon = () => {

    const [id, setId] = useState('')

    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post('session', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', res.data.name)

            history.push('/profile')
        }
        catch {
            alert('Falha no login.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />


                <form onSubmit={handleLogin} >
                    <h1>Faça seu logon</h1>

                    <input
                        placehoder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit" >Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon;
