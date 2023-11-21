module.exports = (sequelize, Sequelize) => {
    const OperatorTour = sequelize.define("operator_tour", {
      operatorTour_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      operatorTour_description: {
        type: Sequelize.TEXT
      },
      operatorTour_location: {
        type: Sequelize.STRING
      },
      operatorTour_service: {
        type: Sequelize.INTEGER
      },
      operatorTour_prestataire: {
        type: Sequelize.INTEGER
      },

    },
    {
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    }
      );
      return OperatorTour;
};