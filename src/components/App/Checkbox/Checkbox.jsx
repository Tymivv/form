import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

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

  Checkbox.propTypes = {
    LabelNamed: PropTypes.string,
    handleChange: PropTypes.func,
    checkboxValue: PropTypes.string,
    checkboxName: PropTypes.string,
    
};
}
export default Checkbox;