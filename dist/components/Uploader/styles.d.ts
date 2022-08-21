import { IUploader } from ".";
export declare const ContainerUploader: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FileUploaderContainer: import("styled-components").StyledComponent<"div", any, Pick<IUploader, "width" | "height">, never>;
declare type ILabelFileUpload = {
    isDragActive: boolean;
    backgroundColor: string;
};
export declare const LabelFileUpload: import("styled-components").StyledComponent<"div", any, ILabelFileUpload, never>;
export declare const UploadButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const DragFileElement: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
