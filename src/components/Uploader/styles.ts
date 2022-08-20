import styled, { css } from "styled-components";
import { IUploader } from ".";

export const ContainerUploader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FileUploaderContainer = styled.div<
  Pick<IUploader, "height" | "width">
>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  text-align: center;
  position: relative;
`;

type ILabelFileUpload = {
  isDragActive: boolean;
  backgroundColor: string;
};
export const LabelFileUpload = styled.div<ILabelFileUpload>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 1rem;
  border-style: dashed;
  background: ${({ backgroundColor }) => backgroundColor};
  border-color: black;

  > div {
    p {
      color: black;
      margin-bottom: 0.5rem;
    }
    button {
      color: black;
      text-decoration: underline;
    }
  }

  transition: filter 0.1s;

  ${({ isDragActive }) =>
    isDragActive &&
    css`
      filter: brightness(0.8);
    `}
`;

export const UploadButton = styled.button`
  padding: 0.25rem;
  font-size: 1rem;
  border: none;
  background: transparent;
  margin-bottom: 1rem;

  &:hover {
    text-decoration-line: underline;
  }
`;

export const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
