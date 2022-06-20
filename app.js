const btn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

// Sayfa ilk açıldığında Todo giriş alanına focuslanır
window.onload = function () {
  todoInput.focus();
};

//Add Butonuna fonksiyon atama
btn.addEventListener("click", (e) => {
  //eğer todo boşsa ekleme
  if (!todoInput.value) {
    alert("Please Enter Your Todo");
  } else {
    todoUl.innerHTML += `
  <li>
    <i class=" fa fa-check"></i>
    <p>${todoInput.value}</p>
    <i class=" fa fa-trash"></i>
  </li>`;
    todoInput.value = "";
  }
});

// Input içinde 'Enter' a basıldığında ToDo ekleme
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

todoUl.addEventListener("click", (e) => {
  // Silme butonuna tıklandıysa li' yi silme
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }

  // Check butonuna tıklandıysa li'nin üstünü çizme veya temizleme
  if (e.target.classList.contains("fa-check")) {
    if (e.target.parentElement.classList.contains("checked")) {
      e.target.parentElement.classList.remove("checked");
    } else {
      e.target.parentElement.classList.add("checked");
    }
  }
});
