module.exports = (sequelize, Sequelize) => {
    const RoomImage = sequelize.define("room_image", {
      roomImage_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      roomImage_name: {
        type: Sequelize.STRING
      },
      roomImage_room: {
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
      return RoomImage;
};