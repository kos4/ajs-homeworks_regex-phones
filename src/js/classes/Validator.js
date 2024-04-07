export default class Validator {
  constructor(value) {
    this.value = value;
  }

  conversionPhones() {
    let phone = this.value;
    phone = phone.replace(/\D/g, '');
    const code = phone.substring(-phone.length, phone.length - 10);

    if (code === '8') {
      phone = `+7${phone.substring(1)}`;
    } else {
      phone = `+${phone}`;
    }

    return phone;
  }
}
