import { SERVER_CFG } from "../appConfig";

class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros'; // Rota configurada na API
        this.routeCadastroLivro = '/novo/livro'; // Rota configurada na API
        this.routeAtualizaLivro = '/atualiza/livro'; // Rota configurada na API
        this.routeRemoveLivro = '/remove/livro'; // Rota configurada na API
    }

    /**
     * Função que busca a lista de livros na API
     * @returns Lista com os livros cadastrados no sistema
     */
    async listarLivros() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`); //fetch recebe endereço do servidor e a rota

            if (respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests();