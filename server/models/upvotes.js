module.exports = (sequelize, DataTypes) => {
  const upvotes = sequelize.define('upvotes', {
    upvote: DataTypes.INTEGER
  });
  upvotes.associate = (models) => {
    upvotes.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    upvotes.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return upvotes;
};
