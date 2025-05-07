import { useState } from "react";
import estilo from './FormLivro.module.css';
import LivroRequests from "../../../fetch/LivroRequests";

function FormLivro() {
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: 0,
        isbn: '',
        quantTotal: 0,
        quantDisponivel: 0,
        valorAquisicao: 0
    });

    const bananao = (nome: string, valor: string | string[]) => {
        setFormData({...formData, [nome]: valor});
    }

    const linguicinha = async (formData: { titulo: string; autor: string; editora: string; anoPublicacao: number; isbn: string; quantTotal: number; quantDisponivel: number; valorAquisicao: number; }) => {
        const resposta = await LivroRequests.enviarFormularioLivro(JSON.stringify(formData));
        if (resposta){
            alert ('Livro cadastrado com sucesso.');
        } else {
            alert ('Erro ao cadastrar livro.')
        }
    }

    return (
        <section className={estilo['sec-form-livro']}>
            <h1>Cadastro Livro</h1>
            <form action="" onSubmit={(e) => {e.preventDefault(); linguicinha(formData); }}
                className={estilo['form-livro']}>

                <div className={estilo['input-group']}>
                <label htmlFor="">
                    Título
                    <input 
                    type="text" 
                    name="titulo" 
                    id="titulo" 
                    required 
                    minLength={5}
                    onChange={(e) => bananao("titulo", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Autor
                    <input 
                    type="text" 
                    name="autor" 
                    id="autor" 
                    required
                    minLength={3}
                    onChange={(e) => bananao("autor", e.target.value)}/>
                </label>
                </div>

                <div className={estilo['input-group']}>
                <label htmlFor="">
                    Editora
                    <input 
                    type="text"
                    name="editora" 
                    id="editora"
                    onChange={(e) => bananao("editora", e.target.value)}/>
                </label>
                <label htmlFor="">
                    Ano de Publicação
                    <input 
                    type="number"
                    name="anoPublicacao" 
                    id="anoPublicacao"
                    minLength={4}
                    onChange={(e) => bananao("anoPublicacao", e.target.value)}/>
                </label>
                </div>

                <div className={estilo['input-group']}>
                <label htmlFor="">
                    ISBN
                    <input 
                    type="text" 
                    name="isbn" 
                    id="isbn" 
                    minLength={13}
                    onChange={(e) => bananao("isbn", e.target.value)}/>
                </label>
                <label htmlFor="">
                    Quantidade total
                    <input 
                    type="number"
                    name="quantTotal" 
                    id="quantTotal"
                    onChange={(e) => bananao("quantTotal", e.target.value)}/>
                </label>
                </div>

                <div className={estilo['input-group']}>
                <label htmlFor="">
                    Quantidade disponível
                    <input 
                    type="number"
                    name="quantDisponivel" 
                    id="quantDisponivel"
                    onChange={(e) => bananao("quantDisponivel", e.target.value)}/>
                </label>
                <label htmlFor="">
                    Valor de aquisição
                    <input 
                    type="number" 
                    name="valorAquisicao" 
                    id="valorAquisicao" 
                    step={0.1}
                    onChange={(e) => bananao("valorAquisicao", e.target.value)}/>
                </label>
                </div>
                <input type="submit" value="CADASTRAR LIVRO" />
            </form>
        </section>
    )
}

export default FormLivro;