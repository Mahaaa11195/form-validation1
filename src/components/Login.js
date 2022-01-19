import React,{useState,useEffect} from 'react';

function Login(props) {
    
    const initialValues={username:"",email:"",password:"",age:"",gender:"",technology:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
    console.log(e.target.value);
    
    const userDetailsCopy = { ...formValues}
        userDetailsCopy[e.target.name] =e.target.value;
        setFormValues(userDetailsCopy)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(()=>{
        console.log(formErrors);
    if(Object.keys(formErrors.length===0 && isSubmit)){
        console.log(formValues);
    }
    },[formErrors]);
    const validate=(values)=>{
        const errors={}
        // const regex='/^([\w\.-])+@([\w\-_])+.([a-z]{2,3})(.[a-z]{2,8})$/';
        const validEmail=new RegExp('^[a-zA-z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
        if(!values.username){
        errors.username="Username cannot be empty*"
        }else if(values.username.length>10 || values.username.length<5){
            errors.username="Username should be less than 10 and greater than 5*"
        }
        if(!values.password){
        errors.password="Password cannot be empty*"
        }else if(values.password.length>10 || values.password.length<5){
            errors.password="Password should be less than 10 and greater than 5*"
        }
        if(!values.email){
            errors.email="Email cannot be empty*"
            }
            // else if(!validEmail.test(values.email)){
            //     errors.email="Enter valid email*"
            // }
        if(!values.age){
                errors.age="Age cannot be empty*"
                }else if(values.age<18 || values.age>60){
                    errors.age="Age should be less than 60 and greater than 18*"
                }
        if(!values.gender){
            console.log(values.gender)
                    errors.gender="gender cannot be empty*"
                    }else{
                        errors.gender=""
                    }
        if(!values.technology){
            console.log(values.technology.checked)
                        errors.technology="Select anyone technology*"
                        }else{
                            errors.technology=""
                        }

            return errors;
    }
    return (
        <div>
            <body className="element">
    <div >
    {Object.keys(formErrors).length===0 && isSubmit ? <div>Logged In successfully</div> : "" }
      <section className="form-section">
        <form onSubmit={handleSubmit}>
            <div className="contain">
                <div>
                    <h3 align="center">
                        User Information
                    </h3>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label  className="label-input">User Name:</label>
                        <input type="text" id="username" name="username" className="label-input" placeholder="Enter Username" value={formValues.username} onChange={handleChange} />
                        <small id="valid-feedback">{formErrors.username}</small>
                    </div>
                    <div className="col-md-6">
                        <label  className="label-input">Password:</label>
                        <input type="password" id="password" name="password"className="label-input" placeholder="Enter Password" value={formValues.password} onChange={handleChange} />
                        <small id="valid-feedback1">{formErrors.password}</small>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-md-6">
                        <label  className="label-input">Email:</label>
                        <input type="email"  name="email" onChange={handleChange}
                        value={formValues.email} className="label-input" placeholder="Enter Email" />
                        <small id="valid-feedback2">{formErrors.email}</small>
                    </div>
                    <div className="col-md-6">
                        <label  className="label-input">Age:</label>
                        <input type="number" id="age" className="label-input" placeholder="Enter Age" value={formValues.age} onChange={handleChange} name="age" />
                        <small id="valid-feedback3">{formErrors.age}</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label  className="label-inpu1t">Gender:</label>
                        <input type="radio" name="gender" className="label-input1" id="gender" value='Male' onChange={handleChange} />Male
                        <label ></label>
                        <input type="radio" name="gender" className="label-input1" id="gender1" value='Female' onChange={handleChange}/>Female
                        <label ></label>
                        <small id="valid-feedback4">{formErrors.gender}

                        </small>
                    </div>
                    <div className="col-md-6">
                        <label  className="label-input1">Technology:</label>
                        <input type="checkbox" className="label-input1" id="subject" name="technology" value='REACT' onChange={handleChange} />REACT
                        <input type="checkbox" className="label-input1" id="subject1" name="technology" value='PYTHON' onChange={handleChange}/>PYTHON
                        <input type="checkbox" className="label-input1" id="subject2" name="technology" value='JAVA' onChange={handleChange} />JAVA
                        <small id="valid-feedback5">{formErrors.technology}</small>
                    </div>
                </div><div className="col-md-12">
                <input type="submit" value="Register" id="submit"  className="btn btn-success" />
                <input type="reset" value="Cancel" id="submit1" className="btn btn-danger" />
                </div>
            </div>
            
        </form>

        
    </section>
 </div>
 {/* <table>
  //          <thead>
  //              <tr>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Technology</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{formValues.username}</td>
                    <td>{formValues.password}</td>
                    <td>{formValues.email}</td>
                    <td>{formValues.age}</td>
                    <td>{formValues.gender}</td>
                    <td>{formValues.technology}</td>
                </tr>
            </tbody>
        </table> */}
        {/* const empTable = <table border="1">
     <thead>
         <tr>
         <th>UserName</th>
         <th>Password</th>
         <th>Email</th>
         <th>Age</th>
         <th>Gender</th>
         <th>Technology</th>
         </tr>
     </thead>
     const userData=Object.values(formValues);
     userData.forEach((emp)=>{
         empTable += `<tr><td>${emp.username}</td>
             <td>${emp.password}</td><td>${emp.email}</td><td>${emp.age}</td><td>${emp.gender}</td><td>${emp.technology}</td></tr>`
     })
     empTable += </table> */}
 </body> 
        </div>
    )
}

export default Login
