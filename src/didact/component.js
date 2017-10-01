import { scheduleUpdate } from "./fiber-reconciler";

export class Component {
  constructor(props) {
    this.props = props || {};
    this.state = this.state || {};
  }

  setState(partialState) {
    scheduleUpdate(this.__fiber, partialState);
  }
}

export function createInstance(fiber) {
  const instance = new fiber.type(fiber.pendingProps);
  instance.__fiber = fiber;
  return instance;
}
