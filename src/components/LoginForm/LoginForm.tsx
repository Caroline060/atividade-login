import estilo from "./LoginForm.module.css"

function LoginForm() {

    return (
        <section className={estilo.formSection}>
            <h3>LOGIN</h3>
            <form action="" className={estilo.formLogin}>
                <label>
                    E-mail
                    <input
                        type="email"
                        placeholder="Informe o seu e-mail"
                        className={estilo.inputEmailLogin}
                    />
                </label>

                <label>
                    Senha
                    <input
                        type="password"
                        placeholder="Informe sua senha"
                        className={estilo.inputPasswordLogin}
                    />
                </label>

                <input
                    type="button"
                    value="Entrar"
                    className={estilo.inputButtonLogin}
                />
            </form>
        </section>
    );
}

export default LoginForm;