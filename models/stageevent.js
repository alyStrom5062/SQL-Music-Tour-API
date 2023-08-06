'use strict'

// DEPENDENCIES
const { Model } = require('sequelize');

// MODELS
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate(models) {};
};

// CONFIGURE
  StageEvent.init({
    stage_events_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_events',
    timestamps: false,
  });
  return StageEvent;
};