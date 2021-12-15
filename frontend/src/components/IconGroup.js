import { Group } from '@mantine/core'

import Icon from './Icon'

// Search for Icons here: https://icon-sets.iconify.design/ri/

const IconGroup = ({ ...props }) => {
  const iconList = [
    { iconId: 'ri:github-fill', linkUrl: 'https://github.com/steventimberman' },
    { iconId: 'ri:linkedin-box-fill', linkUrl: 'https://www.linkedin.com/in/steven-r-timberman/' },
    { iconId: 'ri:mail-line', linkUrl: 'mailto:stevetimberman@gmail.com' },
  ]

  const allIcons = iconList.map((iconItem) => (
    <Icon varient="hover" size="xl" iconId={iconItem.iconId} linkUrl={iconItem.linkUrl} />
  ))

  return (
    <Group {...props} direction="row">
      {allIcons}
    </Group>
  )
}

export default IconGroup
