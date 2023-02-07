import { DataTypes } from 'sequelize';

module.exports = (sequelize:any) => {
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
    released: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.DOUBLE
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING)
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