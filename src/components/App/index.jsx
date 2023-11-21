import "../../scss/app.scss";

export const AppLogin = () => {
  return (
    <section className="section4">
      <form>
        <div className="dados">
          <div className="user">
            <label for="user">Usuário</label>
            <input type="text" name="user" id="user" />
          </div>
          <div className="senha">
            <label for="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              onChange={(e) => {
                localStorage.setItem("@carebot:", e.target.value);
              }}
            />
          </div>
          <div className="login">
            <button>
              <a href="/pages">Login</a>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
