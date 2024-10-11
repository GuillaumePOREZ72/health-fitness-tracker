"use client";
import React from "react";
import { Spin as Hamburger } from "hamburger-react";

/**
 * A hamburger button that can be toggled on or off.
 *
 * @param {{ toggled: (() => void) | undefined; isOpen: boolean }} props
 * @prop {(() => void) | undefined} toggled A function to call when the button is
 *   toggled. If undefined, the button will not be toggleable.
 * @prop {boolean} isOpen If the button is currently toggled on or off.
 * @returns A div containing a Hamburger button that can be toggled on or off.
 */

const HamburgerComponent: React.FC<HamburgerProps> = ({
  toggled,
  isOpen,
  ...props
}) => {
  /**
   * Calls the toggled function if it is not undefined.
   */
  const handleToggle = () => {
    toggled?.();
  };

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={handleToggle} size={24} {...props} />
    </div>
  );
};

interface HamburgerProps {
  isOpen: boolean;
  toggled: () => void;
}

export default HamburgerComponent;
