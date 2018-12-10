import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import {
SearchInput,
SearchButton
} from './style'
const SearchForm = props => {
  const { handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
    <SearchInput>
        <span style={{marginLeft:'30px'}}>单程:</span>
          <Field
            name="tripType"
            component="input"
            type="radio"
            value="1"
          />
          <span style={{marginLeft:'30px'}}>往返:</span>
          <Field
            name="tripType"
            component="input"
            type="radio"
            value="2"
          />
      </SearchInput>
      <SearchInput>
        <span>出发城市:</span>
          <Field
            name="depCity"
            component="input"
            type="text"
            placeholder="depCity"
            className='textInput'
          />
      </SearchInput>
      <SearchInput>
        <span>到达城市:</span>
          <Field
            name="arrCity"
            component="input"
            type="text"
            placeholder="arrCity"
            className='textInput'
          />
      </SearchInput>
      <SearchInput>
        <span>去程日期:</span>
          <Field
            name="depDate"
            component="input"
            type="text"
            placeholder="depDate"
            className='textInput'
          />
      </SearchInput>
      <SearchInput>
        <span>返程日期:</span>
          <Field
            name="retDate"
            component="input"
            type="text"
            placeholder="retDate"
            className='textInput'
          />
      </SearchInput>
      <SearchInput>
        <span>成人人数:</span>
          <Field
            name="adtNumber"
            component="select"
            className='textInput'
          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          </Field>
      </SearchInput>
      <SearchInput>
        <span>儿童人数:</span>
          <Field
            name="chdNumber"
            component="select"
            className='textInput'
          >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          </Field>
      </SearchInput>
      <SearchButton>
        搜索
      </SearchButton>
    </form>
  );
};

export default reduxForm({
  form: 'searchForm', // a unique identifier for this form
})(SearchForm);
