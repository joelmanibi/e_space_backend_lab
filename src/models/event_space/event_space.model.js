module.exports = (sequelize, Sequelize) => {
    const EventSpace = sequelize.define("event_space", {
      eventSpace_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      eventSpace_contact: {
        type: Sequelize.STRING
      },
      eventSpace_open: {
        type: Sequelize.DATE
      },
      eventSpace_close: {
        type: Sequelize.DATE
      },
      eventSpace_description: {
        type: Sequelize.TEXT
      },
      eventSpace_location: {
        type: Sequelize.STRING
      },
      eventSpace_service: {
        type: Sequelize.INTEGER
      },
      eventSpace_prestataire: {
        type: Sequelize.INTEGER
      },
      eventSpace_commune: {
        type: Sequelize.INTEGER
      }

    },
    {
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    }
      );
      return EventSpace;
};