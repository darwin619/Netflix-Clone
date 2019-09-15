const INITIAL_STATE = {
  collection: [
    {
      id: 1,
      title: "Popular",
      start: 0,
      end: 10
    },
    {
      id: 2,
      title: "Top Rated",
      start: 10,
      end: 20
    },
    {
      id: 3,
      title: "Highest Grossing",
      start: 20,
      end: 30
    },
    {
      id: 4,
      title: "New Releases",
      start: 30,
      end: 40
    },
    {
      id: 5,
      title: "Most Liked",
      start: 40,
      end: 50
    },
    {
      id: 6,
      title: "Trending Now",
      start: 50,
      end: 60
    }
  ]
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
