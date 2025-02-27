import { useState } from "react";
import "./MyForm.css";
import PropTypes from "prop-types";

const MyForm = ({ user = {} }) => {
  // 6 -  controlled inputs
  //3 -  gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  console.log("User recebido", user);

  const handleName = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email);
  };

  //7 -  limpar formulário
  setName("");
  setEmail("");

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo o input */}
        <label>
          <span>Email:</span>
          {/* 4 - Simplificação de manipulação de state*/}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

MyForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default MyForm;
