import i18n from 'util/i18n';
import { quoteattr } from 'util/xss';

function checked(val) {
    return val ? 'checked="checked"' : '';
}

function value(val) {
    return `value="${quoteattr(val)}"`;
}

module.exports = ({
    id = 'intro', className = '', instruction = '', user,
}) => `
  <form id="${id}" class="screen intro ${quoteattr(className)}" method="POST">
    <fieldset>
      <legend class="intro-legend">${i18n('INFO_ABOUT_YOU')}</legend>
      <div class="intro-sorry">${i18n('WE_NEED_YOUR_DATA')}</div>
      <div class="intro-fields">
        <div class="intro-field intro-field-name">
            <label class="intro-name" for="${id}_name">
                ${i18n('FULL_NAME')}
            </label>
            <input type="text" id="${id}_name"
                   name="name" ${value(user.name)}
                   placeholder="${i18n('FULL_NAME_PLACEHOLDER')}"
                   required />
        </div>
        <div class="intro-field intro-field-age">
            <label class="intro-age" for="${id}_age">${i18n('AGE')}</label>
            <input type="number"
                   id="${id}_age"
                   name="age" ${value(user.age)}
                   pattern="[0-9]*" placeholder="18" min="16" max="70" required />
        </div>
        <div class="intro-field intro-field-gender">
            <label>${i18n('GENDER')}</label>
            <input type="radio" id="${id}_male"
                   name="gender" ${value(0)} ${checked(+user.gender === 0)} required />
            <label class="intro-gender" for="${id}_male">${i18n('GENDER_NAME', 0)}</label>
            <input type="radio" id="${id}_female"
                   name="gender" ${value(1)} ${checked(+user.gender === 1)} required />
            <label class="intro-gender" for="${id}_female">${i18n('GENDER_NAME', 1)}</label>
        </div>
      </div>
      <div>
          <input type="checkbox" id="${id}_agree" name="agree" ${checked(user.agree)} required />
          <label for="${id}_agree" class="intro-agree">${i18n('TERMS_OF_USE')}</label>
          <div class="intro-disclaimer">${i18n('DISCLAIMER')}</div>
      </div>
        <blockquote>
          <strong>${i18n('INSTRUCTION')}</strong>:
          <span>${instruction}</span>
        </blockquote>
        <div class="intro-button">
            <button type="submit" class="intro-submit">${i18n('START_SURVEY')}</button>
        </div>
    </fieldset>
  </form>
`;
