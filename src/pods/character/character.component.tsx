import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validation';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  statuses: Lookup[];
  genders: Lookup[];
  onSave: (character: Character) => void;
}
export const CharacterComponent: React.FC<Props> = (props) => {
  const {character, statuses, genders, onSave} = props;

  return (
    <Formik
    onSubmit = {onSave}
    initialValues={character}
    enableReinitialize = {true}
    validate = {formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <SelectComponent name="status" label="Status" items={statuses} />
          <TextFieldComponent name="type" label="Type" />
          <SelectComponent name="gender" label="Gender" items={genders} />
          <TextFieldComponent name="origin" label="Origin" />
          <TextFieldComponent name="image" label="Image" />
          <TextFieldComponent name="url" label="Url" />
          <TextFieldComponent name="comment.comment" label="Comment" />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};