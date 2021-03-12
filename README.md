# eslint-config

ESLint configs from Avenga for various languages

## install and use

1. Install ESLint as per default:  
   <https://eslint.org/docs/user-guide/getting-started>

2. Install this package:  
   npm: `npm i --save-dev @avenga/eslint-config`  
   yarn: `yarn add --dev @avenga/eslint-config`

3. Install peer dependencies
   Module requires a peer dependencies but none is installed. You must install peer dependencies yourself.
   npm: `npm i --save-dev @typescript-eslint/eslint-plugin@~2.28.0 @typescript-eslint/parser@~2.28.0 eslint-plugin-import@~2.20.2 eslint-plugin-prefer-arrow@~1.2.1`
   yarn: `yarn add --dev @typescript-eslint/eslint-plugin@~2.28.0 @typescript-eslint/parser@~2.28.0 eslint-plugin-import@~2.20.2 eslint-plugin-prefer-arrow@~1.2.1`

4. Extend the config which you want to use  
   * JavaScript + TypeScript: `"extends": "@avenga/eslint-config"`
   * JavaScript only: `"extends": "@avenga/eslint-config/javascript"`
   * TypeScript only: `"extends": "@avenga/eslint-config/typescript"`
   
   Note: These already include recommended linting rules for both JS and TS, such as `eslint/recommended` and `@typescript-eslint/recommended`.

5. Next steps:
   * Configure additional settings such as `browser: true` or `node: true`
   * Contribute additional configs, for example for React or Angular apps
