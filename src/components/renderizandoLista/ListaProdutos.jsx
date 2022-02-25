import React from 'react';
import Produtos from './Produtos';

export default props => {
    function exibirLista() {
        return Produtos.map(p => {
            return (
                <h3 key={p.id}> 
                    {p.id}) {p.nome} tem o preço de R$ {p.preco} 
                </h3>
            );
        });
    }
    return (
        <>
            <h2>Lista de Produtos</h2>
            {exibirLista()}
        </>
    );
}
