let reviewsURL = 'https://www.google.com/maps/preview/review/listentitiesreviews?&pb=!1m2!1y4868890962542939703!2y2915512676235049899!2m2!1i0!2i10!3e1!4m5!3b1!4b1!5b1!6b1!7b1!5m2!1sOBoqYorHNpGNlwTx5J-gAg!7e81';
let reviewsIndex = 2;
let reviewValueMapping = {
    authorInfoIndex: 0,
    commentIndex: 3,
    starsIndex: 4
};
let authorValueMapping = {
    nameIndex: 1,
    imageURLIndex: 2
};

function parser(body) {
    body = body.substring(5); // Retire les 4 caractères et le saut de ligne de début
    return JSON.parse(body);
}

// Si fetch est disponible
if (window.fetch) {
    // Get Data
    let data = await fetch(reviewsURL)
    .then(response => response.text())
    .then(response => parser(response))
    .catch(error => console.log("Erreur : " + error));

    // Format reviews
    let rawReviews = data[reviewsIndex].slice(0, 3);
    let formattedReviews = [];
    rawReviews.forEach(rawReview => {
        let formattedReview = {
            author: rawReview[reviewValueMapping.authorInfoIndex][authorValueMapping.nameIndex],
            imgURL: rawReview[reviewValueMapping.authorInfoIndex][authorValueMapping.imageURLIndex],
            comment: rawReview[reviewValueMapping.commentIndex],
            stars: rawReview[reviewValueMapping.starsIndex]
        };
        formattedReviews.push(formattedReview);
    });

    // Display data
    console.table(formattedReviews);
} else {
    // Abandon ou XMLHttpRequest ?
}