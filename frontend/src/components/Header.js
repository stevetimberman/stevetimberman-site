import { Header as MantineHeader } from "@mantine/core";
import { Title } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

const Header = ({ ...props }) => {
  return (
    <MantineHeader {...props}>
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Title
          align="left"
          order={2}
          sx={(theme) => ({
            color: theme.colors.gray[7],
          })}
        >
          Steve Timberman
        </Title>
      </div>
    </MantineHeader>
  );
};

export default Header;
