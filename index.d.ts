declare const _default: {
    types: Array<{ types: Record<string, any> }>;
    rpc: Record<string, Record<string, RpcFunctionDefinition>>;
    instances: Record<string, any>;
};
export default _default;
export interface RpcFunctionDefinition {
    description: string;
    params: Array<{
        name: string;
        type: string;
    }>;
    type: string;
}
