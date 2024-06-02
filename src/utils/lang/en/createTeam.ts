const createTeam = {
  CREATE_TEAM: {
    INPUTS: {
      NAME: "Name *",
      DESCRIPTION: "Description"
    },
    COLUMNS: {
      NAME: "Name",
      AGE: "Age",
      POSITION: "Position",
      SPECIAL_ABILITY: "Special Ability"
    },
    SPECIAL_ABILITY: {
      ONE: "Enhanced vision",
      TWO: "Improved speed",
      THREE: "Power swing",
      FOUR: "Performance improvement",
      FIVE: "Shock resistance",
      SIX: "Lock improvement",
      SEVEN: "Tracking improvement",
      EIGHT: "Improvement in attack"
    },
    REMOVE_FROM_CREATION: "Eliminar de la creación",
    EMPTY_STATE: "There are no players available"
  }
};

export default createTeam;
