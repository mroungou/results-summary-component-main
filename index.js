fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector("#reactionNumber").innerText = data[0].score
    })