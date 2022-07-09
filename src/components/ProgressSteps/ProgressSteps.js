import React, { useState } from "react";
import "./ProgressSteps.css";

const TOTAL_STEPS = 4;
export const ProgressSteps = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="progress-steps-container center-vh">
      <div className="progress-steps">
        {Array.from({ length: TOTAL_STEPS }, (item, index) => index + 1).map(
          (num, index) => (
            <div key={index} className="progress-step">
              <p
                className={
                  current === num
                    ? "progress-number active-process-number active-bg"
                    : current >= num
                    ? "progress-number active-process-number"
                    : "progress-number"
                }
              >
                {num}
              </p>
              {index !== TOTAL_STEPS - 1 ? (
                <p
                  className={
                    current > num
                      ? "progress-process active-progress-process"
                      : "progress-process"
                  }
                ></p>
              ) : null}
            </div>
          )
        )}
      </div>
      <div>
        <button
          className={
            current - 1 === 0
              ? "btn btn-secondary progress-button"
              : "btn btn-primary progress-button"
          }
          onClick={() => setCurrent(current - 1)}
          disabled={current - 1 === 0}
        >
          Previous
        </button>
        <button
          className={
            current === TOTAL_STEPS
              ? "btn btn-secondary progress-button"
              : "btn btn-primary progress-button"
          }
          disabled={current === TOTAL_STEPS}
          onClick={() => setCurrent(current + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
