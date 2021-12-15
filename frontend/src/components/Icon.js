import { ActionIcon } from "@mantine/core";
import { Icon as IconifyIcon } from "@iconify/react";



const Icon = ({ iconId, linkUrl, ...props }) => {
	return (
		<ActionIcon {...props} onClick={() => window.open(linkUrl)} >
			<IconifyIcon icon={iconId} height="auto" />
		</ActionIcon>
	)
}

export default Icon
