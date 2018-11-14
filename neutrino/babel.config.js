module.exports = {
  presets: [
      '@babel/preset-env', 
      '@babel/preset-react',
    ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    "inline-react-svg",
    "babel-plugin-transform-async-to-generator",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-runtime"
  ]
};