import { wrappers as markdownWrappers } from './markdown';
import { wrappers as payloadWrappers } from './payload/wrappers';

export const wrappers = [...markdownWrappers, ...payloadWrappers];
