var recipes = {
  recipe1: "pasta",
  recipe2: "sandwich",
  recipe3: "steak"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, {key: value});
}
