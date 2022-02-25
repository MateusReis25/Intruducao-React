import React, { useState } from 'react';

export default({ num= 0 }) => {



    return (
      <div>
            <h2>O resultado é:</h2>
            {num % 2 == 0 ? <h3>É par</h3> : <h3>É Ímpar</h3>}
      </div>
    );
}
