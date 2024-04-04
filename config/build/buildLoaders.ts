import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoaders(isDev);

    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }],
                ],
            },
        },
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        babelLoader,
        tsLoader,
        cssLoader,
    ];
}
