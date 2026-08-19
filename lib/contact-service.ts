import { apiClient } from "./api-client";

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  id?: string;
  email?: string;
  status?: string;
  createdAt?: string;
}

export async function submitContact(payload: ContactPayload) {
  return apiClient<ContactResponse>("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}
