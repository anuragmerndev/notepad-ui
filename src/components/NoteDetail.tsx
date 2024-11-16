import { Box, Grid2, Typography, useTheme } from "@mui/material";
import { INotesDetail } from "../types/components";
import { IconsData } from "../data/IconsData";

function NoteDetail({ id, tags, body, created_date, title }: INotesDetail) {
  const theme = useTheme();
  return (
    <Grid2
      key={id}
      sx={{
        textAlign: "left",
        padding: "1rem",
      }}
    >
      <Grid2
        sx={{
          borderBottom: "1px solid",
          borderColor: theme.palette.secondary.dark,
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "1rem 0",
          }}
        >
          <Grid2
            container
            sx={{
              mb: 1,
            }}
          >
            <Grid2 container size={{ md: 3 }}>
              <IconsData.tag />
              <Typography
                sx={{
                  ml: 1,
                }}
              >
                Tags
              </Typography>
            </Grid2>
            <Grid2 container>
              {tags.map((tagData, index) => (
                <>
                  <Typography
                    key={tagData.id}
                    sx={{
                      mr: 0.5,
                    }}
                  >
                    {tagData.label}
                    {index !== tags.length - 1 ? `,` : ""}
                  </Typography>
                </>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 container size={{ md: 3 }}>
              <IconsData.clock />
              <Typography
                sx={{
                  ml: 1,
                }}
              >
                Last Edited
              </Typography>
            </Grid2>
            <Grid2>
              <Typography>{created_date}</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Grid2>
      <Grid2>
        <Typography>{body}</Typography>
      </Grid2>
    </Grid2>
  );
}

export default NoteDetail;
