import React from 'react';
import Toast from '../Toast';
import Button from '../Button';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toast, setToast] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleDismiss() {
    setToast(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src="/toast.png"
        />
        <h1>Toast Playground</h1>
      </header>

      {toast && (
        <Toast
          variant={variant}
          handleDismiss={handleDismiss}
        >
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map(option => {
              const id = `variant-${option}`;
              return (
                <label
                  htmlFor={id}
                  key={id}
                >
                  <input
                    type="radio"
                    name="variant"
                    id={id}
                    value={option}
                    checked={option === variant}
                    onChange={event => setVariant(event.target.value)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
