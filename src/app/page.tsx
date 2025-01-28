'use client';

function saveAction(e: any) {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
    address: e.target.address.value,
    zipCode: e.target.zipCode.value,
    city: e.target.city.value,
  };

  console.log(data);
}

export default function Home() {
  return (
    <div className="form-container">
      <div>
        <h1>Form</h1>
        <h2>Please enter your details below</h2>
      </div>

      <div className="divider"></div>

      <form onSubmit={saveAction}>
        <div className="single">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="John Doe"/>
        </div>

        <div className="single">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" placeholder="john-doe@gmail.com"/>
        </div>

        <div className="single">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder=". . ."/>
        </div>

        <div className="address">
          <div className="single">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder="Rantatie 14B"/>
          </div>

          <div className="double">
            <div className="single marginright">
              <label htmlFor="zipCode">ZIP Code</label>
              <input type="text" name="zipCode" id="zipCode" placeholder="00100"/>
            </div>

            <div className="single marginleft">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" placeholder="Helsinki"/>
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
