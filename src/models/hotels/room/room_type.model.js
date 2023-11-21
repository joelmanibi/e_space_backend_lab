module.exports = (sequelize, Sequelize) => {
    const RoomType = sequelize.define("room_type", {
      roomType_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      roomType_name: {
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
      return RoomType;
};