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
    SUCCESS: "Equipo creado exitosamente",
    ERRORS: {
      PLAYERS_ARE_REQUIRED: "Los jugadores son requeridos",
      THE_TEAM_NAME_ALREADY_EXISTS:
        "El nombre del equipo ya existe, ingresa otro nombre",
      AN_ERROR_OCCURRED: "Se produjo un error, por favor vuelva a intentarlo"
    },
    REMOVE_FROM_CREATION: "Eliminar de la creación",
    EMPTY_STATE: "No hay jugadores disponibles"
  }
};

export default createTeam;
