export interface AuthState {
  isAuthenticated: boolean;
  username?: string;
}

export function defaultAuthState(): AuthState {
  return {
    isAuthenticated: false
  };
}
