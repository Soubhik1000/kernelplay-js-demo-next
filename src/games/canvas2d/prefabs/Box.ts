import {
  Entity,
  TransformComponent,
  ColliderComponent,
  BoxRenderComponent,
} from "kernelplay-js";

// Ported as-is from prefabs/Box.js in the original repo. The engine code
// itself needed zero changes to move into Next.js — only its *loading*
// changed (see ../main.ts and components/examples/GameCanvas.tsx).
export class Box extends Entity {
  constructor(x: number, y: number, name: "Wall" | "Coin" = "Wall") {
    super(name);
    this.tag = name.toLowerCase();
    this.zIndex = -1;

    switch (name) {
      case "Wall":
        this.addComponent(
          "transform",
          new TransformComponent({ position: { x, y }, scale: { x: 3, y: 1 } })
        );
        this.addComponent("collider", new ColliderComponent({ isTrigger: false }));
        this.addComponent("renderer", new BoxRenderComponent({ color: "#135800" }));
        break;

      case "Coin":
        this.addComponent(
          "transform",
          new TransformComponent({ position: { x, y }, scale: { x: 0.4, y: 0.4 } })
        );
        this.addComponent("collider", new ColliderComponent({ isTrigger: true }));
        this.addComponent("renderer", new BoxRenderComponent({ color: "#ffea00" }));
        break;
    }
  }
}
