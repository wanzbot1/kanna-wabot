/// <reference types="node" />
import { IStickerOptions } from './Types';
import { StickerTypes } from './internal/Metadata/StickerTypes';
import { Categories } from '.';
import { Color } from 'sharp';
export declare class Sticker {
    private data;
    metadata: Partial<IStickerOptions>;
    constructor(data: string | Buffer, metadata?: Partial<IStickerOptions>);
    private _parse;
    private _getMimeType;
    /**
     * Builds the sticker
     * @param {string} [type] - How you want your sticker to look like
     * @returns {Promise<Buffer>} A promise that resolves to the sticker buffer
     */
    build: (type?: StickerTypes) => Promise<Buffer>;
    get defaultFilename(): string;
    /**
     * Saves the sticker to a file
     * @param [filename] - Filename to save the sticker to
     * @returns filename
     */
    toFile: (filename?: string) => Promise<string>;
    /**
     * Set the sticker pack title
     * @param pack - Sticker Pack Title
     * @returns {this}
     */
    setPack: (pack: string) => this;
    /**
     * Set the sticker pack author
     * @param author - Sticker Pack Author
     * @returns
     */
    setAuthor: (author: string) => this;
    /**
     * Set the sticker pack ID
     * @param id - Sticker Pack ID
     * @returns {this}
     */
    setID: (id: string) => this;
    /**
     * Set background color for `full` images
     * @param background - Background color
     * @returns
     */
    setBackground: (background: Color) => this;
    /**
     * Set the sticker category
     * @param categories - Sticker Category
     * @returns {this}
     */
    setCategories: (categories: Categories[]) => this;
    /**
     * @deprecated
     * Use the `Sticker.build()` method instead
     */
    get: (type?: StickerTypes) => Promise<Buffer>;
}
export declare const createSticker: (data: string | Buffer, metadata?: Partial<IStickerOptions> | undefined) => Promise<Buffer>;
