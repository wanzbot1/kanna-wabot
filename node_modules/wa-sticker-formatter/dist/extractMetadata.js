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
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractMetadata = void 0;
const node_webpmux_1 = require("node-webpmux");
const extractMetadata = (image) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const img = new node_webpmux_1.Image();
    yield img.load(image);
    const exif = img.exif.toString('utf-8');
    return JSON.parse((_a = exif.substring(exif.indexOf('{'), exif.lastIndexOf('}') + 1)) !== null && _a !== void 0 ? _a : '{}');
});
exports.extractMetadata = extractMetadata;
