import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export default function TextFieldComp() {
  return (
    <TextField id="outlined-basic" label="" variant="outlined" placeholder="This is Placeholder" 
    slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#FFFFFF'}} />
          </InputAdornment>
        ),
      },
    }}
    sx={{
      '& ::placeholder': {
        color: '#889898',
      },
      '& .MuiInputBase-root': {
        paddingLeft: '14px'
      },
      '& .MuiInputBase-input': {
        color: '#E0E6E9',
        height: '48px',
        padding: '0'
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