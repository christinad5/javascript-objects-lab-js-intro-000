var recipes = {
  recipe1: "pasta",
  recipe2: "sandwich",
  recipe3: "steak"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {key: value});
}

function destructivelyUpdateObjectWithKeyandValue(object, key, value) {
  object[key] = value;
  return object;
}
