document.addEventListener('DOMContentLoaded', () => {
  const inputEmail = document.getElementById('input-email');
  const spanError = document.querySelector('.div-email > span');
  const inputSubmit = document.getElementById('input-submit');
  const divImgLanding = document.querySelector('.div-img-landing');

  inputSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const emailValue = inputEmail.value;

    const re =  new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

    if (re.test(emailValue)) {
      inputEmail.classList.remove('error');
      spanError.classList.add('hide');
      divImgLanding.classList.remove('error');
    } else {
      inputEmail.classList.add('error');
      spanError.classList.remove('hide');
      divImgLanding.classList.add('error');
    }
  });
});