function submitForm() {
    
    document.getElementById('fullname-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('phone-error').innerText = '';
    document.getElementById('gender-error').innerText = '';

    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const bio = document.getElementById('bio').value.trim();
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ');

    
    let isValid = true;

    if (!fullname || fullname.length > 50) {
        document.getElementById('fullname-error').innerText = 'Họ và tên là bắt buộc, tối đa 50 ký tự.';
        isValid = false;
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        document.getElementById('email-error').innerText = 'Email không đúng định dạng.';
        isValid = false;
    }

    if (!phone) {
        document.getElementById('phone-error').innerText = 'Số điện thoại là bắt buộc.';
        isValid = false;
    }

    if (genderElements.length === 0) {
        document.getElementById('gender-error').innerText = 'Vui lòng chọn giới tính.';
        isValid = false;
    }

    if (isValid) {
        const gender = genderElements[0].value;
        document.getElementById('form-container').classList.add('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('display-fullname').innerText = fullname;
        document.getElementById('display-email').innerText = email;
        document.getElementById('display-phone').innerText = phone;
        document.getElementById('display-gender').innerText = gender;
        document.getElementById('display-hobbies').innerText = hobbies || 'Không có';
        document.getElementById('display-bio').innerText = bio || 'Không có';
    }
}