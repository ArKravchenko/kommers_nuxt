import { ServerResponse } from 'http'; // Don't delete this import, it's required for types augmentation
import type ITimings from "@/interfaces/ITimings";

declare module 'http' {
  interface ServerResponse extends ITimings {
    timing?: {
      start: (name: string, description: string) => void;
      end: (name: string,) => void;
    }
  }
}
