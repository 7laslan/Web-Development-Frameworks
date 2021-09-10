import React from 'react';
import './Grafiikka.css';

export default function Luetuimmat() {
  return (
    <div className='luetuimmatbg'>
      <div className='luetuimmatO'>Luetuimmat</div>
      <div className='luetuimmat1'> <span className='luetuimmatI'>1 Rikosepäillyt |</span>EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikanhakemuksessa</div>
      <div className='luetuimmat2'><span className='luetuimmatI'>2 HS Vantaa |</span>Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</div>
      <div className='luetuimmat3'><span className='luetuimmatI'>3 Päivittyvä seuranta |</span>STM: Parasetamolia tai deksametasonia sisältäviä lääkkeiden myyntiä rajoitetaan</div>
    </div>
  )
}