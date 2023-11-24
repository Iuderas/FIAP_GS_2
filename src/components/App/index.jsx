import { useState } from "react";
import "../../scss/app.scss";

import data from "../../mock/db.json";

export const AppLogin = () => {
  const [userLogin, setUserLogin] = useState("");
  const [userPass, setUserPass] = useState("");

  return (
    <section className="section4">
      <form>
        <div className="dados">
          <div className="user">
            <label for="user">Usuário</label>
            <input
              value={userLogin}
              type="text"
              name="user"
              id="user"
              onChange={(e) => setUserLogin(e.target.value)}
            />
          </div>
          <div className="senha">
            <label for="senha">Senha</label>
            <input
              value={userPass}
              type="password"
              name="senha"
              id="senha"
              onChange={(e) => setUserPass(e.target.value)}
            />
          </div>
          <div className="login">
            <button>
              <a
                href={
                  userLogin === data.profiles[0].user &&
                  userPass === data.profiles[0].password
                    ? "/pages"
                    : "#"
                }
              >
                Login
              </a>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
