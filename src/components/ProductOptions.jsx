import "../styles/ProductOptions.css";
import { useState } from "react";

export default function ProductOptions({ options = [], type, shape, title }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <span className="description ">{title}</span>

      <div className="flex gap-2 flex-wrap py-2">
        {options.map((option, index) => {
          const isSelected = selected === index;

          const baseStyle = {
            width: shape === "circle" ? "31px" : "48px",
            height: shape === "circle" ? "31px" : "48px",
            borderRadius: shape === "circle" ? "50%" : "4px",
            border: isSelected ? "2px solid #C92071" : "2px solid#CCCCCC",
            backgroundColor: type === "color" ? option : "#FFFFFF",
            fontSize: type === "text" ? "16px" : "",
            fontWeight: type === "text" ? "700" : "",
            color: type === "text" ? "#474747" : "",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          };

          return (
            <div
              key={index}
              onClick={() => setSelected(index)}
              style={baseStyle}
              className="transition-colors"
            >
              {type === "text" ? option : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
