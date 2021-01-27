import React from 'react';

import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import './RouteAddingForm.scss';

const RouteAddingForm = (props) => {
  const { } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const test = event.form;
    debugger;
  };

  /* const event: React.FormEvent<HTMLFormElement>;
  event. */

  return (
    <form className="route-adding-form" onSubmit={handleSubmit}>
      <p className="route-adding-form__title">Добавление узлов</p>
      <div className="route-adding-form__title-input">
        <Input
          type="text"
          name="route"
          placeholder="title"
        />
      </div>
      <div className="route-adding-form__route-input">
        <Input
          type="text"
          name="route-title"
          placeholder="route"
        />
      </div>
      <div className="route-adding-form__submitter">
        <Button
          text="добавить роут"
          type="submit"
        />
      </div>
    </form>
  );
};

export default RouteAddingForm;
