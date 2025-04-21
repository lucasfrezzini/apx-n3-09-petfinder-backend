// Desc: Model for the User table in the database

import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db/index.js";

export const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lng: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profilePic: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: [],
  },
});
