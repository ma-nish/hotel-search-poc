import React from 'react'
import { Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import { CHILD_AGES } from '../../constants/search';

interface ChildAgeProps {
  childrens: number,
  childAges: number[],
  setChildAges: (args: number[]) => void
}

export type AgeOption = {
  label: string;
  value: number;
};

const ChildAge: React.FunctionComponent<ChildAgeProps> = ({ childAges, childrens, setChildAges }) => {
  if (!childrens) {
    return null;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    let ages = childAges;
    ages[index] = Number(event.target.value)
    setChildAges([...ages])
  }

  return (
    <Row>
      {Array.from({ length: childrens }).map((_, idx) => (
        <Col key={idx} sm={4}>
          <FloatingLabel
            controlId="floatingTextarea"
            label={"Child " + (idx + 1) + " age"}
            className="mb-3"
          >
            <Form.Select
              aria-label="Floating label select example"
              value={childAges[idx]}
              onChange={(event) => handleChange(event, idx)}
            >
              {CHILD_AGES.map((option: AgeOption) =>
                <option key={option.value} value={option.value}>{option.label}</option>
              )}
            </Form.Select>
          </FloatingLabel>
        </Col>
      ))}
    </Row>
  )
}

export default ChildAge