(() => {
    class Extension implements PenguinExtension {
        Info() {
            return {
                name: "Random Utils",
                color: "#1ABC9C",
                ID: "random_utils",
                blocks: [
                    {
                        opcode: "fetch",
                        blockType: Penguin.blockType.Value(["String", "Object"]),
                        args: [
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("fetch"),
                                Penguin.Field.TextInput("url", "url"),
                                Penguin.Field.MenuInput("type", {
                                    Text: "text",
                                    JSON: "json",
                                }, function(s) {
                                    if (s == "json") {
                                        this.setOutputType(true, "Object")
                                    } else {
                                        this.setOutputType(true, "String")
                                    }
                                })
                            ])
                        ]
                    },
                    {
                        opcode: "encode",
                        blockType: Penguin.blockType.Value("String"),
                        args: [
                            Penguin.Argument.Value("str", "String", [
                                Penguin.Field.MenuInput("type", {
                                    "Decode Base64": "atob",
                                    "Encode Base64": "btoa",
                                    "Encode URL": "encodeURI",
                                    "Decode URL": "decodeURI",
                                })
                            ])
                        ]
                    }
                ],
            };
        }
        generator = {
            fetch(block: Block) {
                const url = block.getField("url").replaceAll('"', '\\"');
                const type = block.getField("type");
                return `(await (await fetch("${url}")).${type}())`
            },
            encode(block: Block) {
                const str = block.getValue("str");
                const type = block.getField("type");
                return `(${type}(${str}))`
            }
        };
    }

    Penguin.LoadExtension(Extension);
})();
