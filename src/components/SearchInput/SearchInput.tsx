import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mb: 5 }}>
      <label htmlFor="outlined-search" style={{ fontWeight: 600 }}>
        Filter by keywords
      </label>
      <TextField
        id="outlined-search"
        placeholder="The most successful IT companies in 2020"
        variant="outlined"
        type="search"
        sx={{
          width: '600px',
          '& .MuiOutlinedInput-root': {
            border: '1px solid #eaeaea',
            boxShadow: '0 8px 24px 0 rgba(0, 0, 0, 0.05)',
          },

          '& input::-webkit-search-cancel-button': {
            cursor: 'pointer',
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default SearchInput;
