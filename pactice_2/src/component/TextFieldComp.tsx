import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
interface IProps {
  value: string
  placeholder?: string;
  label?: string;
  isSearchButton?: boolean;
  onChange: (e: string) => void;
}
export default function TextFieldComp(props: IProps) {
  return (
    <TextField id="outlined-basic" label={props.label} variant="outlined" placeholder={props.placeholder}
    value={props.value} onChange={(e) => props.onChange(e.target.value)}
    slotProps={{
      input: {
        startAdornment: (
          props.isSearchButton ? <InputAdornment position="start">
            <SearchIcon sx={{ color: '#FFFFFF'}} />
          </InputAdornment> : null
        ),
      },
    }}
    sx={{
      width: "100%",
      '& ::placeholder': {
        color: '#889898',
      },
      '& .MuiInputBase-root': {
        paddingLeft: '14px'
      },
      '& .MuiInputBase-input': {
        color: '#E0E6E9',
        height: '48px',
        padding: '0 10px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#393C49'
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#393C49 !important'
      },
      'fieldset': {
        borderRadius: '8px',
      }
     }} />
  )
}