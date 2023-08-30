import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LoadInitStateFromHtmlPlugin } from "../plugins/LoadInitStateFromHtmlPlugin";
import { EditorStateToHtmlSerializerPlugin } from "../plugins/SerializeEditorStateToHtmlPlugin";

export type LexicalComposerConfig = Parameters<typeof LexicalComposer>["0"]["initialConfig"];
type EditorProps = {
    config: LexicalComposerConfig;
    htmlString: string;
    onSerializeComplete: (htmlString: string) => void;
};

export function EditorCore(props: EditorProps) {
    return (
        <LexicalComposer initialConfig={props.config}>
            <RichTextPlugin
                contentEditable={
                    <ContentEditable
                        className="relative p-0 z-10 focus:outline-none text-base overflow-auto h-full text-[#6B7280] leading-6 hide-scroll"
                        style={
                            !props.config.editable
                                ? {
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitBoxOrient: "vertical",
                                      WebkitLineClamp: 7,
                                  }
                                : {}
                        }
                    />
                }
                placeholder={
                    <div className="absolute top-4 left-4 opacity-50 z-0 select-none text-[#6B7280] leading-6">
                        Enter product description here...
                    </div>
                }
                ErrorBoundary={LexicalErrorBoundary}
            ></RichTextPlugin>
            <LoadInitStateFromHtmlPlugin htmlString={props.htmlString} />
            <EditorStateToHtmlSerializerPlugin onCompleted={props.onSerializeComplete} />
            <ClearEditorPlugin />
        </LexicalComposer>
    );
}
