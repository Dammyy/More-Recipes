module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    flag: DataTypes.BOOLEAN
  });
  favorites.associate = (models) => {
    favorites.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    favorites.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return favorites;
};
