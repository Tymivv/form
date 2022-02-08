import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkbox = ({LabelName, handleChange, checkboxValue, checkboxName}) => {


  return (
    <FormGroup check>
      <Input type="checkbox"
      name={checkboxName}
      value={checkboxValue}
      onChange={handleChange}
      />
    {' '}
    <Label check>
        {LabelName}
    </Label>
  </FormGroup>
  );

  // eslint-disable-next-line no-unreachable
  Checkbox.propTypes = {
    LabelNamed: PropTypes.string,
    handleChange: PropTypes.func,
    checkboxValue: PropTypes.string,
    checkboxName: PropTypes.string,
    
};
}
export default Checkbox;