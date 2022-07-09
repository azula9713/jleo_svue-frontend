import styled from 'styled-components'
import FieldLabel from '../Common/FieldLabel'
import InputField from '../Common/InputField'

const AppointmentField = ({
  labelTitle,
  fieldName,
  inputType,
  fieldType,
  value,
  onChange,
  textBoxRows,
}) => {
  return (
    <FieldContainer fieldType={fieldType}>
      <Label labelTitle={labelTitle} />
      {fieldType === 'input' && (
        <FieldInput
          type={inputType}
          name={fieldName}
          value={value}
          onChange={onChange}
        />
      )}

      {fieldType === 'textarea' && (
        <FieldTextArea
          name={fieldName}
          value={value}
          onChange={onChange}
          rows={textBoxRows}
        />
      )}
    </FieldContainer>
  )
}

export default AppointmentField

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  height: ${(props) => (props.fieldType === 'textarea' ? 'auto' : '5rem')};
  min-height: 5rem;
  max-width: 100%;
`

const FieldInput = styled(InputField)`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  border: ${(props) => props.theme.borderPrimary};
  padding: 0.7rem 1rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;

  &:focus {
    border: ${(props) => props.theme.borderPrimaryActive};
    outline: none;
  }
`

const FieldTextArea = styled.textarea`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  border: ${(props) => props.theme.borderPrimary};
  padding: 0.7rem 1rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-family: ${(props) => props.theme.defaultFontFamily};
  resize: vertical;

  &:focus {
    border: ${(props) => props.theme.borderPrimaryActive};
    outline: none;
  }
`

const Label = styled(FieldLabel)`
  font-size: 1rem;
  color: ${(props) => props.theme.textPrimary};
`
