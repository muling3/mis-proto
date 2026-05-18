// @mis/proto — STUB.
// Production: generated gRPC clients/types from mis-proto/proto/*.proto.
// PoC: typed placeholders so callers compile.
export const PACKAGE = "@mis/proto";

export interface ValidateTokenRequest { token: string; }
export interface ValidateTokenResponse { valid: boolean; userId?: string; }

export class AuthServiceClient {
  async validateToken(req: ValidateTokenRequest): Promise<ValidateTokenResponse> {
    return { valid: Boolean(req.token), userId: "dev-user" };
  }
}

export function banner(): string {
  return `[${PACKAGE}] stub loaded`;
}
