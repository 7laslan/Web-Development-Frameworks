import React from 'react';
import './App.css';
import Banneri from './osat/Banneri';
import Ilmoitukset from './osat/Ilmoitukset';
import Paavalikko from './osat/Paavalikko';
import Luetuimmat from './osat/Luetuimmat';

function App() {
  return (
    <div className='bg'>
      <Banneri />
      <Ilmoitukset />
      <Paavalikko />
      <Luetuimmat />
    </div>
  );
}

export default App;