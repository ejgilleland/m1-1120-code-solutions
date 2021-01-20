var $contactForm = document.querySelector('form');
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log({
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  });
  $contactForm.reset();
});
