export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function getMousePosition(e: MouseEvent | TouchEvent) {
  if (e instanceof TouchEvent) {
    const touch = e.touches[0];
    return { x: touch.clientX, y: touch.clientY };
  }
  const mouse = e;
  return { x: mouse.clientX, y: mouse.clientY };
}

export const pad2 = (c: string) => c.length == 1 ? '0' + c : '' + c;