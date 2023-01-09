import path from 'node:path';
import process from 'node:process';

const getFullPath = (filename) => path.resolve(process.cwd(), filename);

export default getFullPath;
