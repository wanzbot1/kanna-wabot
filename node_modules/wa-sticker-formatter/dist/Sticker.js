"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSticker = exports.Sticker = void 0;
const fs_extra_1 = require("fs-extra");
const axios_1 = __importDefault(require("axios"));
const Utils_1 = __importStar(require("./Utils"));
const file_type_1 = require("file-type");
const convert_1 = __importDefault(require("./internal/convert"));
const Exif_1 = __importDefault(require("./internal/Metadata/Exif"));
const StickerTypes_1 = require("./internal/Metadata/StickerTypes");
class Sticker {
    constructor(data, metadata = {}) {
        var _a, _b, _c, _d, _e;
        this.data = data;
        this.metadata = metadata;
        this._parse = () => __awaiter(this, void 0, void 0, function* () {
            return Buffer.isBuffer(this.data)
                ? this.data
                : (() => __awaiter(this, void 0, void 0, function* () {
                    return fs_extra_1.existsSync(this.data)
                        ? fs_extra_1.readFile(this.data)
                        : axios_1.default.get(this.data, { responseType: 'arraybuffer' }).then(({ data }) => data);
                }))();
        });
        this._getMimeType = (data) => __awaiter(this, void 0, void 0, function* () {
            const type = yield file_type_1.fromBuffer(data);
            if (!type)
                throw new Error('Invalid Buffer Instance');
            return type.mime;
        });
        /**
         * Builds the sticker
         * @param {string} [type] - How you want your sticker to look like
         * @returns {Promise<Buffer>} A promise that resolves to the sticker buffer
         */
        this.build = (type = this.metadata.type || StickerTypes_1.StickerTypes.DEFAULT) => __awaiter(this, void 0, void 0, function* () {
            const buffer = yield this._parse();
            const mime = yield this._getMimeType(buffer);
            const { quality, background } = this.metadata;
            return new Exif_1.default(this.metadata).add(yield convert_1.default(buffer, mime, type, {
                quality,
                background
            }));
        });
        /**
         * Saves the sticker to a file
         * @param [filename] - Filename to save the sticker to
         * @returns filename
         */
        this.toFile = (filename = this.defaultFilename) => __awaiter(this, void 0, void 0, function* () {
            yield fs_extra_1.writeFile(filename, yield this.build());
            return filename;
        });
        /**
         * Set the sticker pack title
         * @param pack - Sticker Pack Title
         * @returns {this}
         */
        this.setPack = (pack) => {
            this.metadata.pack = pack;
            return this;
        };
        /**
         * Set the sticker pack author
         * @param author - Sticker Pack Author
         * @returns
         */
        this.setAuthor = (author) => {
            this.metadata.author = author;
            return this;
        };
        /**
         * Set the sticker pack ID
         * @param id - Sticker Pack ID
         * @returns {this}
         */
        this.setID = (id) => {
            this.metadata.id = id;
            return this;
        };
        /**
         * Set background color for `full` images
         * @param background - Background color
         * @returns
         */
        this.setBackground = (background) => {
            this.metadata.background = background;
            return this;
        };
        /**
         * Set the sticker category
         * @param categories - Sticker Category
         * @returns {this}
         */
        this.setCategories = (categories) => {
            this.metadata.categories = categories;
            return this;
        };
        /**
         * @deprecated
         * Use the `Sticker.build()` method instead
         */
        this.get = this.build;
        this.metadata.author = (_a = this.metadata.author) !== null && _a !== void 0 ? _a : '';
        this.metadata.pack = (_b = this.metadata.pack) !== null && _b !== void 0 ? _b : '';
        this.metadata.id = (_c = this.metadata.id) !== null && _c !== void 0 ? _c : Utils_1.default.generateStickerID();
        this.metadata.quality = (_d = this.metadata.quality) !== null && _d !== void 0 ? _d : 100;
        this.metadata.type = Object.values(StickerTypes_1.StickerTypes).includes(this.metadata.type)
            ? this.metadata.type
            : StickerTypes_1.StickerTypes.DEFAULT;
        this.metadata.background = (_e = this.metadata.background) !== null && _e !== void 0 ? _e : Utils_1.defaultBg;
    }
    get defaultFilename() {
        return `./${this.metadata.pack}-${this.metadata.author}.webp`;
    }
}
exports.Sticker = Sticker;
const createSticker = (...args) => __awaiter(void 0, void 0, void 0, function* () {
    return new Sticker(...args).build();
});
exports.createSticker = createSticker;
