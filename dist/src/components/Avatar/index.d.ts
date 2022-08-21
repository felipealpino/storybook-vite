import React from "react";
export interface IAvatar {
    image?: string;
    width?: number;
    height?: number;
    className?: string;
}
declare const Avatar: React.FC<IAvatar>;
export { Avatar };
