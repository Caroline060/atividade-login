import { useState } from "react";
import estilo from './FormAluno.module.css';
import AlunoRequests from "../../../fetch/AlunoRequests";

function FormAluno() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        endereco: '',
        email: '',
        celular: ''
    });

    const bananao = (nome: string, valor: string | string[]) => {
        setFormData({...formData, [nome]: valor});
    }

    const linguicinha = async (formData: { nome: string; sobrenome: string; dataNascimento: string; endereco: string; email: string; celular: string; }) => {
        const resposta = await AlunoRequests.enviarFormularioAluno(JSON.stringify(formData));
        if (resposta){
            alert ('Aluno cadastrado com sucesso.');
        } else {
            alert ('Erro ao cadastrar aluno.')
        }
    }

    return (
        <section className={estilo['sec-form-aluno']}>
            <h1>Cadastro Aluno</h1>
            <form action="" onSubmit={(e) => {e.preventDefault(); linguicinha(formData); }}
                className={estilo['form-aluno']}>
                
                <div className={estilo['input-group']}> 
                <label htmlFor="">
                    Nome Completo
                    <input 
                    type="text" 
                    name="nome" 
                    id="nome" 
                    required 
                    minLength={3}
                    onChange={(e) => bananao("nome", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Sobrenome
                    <input 
                    type="text" 
                    name="sobrenome" 
                    id="sobrenome" 
                    required
                    minLength={3}
                    onChange={(e) => bananao("sobrenome", e.target.value)}/>
                </label>
                </div>

                <div className={estilo['input-group']}>
                <label htmlFor="">
                    Data de nascimento
                    <input 
                    type="date"
                    name="dataNascimento" 
                    id="dataNascimento"
                    onChange={(e) => bananao("dataNascimento", e.target.value)}/>
                </label>
                <label htmlFor="">
                    Endereço
                    <input 
                    type="text" 
                    name="endereco" 
                    id="endereco" 
                    minLength={6}
                    onChange={(e) => bananao("endereco", e.target.value)}/>
                </label>
                </div>

                <div className={estilo['input-group']}>
                <label htmlFor="">
                    Email 
                    <input 
                    type="email" 
                    name="email-aluno" 
                    id="email-aluno"
                    minLength={11} 
                    onChange={(e) => bananao("email", e.target.value)}/>
                </label>
                <label htmlFor="">
                    Celular
                    <input 
                    type="text" 
                    name="celular" 
                    id="celular" 
                    minLength={10}
                    maxLength={13}
                    onChange={(e) => bananao("celular", e.target.value)}/>
                </label>
                </div>
                <input type="submit" value="CADASTRAR ALUNO" />
            </form>
        </section>
    )
}

export default FormAluno;