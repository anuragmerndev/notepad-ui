import { ReactNode } from "react";
import theme from "../theme";
import { CssBaseline, Grid2, ThemeProvider } from "@mui/material";
import LeftSideBar from "../components/LeftSideBar";
import Header from "../components/Header";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Grid2
          size={{ md: 2 }}
          sx={{
            height: "100%",
          }}
        >
          <LeftSideBar />
        </Grid2>
        <Grid2
          size={{ md: 10 }}
          sx={{
            height: "100%",
          }}
          container
        >
          <Grid2
            sx={{
              width: "100%",
              borderBottom: "1px solid #e1e2e9",
            }}
          >
            <Header />
          </Grid2>
          <Grid2
            size={{
              md: 12,
            }}
          >
            {children}
          </Grid2>
        </Grid2>
      </Grid2>
    </ThemeProvider>
  );
}

export default AppLayout;
