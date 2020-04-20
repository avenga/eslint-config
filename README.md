# eslint-config
eslint configs from avenga for various languages

## install and use
1. install eslint as per default:  
   https://eslint.org/docs/user-guide/getting-started  

2. install this package:  
   npm: `npm i --dev @avenga/eslint-config`  
   yarn: `yarn add --dev @avenga/eslint-config`  
   
3. extend the config which you want to use  
   * javascript + typescript: `"extends": "@avenga/eslint-config"`  
   * javascript only: `"extends": "@avenga/eslint-config/javascript"`  
   * typescript only: `"extends": "@avenga/eslint-config/typescript"`  
   
   Note: this already includes `eslint/recommended`  

4. Next steps:
   * configure additional settings such as `browser: true` or `node: true`
   * contribute additional configs for react or angular apps for example



