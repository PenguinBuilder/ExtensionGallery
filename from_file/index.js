return new Promise(r => {
    $.create("input").props({accept: ".js", type: "file"}).on("change", (event) => {
        const files = event.target.files;
        if (files.length === 0) return;

        const file = files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const fileContent = event.target.result;
            r([fileContent, crypto.randomUUID()])
        };
        reader.readAsText(file);
    }).click();
})
