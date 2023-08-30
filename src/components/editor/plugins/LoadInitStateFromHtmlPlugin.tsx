import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $insertNodes, CLEAR_EDITOR_COMMAND } from "lexical";
import { useLayoutEffect } from "react";

export function LoadInitStateFromHtmlPlugin({ htmlString }: { htmlString: string }) {
    const [editor] = useLexicalComposerContext();

    useLayoutEffect(() => {
        editor.update(() => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, "text/html");

            $getRoot().select();
            $insertNodes($generateNodesFromDOM(editor, doc));
        });

        return () => {
            editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
        };
    }, [editor, htmlString]);

    return null;
}
