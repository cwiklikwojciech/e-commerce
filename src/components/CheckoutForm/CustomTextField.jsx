
import React from 'react';
import { useFormContext, UseForm, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';
//import { Input, Select, MenuItem } from "@material-ui/core";
import Select from "react-select";

function FormInput({ name, label, required }) {

  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
     <Controller
        render={({ field }) => ( 
        <TextField {...field} label={label} required={required}/>)}
        control={control}
        fullWidth
        name={name}
      />
    </Grid>
  );
}

export default FormInput;
