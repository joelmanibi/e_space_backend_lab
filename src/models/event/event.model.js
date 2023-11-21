module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      event_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      event_name: {
        type: Sequelize.STRING
      },
      event_activity: {
        type: Sequelize.INTEGER
      },
      event_open: {
        type: Sequelize.DATE
      },
      event_close: {
        type: Sequelize.DATE
      },
      event_price: {
        type: Sequelize.INTEGER
      },
      event_description: {
        type: Sequelize.TEXT
      },
      event_photo: {
        type: Sequelize.STRING
      },
      eventSpace_location: {
        type: Sequelize.STRING
      },
      eventSpace_lieu: {
        type: Sequelize.STRING
      },
      booking_deadline: {
        type: Sequelize.DATE
      },
      eventSpace_prestataire: {
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
      return Event;
};