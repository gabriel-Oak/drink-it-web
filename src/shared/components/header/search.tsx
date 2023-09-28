'use client';
import { useParams, useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';
import { Field, Form, StyledIconButton } from './styles';
import { FormControl, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search: FC = () => {
  const { search } = useParams<{ search?: string }>();
  const [searchValue, setSearchValue] = useState(search?.replaceAll('%20', ' ') || '');
  const { push } = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue) push(`/search/${searchValue}`);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormControl fullWidth variant="outlined">
        <Field
          id="search"
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          endAdornment={
            <InputAdornment position="end">
              <StyledIconButton
                aria-label="search for cocktails"
                edge="end"
                type="submit"
              >
                <SearchIcon />
              </StyledIconButton>
            </InputAdornment>
          }
          size="small"
          placeholder="Search"
        />
      </FormControl>
    </Form>
  );
}

export default Search;
