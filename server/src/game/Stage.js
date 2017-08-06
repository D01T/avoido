export default class Stage {
  constructor(width = 512, height = 512) {
    this.width = width;
    this.height = height;
  }

  getEntityController() {
    return this.controller;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  render(entityName, key, values) {
    switch (key) {
      case 'vector':
      // 웹 페이지에 세포 위치 수정 요청
    }
  }

  setEntityController(controller) {
    this.controller = controller;
  }

  setHeight(height) {
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }
}
