const Truncate = function(str, length, ending) {
  if (length == null) {
    length = 150;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export default Truncate;
