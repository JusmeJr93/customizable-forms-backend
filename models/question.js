import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import Template from "./template.js";

const Question = sequelize.define('Question', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('string', 'text', 'integer', 'checkbox'),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    timestamps: true,
});

Question.belongsTo(Template);
Template.hasMany(Question, { onDelete: 'CASCADE' });

export default Question;