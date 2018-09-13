// Acciones (crear interface de la acción)
interface Action {
  type: string;
  payload?: any;
}

// Crear función reducer que recibe el estado actual y la acción
function reducer(state = 10, action: Action) {
  if (action.type === "INCREMENTAR") {
    return (state += 1);
  }
  return state;
}

// Usar el reducer (enviamos el estado como primer parámetro y la acción como segundo y retornamos el estado nuevo)
const incrementadorAction: Action = {
  type: "INCREMENTAR"
};
console.log(reducer(10, incrementadorAction));
