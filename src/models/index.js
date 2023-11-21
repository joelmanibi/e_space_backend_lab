const config = require("../../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user/user.model.js")(sequelize, Sequelize);
db.user_type = require("../models/user/user_type.model.js")(sequelize, Sequelize);
db.prestataire = require("../models/prestataire/prestataire.model.js")(sequelize, Sequelize);
db.restaurant = require("../models/restaurant/restaurant.model.js")(sequelize, Sequelize);
db.menu = require("../models/restaurant/menu.model.js")(sequelize, Sequelize);
db.resi = require("../models/residence/resi.model.js")(sequelize, Sequelize);
db.operateur = require("../models/operator/operator.model.js")(sequelize, Sequelize);
db.resi_type = require("../models/residence/resi_type.model.js")(sequelize, Sequelize);
db.resi_image = require("../models/residence/resi_image.model.js")(sequelize, Sequelize);
db.promoteur = require("../models/promoteur/promoteur.model.js")(sequelize, Sequelize);

db.lieu = require("../models/lieu/lieu.model.js")(sequelize, Sequelize);
db.etoile = require("../models/hotels/etoile.model.js")(sequelize, Sequelize);
db.hotel = require("../models/hotels/hotel.model.js")(sequelize, Sequelize);
db.event_space = require("../models/event_space/event_space.model.js")(sequelize, Sequelize);
db.event = require("../models/event/event.model.js")(sequelize, Sequelize);
db.room = require("../models/hotels/room/room.model.js")(sequelize, Sequelize);
db.room_type = require("../models/hotels/room/room_type.model.js")(sequelize, Sequelize);
db.room_image = require("../models/hotels/room/room_image.model.js")(sequelize, Sequelize);
db.club_type = require("../models/club/club_type.model.js")(sequelize, Sequelize);
db.club = require("../models/club/club.model.js")(sequelize, Sequelize);
db.service = require("../models/service.model.js")(sequelize, Sequelize);
db.commune = require("../models/commune.model.js")(sequelize, Sequelize);

/////toutes les realtion many to many
// db.service.belongsToMany(db.filiale, { through: 'service_status' });

/////toutes les realtion one to many

db.user_type.hasMany(db.user, { foreignKey: 'userType' });
db.user.belongsTo(db.user_type, { foreignKey: 'userType' });

db.user.hasMany(db.prestataire, { foreignKey: 'prestataire_user' });
db.prestataire.belongsTo(db.user, { foreignKey: 'prestataire_user' });

db.prestataire.hasMany(db.restaurant, { foreignKey: 'restaurant_prestataire' });
db.restaurant.belongsTo(db.prestataire, { foreignKey: 'restaurant_prestataire' });

db.restaurant.hasMany(db.menu, { foreignKey: 'menu_restaurant' });
db.menu.belongsTo(db.restaurant, { foreignKey: 'menu_restaurant' });

db.resi_type.hasMany(db.resi, { foreignKey: 'resiType' });
db.resi.belongsTo(db.resi_type, { foreignKey: 'resiType' });

db.resi.hasMany(db.resi_image, { foreignKey: 'resiImage_resi' });
db.resi_image.belongsTo(db.resi, { foreignKey: 'resiImage_resi' });

db.prestataire.hasMany(db.resi, { foreignKey: 'resi_prestataire' });
db.resi.belongsTo(db.prestataire, { foreignKey: 'resi_prestataire' });

db.service.hasMany(db.resi, { foreignKey: 'resi_service' });
db.resi.belongsTo(db.service, { foreignKey: 'resi_service' });

db.commune.hasMany(db.promoteur, { foreignKey: 'promoteur_commune' });
db.promoteur.belongsTo(db.commune, { foreignKey: 'promoteur_commune' });

db.prestataire.hasMany(db.promoteur, { foreignKey: 'promoteur_prestataire' });
db.promoteur.belongsTo(db.prestataire, { foreignKey: 'promoteur_prestataire' });

db.prestataire.hasMany(db.promoteur, { foreignKey: 'promoteur_prestataire' });
db.promoteur.belongsTo(db.prestataire, { foreignKey: 'promoteur_prestataire' });

db.service.hasMany(db.operateur, { foreignKey: 'operatorTour_service' });
db.operateur.belongsTo(db.service, { foreignKey: 'operatorTour_service' });

db.prestataire.hasMany(db.operateur, { foreignKey: 'operatorTour_prestataire' });
db.operateur.belongsTo(db.prestataire, { foreignKey: 'operatorTour_prestataire' });

db.commune.hasMany(db.lieu, { foreignKey: 'lieu_commune' });
db.lieu.belongsTo(db.commune, { foreignKey: 'lieu_commune' });

db.prestataire.hasMany(db.lieu, { foreignKey: 'lieu_prestataire' });
db.lieu.belongsTo(db.prestataire, { foreignKey: 'lieu_prestataire' });

db.prestataire.hasMany(db.hotel, { foreignKey: 'hotel_prestataire' });
db.hotel.belongsTo(db.prestataire, { foreignKey: 'hotel_prestataire' });

db.etoile.hasMany(db.hotel, { foreignKey: 'hotel_etoile' });
db.hotel.belongsTo(db.etoile, { foreignKey: 'hotel_etoile' });

db.service.hasMany(db.hotel, { foreignKey: 'hotel_service' });
db.hotel.belongsTo(db.service, { foreignKey: 'hotel_service' });

db.service.hasMany(db.room, { foreignKey: 'room_service' });
db.room.belongsTo(db.service, { foreignKey: 'room_service' });

db.hotel.hasMany(db.room, { foreignKey: 'room_hotel' });
db.room.belongsTo(db.hotel, { foreignKey: 'room_hotel' });

db.room_type.hasMany(db.room, { foreignKey: 'roomType' });
db.room.belongsTo(db.room_type, { foreignKey: 'roomType' });

db.room.hasMany(db.room_image, { foreignKey: 'roomImage_room' });
db.room_image.belongsTo(db.room, { foreignKey: 'roomImage_room' });

db.commune.hasMany(db.event_space, { foreignKey: 'eventSpace_commune' });
db.event_space.belongsTo(db.commune, { foreignKey: 'eventSpace_commune' });

db.prestataire.hasMany(db.event_space, { foreignKey: 'eventSpace_prestataire' });
db.event_space.belongsTo(db.prestataire, { foreignKey: 'eventSpace_prestataire' });

db.service.hasMany(db.event_space, { foreignKey: 'eventSpace_service' });
db.event_space.belongsTo(db.service, { foreignKey: 'eventSpace_service' });

db.prestataire.hasMany(db.event, { foreignKey: 'event_prestataire' });
db.event.belongsTo(db.prestataire, { foreignKey: 'event_prestataire' });

db.service.hasMany(db.event, { foreignKey: 'event_activity' });
db.event.belongsTo(db.service, { foreignKey: 'event_activity' });

db.prestataire.hasMany(db.club, { foreignKey: 'club_prestataire' });
db.club.belongsTo(db.prestataire, { foreignKey: 'club_prestataire' });

db.club_type.hasMany(db.club, { foreignKey: 'clubType' });
db.club.belongsTo(db.club_type, { foreignKey: 'clubType' });


module.exports = db;