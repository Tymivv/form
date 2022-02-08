import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Checkbox from '../Checkbox/Checkbox'
import 'bootstrap/dist/css/bootstrap.min.css';

const INITIAL_STATE = {
  header: '',
  description: '',
  checkboxOnOff: false,
  phone: '',
  email: '',
  file: [],
  checkboxServise1: false, 
  checkboxServise2: false,
  checkboxServise3: false,
  checkboxServise4: false,
  checkboxServise5: false,
};


const App = () => {
  const [file, setFile] = useState([]);
  const [numberFiles, setnumberFiles] = useState(1);
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [currentStep, setСurrentStep] = useState(1);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const isCheckbox = type === 'checkbox';
    setFormData({
      ...formData,
      [name]: isCheckbox ? checked : value,
      file,
    });
  };
  const toDownloadFiles = (event) => {
    for (let size = 0; size < event.target.files.length; size++) {
      setFile([...file, event.target.files[size]])
    }
}
  const reset = () => setFormData({ ...INITIAL_STATE });

  const handleSubmit = event => {
    setFormData({
      ...formData,
      file,
    });
    reset();
  }

  const _next = () => {
    setСurrentStep (currentStep + 1)
  }

  const _prev = () => {
  setСurrentStep (currentStep - 1)
  }

  const byNumberFiles = () => {
  setnumberFiles (numberFiles + 1)
  }

  const { header,
  description,
  checkboxOnOff,
  phone,
  email,
  checkboxServise1, 
  checkboxServise2,
  checkboxServise3,
  checkboxServise4,
  checkboxServise5 } = formData;
  
  const requiredHeaderValues = [header];
  const isSubmitBtnDisabled = requiredHeaderValues.some(value => !value);
  const requiredPhoneValues = [phone];
  const isSubmitBtnDisabledPhone = requiredPhoneValues.some(value => !value);

  return (
    <div>
      <h1>Форма входа</h1>
      <p>Шаг {currentStep} </p> 
      <Form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
        <FormGroup>
          <Label for="exampleText">
            Заголовок
          </Label>
          <Input
            type="text"
            name="header"
            required
            value={header}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">
            Описание
          </Label>
          <Input
            id="exampleText"
            name="description"
            value={description}
            onChange={handleChange}
            type="textarea"
          />
        </FormGroup>
        <FormGroup check>
          <Input
            type="checkbox"
            name="checkboxOnOff"
            checked={checkboxOnOff}
            onChange={handleChange}
            />
          {' '}
          <Label check>
            on|off
          </Label>
            </FormGroup>
            </>
        )}
        {currentStep === 2 && (
          <>
            <FormGroup>
              <Label for="exampleText">
                Номер телефона
              </Label>
              <Input
                type="text"
                name="phone"
                required
                value={phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">
                Емайл   
              </Label>
              <Input
                type="text"
                name="email"
                required
                value={email}
                onChange={handleChange}
              />
            </FormGroup>
          </>
        )}
        {currentStep === 3 && (
          <>
            <FormGroup>
              <Label for="exampleFile">
                Фотография
              </Label>
              {Array.from({ length: numberFiles }).map((_, idx) =>
                <Input
                  key = {idx}
                  id="exampleFile"
                  name="file"
                  type="file"
                  onChange={toDownloadFiles}
                />)}
              {numberFiles < 5 && (
                <Button
                  onClick={byNumberFiles}
                  color="primary"
                >
                  Загрузить ещо один файл
                </Button>
              )}
            </FormGroup>
          </>
        )}
        {currentStep === 4 && (
          <>
            <Checkbox
              LabelName="послуга1"
              handleChange = {handleChange}
              checkboxValue={checkboxServise1}
              checkboxName = "checkboxServise1"
            />
            <Checkbox
              LabelName="послуга2"
              handleChange = {handleChange}
              checkboxValue={checkboxServise2}
              checkboxName = "checkboxServise2"
            />
            <Checkbox
              LabelName="послуга3"
              handleChange = {handleChange}
              checkboxValue={checkboxServise3}
              checkboxName = "checkboxServise3"
            />
            <Checkbox
              LabelName="послуга4"
              handleChange = {handleChange}
              checkboxValue={checkboxServise4}
              checkboxName = "checkboxServise4"
            />
            <Checkbox
              LabelName="послуга5"
              handleChange = {handleChange}
              checkboxValue={checkboxServise5}
              checkboxName = "checkboxServise5"
            />
          </>
        )}
        {currentStep === 1  && (
          <Button
            onClick={_next}
            color="primary"
            disabled = {isSubmitBtnDisabled}
          >
            next
          </Button>
        )}
        {(currentStep === 2 || currentStep === 3)  && (
          <Button
            onClick={_next}
            color="primary"
            disabled = {isSubmitBtnDisabledPhone}
          >
            next
          </Button>
        )}
        {currentStep !== 1 && (
          <Button
            onClick={_prev}
            color="danger"
          >
            prev
          </Button>
        )}
        {currentStep === 4 && (
          <Button
            color="primary"
          >
            save
          </Button>
        )}
      </Form>
    </div>
  );
};

export default App;
