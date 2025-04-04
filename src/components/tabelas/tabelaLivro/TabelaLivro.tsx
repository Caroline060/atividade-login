import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import LivroRequests from "../../../fetch/LivroRequests";

function TabelaLivro() {
    const [livros, setLivros] = useState([]); //nome da variável e o método

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text/>
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivros();
                setLivros(listaDeLivros);
            } catch (error) {
                console.error(`Erro ao buscar livros: ${error}`);
                
            }
        };
        fetchLivros();
    }, [livros]);

    return(
        <>
        <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
            <Column field="titulo" header="Titulo" style={{ width: '25%' }}></Column>
            <Column field="autor" header="Autor" style={{ width: '25%' }}></Column>
            <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
            <Column field="isbn" header="ISBN" style={{ width: '25%' }}></Column>
            <Column field="valorAquisicao" header="Valor da aquisição" style={{ width: '25%' }}   
            body={(rowData) => rowData.valorAquisicao?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}></Column>
        </DataTable>
        </>
    );
}

export default TabelaLivro;