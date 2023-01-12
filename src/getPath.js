import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFullPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

/* первая версия, getFullPath  не запоминает путь до папки */
// const getFullPath = (filename) => path.resolve(process.cwd(), filename);

export default getFullPath;
