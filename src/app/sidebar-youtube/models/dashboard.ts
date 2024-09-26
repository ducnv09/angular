import { Type } from "@angular/core";

export interface Widget {
    id: number,
    label: string,
    content: Type<unknown>;
    columns?: number;
    rows?: number;
    backgroundColor?: string;
    color?: string;
}