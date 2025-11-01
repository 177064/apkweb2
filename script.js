(function() {
  const example = document.getElementById('example')
  const cw1_fetch = document.getElementById('cw1_fetch')
  const cw1_post = document.getElementById('cw1_post')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const ex1_title = document.getElementById("ex1_title");
  const ex1_body = document.getElementById("ex1_body");

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1_fetch.addEventListener("click", function() {
    answer.textContent = "Loading…"
    const ex1_num = ex1_text.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${ex1_num}`)
      .then(response => response.json())
      .then(post => {
        console.log(post);
        answer.innerHTML = `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
      })
  })

  cw1_post.addEventListener("click", function() {
    answer.textContent = "Processing…"
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: ex1_title.value,
        body: ex1_body.value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        answer.innerHTML = `
            <p>
              Dodano nowy post o ID =
              ${json.id}<br>
            </p>
          `;
      });


  })

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
