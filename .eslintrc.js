module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react", ],
    "plugins": ["prettier"],
    "env": {
        "node": true,
        "es6": true,
        "jest": true,
        "browser": true,
    },
    "rules": {
      "react/jsx-filename-extension": [ 1,{"extensions": [".js", ".jsx"] }],
      "react/prop-types": 1,
      "no-underscore-dangle": 0,
      "import/imports-first": ["error", "absolute-first"],
      "import/newline-after-import": "error",
      "max-len": ["error", { "code": 80 }],
      "function-paren-newline": 0,
      "one-var": 0,
      "one-var-declaration-per-line": 0,
      "new-cap": 1,
      "consistent-return": 0,
      "no-param-reassign": 0,
      "comma-dangle": 0,
      "curly": ["error", "multi-line"],
      "import/no-unresolved": [2, { "commonjs": true }],
      "no-shadow": ["error", { "allow": ["req", "res", "err"] }],
      "valid-jsdoc": ["error", {
        "requireReturn": true,
        "requireReturnType": true,
        "requireParamDescription": false,
        "requireReturnDescription": true
      }]
    },
    "globals": {
      "window": true,
      "document": true,
      "localStorage": true,
      "FormData": true,
      "FileReader": true,
      "Blob": true,
      "navigator": true
    },
    "parser": "babel-eslint"
  };


