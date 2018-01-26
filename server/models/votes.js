module.exports = (sequelize, DataTypes) => {
  const votes = sequelize.define('votes', {
    vote: DataTypes.BOOLEAN
  });
  votes.associate = (models) => {
    votes.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    votes.belongsTo(models.recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return votes;
};
