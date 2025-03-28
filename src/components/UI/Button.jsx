import styled, { css } from "styled-components";
import { COLORS } from "../../styles/colors";

const BUTTON_VARIANTS = {
  default: {
    background: COLORS.primary,
    borderRadius: "20px",
    space: "11px 16px",
    color: "white",
    border: "none",
    hover: COLORS.secondary,
    hoverText: "white",
    active: COLORS.active,
  },
  outline: {
    background: "none",
    color: COLORS.primary,
    space: "11px 16px",
    borderRadius: "20px",
    border: "1px solid rgb(138, 43, 6)",
    hover: COLORS.primary,
    hoverText: "white",
    active: COLORS.active,
  },
  withIcon: {
    background: "none",
    color: COLORS.primary,
    space: "8px 14px",
    borderRadius: "6px",
    border: "1px solid rgb(138, 43, 6)",
    hover: COLORS.primary,
    hoverText: "white",
    active: COLORS.active,
  },
};

function getButtonStyles(variant) {
  const buttonVariant = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.default;
  return css`
    border: none;
    color: ${buttonVariant.color};
    border: ${buttonVariant.border};
    background: ${buttonVariant.background};
    border-radius: ${buttonVariant.borderRadius};
    padding: ${buttonVariant.space};
    &:hover {
      background: ${buttonVariant.hover};
      color: ${buttonVariant.hoverText};
    }
    &:active {
      background: ${buttonVariant.active};
    }
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 3%;
    span {
      padding-right: ${(props) => props.variant !== "withIcon" && "10px"};
    }
  `;
}

export const Button = (props) => {
  const { children, icon = "", variant = "default", onClick } = props;

  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      children={Boolean(children)}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(props) => getButtonStyles(props.variant)}
`;
