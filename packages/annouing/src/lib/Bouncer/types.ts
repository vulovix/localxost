import { PropsWithChildren } from "react";

export interface BouncerAttributes {
    className?: string;
    height?: number;
};

export type BouncerProps = PropsWithChildren<BouncerAttributes>
