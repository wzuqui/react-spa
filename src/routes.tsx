import {
  Navigate,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom';

import { MudarUnidade } from './pages/MudarUnidade';
import { PaginaInicial } from './pages/PaginaInicial';
import { PessoasFisicas } from './pages/PessoasFisicas';
import { PessoasJuridicas } from './pages/PessoasJuridicas';

export function Routes() {
  return (
    <ReactRoutes>
      <Route
        element={<Navigate to="pagina-inicial" />}
        path="/"
      />
      <Route
        element={<PaginaInicial />}
        path="pagina-inicial"
      />
      <Route
        element={<MudarUnidade />}
        path="mudar-unidade"
      />
      <Route
        element={<PessoasFisicas />}
        path="pessoas-fisicas"
      />
      <Route
        element={<PessoasJuridicas />}
        path="pessoas-juridicas"
      />
    </ReactRoutes>
  );
}
