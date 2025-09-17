document.getElementById('year').textContent = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  // Demo-only: show a success message. For live use, connect to Formspree/Fillout/etc.
  const out = document.getElementById('form-status');
  out.textContent = 'הטופס נשלח! (לתפעול אמיתי חברו את הטופס לשירות כגון Formspree/Fillout)';
  form.reset();
  return false;
}
