import React from "react";

import { AvatarContainer } from "./styles";

export interface IAvatar {
  image?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Avatar: React.FC<IAvatar> = ({
  image,
  width = 50,
  height = 50,
  className,
}) => {
  return (
    <AvatarContainer
      className={`avatar-container ${className ? className : ""}`}
      width={width}
      height={height}
    >
      <img src={image} alt="avatar" />
    </AvatarContainer>
  );
};

export { Avatar };
