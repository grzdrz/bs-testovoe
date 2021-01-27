import React from 'react';

import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import './RouteAddingForm.scss';

const RouteAddingForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    debugger;
  };
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
          hasArrow
          type="submit"
        />
      </div>
    </form>
  );
};

export default RouteAddingForm;
