const removeTask = () => {
  //usuwanie całości
  // event.target.parentNode.remove();

  //przekreślenie i usunięcie przycisku
  // event.target.parentNode.style.textDecoration = "line-through";
  // event.target.remove();

  const index = event.target.dataset.key;
  document.querySelector(`li[data-key="${index}"]`).remove();
}
document.querySelectorAll("button[data-key]").forEach(item=>item.addEventListener('click', removeTask));