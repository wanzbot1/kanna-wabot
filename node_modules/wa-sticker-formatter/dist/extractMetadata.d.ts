/// <reference types="node" />
import { IRawMetadata } from '.';
export declare const extractMetadata: (image: Buffer) => Promise<Partial<IRawMetadata>>;
