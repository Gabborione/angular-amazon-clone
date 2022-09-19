import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ["../../../../node_modules/keen-slider/keen-slider.min.css",
  './hero-carousel.component.scss']
})
export class HeroCarouselComponent{
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;

  images: String[] = [
    "https://m.media-amazon.com/images/I/71mI4d5pZqL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61M8I+5yllL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61LiuYD88vL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71IYZbNDnbL._SX3000_.jpg"
  ]
  opacities: number[] = []

  currentSlide: number = 1
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance | null = null;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        slides: this.images.length,
        loop: true,
        defaultAnimation: {
          duration: 1000,
        },
        detailsChanged: (s) => {
          this.opacities = s.track.details.slides.map((slide) => slide.portion)
        },
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      },
      [
        (slider) => {
          let timeout: any;
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 4000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}


  
