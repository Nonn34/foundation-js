const grade = (score) => {
  score = Math.round(score);
  if (score >= 80 && score <= 100) {
    console.log("You got A");
  } else if (score >= 70 && score <= 79) {
    console.log("You got B");
  } else if (score >= 60 && score <= 69) {
    console.log("You got C");
  } else if (score >= 50 && score <= 59) {
    console.log("You got D");
  } else if (score >= 0 && score < 50) {
    console.log("You got F");
  } else {
    console.log("The score must be 0-100");
  }
};

grade(80);
grade(79.5);
grade(70);
grade(69.5);
grade(60);
grade(59.5);
grade(50);
grade(49);
grade(0);
grade(-1);
grade(101);
grade(49.4);
grade(49.49);
grade(49.5);
