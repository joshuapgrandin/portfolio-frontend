export type NodeId =
  | "cdn"
  | "api"
  | "auth"
  | "core"
  | "worker"
  | "redis"
  | "postgres"
  | "queue"
  | "replica";

export interface Node {
  id: NodeId;
  name: string;
  sub: string;
  x: number;
  y: number;
  h: number;
  w: number;
  description: string;
  stack: string[];
  pulsing?: boolean;
}

export interface Edge {
  to: NodeId;
  from: NodeId;
  active: boolean;
}

export const NODES: Node[] = [
  {
    id: "cdn",
    name: "EDGE / CDN",
    sub: "CLOUDFRONT",
    x: 180,
    y: 24,
    w: 120,
    h: 40,
    description:
      "Static asset delivery and origin shielding. Cache hit ratio 94%, dropping bytes off the origin and keeping the site snappy globally.",
    stack: ["CloudFront", "S3", "HTTP/2", "Brotli"],
  },
  {
    id: "api",
    name: "API GATEWAY",
    sub: "SPRING BOOT · :8080",
    x: 170,
    y: 120,
    w: 140,
    h: 44,
    description:
      "Spring Boot service handling auth, routing and rate-limiting for downstream APIs. Built and operated end-to-end during my time at OpenText on government-facing applications.",
    stack: ["Java 21", "Spring Boot", "JWT", "Docker", "Postgres"],
    pulsing: true,
  },
  {
    id: "auth",
    name: "AUTH",
    sub: "JWT / OAUTH",
    x: 40,
    y: 220,
    w: 120,
    h: 44,
    description:
      "JWT issuance, refresh-token rotation, OAuth handshake. Stateless and horizontally scalable.",
    stack: ["Java", "JWT", "OAuth 2.0", "Redis"],
  },
  {
    id: "core",
    name: "CORE API",
    sub: "JAVA 21 · REST",
    x: 180,
    y: 220,
    w: 120,
    h: 44,
    description:
      "Domain logic for the platform. REST endpoints, transactional Postgres access, structured logging, OpenAPI spec generated from code.",
    stack: ["Java 21", "Spring", "REST", "OpenAPI"],
  },
  {
    id: "worker",
    name: "WORKERS",
    sub: "JAVA · ASYNC",
    x: 320,
    y: 220,
    w: 120,
    h: 44,
    description:
      "Async workers for scraping, batch processing and scheduled jobs. Same pattern that powers the OSRS Hiscores batch scraper.",
    stack: ["Java", "Spring", "AMQP"],
  },
  {
    id: "redis",
    name: "REDIS",
    sub: "CACHE / SESSION",
    x: 40,
    y: 330,
    w: 120,
    h: 44,
    description:
      "Session cache and short-lived rate-limit counters. ~0.4ms p95 — keeps the hot path off Postgres.",
    stack: ["Redis 7", "LRU", "Pub/Sub"],
  },
  {
    id: "postgres",
    name: "POSTGRES",
    sub: "14 · PRIMARY",
    x: 180,
    y: 330,
    w: 120,
    h: 44,
    description:
      "Primary relational store. Strong typing, indexes that earn their keep, ANSI SQL throughout. Connection pool managed via HikariCP.",
    stack: ["Postgres 14", "HikariCP", "SQL", "Migrations"],
  },
  {
    id: "queue",
    name: "QUEUE",
    sub: "RABBITMQ",
    x: 320,
    y: 330,
    w: 120,
    h: 44,
    description:
      "RabbitMQ for decoupling write-heavy actions from request-time. Workers consume, retry with backoff, dead-letter on poison messages.",
    stack: ["RabbitMQ", "AMQP", "DLQ"],
  },
  {
    id: "replica",
    name: "POSTGRES REPLICA",
    sub: "READ ONLY",
    x: 180,
    y: 410,
    w: 120,
    h: 36,
    description:
      "Read-only replica. Reporting queries and dashboards hit this so the primary keeps serving writes.",
    stack: ["Postgres 14", "Streaming repl", "Read-only"],
  },
];
export const EDGES: Edge[] = [
  { from: "cdn", to: "api", active: true },
  { from: "api", to: "auth", active: true },
  { from: "api", to: "core", active: true },
  { from: "api", to: "worker", active: true },
  { from: "auth", to: "redis", active: false },
  { from: "core", to: "postgres", active: false },
  { from: "worker", to: "queue", active: false },
  { from: "postgres", to: "replica", active: false },
];
