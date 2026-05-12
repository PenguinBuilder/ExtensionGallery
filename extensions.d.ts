interface PenguinExtension {
    Info(): Category;
    generator: {
        [generator: string]: (block: Block) => string;
    };
    Types?: Record<string, number>;
}
type blockType = {
    kind: "Statement";
} | {
    kind: "Value";
    type: string | string[];
} | {
    kind: "Hat";
};
interface BlockType {
    opcode: string;
    color?: number | string;
    blockType: blockType;
    args: ArgumentType[];
}
type ArgumentType = {
    fields: fieldType[];
} & ({
    kind: "Value";
    type: string | string[];
    ID: string;
} | {
    kind: "Statement";
    ID: string;
} | {
    kind: "Dummy";
});
interface Block {
    ID: string;
    parent: Block | null;
    top: Block;
    BlocklyBlock: any;
    BlocklyGenerator: any;
    getField(ID: string): any;
    setField(ID: string, value: any): void;
    getValue(ID: string): string;
    getStatement(ID: string): string;
    setValueType(ID: string, type: string | string[]): void;
    setOutputType(has_out: boolean, type: string | string[]): void;
}
interface Category {
    name: string;
    color: string;
    ID: string;
    blocks: BlockType[];
}
type fieldType = {
    kind: "text";
    value: string;
    ID?: string;
} | {
    kind: "text_input";
    ID: string;
    default: string;
    on_change(this: Block, nv: string): void | boolean;
} | {
    kind: "number_input";
    ID: string;
    default: number;
    on_change(this: Block, nv: number): void | boolean;
} | {
    kind: "angle_input";
    ID: string;
    default: number;
    on_change(this: Block, nv: number): void | boolean;
} | {
    kind: "menu_input";
    ID: string;
    value: string[] | Record<string, any>;
    on_change(this: Block, nv: string): void | boolean;
} | {
    kind: "checkbox_input";
    ID: string;
    default: boolean;
    on_change(this: Block, nv: boolean): void | boolean;
} | {
    kind: "color_input";
    ID: string;
    default: string;
    on_change(this: Block, nv: string): void | boolean;
};
declare const Penguin: {
    Types: {
        HEXAGONAL: number;
        ROUND: number;
        SQUARE: number;
        TAB: number;
        BTAB: number;
        OCTOGON: number;
        SQUIRCLE: number;
        LEAF: number;
    };
    _getType(type: string | string[]): string | string[] | null;
    _setFields(block: any, input: any, fields?: fieldType[]): void;
    _getMenuItems(value: string[] | Record<string, string>): any;
    LoadExtension(Extension: new () => PenguinExtension): void;
    Block: {
        new(BlocklyBlock: any, BlocklyGenerator: any): {
            BlocklyBlock: any;
            BlocklyGenerator: any;
            getField(ID: string): any;
            getValue(ID: string): string;
            getStatement(ID: string): string;
            setField(ID: string, value: any): void;
            setValueType(ID: string, type: string | string[]): void;
            setOutputType(has_out: boolean, type: string | string[]): void;
            readonly parent: any;
            readonly top: any;
            readonly ID: string;
        };
    };
    blockType: {
        Statement(): blockType;
        Value(type: string | string[]): blockType;
        Hat(): blockType;
    };
    Argument: {
        Value(ID: string, type: string | string[], fields?: fieldType[]): ArgumentType;
        Statement(ID: string, fields?: fieldType[]): ArgumentType;
        Dummy(fields?: fieldType[]): ArgumentType;
    };
    Field: {
        Text(value: string, ID?: string): fieldType;
        TextInput(ID: string, _default?: string, on_change?: (this: Block, val: string) => void | boolean): fieldType;
        NumberInput(ID: string, _default?: number, on_change?: (this: Block, val: number) => void | boolean): fieldType;
        AngleInput(ID: string, _default?: number, on_change?: (this: Block, val: number) => void | boolean): fieldType;
        MenuInput(ID: string, items: string[] | Record<string, any>, on_change?: (this: Block, val: any) => void | boolean): fieldType;
        CheckboxInput(ID: string, _default?: boolean, on_change?: (this: Block, val: boolean) => void | boolean): fieldType;
        ColorInput(ID: string, _default?: string, on_change?: (this: Block, val: string) => void | boolean): fieldType;
    };
};
