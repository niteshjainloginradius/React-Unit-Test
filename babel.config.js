module.exports = {
    presets: [['@babel/preset-env',{"useBuiltIns": "entry"}], '@babel/preset-react'],
    plugins :[
      ["@babel/plugin-transform-runtime",{"regenerator": true}]
    ]
  };
  //You need to use either the Babel polyfill or the regenerator runtime so that regeneratorRuntime will be defined.
  //https://old.babeljs.io/docs/plugins/transform-regenerator/