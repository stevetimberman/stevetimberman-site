import { Card, Group } from "@mantine/core";

import Avatar from "./Avatar";
import IconGroup from "./IconGroup";

const BioCard = ({ ...props }) => {
  return (
    <Card {...props}>
      <Group direction="column" position="center">
        <Avatar />
        <IconGroup />
      </Group>
    </Card>
  );
};

export default BioCard;
