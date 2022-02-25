import React from 'react';

function Familia(props) {



    return (
      <>
        <h2>[Inicio] Membros da família</h2>
            {props.children}
        <h2>[Final] Membros da família</h2>
      </>
    );
}

export default Familia