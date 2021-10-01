const ageCalculator = function (name, yearOfBirth, currentYear) {
  const years = currentYear - yearOfBirth;
  return name + " is " + years + " years old.";
};

ageCalculator("Suzie", 1983, 2015);
