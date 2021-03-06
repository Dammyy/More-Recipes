
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipes', {
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    details: DataTypes.TEXT,
    image: DataTypes.TEXT,
    reviews: DataTypes.INTEGER,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER,
    favorited: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Recipe.associate = (models) => {
    Recipe.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  Recipe.associate = (models) => {
    Recipe.hasMany(models.favorites, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return Recipe;
};
