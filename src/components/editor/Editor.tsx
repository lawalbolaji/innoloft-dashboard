import { LexicalComposerConfig, EditorCore } from "./core/EditorCore";

type ReadModeProps = {
    htmlString: string;
    readonly: boolean;
};
type WriteModeProps = {
    readonly: boolean;
    htmlString: string;
    onSerializeComplete: (htmlString: string) => void;
};
type LocalEditorProps = ReadModeProps | WriteModeProps;

function isWriteModeProps(x: LocalEditorProps): x is WriteModeProps {
    return (x as WriteModeProps).onSerializeComplete !== undefined;
}

const EDITOR_NAMESPACE = "innoloft editor";
const editorTheme: LexicalComposerConfig["theme"] = {
    link: "cursor-pointer",
    text: {
        bold: "font-semibold",
        underline: "underline",
        italic: "italic",
        strikethrough: "line-through",
    },
};

function onError(error: unknown) {
    console.log(error);
}

export function LocalEditor(props: LocalEditorProps) {
    return (
        <div
            className="relative h-full p-4"
            style={!props.readonly ? { paddingTop: "1rem", paddingBottom: "1rem" } : {}}
        >
            <EditorCore
                config={{
                    namespace: EDITOR_NAMESPACE,
                    theme: editorTheme,
                    onError,
                    nodes: [],
                    editable: !props.readonly,
                }}
                htmlString={props.htmlString}
                onSerializeComplete={isWriteModeProps(props) ? props.onSerializeComplete : () => {}}
            />
        </div>
    );
}
