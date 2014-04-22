var resources = '{' +
  '"textures" : [ ' +
  
    '{ "position":"0" , "path":"resources/test/water-0.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1" , "path":"resources/test/water-1.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"2" , "path":"resources/test/grass-0.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"4" , "path":"resources/test/cornerFrontLeft.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"5" , "path":"resources/test/cornerBackRight.png", "offset": "7", "image": "", "supportTile": "" }, ' +
    '{ "position":"6" , "path":"resources/test/cornerBackLeft.png", "offset": "6", "image": "", "supportTile": "" }, ' +
    '{ "position":"7" , "path":"resources/test/cornerFrontRight.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"8" , "path":"resources/test/bottomLeftCorner.png", "offset": "5", "image": "", "supportTile": "" }, ' +
    '{ "position":"9" , "path":"resources/test/bottomRightCorner.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"10" , "path":"resources/test/topLeftCorner.png", "offset": "10", "image": "", "supportTile": "1" }, ' +
    '{ "position":"11" , "path":"resources/test/topRightCorner.png", "offset": "7", "image": "", "supportTile": "" }, ' +  
    '{ "position":"12" , "path":"resources/test/waterTop.png", "offset": "10", "image": "", "supportTile": "1" }, ' +
    '{ "position":"13" , "path":"resources/test/waterBottom.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"14" , "path":"resources/test/waterLeft.png", "offset": "10", "image": "", "supportTile": "1" }, ' +
    '{ "position":"15" , "path":"resources/test/waterRight.png", "offset": "0", "image": "", "supportTile": "1" }, ' +
    '{ "position":"16" , "path":"resources/test/active.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1000" , "path":"resources/test/street-stone/000.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1001" , "path":"resources/test/street-stone/001.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1002" , "path":"resources/test/street-stone/002.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1003" , "path":"resources/test/street-stone/003.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1004" , "path":"resources/test/street-stone/004.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1005" , "path":"resources/test/street-stone/005.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1006" , "path":"resources/test/street-stone/006.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1007" , "path":"resources/test/street-stone/007.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1008" , "path":"resources/test/street-stone/008.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1009" , "path":"resources/test/street-stone/009.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1010" , "path":"resources/test/street-stone/010.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1011" , "path":"resources/test/street-stone/011.png", "offset": "0", "image": "", "supportTile": "" }, ' +
    '{ "position":"1012" , "path":"resources/test/street-stone/012.png", "offset": "0", "image": "", "supportTile": "" } ' +
    ']'+
'}';

var resourceKeeper = eval ("(" + resources + ")");
var cachedImageResources = [];
