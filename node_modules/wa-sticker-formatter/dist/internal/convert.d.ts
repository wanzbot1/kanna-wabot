/// <reference types="node" />
import sharp, { Color } from 'sharp';
import { StickerTypes } from './Metadata/StickerTypes';
declare const convert: (data: Buffer, mime: string, type: StickerTypes | undefined, { quality, background }: {
    quality?: number | undefined;
    background?: sharp.Color | undefined;
}) => Promise<Buffer>;
export default convert;
