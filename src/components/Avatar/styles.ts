import { IAvatar } from "./";
import styled from "styled-components";

export const AvatarContainer = styled.div<IAvatar>`
  background: gray;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  img {
    height: 100%;
    font-family: cover;
    object-fit: cover;
    width: 100%;
  }

  ${(props) => props.onClick && "cursor: pointer"}
`;
