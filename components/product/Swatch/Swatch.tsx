import { FC } from 'react'
import style from './Swatch.module.css'
import { Check } from '@components/icons'
import cn from 'classnames'
import { isDark } from '@lib/color'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  label?: string
  variant?: 'size' | 'color' | string
  active?: boolean
  onClick: () => void
}

const Swatch: FC<Props> = ({ color, label, variant, active, size = 'md', ...rest }) => {
  label = label?.toLowerCase()
  variant = variant?.toLowerCase()

  const rootClassName = cn(style.root, {
    [style.active]: active,
    [style.color]: color,
    [style.size]: variant === 'size',
    [style.dark]: color && isDark(color),
    [style.sm]: size === 'sm',
  })
  return (
    <button style={color ? { backgroundColor: color } : {}} className={rootClassName} {...rest}>
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
    </button>
  )
}

export default Swatch
