import { useState } from "react";
import "../../scss/app.scss";
import { useNavigate } from "react-router-dom";

import data from "../../mock/db.json";

export const AppLogin = () => {
  const [userLogin, setUserLogin] = useState("");
  const [userPass, setUserPass] = useState("");
  const [incorrectPass, setIncorrectPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userLogin === data.profiles[0].user &&
      userPass === data.profiles[0].password
    ) {
      navigate("/pages");
      return;
    }
    setIncorrectPass(true);
  };

  return (
    <section className="section4">
      <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
          </div>

          {incorrectPass && (
            <h4 style={{ color: "#ff0066" }}>Usuário ou senha incorretos</h4>
          )}
        </div>
      </form>
    </section>
  );
};
