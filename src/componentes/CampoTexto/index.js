const CampoTexto = (props) => {

    const campoDigitado = (evento) => {
        props.campoAlterado(evento.target.value);
    }
    // função 'campoDigitado' pra quando o input for alterado (onChange), vai enviar o valor do input para a props 'campoAlterado'
    return (
        <div className="campo-texto">
            <label>
                {props.label}
                <input name={props.name} value={props.valor} type="text" onChange={campoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
                {/* o value por exemplo, está pegando a props.valor lá do <CampoTexto/> */}

            </label>
        </div>
    )
}

export default CampoTexto;