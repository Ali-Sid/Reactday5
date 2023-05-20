export default function Subscribe() {
  return (
    <div style={{ marginTop: "40%" }}>
      <h2>Subscribe</h2>
      <p>Sign up with your email address to receive news and updates</p>
      <div className="input-container">
        <input className="input" type="text" placeholder="First Name" />
        <input className="input" type="text" placeholder="Last Name" />
        <input className="input" type="email" placeholder="Email" />
      </div>
      <button>Submit</button>
    </div>
  );
}
