import { Field, Formik } from 'formik';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <Formik initialValues={''} onSubmit={() => {}}>
      <label className={css.searchLabel}>
        <span>Find contacts by name</span>
        <Field
          className={css.searchField}
          type="text"
          name="filter"
          value={value}
          onChange={onFilter}
          placeholder="Search"
        />
      </label>
    </Formik>
  );
};

export default SearchBox;
