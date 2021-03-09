const opts = {
    schema: {
      body: {
        type: 'object',
        required: ['title', 'genres', 'description', 'my_rating', 'original_language', 'release_date'],
        properties: {
          title: { type: 'string' },
          genres: {
            type: 'array',
            items: { type: 'string' }
          },
          description: { type: 'string' },
          tmdb_id: { type: 'number' },
          poster: { type: 'string' },
          original_language: { type: 'string' },
          tmdb_rating: { type: 'number' },
          my_rating: { type: 'number' },
          release_date: { type: 'string' },
          comment: { type: 'string' }
        }
      }
    }
  }



module.exports = opts;