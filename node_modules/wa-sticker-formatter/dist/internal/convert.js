"use strict";
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
const sharp_1 = __importDefault(require("sharp"));
const videoToGif_1 = __importDefault(require("./videoToGif"));
const fs_extra_1 = require("fs-extra");
const os_1 = require("os");
const crop_1 = __importDefault(require("./crop"));
const StickerTypes_1 = require("./Metadata/StickerTypes");
const Utils_1 = require("../Utils");
const convert = (data, mime, type = StickerTypes_1.StickerTypes.DEFAULT, { quality = 100, background = Utils_1.defaultBg }) => __awaiter(void 0, void 0, void 0, function* () {
    const isVideo = mime.startsWith('video');
    let image = isVideo ? yield videoToGif_1.default(data) : data;
    const isAnimated = isVideo || mime.includes('gif');
    if (isAnimated && type === 'crop') {
        const filename = `${os_1.tmpdir()}/${Math.random().toString(36)}.webp`;
        yield fs_extra_1.writeFile(filename, image);
        [image, type] = [yield crop_1.default(filename), StickerTypes_1.StickerTypes.DEFAULT];
    }
    const img = sharp_1.default(image, { animated: true }).toFormat('webp');
    if (type === 'crop')
        img.resize(512, 512, {
            fit: 'cover'
        });
    if (type === 'full') {
        const { pages = 1 } = yield img.metadata();
        const pageHeight = 512;
        img.resize({
            width: pageHeight,
            height: pageHeight * pages,
            fit: 'contain',
            background
        }).webp({
            pageHeight
        });
    }
    return yield img
        .webp({
        quality,
        lossless: false
    })
        .toBuffer();
});
exports.default = convert;
