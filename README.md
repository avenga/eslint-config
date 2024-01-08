# eslint-config

ESLint configs from Avenga for various languages

## install and use

1. Install ESLint as per default:  
   <https://eslint.org/docs/user-guide/getting-started>

2. Install this package:  
   npm: `npm i --save-dev @avenga/eslint-config`  
   yarn: `yarn add --dev @avenga/eslint-config`

3. Extend the config which you want to use

   - JavaScript + TypeScript: `"extends": "@avenga/eslint-config"`
   - JavaScript only: `"extends": "@avenga/eslint-config/javascript"`
   - TypeScript only: `"extends": "@avenga/eslint-config/typescript"`

   Note: These already include recommended linting rules for both JS and TS, such as `eslint/recommended` and `@typescript-eslint/recommended`.

4. Next steps:
   - Configure additional settings such as `browser: true` or `node: true`
   - Contribute additional configs, for example for React or Angular apps
