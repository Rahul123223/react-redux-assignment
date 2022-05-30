import "./css/register.css";

export const Register = () => {
  return (
    <>
      <div className="register">
        <h1>Register Here...</h1>
        <div className="reg_tags">
          <form action="">
            <label htmlFor="text">Name</label>
            <input
              type="text"
              className="inp_tags"
              placeholder="enter your name here..."
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="inp_tags"
              placeholder="enter your password here..."
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="inp_tags"
              placeholder="enter your email here..."
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="inp_tags"
              placeholder="enter your age here..."
            />
            <label htmlFor="data">Date</label>
            <input type="date" className="inp_tags" />
            <input type="submit" className="inp_tags" />
          </form>
        </div>
      </div>
    </>
  );
};
