import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en <PrivateRoute />', () => {
  test('debe de mostrar el children si esta autenticado', () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
      user: {
        id: 'abc',
        name: 'Juan',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
