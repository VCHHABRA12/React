// import "./App.css";

// // Component definition/declaration
// // App - component
// export default function App() {
//   return (
//     <div classNameName="App">
//       <Msg
//         name="Vaibhav"
//         pic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//       />
//       <Msg
//         name="Tejaswini"
//         pic="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//       />
//       <Msg
//         name="Shreyas"
//         pic="https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg"
//       />
//     </div>
//   );
// }

// // props - (like arguments in function)

// // JSX  5 - 8 | JavaScript XML
// // JSX -> Webpack + Babel ->  JS

// // template syntax - {}
// // Component Msg - Component definition/declaration
// // 1. first letter must be capital
// // 2. Return only one JSX element
// function Msg(props) {
//   console.log(props);
//   // const name = "Vaibhav";
//   return (
//     <div>
//       <img className="profile-pic" src={props.pic} alt={props.name} />
//       <h1>Hello {props.name} 👋😎🎉🎉</h1>
//     </div>
//   );
// }


//CLASS TASK 1

import "./App.css";


// Component definition/declaration
// App - component
export default function App() {
  return (
    <div className="App">
      <Msg/>
    </div>
  );
}

function Msg(props) {
    console.log(props);
  
    return (
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
  }
  