import {
  Directive,
  ElementRef,
  HostListener,
  EventEmitter,
  Output
} from "@angular/core";

@Directive({
  selector: "[appClickedOutside]"
})
export class ClickedOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output()
  public clickOutside = new EventEmitter();

  @HostListener("document:click", ["$event.target"])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      console.log("clicked outside");
    }
  }
}
