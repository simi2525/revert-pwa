import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectComponent = (props: any) => {
  const { id, labelId, name, label, value, onChange, items } = props;
  return (
    <FormControl
      sx={{ m: 1, minWidth: 120, marginLeft: 0, marginBottom: "2px" }}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        size="small"
      >
        {items.map(({ value, label }: any) => (
          <MenuItem key={label} value={value}>{label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
