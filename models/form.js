import { DataTypes } from 'sequelize';
import sequelize from './index.js';
import Template from './template.js';

const Form = sequelize.define('Form', {
    answers: {
        type: DataTypes.JSON,
        allowNull: false,
    }
}, {
    timestamps: true,
});

Form.belongsTo(Template);
Template.hasMany(Form, { onDelete: 'CASCADE' });

export default Form;