import { CardActions, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import ViewForm from "../ViewForm";
import FormConfig from "./config";
import defaultValues from "./defaultValues";
import {
  StyledButton,
  StyledCard,
  StyledCategory,
  StyledComponentsContainer,
  StyledForm,
  StyledInputsContainer,
} from "./Form.styled";

const Form = (props: any) => {
  const { content, setContent, hideHeader } = props;
  const [formValues, setFormValues] = useState(defaultValues);
  const [viewForm, setViewForm] = useState(false);

  useEffect(() => {
    if (content) {
      setFormValues(JSON.parse(content));
      setContent(null);
    }
  }, [content, setContent]);

  useEffect(() => {
    if (viewForm) hideHeader(true);
  }, [hideHeader, viewForm]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((formValues: any) => ({ ...formValues, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
    setViewForm(true);
    document.getElementById("view-form")?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledCard
      sx={
        viewForm
          ? {
              minWidth: 789,
              maxHeight: 520,
              overflow: "auto",
              padding: "24px",
            }
          : {
              maxWidth: 789,
              maxHeight: 520,
              overflow: "auto",
            }
      }
      id="view-form"
    >
      {viewForm ? (
        <ViewForm data={formValues} />
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <CardContent sx={{ padding: "16px 0" }}>
            <StyledInputsContainer>
              {FormConfig.map(({ category, components }, index) => (
                <div key={`${content}-${index}`}>
                  <StyledCategory key={`${category}-${index}`}>
                    {category}
                  </StyledCategory>
                  <StyledComponentsContainer>
                    {components.map((item, index) => {
                      const { Component, name, ...props } = item;

                      return (
                        <Component
                          {...props}
                          key={index}
                          name={name}
                          value={formValues[name]}
                          onChange={handleInputChange}
                          size="small"
                          margin="normal"
                          // error={name !== "sex" && formValues[name] < 0}
                          // {...(name !== "sex" && {
                          //   InputProps: { inputProps: { min: 0 } },
                          // })}
                        />
                      );
                    })}
                  </StyledComponentsContainer>
                </div>
              ))}
            </StyledInputsContainer>
          </CardContent>

          <CardActions
            sx={{
              alignItems: "flex-end",
              flexDirection: "column",
              paddingBottom: "24px",
            }}
          >
            <StyledButton variant="contained" color="primary" type="submit">
              Submit
            </StyledButton>
          </CardActions>
        </StyledForm>
      )}
    </StyledCard>
  );
};

export default Form;
