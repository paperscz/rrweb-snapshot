import { serializedNodeWithId, idNodeMap } from './types';
export declare function resetId(): void;
export declare function absoluteToStylesheet(cssText: string, href: string): string;
export declare function serializeNodeWithId(n: Node, doc: Document, map: idNodeMap, blockClass: string, skipChild?: boolean): serializedNodeWithId | null;
declare function snapshot(n: Document, blockClass?: string): [serializedNodeWithId | null, idNodeMap];
export default snapshot;
