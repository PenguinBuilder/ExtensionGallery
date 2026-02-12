return new Promise((r) => {
    fetch(prompt("url")).then(v => v.text().then(v => {
        r([v, crypto.randomUUID()]);
    }))
})
