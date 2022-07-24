import React, { FC, ReactNode, Children, isValidElement, cloneElement, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import style from './ProductSlider.module.css'
import cn from 'classnames'

type Props = {
  children: ReactNode
}

const ProductSlider: FC<Props> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    // created() {
    //   setLoaded(true)
    // },
  })
  return (
    <div className={style.root}>
      <div ref={sliderRef} className="keen-slider h-full transition-opacity duration-150">
        <button onClick={() => slider.current?.prev()} className={cn(style.leftControl, style.control)} />
        <button onClick={() => slider.current?.next()} className={cn(style.rightControl, style.control)} />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              className: `${child.props.className ? child.props.className : ''} keen-slider__slide`,
            })
          }

          return child
        })}
      </div>
    </div>
  )
}

export default ProductSlider
