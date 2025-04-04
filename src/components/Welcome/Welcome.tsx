import estilo from "./Welcome.module.css";
import AlunoRequests from "../../fetch/AlunoRequests";
import { useEffect, useState } from "react";


function Welcome() {
        const [alunos, setAlunos] = useState([]); //nome da variável e o método
    
        useEffect(() => {
            const fetchAlunos = async () => {
                try {
                    const listaDeAlunos = await AlunoRequests.listarAlunos();
                    setAlunos(listaDeAlunos);
                } catch (error) {
                    console.error(`Erro ao buscar alunos: ${error}`);
                    
                }
            };
            fetchAlunos();
        }, [alunos]);
    
    return(
        <main className={estilo.principal}>
        <p>Seja bem-vindo(a) à biblioteca.</p>
        <p>Para ter uma melhor experiência, faça o login no sistema.</p>
        </main>
    );

}

export default Welcome;