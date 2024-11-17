import {
  Autocomplete,
  createFilterOptions,
  Grid2,
  TextField,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import _ from "lodash";

import { useTagStore } from "../store/tagStore";
import { INotesData, ITagData } from "../types/components";
import CustomButton from "../components/CustomButton";

const tagFilter = createFilterOptions<ITagData>();

function CreateNoteForm({
  handleSubmit,
  handleCancel,
}: {
  handleSubmit: (values: INotesData) => void;
  handleCancel: () => void;
}) {
  const tags = useTagStore((state) => state.tags);
  const createTag = useTagStore((state) => state.createTag);
  const theme = useTheme();

  const handleCreateTags = _.debounce((value: string) => {
    createTag({
      id: new Date().getTime().toString(),
      label: value,
      listType: "tag",
    });
  }, 1000);

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          body: "",
          tags: [],
        }}
        validationSchema={yup.object({
          title: yup.string().required(),
          body: yup.string().required(),
          tags: yup
            .array(
              yup.object({
                id: yup.string(),
                label: yup.string(),
              })
            )
            .min(1),
        })}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();
              props.submitForm();
            }}
            style={{ width: "100%" }}
          >
            <>
              <Grid2
                container
                sx={{
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                <Grid2 sx={{ mb: 2 }}>
                  <TextField
                    name="title"
                    label="Enter Notes Title"
                    placeholder="Enter Notes Title"
                    value={props.values.title}
                    onChange={props.handleChange}
                    fullWidth
                  />
                </Grid2>
                <Grid2 sx={{ mb: 2 }}>
                  <TextField
                    name="body"
                    label="Enter Notes Data"
                    placeholder="Enter Notes Data"
                    value={props.values.body}
                    onChange={props.handleChange}
                    multiline
                    rows={6}
                    fullWidth
                  />
                </Grid2>
                <Grid2>
                  <Autocomplete
                    value={props.values.tags}
                    getOptionLabel={(optionData) =>
                      typeof optionData === "string"
                        ? optionData
                        : optionData.label
                    }
                    options={tags}
                    onChange={(_e, value) => {
                      props.setFieldValue("tags", value);
                    }}
                    multiple
                    freeSolo
                    filterOptions={(options, params) => {
                      const filtered = tagFilter(options, params);

                      const { inputValue } = params;
                      const isExisting = options.some((optionValue) =>
                        optionValue.label
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                      );

                      if (inputValue.trim() !== "" && !isExisting) {
                        handleCreateTags(inputValue);
                      }
                      return filtered;
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        key={params.id}
                        error={Boolean(props.touched.tags && props.errors.tags)}
                        fullWidth
                        label="Tags"
                        name="tags"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid2>
              </Grid2>
              <Grid2
                container
                sx={{
                  width: "100%",
                  padding: "1rem",
                  justifyContent: "flex-end",
                  borderTop: "1px solid",
                  borderColor: theme.palette.secondary.dark,
                }}
                spacing={2}
              >
                <Grid2>
                  <CustomButton
                    handleClick={() => {
                      props.resetForm();
                      handleCancel();
                    }}
                    text="Cancel"
                    color="secondary"
                  />
                </Grid2>
                <Grid2>
                  <CustomButton
                    disabled={!props.isValid || !props.dirty}
                    type="submit"
                    text="Create Note"
                    color="primary"
                  />
                </Grid2>
              </Grid2>
            </>
          </form>
        )}
      </Formik>
    </>
  );
}

export default CreateNoteForm;
