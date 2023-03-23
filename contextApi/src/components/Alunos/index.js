
import { useContext } from 'react';

import Nome from '../Nome';

import { UserContext } from '../../contexts/user';

function Alunos() {
  const { qtdAlunos } = useContext(UserContext);

  return (
    <div>
      <h2>Quantidade total de alunos: {qtdAlunos} </h2>
      <Nome />
    </div>
  );
}

export default Alunos;
