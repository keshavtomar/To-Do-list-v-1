//getting the day

module.exports = getday;

function getday() {
  let today = new Date();

  let options = {
    weekday: "long",
  };
  //I can add more key-value in options like year:'numeric' and month:'long'

  let dayname = today.toLocaleDateString("en-US", options);

  return dayname;
}
