/**
 * if hasn't projectName ,set one
 */
export declare function setProjectName(dir?: string): Promise<any>;
export declare function setFileName(dir?: string): Promise<any>;
/**
 * select mode
 */
export declare function mode(): Promise<any>;
/**
 * node version need > 8
 * @param version
 */
export declare function compareVersion(version: string): boolean;
export declare function createViewsDir(): Promise<void>;
/**
 * render view
 * @param filename
 * @param viewsPath
 */
export declare function renderView(filename: string, viewsPath: string): void;
