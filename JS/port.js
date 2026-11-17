const rows = document.querySelector("#rows");
const status = document.querySelector("#status");

fetch("data.json")
  .then((response) => response.text())
  .then((text) => {

    // Step 1 · Look at what we got:

    // Step 2 · Turn the text into object:
    const datalist = JSON.parse(text)
    
    datalist.array.forEach(data => {
        console.log("dd")
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td><img class="cover" src="${data.image}" alt="${data.title}"></td>
        <td class="title">${data.title}</td>
        <td>${data.year}</td>
        
        `;
    rows.append(tr);
    });

    // Step 3 · Show ONE anime as a table row:
    

    //   Step 4 put inside a loop and change animeList[0] to anime
    // for (const anime of animeList) { 
    //   ...
    // }
  });