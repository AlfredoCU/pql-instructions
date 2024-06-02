const createTeam = {
  CREATE_TEAM: {
    INPUTS: {
      NAME: "Nombre *",
      DESCRIPTION: "Descripción"
    },
    COLUMNS: {
      NAME: "Nombre",
      AGE: "Edad",
      POSITION: "Pocisión",
      SPECIAL_ABILITY: "Habilidad Especial"
    },
    SPECIAL_ABILITY: {
      ONE: "Visión mejorada",
      TWO: "Velocidad mejorada",
      THREE: "Aumento de poder",
      FOUR: "Mejora de rendimiento",
      FIVE: "Resistencia a los golpes",
      SIX: "Mejora de bloqueo",
      SEVEN: "Mejora del rastreo",
      EIGHT: "Mejora en ataque"
    },
    REMOVE_FROM_CREATION: "",
    EMPTY_STATE: "No hay jugadores disponibles"
  }
};

export default createTeam;
