function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fillForm() {
  try {

    document.querySelectorAll('.ant-radio-group').forEach((group, index) => {

      const option = group.querySelector('.ant-radio-input[value="1"]');
      if (option) {
        option.click();
      }
    });


    const sliderInput = document.querySelector('.ant-input-number-input');
    if (sliderInput) {

      const value = 30;
      sliderInput.value = value;
      sliderInput.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
      await delay(100); // Optional delay to ensure UI update
    }


    const textAreas = document.querySelectorAll('textarea.ant-input');
    if (textAreas.length >= 2) {

      textAreas[0].focus();
      textAreas[0].click();
      await delay(100);


      textAreas[0].value = '你的评价1';
      textAreas[1].value = '你的评价2';
      await delay(100);
    }


    const submitButton = document.querySelector('.ant-btn[type="submit"]');
    if (submitButton) {
      submitButton.click();
    }
  } catch (error) {
    console.error('Error filling form:', error);
  }
}


fillForm();

setInterval(fillForm, 5000);


const sliderHandle = document.querySelector('.ant-slider-handle');
const sliderTrack = document.querySelector('.ant-slider-track');

if (sliderHandle && sliderTrack) {

    const newPositionPercentage = 100; //
    const newValue = 29;


    sliderHandle.setAttribute('aria-valuenow', newValue);
    sliderHandle.style.left = newPositionPercentage + '%';
    sliderHandle.style.transform = 'translateX(-50%)';


    sliderTrack.style.width = newPositionPercentage + '%';


    const startX = sliderHandle.getBoundingClientRect().left;
    const endX = sliderTrack.getBoundingClientRect().left + (sliderTrack.offsetWidth * newPositionPercentage / 100);

    const mouseDownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: startX,
        clientY: 0
    });

    const mouseMoveEvent = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: endX,
        clientY: 0
    });

    const mouseUpEvent = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: endX,
        clientY: 0
    });


    sliderHandle.dispatchEvent(mouseDownEvent);
    sliderHandle.dispatchEvent(mouseMoveEvent);
    sliderHandle.dispatchEvent(mouseUpEvent);
}


const submitButton = document.querySelector('.index_submit-2EYSG');
if (submitButton) {
  submitButton.click();
  console.log('Form submitted successfully.');


  await executeWithDelay();
  clickNextTeacherButton();
} else {
  console.error('Submit button not found.');
}

async function clickNextTeacherButton() {
  try {
    // 下一位
    const nextTeacherButton = document.querySelector('.TaskMainContent_next_btn-3Z7bS');
    if (nextTeacherButton) {
      nextTeacherButton.click();
      console.log('Clicked "下一位教师" button successfully.');
    } else {
      console.error('Button not found: "下一位教师".');
    }
  } catch (error) {
    console.error('Error clicking "下一位教师" button:', error);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeWithDelay() {
  console.log('Start executing...');
  await delay(3000); // 等待 3 秒
  console.log('Executing after 3 seconds.');
}

