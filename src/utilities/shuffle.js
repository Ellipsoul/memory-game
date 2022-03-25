// Helper function that shuffles 2 sets of the following 8 cards
const shuffle = () => {
  const assets = [
    { image: "/assets/css.png" },
    { image: "/assets/html5.png" },
    { image: "/assets/jquery.png" },
    { image: "/assets/js.png" },
    { image: "/assets/next.png" },
    { image: "/assets/node.png" },
    { image: "/assets/react.png" },
    { image: "/assets/ts.png" },
  ];
  // Shuffle the cards and map a unique ID to the card
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
