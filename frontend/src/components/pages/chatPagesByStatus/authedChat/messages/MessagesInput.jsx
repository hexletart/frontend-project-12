import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { createMessage } from '../../../../../slices/messagesSlice';

const MessagesInput = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const inputEl = useRef();
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  const form = (
    <Formik
      className="py-1 border rounded-2"
      initialValues={{ message: '' }}
      onSubmit={(values, actions) => {
        dispatch(createMessage(values.message));
        actions.resetForm();
      }}
    >
      {({ handleSubmit, handleChange, values }) => {
        const isDisabled = values.message.length === 0;
        return (
          <Form onSubmit={handleSubmit} className="py-1 border rounded-2">
            <InputGroup>
              <Form.Control
                className="border-0 p-0 ps-2 form-control"
                type="text"
                name="message"
                autoComplete="message"
                placeholder={t('chatPage.authedChat.messages.form.input.placeholder')}
                ref={inputEl}
                value={values.message}
                onChange={handleChange}
                aria-label={t('chatPage.authedChat.messages.form.input.ariaLabel')}
                aria-describedby="message-input"
              />
              <Button
                type="submit"
                variant=""
                id="message-input-button"
                className="btn-group-vertical border-0"
                disabled={isDisabled}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`${isDisabled ? 'text-muted' : 'text-success'} bi bi-envelope`}
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span className="visually-hidden">
                  {t('chatPage.authedChat.messages.form.button.screenReader')}
                </span>
              </Button>
            </InputGroup>
          </Form>
        );
      }}
    </Formik>
  );
  return (
    <div className="mt-auto px-5 py-3">
      {form}
    </div>
  );
};

export default MessagesInput;
