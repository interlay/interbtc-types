export interface RpcFunctionDefinition {
    description: string;
    params: Array<{
        name: string;
        type: string;
        isHistoric?: boolean;
        isOptional?: boolean;
    }>;
    type: string;
    isSubscription?: boolean;
    jsonrpc?: string;
    method?: string;
    section?: string;
};

type Alias = {
    tokens: Record<string, string>;
};

export type Definitions = {
    types: Array<{
        minmax?: Array< number | null >,
        types: Record<string, any>
    }>;
    rpc: Record<string, Record<string, RpcFunctionDefinition>>;
    instances: Record<string, any>;
    alias?: Alias;
};
