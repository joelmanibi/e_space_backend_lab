module.exports = (sequelize, Sequelize) => {
    const ResiImage = sequelize.define("resi_image", {
      resiImage_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      resiImage_name: {
        type: Sequelize.STRING
      },
      resiImage_resi: {
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
      return ResiImage;
};