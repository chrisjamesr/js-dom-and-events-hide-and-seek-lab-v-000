function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n){
  return document.querySelectorAll(".ranked-list").forEach(function(element){
    return element.innerHTML = parseInt(element.innerHTML) + n
  })
}

function deepestChild(n){
  let outerNode = document.getElementById("grand-node")
  let innerNode = outerNode.children[0]
  while(innerNode){
    outerNode = innerNode;
    innerNode = outerNode.children[0]
  }
  return outerNode
}