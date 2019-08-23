export const FixString = (string) => {
  return string.split(" ").join("").toLowerCase().replace(/[^a-z0-9]/g, "");
}