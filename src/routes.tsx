import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';

import { MudarUnidade } from './pages/MudarUnidade';
import { PaginaInicial } from './pages/PaginaInicial';
import { PessoasFisicas } from './pages/PessoasFisicas';
import { PessoasJuridicas } from './pages/PessoasJuridicas';

// const PaginaInicial = React.lazy(() =>
//   import('./pages/PaginaInicial').then(p => ({
//     default: p.PaginaInicial,
//   }))
// );
// const MudarUnidade = React.lazy(() =>
//   import('./pages/MudarUnidade').then(p => ({
//     default: p.MudarUnidade,
//   }))
// );
// const PessoasFisicas = React.lazy(() =>
//   import('./pages/PessoasFisicas').then(p => ({
//     default: p.PessoasFisicas,
//   }))
// );
// const PessoasJuridicas = React.lazy(() =>
//   import('./pages/PessoasJuridicas').then(p => ({
//     default: p.PessoasJuridicas,
//   }))
// );

export function Routes() {
  return (
    <ReactRoutes>
      <Route
        element={<Navigate to="pagina-inicial" />}
        path="/"
      />
      <Route
        element={
          // <React.Suspense>
          <PaginaInicial />
          // </React.Suspense>
        }
        path="pagina-inicial"
      />
      <Route
        element={
          // <React.Suspense>
          <MudarUnidade />
          // </React.Suspense>
        }
        path="mudar-unidade"
      />
      <Route
        element={
          // <React.Suspense>
          <PessoasFisicas />
          // </React.Suspense>
        }
        path="pessoas-fisicas"
      />
      <Route
        element={
          // <React.Suspense>
          <PessoasJuridicas />
          // </React.Suspense>
        }
        path="pessoas-juridicas"
      />
    </ReactRoutes>
  );
}
