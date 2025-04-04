import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Welcome from "../../components/Welcome/Welcome";
import Rodape from "../../components/Rodape/Rodape";
import TabelaAluno from "../../components/tabelas/tabelaAluno/TabelaAluno";
import TabelaLivro from "../../components/tabelas/tabelaLivro/TabelaLivro";
import TabelaEmprestimo from "../../components/tabelas/tabelaEmprestimo/TabelaEmprestimo";

function PHome() {

    return (
        <>
            <Cabecalho/>
            <TabelaAluno/>
            <Rodape/>
        </>
    );
}

export default PHome;