const Botao = (props) => {
    return(
        <button className="btn-submit" type='submit'>
            {props.children}
        </button>
    )
}

export default Botao;