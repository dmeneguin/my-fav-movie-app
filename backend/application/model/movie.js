const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Movie = sequelize.define('movie', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  genre: Sequelize.STRING,
  description: Sequelize.STRING,
  my_rating: Sequelize.DOUBLE,
  original_language: Sequelize.STRING,
  release_date: Sequelize.DATE,
  tmdb_id: Sequelize.INTEGER,
	poster: Sequelize.STRING,
	tmdb_rating: Sequelize.DOUBLE,
	comment: Sequelize.STRING
});

module.exports = Movie;