module.exports = (sequelize, DataTypes) => {
  const upvotes = sequelize.define('upvotes', {
    upvote: DataTypes.INTEGER
   });
   upvotes.associate = (models) => {
    downvotes.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    upvotes.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  return downvotes;
};
