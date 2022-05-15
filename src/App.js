import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (<div className="container">
  <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="container">
              <div className="row g-3">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="className">name</label>
                      <input  placeholder="enter name" type="text" className="form-control"/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label for="" className="className">address</label>
                      <textarea placeholder="enter address" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="className">email</label>
                      <input  placeholder="enter email" type="email" className="form-control"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="className">ph num</label>
                      <input  placeholder="enter ph num" type="text" className="form-control"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="className">gender</label>
                      <select name="" id="" className="form-control">
                          <option value="male">male</option>
                          <option value="female">female</option>
                      </select>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="className">qualification</label>
                      <select name="" id="" className="form-control">
                          <option value="mca">mca</option>
                          <option value="mba">mba</option>
                          <option value="msc">msc</option>
                          <option value="mtech">mtech</option>
                          <option value="mec">mec</option>
                      </select>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="className">pincode</label>
                      <input  placeholder="enter pincode" type="text" className="form-control"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" className="className">username</label>
                      <input  placeholder="enter username" type="text" className="form-control"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" className="className">password</label>
                  <input  placeholder="enter password"type="password" name="" id="" className="form-control"/>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">submit</button>
                  </div>
                
                    </div>
              </div>
          </div>
      </div>
  </div>
  );
}

export default App;
