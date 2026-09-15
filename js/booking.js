(() => {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  const experienceSelect = document.getElementById('experience');
  const dateInput = document.getElementById('visit-date');
  const guestInput = document.getElementById('guest-count');
  const context = document.getElementById('experience-context');
  const contextRate = document.getElementById('context-rate');
  const contextNote = document.getElementById('context-note');
  const expectationCopy = document.getElementById('expectation-copy');
  const errorBox = document.getElementById('reservation-error');
  const confirmation = document.getElementById('request-confirmation');

  const experiences = {
    mangrove: {
      name: 'Mangrove Kayak',
      rate: '₱600 / person',
      note: 'Tide-dependent: availability depends on low/high tide conditions and suitable water depth.',
      expectation: 'Explore Kingfisher Park’s mangrove waterways by kayak. The requested date is subject to park confirmation because water depth changes with the tide.',
      condition: 'Mangrove Kayak is tide-dependent. Kingfisher Park will confirm whether water depth and conditions are suitable for your requested date.'
    },
    firefly: {
      name: 'Firefly Boardwalk',
      rate: '₱400 / person',
      note: 'An evening nature experience. Wildlife viewing depends on natural conditions.',
      expectation: 'Experience the mangrove landscape after dark from the boardwalk. Keep noise low and avoid flash photography around fireflies.',
      condition: 'Firefly viewing is a natural experience and may vary with environmental conditions.'
    },
    'night-kayak': {
      name: 'Firefly Boardwalk + Night Kayak',
      rate: '₱600 / person',
      note: 'Includes boardwalk viewing and kayaking for bioluminescent plankton and additional firefly viewing.',
      expectation: 'This combines the boardwalk with a nighttime water experience. Conditions can vary with weather, wind, moonlight and tide, so the park will confirm availability.',
      condition: 'The nighttime water experience remains subject to natural and water conditions and park confirmation.'
    },
    complete: {
      name: 'Complete Experience',
      rate: '₱1,000 / person',
      note: 'Combines the three current visitor activities in one visit.',
      expectation: 'This request combines Mangrove Kayak, Firefly Boardwalk and the nighttime kayak experience. The exact sequence and timing will be confirmed by the park.',
      condition: 'Because this includes Mangrove Kayak, tide conditions and suitable water depth can affect the final activity sequence and availability.'
    }
  };

  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  dateInput.min = localToday;

  const updateContext = () => {
    const selected = experiences[experienceSelect.value];
    if (!selected) {
      context.hidden = true;
      contextRate.textContent = '—';
      contextNote.textContent = '';
      expectationCopy.textContent = '';
      return;
    }

    context.hidden = false;
    contextRate.textContent = selected.rate;
    contextNote.textContent = selected.note;
    expectationCopy.textContent = selected.expectation;
  };

  const formatDate = (value) => {
    if (!value) return '—';
    const parsed = new Date(`${value}T00:00:00`);
    return new Intl.DateTimeFormat('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(parsed);
  };

  const makeReference = () => {
    const suffix = Math.floor(1000 + Math.random() * 9000);
    return `KP-REQ-${suffix}`;
  };

  const validate = () => {
    errorBox.textContent = '';

    if (!experienceSelect.value) {
      errorBox.textContent = 'Please choose an experience.';
      experienceSelect.focus();
      return false;
    }

    if (!dateInput.value) {
      errorBox.textContent = 'Please choose your preferred visit date.';
      dateInput.focus();
      return false;
    }

    const guests = Number.parseInt(guestInput.value, 10);
    if (!Number.isFinite(guests) || guests < 1) {
      errorBox.textContent = 'Please enter the number of guests.';
      guestInput.focus();
      return false;
    }

    const name = document.getElementById('full-name');
    if (!name.value.trim()) {
      errorBox.textContent = 'Please enter your full name.';
      name.focus();
      return false;
    }

    const mobile = document.getElementById('mobile');
    if (!mobile.value.trim()) {
      errorBox.textContent = 'Please enter a mobile or WhatsApp number.';
      mobile.focus();
      return false;
    }

    const email = document.getElementById('email');
    if (email.value && !email.checkValidity()) {
      errorBox.textContent = 'Please enter a valid email address or leave the email field blank.';
      email.focus();
      return false;
    }

    return true;
  };

  const applyExperienceFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('experience');
    if (requested && experiences[requested]) {
      experienceSelect.value = requested;
      updateContext();
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validate()) return;

    const experience = experiences[experienceSelect.value];
    const guests = Number.parseInt(guestInput.value, 10) || 1;
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    document.getElementById('confirm-reference').textContent = makeReference();
    document.getElementById('confirm-experience').textContent = experience.name;
    document.getElementById('confirm-date').textContent = formatDate(dateInput.value);
    document.getElementById('confirm-guests').textContent = String(guests);
    document.getElementById('confirm-contact').textContent = email ? `${mobile} · ${email}` : mobile;
    document.getElementById('confirmation-notice').textContent = experience.condition;

    form.hidden = true;
    confirmation.hidden = false;
    document.getElementById('confirmation-title')?.focus({ preventScroll: true });
    document.getElementById('reservation-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('request-another')?.addEventListener('click', () => {
    form.reset();
    guestInput.value = 1;
    errorBox.textContent = '';
    context.hidden = true;
    confirmation.hidden = true;
    form.hidden = false;
    applyExperienceFromURL();
    document.getElementById('reservation-title')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  experienceSelect.addEventListener('change', updateContext);
  applyExperienceFromURL();
})();
