function generateQuote(event) {
    event.preventDefault();

    new Typewriter("#quote", {
      strings: "You are enough just as you are.",
      autoStart: true,
    });

}
let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);
