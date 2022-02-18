1. O projeto foi iniciado com `yarn create vite react-ts`. Seguindo a documentação do site oficial _https://vitejs.dev/guide/#scaffolding-your-first-vite-project_.
2. E então foi adicionada a biblioteca `stitches dev`, seguindo a documentação focada no typescript do site _https://stitches.dev/docs/typescript_.
3. Configurando o ESLINT com as dicas da comunidade _https://blog.cod3r.com.br/organizacao-e-padronizacao-com-eslint/_. E também foram adicionadas configurações de outros projetos que já utilizei.
~~~javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'prettier',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'simple-import-sort/exports': 'error',
    'no-console': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          [
            '^\\u0000',
            '^react',
            '^@react',
            '^[a-z]',
            '^@',
            '^[^.]',
            '^\\.'
          ]
        ]
      }
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        'props': 'never',
        'children': 'never'
      }
    ]
  },
  settings: {
    'react': {
      'pragma': 'React',
      'version': 'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@core', 'osf-leo/src/core'],
          ['@libs', 'osf-leo/src/libs'],
          ['@plugins', 'osf-leo/src/plugins']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  }
};
~~~
4. E então foi seguido alguns exemplos da comunidade para configurar o prettier no projeto, começando neste site _https://acbjdesigner.com.br/2021/05/23/como-configurar-o-prettier-no-vs-code/_. Criando também o `.prettierignore`.
OBS: a configuração "semi": true, comanda os pontos e virgulas no final de cada linha.