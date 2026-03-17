let containerItems = document.querySelector(".container-items");
let timeFrameAll = document.querySelectorAll(".timeframe");
function appendItem(data, timeframeIndex = 0) {
  let html = "";
  data.forEach((item) => {
    let title = item.title.split(" ").join("").toLowerCase();
        html += `
      <div class="item ${title}">
        <div class="coresdentiontitle">
          <img src="./images/icon-${title}.svg" alt="" />
        </div>

        <div class="item-info">
          <header>
            <span class="item-title">${item.title}</span>
            <img src="./images/icon-ellipsis.svg" alt="more option" />
          </header>

          <section>
            <h1>${item.timeframes[timeframeIndex].current}hrs</h1>
            <p>Last Week - ${item.timeframes[timeframeIndex].previous}hrs</p>
          </section>
        </div>
      </div>`
    containerItems.innerHTML =html;
  });
}

fetch("./data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Erreur de chargement");
    return response.json();
  })
  .then((data) => {
    let itemframes = data.map((item) => ({
      title:item.title,
      timeframes:Object.values(item.timeframes),
  }));
    appendItem(itemframes);
    timeFrameAll.forEach((framebtn) => {
      
      framebtn.addEventListener("click", (e) => {
        timeFrameAll.forEach((t)=>t.classList.remove("isactive"))
        e.currentTarget.classList.add("isactive")
        const timeframeIndex = e.currentTarget;
        appendItem(itemframes, timeframeIndex.dataset.timeframe);
      });
    });
  });
