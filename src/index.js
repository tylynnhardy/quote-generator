function displayQuote (response) {
     
    new Typewriter("#quote", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1
     });
}


function generateQuote(event) {
    event.preventDefault();

    let quoteBox = document.querySelector("#quote-box");
    let apiKey = "8bc8b03b375bt4da35a05of0462b8403";
    let prompt = `User instructions: Generate a hearfelt quote about ${quoteBox}`;
    let context = `You are an expert in all quotes, but especially love heartfelt quotes. Provide short and sweet quotes. Follow the user instuctions.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayQuote);


}
let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);
