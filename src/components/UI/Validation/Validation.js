export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простая валидация email
    return emailRegex.test(email);
  };
  
  export const validatePhone = (phone) => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/; // Формат +7 (XXX) XXX-XX-XX
    return phoneRegex.test(phone);
  };
  
  export const validateForm = (formData, setError) => {
    const { name, phone, email } = formData;
  
    if (!name || !phone || !email) {
      setError("Пожалуйста, заполните все поля.");
      return false;
    }
  
    if (!validateEmail(email)) {
      setError("Введите корректный адрес электронной почты.");
      return false;
    }
  
    if (!validatePhone(phone)) {
      setError("Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX.");
      return false;
    }
  
    setError(""); // Если все проверки пройдены, очищаем ошибку
    return true;
  };
  