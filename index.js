var recipes = {
  recipe1: "pasta",
  recipe2: "sandwich",
  recipe3: "steak"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({key: value}, object);
}

function destructivelyUpdateObjectWithKeyandValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObject.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
