import React, { useCallback, useState } from "react";
import {
  ContainerUploader,
  FileUploaderContainer,
  DragFileElement,
  LabelFileUpload,
  UploadButton,
} from "./styles";

export interface IUploader {
  handleUploadCallback: (files: IUploaderResponde[]) => void;
  backgroundColor?: string;
  validTypes?: string[];
  maxSize?: number;
  height?: number;
  width?: number;
}

export type IUploaderResponde = {
  file: File;
  isValid: boolean;
  invalidReason: "invalid file type" | "invalid file size" | null;
};

const Uploader: React.FC<IUploader> = ({
  width = 400,
  height = 200,
  handleUploadCallback,
  maxSize,
  validTypes,
  backgroundColor = "#FFFFFF",
}) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // triggers when file is selected with click
  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(event.type === "dragenter" || event.type === "dragover");
  };

  const validateFiles = useCallback(
    (files: FileList) => {
      const validFiles: IUploaderResponde[] = Array.from(files).map((file) => {
        if (maxSize && file.size > maxSize)
          return {
            file: file,
            isValid: false,
            invalidReason: "invalid file size",
          };

        if (validTypes && !validTypes.includes(file.type))
          return {
            file: file,
            isValid: false,
            invalidReason: "invalid file type",
          };

        return {
          file: file,
          isValid: true,
          invalidReason: null,
        };
      });

      return validFiles;
    },
    [maxSize, validTypes]
  );

  // triggers when file is dropped
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setDragActive(false);
      if (!event.dataTransfer.files || !event.dataTransfer.files[0]) return;

      const filteredValidFiles = validateFiles(event.dataTransfer.files);

      handleUploadCallback(filteredValidFiles);
    },
    [handleUploadCallback, validateFiles]
  );

  // triggers when file is selected with click
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      if (!event.target.files || !event.target.files[0]) return;
      const filteredValidFiles = validateFiles(event.target.files);
      handleUploadCallback(filteredValidFiles);
    },
    [handleUploadCallback, validateFiles]
  );

  return (
    <ContainerUploader className="container-uploader">
      <FileUploaderContainer
        width={width}
        height={height}
        className="file-uploader-container"
        onDragEnter={(event) => handleDrag(event)}
      >
        <input
          multiple
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          accept="image/jpeg, image/jpg, image/png"
          onChange={(event) => handleChange(event)}
        />

        <LabelFileUpload
          backgroundColor={backgroundColor}
          isDragActive={dragActive}
        >
          <div>
            <p>Drag and drop your files here or</p>
            <UploadButton onClick={onButtonClick}>Upload a file</UploadButton>
            {validTypes && (
              <p>Valid formats: {validTypes.map((type) => type + " ")}</p>
            )}
            {!!maxSize ? <p>Max Size: {maxSize}</p> : '' }
          </div>
        </LabelFileUpload>

        {dragActive && (
          <DragFileElement
            onDrop={(event) => handleDrop(event)}
            onDragEnter={(event) => handleDrag(event)}
            onDragLeave={(event) => handleDrag(event)}
            onDragOver={(event) => handleDrag(event)}
          ></DragFileElement>
        )}
      </FileUploaderContainer>
    </ContainerUploader>
  );
};

export { Uploader };
