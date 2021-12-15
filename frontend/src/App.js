import { MantineProvider, AppShell, Center, Button } from "@mantine/core";

import BioCard from "./components/BioCard";
import Header from "./components/Header";


const App = () => {
  return (
    <MantineProvider
      theme={{
        primaryColor: "cyan",
      }}
    >
      <AppShell
        sx={(theme) => ({
          main: { backgroundColor: theme.colors.gray[2] },
        })}
        header={<Header height={70} padding="md" />}
      >
        <Center>
          <BioCard />
        </Center>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
