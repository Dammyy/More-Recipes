	  module.exports = (sequelize, DataTypes) => {
  const downvotes = sequelize.define('downvotes', {
    downvote: DataTypes.INTEGER
   });
   downvotes.associate = (models) => {
    downvotes.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    downvotes.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  return downvotes;
};
