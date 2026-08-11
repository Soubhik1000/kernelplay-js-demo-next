import {
  Entity,
  TransformComponent,
  ColliderComponent,
  BoxRenderComponent,
  Rigidbody2DComponent,
  Layers,
} from "kernelplay-js";
import { PlayerController } from "../scripts/PlayerController";

export class Player extends Entity {
  constructor(x: number, y: number) {
    super("Player");

    this.layer = Layers.Player;
    this.tag = "player";

    this.addComponent("transform", new TransformComponent({ position: { x, y } }));
    this.addComponent(
      "rigidbody2d",
      new Rigidbody2DComponent({ mass: 1, gravityScale: 1 })
    );
    this.addComponent("collider", new ColliderComponent());
    this.addComponent("renderer", new BoxRenderComponent({ color: "blue" }));
    this.addComponent("playerController", new PlayerController());
  }
}
