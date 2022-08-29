import Colaborador from "../Colaborador/Colaborador";
import "./Time.scss"


const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ? <section className="time" style={{ backgroundColor: props.corSecundaria, borderColor: props.corFundo }}>
            <h3>{props.nome}</h3>
            {props.colaboradores.map(ColaboradorItem => {
                return <Colaborador corDeFundo={props.corFundo}  key={ColaboradorItem.nome} nome={ColaboradorItem.nome} time={ColaboradorItem.cargo} cargo={ColaboradorItem.cargo} imagem={ColaboradorItem.imagem} />
            })
            }

        </section>
            : ''
    )
  
    
}
// peguei a props passada la no componente de time e usei ela dentro do style, fiz igual no nome
export default Time;