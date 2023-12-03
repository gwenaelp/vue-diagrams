const e="vue-diagrams",s="An easy to use diagram editor component",t="Diagram component for vue.js, inspired by react-diagrams",i="module",o="1.0.1",n="MIT",c="dist/vue-diagrams.js",a=["src","dist/style.css"],r="Gwenael Pluchon",p={type:"git",url:"https://github.com/gwenaelp/vue-diagrams.git"},u={url:"https://github.com/gwenaelp/vue-diagrams/issues"},d=["images/example2.png","images/example3.png"],v="https://github.com/gwenaelp/vue-diagrams#readme",g=["vue","vue-component","vue-library"],m={2:"https://github.com/gwenaelp/vue-diagrams/tree/vue2",3:"https://github.com/gwenaelp/vue-diagrams"},l={node:">=8.9.0"},y={build:"vite build","story:dev":"histoire dev","story:build":"histoire build","doc:build":"cd doc && yarn && yarn generate && rm ./dist -Rf && mkdir ./dist && mv .output/public/* ./dist && touch dist/.nojekyll && cd .. && yarn story:build",test:"vitest","type-check":"vue-tsc --noEmit -p tsconfig.json",typedoc:"typedoc --options typedoc.json",coverage:"vitest run --coverage"},h={"@mxssfd/typedoc-theme":"^1.1.3","@vitest/coverage-istanbul":"^0.34.6","@vue/test-utils":"^2.4.2",histoire:"^0.17.0",jsdom:"^23.0.0",vitest:"^0.34.6","vue-loader":"^17.0.1","webpack-cli":"^5.1.4"},b={"@babel/preset-env":"7.12.13","@histoire/plugin-vue":"^0.17.6","@vitejs/plugin-vue":"^4.3.4","@vitejs/plugin-vue2":"^2.2.0","@vue/compiler-sfc":"^3.3.4","@vue/tsconfig":"^0.4.0","draggable-vue-directive":"^1.1.0",histoire:"^0.17.6","svg-pan-zoom":"^3.6.1",typedoc:"^0.25.4","typedoc-plugin-vue":"^1.1.0",typescript:"^5.2.2",vite:"^5.0.2","vite-plugin-dts":"^3.6.3",vue:"^3.3.4","vue-svg-pan-zoom":"^2.1.0",webpack:"^5.76.0"},w={name:e,title:s,description:t,type:i,version:o,license:n,main:c,files:a,author:r,repository:p,bugs:u,examples:d,homepage:v,keywords:g,vueVersions:m,engines:l,scripts:y,devDependencies:h,dependencies:b};export{w as m};
