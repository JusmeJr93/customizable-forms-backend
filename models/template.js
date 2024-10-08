import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Template = sequelize.define('Template', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    tags: {
        type: DataTypes.JSON,
    },
    image: {
        type: DataTypes.STRING,
    },
    access: {
        type: DataTypes.ENUM('public', 'private'),
        defaultValue: 'public',
    }
}, {
    timestamps: true,
});

export default Template;