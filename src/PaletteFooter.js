import React from "react";

function PaletteFooter(props) {
  const { palettename, emoji } = props;
  return (
    <footer className="Palette-footer">
      {palettename} <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
