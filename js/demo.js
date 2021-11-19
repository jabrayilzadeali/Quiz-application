const buttons = document.querySelectorAll('.variant')
const checkAnswers = document.querySelector('.check-answers')



buttons.forEach(button => {
  button.onclick = () => {
    button.disabled = true;
    button.style.backgroundColor = '#f3f300';
    console.log(typeof(button.classList));
    console.log(button.classList);
    // if (button.classList.value.includes('true')) {
    //   trueAnswer(button)
    //   score++;
    //   console.log(score);
    // } else {
    //   // (score > 0) ?? score--;
    //   score--;
    //   console.log('---')
    //   console.log(score);
    // }

    if (button.nextElementSibling) {
      button.nextElementSibling.style.backgroundColor = 'grey';
      if (button.nextElementSibling.disabled === true) {
        button.nextElementSibling.disabled = false;
      }
    } else {
      button.previousElementSibling.style.backgroundColor = 'grey';
      if (button.previousElementSibling.disabled === true) {
        button.previousElementSibling.disabled = false;
      }
    }
  }
})

checkAnswers.onclick = () => {
  let score = 0;
  const showScore = document.querySelector('#show-score');
  const allVariants = document.querySelectorAll('.variants');
  // console.log(allVariants);
  allVariants.forEach(variants => {
    for (i = 0; i < variants.children.length; i++) {
      // console.log(variants.children[i])
      if (variants.children[i].disabled) {
        console.log(variants.children[i].classList.value);
        console.log(variants.children[i].classList.value.includes('true'));
        // variants.children[i].classList.value.includes('true') ? console.log('okay I am true');
        if (variants.children[i].classList.value.includes('true')) {
          variants.children[i].style.backgroundColor = 'green';
          score++;
        } else {
          variants.children[i].style.backgroundColor = 'red';
        }
        showScore.innerHTML = score
      }
    }
    // variants.children.forEach(variant => {
    //   console.log(variant)
    //   // if (variant.style.color === 'yellow') {
    //   //   score++
    //   // }
    // })
  })
}

