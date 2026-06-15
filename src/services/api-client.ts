export class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(endpoint: string) {
    const response = await fetch(this.baseURL + endpoint);

    if (!response.ok) throw new Error(`Request failed: ${response.status}`);

    return response.json();
  }

  async post(endpoint: string, data: unknown) {}

  async put(endpoint: string, newData: unknown) {}

  async delete(endpoint: string, itemID: string) {}
}
