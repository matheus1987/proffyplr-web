import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/25827758?s=460&u=351b945490a86beb56ec22f94a6cb0427bee53b7&v=4" alt="Matheus Lemos"/>
        <div>
          <strong>Matheus Lemos</strong>
          <span>Manager System</span>
        </div>
      </header>

      <p>
        Matemática.
        <br /><br />
        Graduado em Ciência da Computação, CSPO, ITIL.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;