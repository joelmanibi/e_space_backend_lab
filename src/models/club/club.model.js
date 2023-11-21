module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define("club", {
      club_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      club_open: {
        type: Sequelize.DATE
      },
      club_close: {
        type: Sequelize.DATE
      },
      club_description: {
        type: Sequelize.TEXT
      },
      club_location: {
        type: Sequelize.STRING
      },
      clubType: {
        type: Sequelize.INTEGER
      },
      club_prestataire: {
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
      return Club;
};