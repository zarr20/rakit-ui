import { RakitConfig, RakitProviderProps } from '../types/ui/config.types';
export declare const DEFAULT_RAKIT_CONFIG: RakitConfig;
export declare const RakitContext: import('react').Context<RakitConfig>;
export declare function RakitProvider({ config, children }: RakitProviderProps): import("react").JSX.Element;
export declare function useRakitConfig(): RakitConfig;
export declare function defineRakitConfig(config: RakitConfig): RakitConfig;
/**
 * Helper untuk menyusun class identifier dan atribut data-rakit.
 */
export declare function getComponentIdentifier(componentName: string, config?: RakitConfig, customId?: string): {
    id?: string | undefined;
    className: string;
    'data-rakit': string;
};
