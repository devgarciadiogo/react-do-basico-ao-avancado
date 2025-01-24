import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Diogo", "Alice", "Melanie"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Diogo", age: 21 },
    { id: 2, name: "Alice", age: 20 },
    { id: 3, name: "Melanie", age: 0 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

     setUsers((prevUsers) =>{
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)
     })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Usuário Aleatório</button>
    </div>
  );
};

export default ListRender;
