(() => {
  const form = document.getElementById("form");
  const input = document.getElementById("todo-input");
  const todoList = document.querySelector(".todos ul");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const res = await fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: input.value }),
    });
    // .then((res) => {
    //   res.json();
    //   console.log("this is the res.json - ", res.json());
    // })
    // .then((data) => {
    //   console.log("thsi is the data", data);
    //   const newTodo = document.createElement("li");
    //   newTodo.innerText = data.todo;
    //   todoList.prepend(newTodo);
    //   input.value = "";
    // });
    const json = await res.json();
    const li = document.createElement("li");
    li.innerHTML = json.todo;
    todoList.prepend(li);
  });
  console.log("Script.js is working!");
})();
