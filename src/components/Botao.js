// export default props => {
//     function cadastrar(){
//         console.log('Cadastro realizado com sucesso');
//     }
//     return (
//         <button className="botao" onClick={cadastrar}>Cadastrar</button>
//     )
// }

export default props => {
    function cadastrar(){
        alert('Cadastro realizado com sucesso');
    }
    return (
        <button className="botao" onClick={cadastrar}>Cadastrar</button>
    )
}