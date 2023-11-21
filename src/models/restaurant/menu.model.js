module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define("menu", {
      menu_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      menu_name: {
        type: Sequelize.STRING
      },
      menu_image: {
        type: Sequelize.STRING
      },
      menu_price: {
        type: Sequelize.STRING
      },
      menu_restaurant: {
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
      return Menu;
};