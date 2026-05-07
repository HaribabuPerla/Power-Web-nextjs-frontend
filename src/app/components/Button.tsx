"use client";

import React, { forwardRef, useCallback } from "react";

const BUTTON_VARIANTS = {
  primary:
    "border-2 border-yms-primary bg-yellow-500  text-white hover:bg-yellow-500 /90",
  secondary:
    "border-2 border-[#FFE508] bg-[#FFE508] text-[#292D32] hover:[#FFE508]/90",
  tertiary:
    "border-2 border-[#363430] bg-[#363430] text-white hover:[#363430]/90",
  outline:
    "border-2 border-yms-primary bg-transparent text-yms-primary hover:bg-yellow-500  hover:text-white",
  outlineDark:
    "border-2 border-[#001E50] bg-transparent text-[#001E50] hover:bg-[#001E50] hover:text-white",
  ghost:
    "border-2 border-transparent bg-transparent text-[#292D32] hover:bg-gray-100",
  danger: "border-2 border-red-600 bg-red-600 text-white hover:bg-red-700/90",
  success:
    "border-2 border-green-600 bg-green-600 text-white hover:bg-green-700/90",
  gray: "border-2 border-[#dfe4e8] bg-[#dfe4e8] text-black hover:bg-[#dfe4e8]/90",
  link: "text-yms-primary cursor-pointer",
  barebone: "",
} as const;

const BUTTON_SIZES = {
  link: "text-[14px]",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
  table: "px-2 py-1 text-[12px]",
  sideNav: "px-2 py-3 text-lg",
} as const;

interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled"
> {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: keyof typeof BUTTON_SIZES;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  testId?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      type = "button",
      className = "",
      disabled = false,
      loading = false,
      variant = "primary",
      size = "md",
      fullWidth = false,
      startIcon,
      endIcon,
      ariaLabel,
      ariaDescribedBy,
      testId,
      ...restProps
    },
    ref,
  ) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      },
      [onClick, disabled, loading],
    );

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) return;
        onMouseEnter?.(e);
      },
      [onMouseEnter, disabled, loading],
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) return;
        onMouseLeave?.(e);
      },
      [onMouseLeave, disabled, loading],
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        if (disabled || loading) return;
        onFocus?.(e);
      },
      [onFocus, disabled, loading],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        if (disabled || loading) return;
        onBlur?.(e);
      },
      [onBlur, disabled, loading],
    );

    const baseClasses = [
      "text-center border-0 rounded-[4px] cursor-pointer font-[500] outline-transparent transition-all",
      BUTTON_SIZES[size],
      BUTTON_VARIANTS[variant],
      fullWidth ? "w-full" : "w-auto",
      loading ? ["cursor-not-allowed"].join(" ") : "",
      disabled ? ["opacity-70 cursor-not-allowed!"] : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const LoadingSpinner = () => (
      <svg
        className="w-4 h-4 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        type={type}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled || loading}
        className={baseClasses}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-disabled={disabled || loading}
        data-testid={testId}
        {...restProps}
      >
        {startIcon && !loading && (
          <span className="mr-2 flex-pshrink-0" aria-hidden="true">
            {startIcon}
          </span>
        )}

        {loading && (
          <span className="flex justify-center items-center gap-3">
            {children}
            <LoadingSpinner />
          </span>
        )}

        {!loading && children}

        {endIcon && !loading && (
          <span className="ml-2 shrink-0" aria-hidden="true">
            {endIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

export type { ButtonProps };
export { BUTTON_VARIANTS, BUTTON_SIZES };
