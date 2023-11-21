module.exports = (sequelize, Sequelize) => {
    const ResiType = sequelize.define("resi_type", {
      resiType_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      resiType_name: {
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
      return ResiType;
};