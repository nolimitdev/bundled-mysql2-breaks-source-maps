import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
    return {
        entry : './resources/server.js',
        target : 'node',
        devtool : 'source-map',
        mode : 'development',
        experiments : {
            outputModule : true,
        },
        externals : {
            // Uncommenting next line fixes broken source maps but mysql2 will be not bundled what is undesired :(
            // 'mysql2' : 'mysql2',
        },
        externalsType : 'module',
        output : {
            path : path.resolve(__dirname, '../distribute'),
            filename : 'server.js',
            chunkFormat : 'module',
            libraryTarget : 'module',
        },
    };
};
