module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define("restaurant", {
      restaurant_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      restaurant_contact: {
        type: Sequelize.STRING
      },
      restaurant_open: {
        type: Sequelize.DATE
      },
      restaurant_close: {
        type: Sequelize.DATE
      },
      restaurant_description: {
        type: Sequelize.TEXT
      },
      restaurant_location: {
        type: Sequelize.STRING
      },
      restaurant_commune: {
        type: Sequelize.INTEGER
      },
      restaurant_prestataire: {
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
      return Restaurant;
};