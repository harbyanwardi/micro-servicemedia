module.exports = (Sequelize, DataTypes) => {
    const Example = Sequelize.define('Example', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        employeeName: {
            field: 'employee_name',
            type: DataTypes.STRING,
            allowNull: false
          },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'example'
    });

    return Example;
}