import CampoTexto from '../CampoTexto';
import './Formulario.scss';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from "react";


function Formulario(props) {


    const aoCadastrar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    // Função 'aoCadastrar' é pra enviar ao props 'aoColaboradorCadastrado'  dentro do <Formulario>  
    // os itens 'nome,cargo,imagem,time'

    const [nome, setNome] = useState();
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    // criando as variaveis que vai armazenar os valores, iniciando ela com vazio ('').

    return (
        <section className='formulario'>
            <form onSubmit={aoCadastrar}> {/* quando der submit, ele chama a função 'aoCadastrar'*/}
                <h2>Preencha os dados do formulário</h2>

                <CampoTexto
                    name="nome"
                    label="Nome"
                    obrigatorio={true}
                    placeholder="Digite seu texto"
                    valor={nome}
                    campoAlterado = {valor => setNome(valor)}
                    // vai pegar o valor que veio do input, chamar ele de 'valor' e vai passar para o setNome
                />
                <CampoTexto
                    name="cargo"
                    label="Cargo"
                    obrigatorio={true}
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    campoAlterado ={valor => setCargo(valor)}
                    // vai pegar o valor que veio do input, chamar ele de 'valor' e vai passar para o setCargo
                />
                <CampoTexto
                    name="imagem"
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    campoAlterado ={valor => setImagem(valor)}
                    // vai pegar o valor que veio do input, chamar ele de 'valor' e vai passar para o setImagem
                />
                <ListaSuspensa
                    // name="time"
                    label="Time"
                    obrigatorio={true}
                    itens={props.times}
                    valor={time}
                    campoAlterado  ={valor => setTime(valor)}
                    // vai pegar o valor que veio do select, chamar ele de 'valor' e vai passar para o setTime
                    />
                <Botao>Cadastrar</Botao>



            </form>
        </section>
    )
}

export default Formulario;