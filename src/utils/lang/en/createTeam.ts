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
    SUCCESS: "Team created successfully",
    ERRORS: {
      PLAYERS_ARE_REQUIRED: "Players are required",
      THE_TEAM_NAME_ALREADY_EXISTS:
        "The team name already exists, enter another name",
      AN_ERROR_OCCURRED: "An error occurred, please try again"
    },
    REMOVE_FROM_CREATION: "Remove from creation",
    EMPTY_STATE: "There are no players available"
  }
};

export default createTeam;
