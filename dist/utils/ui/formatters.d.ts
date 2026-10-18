/**
 * Format latensi dalam ms dengan satuan yang mudah dibaca
 */
export declare function formatLatency(ms?: number): string;
/**
 * Format status code HTTP dengan label standar
 */
export declare function formatStatusCode(statusCode?: number): {
    code: number | string;
    category: 'success' | 'redirect' | 'client_error' | 'server_error' | 'unknown';
};
/**
 * Memotong teks panjang dengan akhiran ellipsis (...)
 */
export declare function truncateText(text: string, maxLength?: number): string;
