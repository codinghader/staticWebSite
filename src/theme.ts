export default interface IThemeInterface {
  blueColor: string;
  greyColor: string;
  yellowColor: string;
  greenColor: string;
  primary: string;
  primaryText: string;
  disabled: string;
}

const theme = {
  blueColor: "#3498db",
  greenColor: "#1abc9c",
  greyColor: "#7f8c8d",
  yellowColor: "#f1c40f",
  primary: "#2196f3",
  primaryText: "white",
  disabled: "grey"
};

export { theme };
