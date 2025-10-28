(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
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

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
