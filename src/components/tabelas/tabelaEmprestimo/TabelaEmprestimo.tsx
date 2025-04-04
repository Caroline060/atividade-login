import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import EmprestimoRequests from "../../../fetch/EmprestimoRequests";

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState([]); //nome da variável e o método

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text/>
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const listaDeEmprestimos = await EmprestimoRequests.listarEmprestimos();
                setEmprestimos(listaDeEmprestimos);
            } catch (error) {
                console.error(`Erro ao buscar emprestimos: ${error}`);
                
            }
        };
        fetchEmprestimos();
    }, [emprestimos]);

    return(
        <>
          <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
            <Column field="nomeAluno" header="Nome do aluno"  body={(rowData) => rowData.aluno.nome} style={{ width: '25%' }}></Column>
            <Column field="titulo" header="Titulo do livro"  body={(rowData) => rowData.livro.titulo} style={{ width: '25%' }}></Column>
            <Column field="dataEmprestimo" header="Data do emprestimo" body={(rowData) => new Date(rowData.dataEmprestimo).toLocaleDateString('pt-BR')} style={{ width: '25%' }}></Column>
            <Column field="dataDevolucao" header="Data de devolução" body={(rowData) => new Date(rowData.dataEmprestimo).toLocaleDateString('pt-BR')} style={{ width: '25%' }}></Column>
            <Column field="statusEmprestimo" header="Status do empréstimo" style={{ width: '25%' }}></Column>
          </DataTable>
        </>
    );
}

export default TabelaEmprestimo;