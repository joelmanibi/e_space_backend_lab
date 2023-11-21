module.exports = (sequelize, Sequelize) => {
    const UserType = sequelize.define("user_type", {
      userType_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userType_name: {
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
      return UserType;
};