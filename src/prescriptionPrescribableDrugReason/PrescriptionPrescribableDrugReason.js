const SequelizeInstance = require("../dbConnection");
const Sequelize = require("sequelize");
const activeEnum = require("../constants/activeEnum");

const PrescriptionPrescribableDrugReason = SequelizeInstance.define(
  "PrescriptionPrescribableDrugReason",
  {
    prescriptionPrescribableDrugReasonId: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prescriptionPrescribableDrugId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: { tableName: "PrescriptionPrescribableDrugs" },
        key: "prescriptionPrescribableDrugId",
      },
    },
    prescriptionReasonId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: { tableName: "PrescriptionReasons" },
        key: "prescriptionReasonId",
      },
    },
    active: {
      type: Sequelize.DataTypes.STRING,
      values: activeEnum,
    },
  }
);

module.exports = PrescriptionPrescribableDrugReason;
