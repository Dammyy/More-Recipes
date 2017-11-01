module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    details: DataTypes.TEXT,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER,
    favorited: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return Recipe;
};
