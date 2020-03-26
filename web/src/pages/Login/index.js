import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/sessions', { id });
      localStorage.setItem('id', id);
      localStorage.setItem('name', response.data.name);
      history.push('/perfil');
    } catch {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div>
      <div className='login-container'>
        <section className='form'>
          <img src={logo} alt='Heroes' />
          <form onSubmit={handleLogin}>
            <h1>Faca seu Logon</h1>
            <input
              type='text'
              placeholder='SUA ID'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button className='button'>Entrar</button>
            <Link className='back-link' to='/registrar'>
              <FiLogIn size={16} color='#E02041' />
              Nao tenho cadastro
            </Link>
          </form>
        </section>
        <img src={heroes} alt='Heroes' />
      </div>
    </div>
  );
}
