export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="Number"
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="Number"
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="Number"
            required
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="Number"
            required
            onChange={(event) => onChange("duration", event.target.value)}
            value={userInput.duration}
          ></input>
        </p>
      </div>
    </section>
  );
}
