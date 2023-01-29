(() => {
  const form = document.querySelector("#form");
  const input = document.querySelector("#quote-input");
  const ul = document.querySelector(".quotes");
  const error = document.querySelector(".error");
  const id = () => Math.floor(Math.random() * 100 + 1);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    error.style.display = "none";
    const response = await fetch("/addQuote", {
      method: "POST",
      headers: {
        Accept: "appliction/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: input.value, id: `${id()}` }),
    });
    const json = await response.json();

    if (response.status === 200) {
      const newLi = document.createElement("li");
      newLi.innerText = json.newQuote.title;
      ul.prepend(newLi);
      input.value = "";
    } else {
      error.style.display = "block";
      error.innerText = json.message;
    }
  });
})();
