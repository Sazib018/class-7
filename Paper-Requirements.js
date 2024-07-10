// Paper  Requirements

function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const firstBookPages =100;
    const secondBookPages =200;
    const thirdBookPages =300;

    const totalFirstBookPages = firstBookPages * firstBookCopy;
    const totalSecondBookPages = secondBookPages * secondBookCopy;
    const totalThirdBookPages = thirdBookPages * thirdBookCopy;

    const allPages = totalFirstBookPages + totalSecondBookPages + totalThirdBookPages;

    return allPages;
}

const firstBookCopy =3;
const secondBookCopy =2;
const thirdBookCopy =4;

const allPages = paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy);

console.log(allPages);