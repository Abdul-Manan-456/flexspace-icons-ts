import React from "react";
export interface IconProps {
    name: string;
    size?: string | number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Icon: React.FC<IconProps>;
