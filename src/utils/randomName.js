export const randomName = () => {
  const adjectives = [
    "Brza",
    "Ljuta",
    "Gladna",
    "Zgodna",
    "Zločesta",
    "Divlja",
  ];
  const nouns = [
    "Egipatska Mau mačka",
    "Javanska mačka",
    "Maine Coon mačka",
    "Mekong bobtail mačka",
    "Perzijska mačka",
    "Ruska plava mačka",
    "Serengeti mačka",
  ];
  const randomIndex = () => Math.floor(Math.random() * adjectives.length);

  return `${adjectives[randomIndex()]} ${nouns[randomIndex()]}`;
};
