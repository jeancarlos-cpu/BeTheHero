import React, { useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: localStorage.getItem('id'),
        },
      });
      history.push('/perfil');
    } catch {
      alert('Erro ao cadastrar novo caso. Tente novamente.');
    }
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logo} alt='Be The Hero' />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>
          <Link className='back-link' to='/perfil'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para o perfil.
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type='text'
            placeholder='Titulo do caso'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder='Descricao'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type='text'
            placeholder='Valor em reais'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className='button'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
