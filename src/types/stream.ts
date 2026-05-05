export type RequestType = "GET" | "POST" | "PUT" | "DELETE";

export interface Stream {
  request: RequestType;
  endpoint: string;
  response: number;
}

export const STREAM_DATA: Stream[] = [
  { request: "GET", endpoint: "/api/projects", response: 200 },
  { request: "GET", endpoint: "/api/projects/storm", response: 200 },
  { request: "POST", endpoint: "/api/contact", response: 201 },
  { request: "GET", endpoint: "/api/metrics", response: 200 },
  { request: "GET", endpoint: "/static/josh-cv.pdf", response: 200 },
  { request: "DELETE", endpoint: "/api/admin/cache", response: 403 },
  { request: "GET", endpoint: "/api/deploy/status", response: 200 },
  { request: "POST", endpoint: "/api/auth/login", response: 200 },
  { request: "GET", endpoint: "/api/projects/smokebot", response: 200 },
  { request: "PUT", endpoint: "/api/projects/storm", response: 200 },
  { request: "GET", endpoint: "/api/admin/secrets", response: 403 },
  { request: "GET", endpoint: "/api/deploy/status", response: 200 },
  { request: "POST", endpoint: "/api/auth/refresh", response: 401 },
  { request: "GET", endpoint: "/api/projects/artio", response: 200 },
  { request: "GET", endpoint: "/api/metrics/uptime", response: 200 },
  { request: "DELETE", endpoint: "/api/projects/old", response: 404 },
  { request: "POST", endpoint: "/api/contact", response: 201 },
  { request: "GET", endpoint: "/api/projects", response: 200 },
  { request: "PUT", endpoint: "/api/admin/config", response: 403 },
  { request: "GET", endpoint: "/api/deploy/logs", response: 200 },
];
