// kernelplay-js is published as plain ES modules with no bundled type
// declarations, so TypeScript can't infer its shape on its own. This is
// a deliberately loose ambient declaration -- every class accepts
// `...args: any[]` in its constructor and exposes an index signature, so
// existing/new engine code can be ported over without fighting the type
// checker. If/when the package ships real `.d.ts` files upstream, delete
// this and TypeScript will pick up the accurate types automatically.
declare module "kernelplay-js" {
  export class Game {
    constructor(config?: any);
    sceneManager: any;
    canvas: any;
    loop: any;
    start(): void;
    stop(): void;
    init(): void;
    [key: string]: any;
  }

  export class Scene {
    constructor(name?: string);
    addEntity(entity: any): void;
    raycast(x: number, y: number, options?: any): any;
    init(): void;
    [key: string]: any;
  }

  export class Entity {
    constructor(name?: string);
    id: number;
    tag: string;
    layer: number;
    zIndex: number;
    scene: any;
    addComponent(name: string, component: any): void;
    getComponent(name: string): any;
    destroy(): void;
    [key: string]: any;
  }

  export class ScriptComponent {
    entity: any;
    onAttach?(): void;
    onStart?(): void;
    update?(dt: number): void;
    lateUpdate?(dt: number): void;
    onCollision?(other: any): void;
    onTriggerEnter?(other: any): void;
    [key: string]: any;
  }

  export class TransformComponent {
    constructor(options?: any);
    position: { x: number; y: number; z?: number };
    [key: string]: any;
  }

  export class ColliderComponent {
    constructor(options?: any);
    [key: string]: any;
  }

  export class BoxRenderComponent {
    constructor(options?: any);
    [key: string]: any;
  }

  export class Rigidbody2DComponent {
    constructor(options?: any);
    velocity: { x: number; y: number };
    isGrounded: boolean;
    addForce(x: number, y: number, mode?: string): void;
    [key: string]: any;
  }

  export class CameraComponent {
    constructor(options?: any);
    [key: string]: any;
  }

  export const Keyboard: {
    isPressed(key: string): boolean;
    [key: string]: any;
  };

  export const Mouse: {
    x: number;
    y: number;
    wasPressed(button: number): boolean;
    [key: string]: any;
  };

  export const Layers: Record<string, number>;
}
