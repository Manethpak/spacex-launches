const filterClasses = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export default filterClasses;
