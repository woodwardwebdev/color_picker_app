import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-in-out"
    }
  },

  root: {
    backgroundColor: "#040669",
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "0",
    color: "white",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.3rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "1.8rem"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.8rem"
    }
  }
};
