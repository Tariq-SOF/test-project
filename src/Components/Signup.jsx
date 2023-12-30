import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ErrorMessage = ({ message, onHide }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHide();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onHide]);

  return (
    <div className="absolute top-0 left-0 right-0 bg-red-200 px-6 py-3 m-4 rounded-md text-sm flex items-center mx-auto w-3/4 xl:w-2/4">
      <svg viewBox="0 0 24 24" className="text-red-600 w-4 h-4 sm:w-4 sm:h-4 mr-2">
        <path
          fill="currentColor"
          d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        ></path>
      </svg>
      <span className="text-red-800">{message}</span>
    </div>
  );
};

const SuccessMessage = ({ message, onHide }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHide();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onHide]);

  return (
    <div className="absolute top-0 left-0 right-0 bg-green-200 px-6 py-3 m-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4">
      <svg viewBox="0 0 24 24" className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        ></path>
      </svg>
      <span className="text-green-800">{message}</span>
    </div>
  );
};

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const validateForm = () => {
    // ... الشروط الحالية

    // التحقق من صحة اسم المستخدم (يجب أن يكون أكبر من 6 أحرف)
    if (username.length < 6) {
      setError('اسم المستخدم يجب أن يكون أكبر من 6 أحرف');
      return false;
    }

    // التحقق من صحة البريد الإلكتروني
    if (!/^[A-Za-z0-9-.]+@[A-Za-z0-9-]+.[A-Za-z]{2,4}$/.test(email)) {
      setError('البريد الإلكتروني غير صالح');
      return false;
    }

    // التحقق من صحة رقم الجوال (يجب أن يكون بداية من 05 ويحتوي على 10 أرقام)
    if (!/^05\d{8}$/.test(phone)) {
      setError('رقم الجوال غير صالح');
      return false;
    }

    // التحقق من صحة الرقم السري (يجب أن لا يقل عن 8 أحرف ويحتوي على أحرف كبيرة وصغيرة وأرقام)
    if (!/^[A-Za-z0-9-].{6,}$/.test(password)) {
      setError('الرقم السري يجب أن يكون على الأقل 8 أحرف ويحتوي على أحرف كبيرة وصغيرة وأرقام');
      return false;
    }
    // تمرير جميع الاختبارات، لا يوجد أخطاء
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // يمكنك هنا إجراء أي عملية تسجيل دخول أو إرسال البيانات
showSuccessMessage();
      // حفظ البيانات في الAPI
      axios.post("https://6552c0675449cfda0f2dca61.mockapi.io/uesers", {
        UserName: username,
        Email: email,
        Phone: phone,
        Password: password,
      })
        .then(response => {
          console.log('تم حفظ البيانات بنجاح:', response.data);
           
        })
        .catch(error => {
          console.error('حدث خطأ أثناء حفظ البيانات:', error);
        });
    }
  };

  const showErrorMessage = () => {
    setError('');
    setIsErrorVisible(true);
  };

  const hideErrorMessage = () => {
    setIsErrorVisible(false);
  };

  const showSuccessMessage = () => {
    setIsSuccessVisible(true);
  };

  const hideSuccessMessage = () => {
    setIsSuccessVisible(false);
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center relative">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">تسجيل الدخول</h2>

        {/* عرض رسالة الخطأ إذا كان هناك خطأ */}
        {isErrorVisible && <ErrorMessage message={error} onHide={hideErrorMessage} />}

        {/* عرض رسالة النجاح إذا تم حفظ البيانات بنجاح */}
        {isSuccessVisible && <SuccessMessage message="تم حفظ البيانات بنجاح" onHide={hideSuccessMessage} />}

         <form onSubmit={handleSubmit}>
          {/* حقل اسم المستخدم */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm text-[12px]  text-gray-600">اسم المستخدم</label>
            <input type="text" id="username" name="username" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm " onChange={(e) => setUsername(e.target.value)} placeholder="ادخل اسم المستخدم"/>
          </div>  
          {/* حقل البريد الإلكتروني */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">البريد الإلكتروني</label>
            <input type="email" id="email" name="email" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm"onChange={(e) => setEmail(e.target.value)}placeholder="ادخل البريد الإلكتروني" />
          </div>

          {/* حقل رقم الجوال */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">رقم الجوال</label>
            <input type="tel" id="phone" name="phone" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm" onChange={(e) => setPhone(e.target.value)}placeholder="ادخل رقم الجوال" />
          </div>

          {/* حقل الرقم السري */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">الرقم السري</label>
            <input type="password" id="password" name="password" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm" onChange={(e) => setPassword(e.target.value)} />
          </div>

          {/* زر الإرسال */}
          <div className="flex items-center justify-between">
            <button type="submit" onClick={showErrorMessage} className="w-[35vh] h-[5vh] rounded-md bg-[#fbf429] font-bold shadow-md text-[12px] transition duration-500 hover:bg-[#faf4509e]">
              تسجيل الدخول
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
