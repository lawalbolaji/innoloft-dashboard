import { $generateHtmlFromNodes } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

export function EditorStateToHtmlSerializerPlugin(props: { onCompleted: (htmlString: string) => void }) {
    const { onCompleted } = props;
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerUpdateListener(() => {
            editor.update(() => {
                const htmlString = $generateHtmlFromNodes(editor, null);
                onCompleted(htmlString);
            });
        });
    }, [editor, onCompleted]);

    return null;
}
