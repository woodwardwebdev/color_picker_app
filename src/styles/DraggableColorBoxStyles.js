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
    }
  },
  boxContent: {
    color: "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: { transition: "all 0.2s ease-in-out" }
};

export default styles;
