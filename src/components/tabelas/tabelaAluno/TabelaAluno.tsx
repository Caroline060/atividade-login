import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import AlunoRequests from "../../../fetch/AlunoRequests";

function TabelaAluno() {
    const [alunos, setAlunos] = useState([]); //nome da variável e o método

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text/>
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>

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
        <>
          <DataTable value={alunos} className="tabela-alunos" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
            <Column field="nome" header="Nome" style={{ width: '25%' }}></Column>
            <Column field="sobrenome" header="Sobrenome" style={{ width: '25%' }}></Column>
            <Column field="endereco" header="Endereço" style={{ width: '25%' }}></Column>
            <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
            <Column field="dataNascimento" header="Data de Nascimento" body={(rowData) => new Date(rowData.dataNascimento).toLocaleDateString('pt-BR')} style={{ width: '25%' }}></Column>
            <Column field="celular" header="Celular" style={{ width: '25%' }}></Column>
          </DataTable>
        </>
    );
}

export default TabelaAluno;