const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://backend-5kr0.onrender.com";
const API_PREFIX = "/api/v1";

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<{ data: T | null; error: string | null; success: boolean }> {
  const url = `${API_BASE_URL}${API_PREFIX}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => null);
      let errorMsg = `Request failed with status ${res.status}`;
      if (errorBody) {
        if (Array.isArray(errorBody.message)) {
          errorMsg = errorBody.message.join(". ");
        } else if (typeof errorBody.message === "string") {
          errorMsg = errorBody.message;
        } else if (errorBody.error) {
          errorMsg = errorBody.error;
        }
      }
      return {
        data: null,
        error: errorMsg,
        success: false,
      };
    }

    const json = await res.json();
    return {
      data: json.data !== undefined ? json.data : json,
      error: null,
      success: json.success !== undefined ? json.success : true,
    };
  } catch (err: any) {
    return {
      data: null,
      error: err.message || "Network error occurred",
      success: false,
    };
  }
}
