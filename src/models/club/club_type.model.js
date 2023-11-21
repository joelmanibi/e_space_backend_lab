module.exports = (sequelize, Sequelize) => {
    const ClubType = sequelize.define("club_type", {
      clubType_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      clubType_name: {
        type: Sequelize.STRING
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
      return ClubType;
};