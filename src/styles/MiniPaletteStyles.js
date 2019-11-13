export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "1px 1px 4px rgba(0,0,0,0.4)"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
    height: "150px",
    width: "100%"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-3px"
  }
};
