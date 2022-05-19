import * as SolidIcons from '@heroicons/react/solid'
import * as OutlineIcons from '@heroicons/react/outline'

const CustomIcon = ({
  icon,
  color = 'black',
  isOutline = false,
  size = '20px',
}) => {
  const { ...icons } = isOutline ? OutlineIcons : SolidIcons

  const Icon = icons[icon]

  if (Icon) {
    return (
      <Icon
        style={{
          width: size,
          height: size,
          color: color,
        }}
      />
    )
  }

  return <div>Icon not found</div>
}

export default CustomIcon
