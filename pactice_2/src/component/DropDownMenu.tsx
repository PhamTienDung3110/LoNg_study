import { FormControl, MenuItem, Select } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
interface IProps {
  open: boolean;
  label?: string;
  defaultValue?: string;
  defaultLabel?: string;
  isDefault?: boolean;
  options: { value: string; label: string}[];
  value: string;
  onClose: () => void;
  onOpen: () => void;
  onChange: (e: string) => void;
}
export default function DropDownMenuComp(props: IProps) {
  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={props.open}
          onClose={() => props.onClose()}
          onOpen={() => props.onOpen()}
          value={props.value}
          label={props.label}
          onChange={(e) => props.onChange(e.target.value)}
          IconComponent={ArrowDropDownIcon}
          sx={{
            width: "100%",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#393C49",
            },
            '&.MuiInputBase-root .MuiInputBase-input': {
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '8px'
            },
            '&.MuiInputBase-root fieldset': {
              borderColor: '#393C49 !important',
            },
            '&.MuiInputBase-root svg': {
              color: '#FFFFFF !important',
              left: '1rem',
            },
            '&.MuiInputBase-root .MuiInputBase-input ': {
              color: '#FFFFFF !important',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#393C49 !important'
            }
          }}
        >
          {
            props.isDefault ? <MenuItem value={props.defaultValue}>
            <em>{props.defaultLabel}</em>
          </MenuItem> : null
          }
          { 
            props.options ? props.options.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            )) : <></>
          }
        </Select>
      </FormControl>
    </div>
  )
}