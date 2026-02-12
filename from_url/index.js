return new Promise((r) => {
    const p = prompt("url").trim();
    if(p === "") return ["", ""];
    fetch().then(v => v.text().then(v => {
        r([v, crypto.randomUUID()]);
    }))
})
