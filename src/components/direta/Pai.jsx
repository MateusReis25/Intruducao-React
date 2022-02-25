import React, { useState } from 'react'
import Filho from './Filho'

function Name(props) {
    let x = 10;
    let y = 20;

    return (
      <>
        <Filho a={x} b={y}/>
        <Filho a={x + 20} b={y + 20}/>
      </>
    );
}

export default Name