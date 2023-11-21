module.exports = (sequelize, Sequelize) => {
    const Service = sequelize.define("service", {
      service_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      service_name: {
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
      return Service;
};