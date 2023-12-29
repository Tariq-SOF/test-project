import React, { useState } from 'react'
import Alert from './alert'
export default function Signup() {
    const [username , setUsername] =useState()
    const [nationalID , setNationalID ] =useState()
    const [email , setEmail] =useState()
    const [password , setPassword] =useState()
    const [confirmPassword , setConfirmPassword] =useState()

    const [message, setMessage] = useState();

    const [showAlert, setShowAlert] = useState(true);

      // يمكنك استخدام حالة state لتحديد متى يجب عرض الـ alert
    
      // يمكنك استدعاء setShowAlert(false) بعد إتمام عملية التسجيل بنجاح
    


    const handelSubmit = () => {
      if (username === "" || email === "" || password === "" || nationalID ==="" || confirmPassword === "") {
        setMessage("Inputs is empty");
      }
       else if (!username.match(/^[a-zA-Z0-9]{5,25}$/)) {
        setMessage("username should be more the 4 char");
      } else if (
        !email.match(/^[A-Za-z0-9-]+@[A-Za-z0-9-]+.[A-Za-z]{2,4}$/)
      ) {
        setMessage("Invalid email");
      } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/)) {
        setMessage(
          "Invalid Password should be 6 contain at least one characters and one number"
        );
      }
        else if (confirmPassword !== password  ){
          setMessage("Password not match")
  
      } else {
        axios
          .post("https://6572e3a8192318b7db4135e3.mockapi.io/amazon", {
            username: username,
            email: email,
            password: password,
            nationalID:nationalID,
  
          })
          .then( setMessage('good'));
      }
    };
    
  return (
   <>
{/*<!-- component -->*/}
<div class="w-screen h-screen flex items-center justify-center bg-gray-100">
  <div class="w-full mx-auto">
   {/*} <!-- Title -->*/}
    <h1 class="text-3xl text-center font-bold mb-6">Alert Component</h1>
    {/*<!-- End Title -->*/}

   
    {/*<!-- End Alert Success -->*/}

    {/*<!-- Alert Error -->*/}
    <div
         class="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
         >
      <svg
           viewBox="0 0 24 24"
           class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
           >
        <path
              fill="currentColor"
              d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
      </svg>
      <span class="text-red-800"> Your email address is invalid. </span>
    </div>
    {/*<!-- End Alert Error -->*/}

    {/*<!-- Alert Warning -->*/}
    <div
         class="bg-orange-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
         >
      <svg
           viewBox="0 0 24 24"
           class="text-yellow-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
           >
        <path
              fill="currentColor"
              d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
              ></path>
      </svg>
      <span class="text-yellow-800">
        You are currently on the Free plan.
      </span>
    </div>
    {/*<!-- End Alert Warning -->*/}

    {/*<!-- Alert Info -->*/}
    <div
         class="bg-blue-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
         >
      <svg
           viewBox="0 0 24 24"
           class="text-blue-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
           >
        <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
              ></path>
      </svg>
      <span class="text-blue-800"> We've updated a few things. </span>
    </div>
    {/*<!-- End Alert Info -->*/}
  </div>
</div>

<div class="h-screen md:flex  ">

	<div  class="flex md:w-1/2 justify-center py-10 items-center bg-white ">
		<div class="bg-white ">
			<h1 class="text-gray-800 font-bold text-2xl mb-4">تسجيل جديد</h1>
            <div className=' flex gap-5 justify-end rounded-lg mb-4'><button class="text-sm font-normal text-black bg-primary rounded-lg p-1">مالك عقار</button>
            <button class="text-sm font-normal text-gray-600 ">مستأجر</button></div>
			
			<div  class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input value={username} onChange={(e)=>setUsername(e.target.value)} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="اسم المستخدم" />
      </div>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input value={nationalID} onChange={(e)=>setNationalID(e.target.value)} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="رقم الهوية" />
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input value={email} onChange={(e)=>setEmail(e.target.value)} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="البريد الإلكتروني" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input value={password} onChange={(e)=>setPassword(e.target.value)} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="كلمة السر" />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="تاكيد كلمة السر" />
      </div>

<button onClick={handelSubmit} class="block w-full bg-primary mt-4 py-2 rounded-2xl text-black font-semibold mb-2">التسجيل</button>



		</div>
	</div>

</div>




   </>
  )
}
