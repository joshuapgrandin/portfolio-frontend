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
