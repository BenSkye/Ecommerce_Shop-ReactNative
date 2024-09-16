export const getArtTools = async () => {
  const response = await fetch('https://65969e046bb4ec36ca030276.mockapi.io/api/v1/items');
  return response.json();
};
