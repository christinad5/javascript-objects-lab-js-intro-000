var recipes = {
  recipe1: "pasta",
  recipe2: "sandwich",
  recipe3: "steak"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({key: value}, object);
  return newObj;
}

function destructivelyUpdateObjectWithKeyandValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
