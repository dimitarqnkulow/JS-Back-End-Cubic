exports.difficultyOptions = (difficultyLevel) => {
  const titles = [
    "Very Easy",
    "Easy",
    "Medium (Standart 3x3)",
    "Intermediate",
    "Expert",
    "Hardcore",
  ];

  const options = titles.map((title, index) => ({
    title: `${title}`,
    value: index + 1,
    isSelected: difficultyLevel === index + 1,
  }));

  return options;
};
