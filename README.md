# Formation algolia

`react-native init APP --template typescript && node APP/setup.js`
`cd APP`
`git init` : premier commit à faire

Ensuite go sur kaggle for [dataset](https://www.kaggle.com/zynicide/wine-reviews/version/4)

Créer un compte sur algolia, créer un nouvel indice à la main, voir comment ca marche

50MB max upload => couper le fichier
npx json-split --json=../../winemag-data-130k-v2.json --line=50000
upload files separately

mv .env.dist .env et mettre vos informations
