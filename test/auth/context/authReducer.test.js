import { authReducer, types } from '../../../src/auth/';

describe('Pruebas en authReducer', () => {
  test('debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test('debe de (login) llamar el login autenticar y establecer el usuario ', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Sergio',
        id: '123',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });
  test('debe de (logout) llamar el login autenticar y establecer el usuario', () => {
    const state = {
      logged: true,
      user: { id: '123', name: 'Sergio' },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
