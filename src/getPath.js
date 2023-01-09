import path, { parse } from 'node:path';
import process from 'node:process';
// import fs from 'fs


const getFullPath = (filename) => path.resolve(process.cwd(), filename);
// const extractFormat = (filepath) => path.extname(filepath).slice(1);
// const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), extractFormat(filepath))

export default getFullPath;
