import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What label color to use
   */
  color?: string;
  /**
   * What horizontal size to use
   */
  paddingHorizontal?: number;
  /**
   * What vertical size to use
   */
  paddingVertical?: number;
  /**
   * What label font size to use
   */
  fontSize?: number;
  /**
   * What border color to use
   */
  borderColor?: string;
  /**
   * How should the button border rounded?
   */
  borderRadius?: number;
  /**
   *  What size should the button border be?
   */
  borderWidth?: number;

  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "large",
  backgroundColor,
  color,
  paddingHorizontal,
  paddingVertical,
  fontSize,
  borderRadius,
  borderColor = "#ccc",
  borderWidth,
  label,

  ...props
}: ButtonProps) => {
  const mode = primary
    ? "funnypelican-button--primary"
    : "funnypelican-button--secondary";
  const borderShadowWidth = borderWidth || (primary ? 0 : 1);
  return (
    <button
      type="button"
      className={[
        "funnypelican-button",
        `funnypelican-button--${size}`,
        mode,
      ].join(" ")}
      style={{
        backgroundColor,
        color,
        paddingLeft: `${paddingHorizontal}px`,
        paddingRight: `${paddingHorizontal}px`,
        paddingTop: `${paddingVertical}px`,
        paddingBottom: `${paddingVertical}px`,
        fontSize,
        borderRadius,
        boxShadow: `${`${borderColor} 0px 0px 0px ${borderShadowWidth}px inset`}`,
      }}
      {...props}
    >
      {label}
    </button>
  );
};
