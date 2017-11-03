module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    review: DataTypes.STRING
  });
  reviews.associate = (models) => {
    reviews.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    reviews.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return reviews;
};
