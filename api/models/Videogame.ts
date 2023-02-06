import { DataTypes} from 'sequelize';
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize:typeof Sequelize) => {
  // defino el modelo
  sequelize.define('VideoGame', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.DOUBLE
    },
    plataforms: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: '../public/GenericImage.avif'
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
      timestamps: false,
    });
};