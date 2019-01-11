var recipes = {
  recipe1: "pasta",
  recipe2: "sandwich",
  recipe3: "steak"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
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
