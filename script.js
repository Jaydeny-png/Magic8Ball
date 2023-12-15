function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BADIMAGE'
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            image = "yes-image.jpg";
            color = "text-success";
            break;
        case 1:
            answer = "No";
            image = "no-image.jpg";
            color = "text-danger";
            break;
        case 2:
            answer = "Perhaps";
            image = "perhaps-image.jpg";
            color = "text-primary";
            break;
        case 3:
            answer = "Maybe";
            image = "maybe-image.jpg";
            color = "text-tertiary";
            break;
        case 4:
            answer = "Idk";
            image = "idk-image.jpg";
            color = "text-info";
            break;
        case 5:
            answer = "Signs Point to Yes";
            image = "SignsPointToYes-image.jpg";
            color = "text-secondary";
            break;
        case 6:
            answer = "Outlook Not So Good";
            image = "OutlookNotSoGood-image.jpg";
            color = "text-border";
            break;
        case 7:
            answer = "YUH";
            image = "yuh-image.jpg";
            color = "text-warning";
            break;
        default:
            break;
}


const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;


}