import './Colaborador.scss';

const Colaborador = ({nome, imagem,cargo, corDeFundo}) => {
    // destruturei o props só com oque quero
    return(
        <div className='colaborador'>
            <div className='thumb' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='content'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador