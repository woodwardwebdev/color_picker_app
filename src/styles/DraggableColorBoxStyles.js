import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    boxSizing: "border-box",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%"
    }
  },
  boxContent: {
    color: props =>
      chroma(props.color).luminance() >= 0.03 ? "rgba(0,0,0,0.6" : "white",
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    [sizes.down("sm")]: {
      padding: "0px"
    }
  },
  deleteIcon: { transition: "all 0.2s ease-in-out" }
};

export default styles;
