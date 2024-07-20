import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements AfterViewInit{
  @ViewChild('form') formRef: ElementRef;
  form: any;
  formParent: any;

  mouseX: number;
  mouseY: number;
  x: number = 20;
  y: number = 20;

  initializeForm() {
    this.form = this.formRef.nativeElement;
    this.formParent = this.formRef.nativeElement.parentElement;
  }

  ngAfterViewInit() {
    this.initializeForm();
    this.trackMouseCoordinates();
    this.makeDraggable();
    this.makeResizeable();
  }

  trackMouseCoordinates() {
    const updateMouseCoordinates = (event: MouseEvent) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
    document.addEventListener('mousemove', updateMouseCoordinates);
  }

  makeDraggable() {
    this.form.addEventListener('mousedown', (event: MouseEvent) => {
      console.log('Mouse down drag event listener triggered.')
      event.preventDefault();
      document.addEventListener('mousemove', this.dragOnMouseMove);
    })
    document.addEventListener('mouseup', () => {
      console.log('Mouse up drag event listener triggered.')
      document.removeEventListener('mousemove', this.dragOnMouseMove)
    })
  }

  makeResizeable() {
    this.form.addEventListener('mousedown', (event: MouseEvent) => {
      console.log('Mouse down resize event listener triggered.');
      event.preventDefault();
      document.addEventListener('mousemove', this.resizeOnMouseMove);
    })
    document.addEventListener('mouseup', () => {
      console.log('Mouse up resize event listener triggered.');
      document.removeEventListener('mousemove', this.resizeOnMouseMove);
    })
  }

  extractNumberOfPixelsFromString(property: string): number {
    const number = parseInt(property);
    return isNaN(number) ? 0 : number;
  }

  dragOnMouseMove = (event: MouseEvent) => {
    if (!event.ctrlKey) {
      console.log('Mouse move drag event listener triggered.')
      let newTop = this.extractNumberOfPixelsFromString(this.form.style.top) + event.movementY;
      let newLeft = this.extractNumberOfPixelsFromString(this.form.style.left) + event.movementX;
      const right = this.extractNumberOfPixelsFromString(getComputedStyle(this.form).right);
      const bottom = this.extractNumberOfPixelsFromString(getComputedStyle(this.form).bottom);
      this.checkOutOfBounds();

      newTop = (newTop < 0) ? 0 : newTop;
      newLeft = (newLeft < 0) ? 0 : newLeft;
      newTop = (bottom - event.movementY >= 0) ? newTop : newTop - event.movementY;
      newLeft = (right - event.movementX >= 0) ? newLeft : newLeft - event.movementX;
      this.form.style.top = newTop + 'px';
      this.form.style.left = newLeft + 'px';
    }
  }

  checkOutOfBounds() {
    const computedParentStyle = getComputedStyle(this.formParent);
    const formParentWidth = this.extractNumberOfPixelsFromString(this.formParent.width);
    const formParentHeight = this.extractNumberOfPixelsFromString(this.formParent.height);
    const formParentBorderLeft = this.extractNumberOfPixelsFromString(computedParentStyle.left);
    const formParentBorderRight = this.extractNumberOfPixelsFromString(computedParentStyle.right);
    const formParentBorderTop = this.extractNumberOfPixelsFromString(computedParentStyle.top);
    const formParentBorderBottom = this.extractNumberOfPixelsFromString(computedParentStyle.bottom);
    const formParentWidthWithoutBorders = formParentWidth - formParentBorderRight - formParentBorderLeft;
    const formParentHeightWithoutBorders = formParentHeight - formParentBorderTop - formParentBorderBottom;
  }

  resizeOnMouseMove = (event: MouseEvent) => {
    if (event.ctrlKey) {
      console.log('Mouse move resize event listener triggered.')
      const initialWidth = this.form.offsetWidth;
      const initialHeight = this.form.offsetHeight;
      const newWidth = initialWidth + event.movementX;
      const newHeight = initialHeight + event.movementY;

      this.form.style.width = newWidth + 'px';
      this.form.style.height = newHeight + 'px';
    }
  }
}
