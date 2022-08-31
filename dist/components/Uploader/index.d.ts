import React from "react";
export interface IUploader {
    handleUploadCallback: (files: IUploaderResponde[]) => void;
    backgroundColor?: string;
    validTypes?: string[];
    maxSize?: number;
    height?: number;
    width?: number;
}
export declare type IUploaderResponde = {
    file: File;
    isValid: boolean;
    invalidReason: "invalid file type" | "invalid file size" | null;
};
declare const Uploader: React.FC<IUploader>;
export { Uploader };
