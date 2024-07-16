export const getProfileIconClass = (index) => {
    const classes = ["red", "blue", "green", "orange", "purple"];
    return classes[index % classes.length];
  };