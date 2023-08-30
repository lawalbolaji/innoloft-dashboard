/// <reference types="vite/client" />
declare module "preline";

interface ImportMetaEnv {
    readonly VITE_APP_ID: string | undefined;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
