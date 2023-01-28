(() => {
  const form = document.getElementById("form");
  const input = document.getElementById("todo-input");
  const todoList = document.querySelector(".todos ul");
  const error = document.querySelector("#msg-error");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.style.display = "none";
    const res = await fetch("/addTodo", {
      method: "POST",
      headers: {
        // Accept: "application/json",
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
    if (res.status === 200) {
      const li = document.createElement("li");
      li.innerText = json.todo;
      todoList.prepend(li);
      input.value = "";
    } else {
      error.style.display = "block";
      error.innerHTML = json.msg;
    }
    console.log("This is the client response");
  });
  console.log("Script.js is working!");
})();
