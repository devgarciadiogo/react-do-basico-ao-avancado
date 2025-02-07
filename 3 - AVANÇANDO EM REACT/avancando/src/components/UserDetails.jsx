/* eslint-disable react/prop-types */
const UserDetails = ({ name, job, age }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <h3> Idade: {age}</h3>
        <h3> Profissão: {job}</h3>
        {age >= 18 ? (
          <p> Está apto a ter carteira de motorista</p>
        ) : (
          <p> Não está apto a ter carteira de motorista</p>
        )}
      </div>
    </>
  );
};

export default UserDetails;
