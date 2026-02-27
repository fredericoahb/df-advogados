/**
 * DF Advogados — Contact Form Module
 * Handles form validation and submission.
 */

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Basic validation
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const message = formData.get('message')?.trim();

  if (!name) {
    showFeedback('Por favor, informe seu nome.', 'error');
    return;
  }

  if (!email || !isValidEmail(email)) {
    showFeedback('Por favor, informe um e-mail válido.', 'error');
    return;
  }

  if (!message) {
    showFeedback('Por favor, descreva como podemos ajudar.', 'error');
    return;
  }

  // Simulate form submission
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Enviando...';

  // Simulate async submission (replace with actual API call)
  setTimeout(() => {
    showFeedback(
      'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      'success'
    );
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }, 1500);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFeedback(message, type) {
  // Remove existing feedback
  const existing = document.querySelector('.form-feedback');
  if (existing) existing.remove();

  const feedback = document.createElement('div');
  feedback.className = `form-feedback form-feedback--${type}`;
  feedback.textContent = message;
  feedback.style.cssText = `
    padding: 0.85rem 1rem;
    margin-bottom: 1rem;
    font-size: 0.88rem;
    font-weight: 400;
    background: ${type === 'success' ? 'rgba(22, 56, 50, 0.1)' : 'rgba(200, 50, 50, 0.1)'};
    color: ${type === 'success' ? '#163832' : '#c83232'};
    border-left: 3px solid ${type === 'success' ? '#163832' : '#c83232'};
  `;

  const form = document.getElementById('contactForm');
  form.insertBefore(feedback, form.firstChild);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    feedback.remove();
  }, 5000);
}
