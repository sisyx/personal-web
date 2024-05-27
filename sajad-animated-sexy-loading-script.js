const box = document.querySelector('.sajad-animated-background-nopropretaty-software-is-allowed-for-us-box');
const knife = document.querySelector(".sajad-animated-background-nopropretaty-software-is-allowed-for-us-knife");

// knife.addEventListener("animationend", () => {
//     box.classList.add('fall-out')
// })
const letters = document.querySelectorAll(".sajad-animated-background-nopropretaty-software-is-allowed-for-us-animated-letter");

letters.forEach((letter, index) => {
    letter.style.animationDelay = (index * 150) + "ms"
})
knife.onanimationend = () => {
    box.classList.add('sajad-animated-background-nopropretaty-software-is-allowed-for-us-fall-out');
    knife.remove();

    document.querySelector('.sajad-animated-background-nopropretaty-software-is-allowed-for-us-fall-out').onanimationend = () => {
        setTimeout(() => {
            document.querySelector(".sajad-animated-background-nopropretaty-software-is-allowed-for-us-box-owner").classList.add("sajad-animated-background-nopropretaty-software-is-allowed-for-us-boom");

            document.querySelector(".sajad-animated-background-nopropretaty-software-is-allowed-for-us-box-owner").onanimationend = () => {
                document.querySelector(".sajad-animated-background-nopropretaty-software-is-allowed-for-us-box-owner").remove();
                document.querySelector(".sajad-animated-background-nopropretaty-software-is-allowed-for-us-container").remove()
            }
        }, 1000)
    }
}