module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      room_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      roomType: {
        type: Sequelize.INTEGER
      },
      room_hotel: {
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
      return Room;
};